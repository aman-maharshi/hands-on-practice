const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

//  Some and Every Checks
// I. Array.prototype.some() // is at least one person 19 or older?
const ages = people.map(item => 2021 - item.year)
// console.table(ages)

const one = people.some(item => 2021 - item.year >= 19)
// console.log(one)

/* --------------------------------------------------------- */

// II. Array.prototype.every() // is everyone 19 or older?
const two = people.every(item => 2021 - item.year >= 19)
// console.log(two)

/* --------------------------------------------------------- */

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// III. find the comment with the ID of 823423
const three = comments.find(item => item.id === 823423)
// console.log(three)

const testOne = ['a', 'b', 'c', 'b', 'd']

// console.log(testOne.find(item => item === 'b'))

/* --------------------------------------------------------- */

// Array.prototype.findIndex()
// IV. Find the comment with this ID
const index = comments.findIndex(item => item.id === 823423)
// console.log(index)

/* --------------------------------------------------------- */

// V. delete the comment with the ID of 823423
const five = comments.filter(item => item.id !== 823423)
// console.log(five)
// const six = comments.splice(index, 1)
// console.log(comments)

// splice affects the array used, while slice doesn't

// OR

const seven = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]
// console.log(seven)



