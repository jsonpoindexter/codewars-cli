#!/usr/bin/env node
const axios = require('axios');
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM
const fs = require('fs').promises;

const argv = require('yargs')
    .option('username', {
        alias: 'u',
        type: 'string',
        description: 'Username or ID of the codewars user',
    })
    .option('token', {
        alias: 't',
        type: 'string',
        description: '\'remember_user_token\' value from codewars cookie',
    })
    .option('filename', {
        alias: 'f',
        type: 'string',
        default: 'README.md',
        description: 'Filename to output codewars solutions as markdown',
    })
    .demandOption(['u', 't'])
    .argv
const BASE_URL = "https://www.codewars.com"
const USERNAME = argv.username
const TOKEN = argv.token
const FILENAME = argv.filename

// Parse solution code block from HTML page (code is not available via API) to Map
// Returns:
//     {
//         solutionId: {
//             solutions: [{
//                 code:  *codeBlock*,
//                 language: *solutionLanguage*
//             }]
//         },
//         solutionsId: {
//             ...
//     }
const getCompletedSolutions = async () => {
    const { data } = await axios.get(`${BASE_URL}/users/${USERNAME}/completed_solutions`, {headers: {cookie: `remember_user_token=${TOKEN}`}})
    const dom = new JSDOM(data)
    const solutionElements = dom.window.document.getElementsByClassName('solutions')
    // Create a map of solution ID to code block and language

    const codeMap = new Map()
    Array.prototype.map.call(solutionElements, solutionElement => {
        // Parse challenge ID
        const titleEl = solutionElement.getElementsByTagName('a')[0]
        const id = titleEl.href.replace('/kata/', '') // solution id

        // Parse solution language
        const languageEl = solutionElement.getElementsByTagName('h6')[0]
        const language = languageEl.innerHTML.slice(0, languageEl.innerHTML.length - 1)

        // Parse solution code block
        const code = solutionElement.getElementsByTagName('code')[0].innerHTML

        // Update the solution array for the challenge if it was completed in more than one language
        const value = codeMap.get(id)
        value ?
            codeMap.set(id, { solutions: value.solutions.push({code, language})}) :
            codeMap.set(id, { solutions: [{ code, language }]})
    })
    return codeMap
}

// Use API to get solutions
const getCompletedChallenges = async(page = 0, previousData = []) => {
    const { data: {
        totalPages, data
    } } = await axios.get(`${BASE_URL}/api/v1/users/${USERNAME}/code-challenges/completed?page=${page}`)
    const results = [...previousData, ...data]
    if (totalPages > (page + 1)) await getCompletedChallenges(page++, results)
    return results
}

const mapToMarkdown = (solutionCodeMap) => {
    let markdown = ""
    solutionCodeMap.forEach((challenge, id) => {
        markdown += `# ${challenge.name}\n`
    })
    return markdown
}

// Main
(async () => {
    try {
        const solutionCodeMap = await getCompletedSolutions()
        // Get Code Challenge information for all completed code challenges https://dev.codewars.com/#get-code-challenge
       const codeChallenges = await Promise.all(Array.from(solutionCodeMap.keys()).map(id => axios.get(`${BASE_URL}/api/v1/code-challenges/${id}`).then(res => res.data)))
        solutionCodeMap.forEach((value, key) => {
            const codeChallenge = codeChallenges.find((challenge => challenge.id === key))
            if(codeChallenge) solutionCodeMap.set(key, {...value, ...codeChallenge})
        })
        const output = mapToMarkdown(solutionCodeMap)
        await fs.writeFile(FILENAME, output)
    } catch (err) {
        console.log(err)
    }

})()


