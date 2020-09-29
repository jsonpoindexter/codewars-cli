# codewars-cli
https://www.npmjs.com/package/@poindexter.json/codewars-cli

Codewars CLI parses a user's codewars solutions and outputs them in a github README.md format

```bash
Options:
      --help      Show help                                             [boolean]
      --version   Show version number                                   [boolean]
  -u, --username  Username or ID of the codewars user                   [string] [required]
  -t, --token     'remember_user_token' value from codewars cookie      [string] [required]
  -f, --filename  Filename to output codewars solutions as markdown     [string] [default: "README.md"]

```

## Quick Overview
```bash
npx @poindexter.json/codewars-cli --username 'codewars username or ID' --token='remember_user_token from codewars cookie'
```
example:
```bash
npx @poindexter.json/codewars-cli --username 'jsonpoindxter' --token='BAhbCFsGSSIdN...'
```

## Codewars Token
The codewars 'remember_user_token' is required in order to fetch a user's solutions since [the codewars API or UI does not  currently allow this](https://github.com/Codewars/codewars.com/issues/235). The 'remember_user_token' is created after a succesful login to codewars and stored in the web browsers cookies.

[How to view cookies](https://kb.iu.edu/d/ajfi)
