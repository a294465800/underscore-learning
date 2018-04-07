const _ = require('./underscore/underscore-min')
// console.log(_.forEach)

const testArr = ['jack', 'mike', 'marry']

// _.forEach(testArr, (val, key, arr) => {
//     console.log('value****************', val)
// })

const ArrayLike = {
    0: 'jack',
    1: 'mick',
    2: 'marry',
    length: 3
}

// let newArr = _.map(ArrayLike, (val, key, obj) => {
//     console.log(obj)
//     return val += '!'
// })

// console.log(newArr)

console.log()