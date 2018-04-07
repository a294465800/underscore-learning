const _ = require('./underscore')
// console.log(_.forEach)

const testArr = ['jack', 'mike', 'marry']

// _.forEach(testArr, (val, key, arr) => {
//     console.log('value****************', val)
// })

const ArrayLike = {
    0: 'jack',
    1: 'mick',
    2: 'marry',
    3: {
        3: 'kk',
        length: 1
    },
    length: 4
}

// let newArr = _.map(ArrayLike, (val, key, obj) => {
//     console.log(obj)
//     return val += '!'
// })

// console.log(newArr)
const newArr = _.values(ArrayLike)
console.log(newArr)