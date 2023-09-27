let a = "Jean"
let b = "Paul"
let result = checkName(a, b)
let secondResult = secondCheckName(a, b)

function checkName(firstUserName, secondUserName) {
  return firstUserName === secondUserName
}

function secondCheckName(firstUserName, secondUserName) {
  if (firstUserName === secondUserName) {
    return "Egal"
  } else {
    return "Pas Egal"
  }
}

console.log(result)
console.log(secondResult)