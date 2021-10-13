const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
    FILTER
-----------------*/

// 1. filter - ages that are 21 and over

const agesFilter = ages.filter(item => item >= 21)
// console.log(agesFilter)

// 2. filter - where category is retail

const retailFilter = companies.filter(item => item.category === 'Retail')
// console.log(retailFilter)

// 3. filter - companies that started in 80's

const companyStartFilter = companies.filter(item => item.start >= 1980 && item.start < 1990)
// console.log(companyStartFilter)

// 4. filter - companies that lasted 10 years or more
const companiesOverTen = companies.filter(item => item.end - item.start >= 10 )
// console.log(companiesOverTen)

/*
    MAP - creates a new array
------------------------------*/

// 1. map - create array with company names

const companyNames = companies.map(item => item.name)
// console.log(companyNames)

// 2. map - create array with company age

const companyAges = companies.map(item => `${item.name} - ${item.end - item.start}`)
// console.table(companyAges)


/*
    SORT - passed function takes two arguments (current, next) and returns either 1 or -1
--------------------------------------------------------------------------------------------*/

// 1. sort the companies by start year

const sortedByStartYear = companies.sort((current, next) => current.start > next.start ? 1 : -1)
// console.table(sortedByStartYear)

// 2. sort ages
const sortedByAge = ages.sort((current, next) => current > next ? 1 : -1)
// console.log(sortedByAge)

/*
    REDUCE
-----------------*/

// 1. sum all the ages

// const agesTotal = ages.reduce((total, item) => {
//     total += item
//     return total
// }, 0)
const agesTotal = ages.reduce((total, item) => total + item, 0)
// console.log(agesTotal)


// 2. sum total ages of all the companies
const companyAgeTotal = companies.reduce((total, item) => total + (item.end - item.start), 0)
// console.log(companyAgeTotal)



// combining different methods
const combined = ages.map(item => item *2)
                     .filter(item => item >=40 && item < 100)
                     .sort((current, next) => current < next)
                     .reduce((total, item) => total + item, 0)
// console.log(combined)
