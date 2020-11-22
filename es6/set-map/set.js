// let arr = [1, 2, 3, 2, 4, 1]

// let newArr = [...new Set(arr)]
// console.log(newArr);

// function test(color) {
//     switch (color) {
//         case 'red':
//             return ['apple', 'strawberry']
//         case 'yellow':
//             return ['banana', 'pear']
//         case 'green':
//             return ['watermelon']
//         default:
//             return []
//     }
// }
 
// console.log(test('yellow')); 

const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pear'],
    green: ['watermelon']
}

function test(color) {
    return fruitColor.color || []
}

test(yellow)