// in this case, we use inferring to output
function addNumbers(a: number, b: number) { 
  return a + b
}

console.log('addNumbers function: ' ,addNumbers(2,4))

// functions using const
const addString = (a: string, b: string): string => {
  return `${a} ${b}`
}

console.log('addString function: ', addString('hey', ' ho'))

// default parameters to type definition
// this will set the b parameter to an empty string if it’s undefined
const addStrings = (a: string, b: string = ''): string => {
  return `${a} ${b}`
}
console.log('addStrings function: ', addStrings('hey'))
console.log('addStrings function: ', addStrings('let`s', 'go'))

// we could pass different types to same parameter
// separating by |
const format = (title: string, param: string | number): string | number => {
  return `${title}: ${param}`
}

console.log('format function: ' ,format('id', 2))

// we can use rest parameters
const formats = (title: string, ...params: string[]): string => {
  return `${title}: ${params.join(' ')}`
}

console.log('formats function: ' ,formats('fruits', 'apple'))

// Promises
 const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`)
 }