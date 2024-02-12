const arr = []
const fiveElements = [1,2,3,4,5]
console.log(fiveElements.length)
console.log(fiveElements[0], fiveElements[2], fiveElements[4])

const mixedDataTypes = [1337, true, 'cool string', [1,3,3,7], 13.37, {'leet': 1337, 'cool': 6510097109}]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[3], itCompanies[6])
console.log(itCompanies.join(' '))
itCompanies[0] = 'FACEBOOK'
console.log(itCompanies[0])
let company = 'Google'
let test = itCompanies.includes(company)
if (test){
    console.log(company)
}else {
    console.log(company, 'not found')
}
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
console.log(itCompanies.slice(2,5))
console.log(itCompanies.shift())
console.log(itCompanies.splice(3,1))
console.log(itCompanies.pop())
console.log(itCompanies.splice(0))
console.log(itCompanies)


