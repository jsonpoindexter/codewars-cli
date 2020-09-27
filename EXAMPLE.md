## [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001) - 6 kyu
```go
package kata
import ("strings")

func SpinWords(words string) string {
undefinedwordArray := strings.Split(words, " ")
  for index, word  := range wordArray {
    if len(word) &gt;= 5 {
      wordArray[index] = reverseString(word)
    }
  }
  return strings.Join(wordArray, " ")
}// SpinWords


func reverseString(str string) string {
  reversed := ""
  for _, char := range str {
     reversed = string(char) + reversed
    
  }
  return reversed
}
```

## [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0) - 5 kyu
```javascript
var moveZeros = function (arr) {
  let zeros = []
  let index = arr.indexOf(0)
  while(index !== -1) {
    zeros.push(...arr.splice(index, 1))
    index = arr.indexOf(0)
  }
  return [...arr, ...zeros]
}
```

## [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9) - 7 kyu
```typescript
export function findShort(s: string): number {
  let length = 0
  s.split(" ").forEach((word, index) =&gt; {
    if(index == 0) length = word.length
    else if (word.length &lt; length) length = word.length
  })
  return length
}
```

## [Persistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec) - 6 kyu
```swift
func persistence(for num: Int, count: Int = 0) -&gt; Int {
  if num &lt; 10 { return count }
  let numArray = Array(String(num))
  let newNum = numArray.reduce(1, { x, y in
    x * y.wholeNumberValue!
  })
  return persistence(for: newNum, count: count + 1) 
}
```

## [Good vs Evil](https://www.codewars.com/kata/52761ee4cffbc69732000738) - 6 kyu
```swift
let goodArr = [
  1, // Hobbits
  2, // Men
  3, // Elves
  3, // Dwarves
  4, // Eagles
  10, // Wizards
]
let evilArr = [
  1, // Orcs
  2, // Men
  2, // Wargs
  2, // Goblins
  3, // Uruk Hai
  5, // Trolls
  10, // Wizards
]


func evaluate(good: String, vsEvil evil: String) -&gt; String {
  // Convert string to number array "1 1 1 " -&gt; [1, 1, 1]
  let totalGood = unitsToWorth(units: good.split(separator: " ").map { Int($0) ?? 0 }, worth: goodArr)
  let totalEvil = unitsToWorth(units: evil.split(separator: " ").map { Int($0) ?? 0 }, worth: evilArr)
  if totalGood &gt; totalEvil { return "Battle Result: Good triumphs over Evil" }
  else if totalGood &lt; totalEvil { return "Battle Result: Evil eradicates all trace of Good" }
  else { return "Battle Result: No victor on this battle field" }
}

// Convert array of units to total worth 
func unitsToWorth(units: [Int], worth: [Int]) -&gt; Int {
  return units.enumerated().reduce(0) { (accumulate, current) in return accumulate + worth[current.0] * current.1}
}
```

## [Breaking chocolate problem](https://www.codewars.com/kata/534ea96ebb17181947000ada) - 7 kyu
```javascript
function breakChocolate(n,m) {
  return Math.max(0, (n*m) - 1);
}
```

## [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e) - 7 kyu
```javascript
function disemvowel(str) {
 const vowels = ['a', 'e', 'i', 'o', 'u']
 vowels.forEach(vowel =&gt; {
   str = str.split(new RegExp(vowel, "gi")).join('')
   })
 return str
}
```

## [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83) - 6 kyu
```javascript
function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}
```

## [String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d) - 7 kyu
```javascript
function solution(str, ending){
  return ending === str.slice(str.length - ending.length, str.length)
}
```

## [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009) - 6 kyu
```javascript
function arrayDiff(arrayA, arrayB) {
  return arrayA.reduce((diff, currentItem) =&gt; {
     if(!arrayB.some(b =&gt; b === currentItem)) diff.push(currentItem) 
     return diff
  }, [])
}
```

## [Find the divisors! ](https://www.codewars.com/kata/544aed4c4a30184e960010f4) - 7 kyu
```rust
fn divisors(integer: u32) -&gt; Result&lt;Vec&lt;u32&gt;, String&gt; {
    let vec = (2..integer-1).filter(|x| integer % *x == 0).collect::&lt;Vec&lt;_&gt;&gt;();
    match vec.is_empty() {
        true =&gt; Err(String::from(integer.to_string() + " is prime")),
        false =&gt; Ok(vec),
    }
}
```

## [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836) - 6 kyu
```javascript
function findOdd(numArray) {
    return numArray.find((num) =&gt; {
        return numArray.filter(subNum =&gt; {
            return subNum === num
        }).length % 2
    })
}
```

## [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004) - 8 kyu
```javascript
function multiply(a, b){
  return a * b
}

```

