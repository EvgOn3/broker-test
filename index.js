const o = {
  b: 1,
  c: { d: -1, e: { f: 0 }, g: -1 },
  h: { j: 0 },
  k: 1
};

// A
const recursive = (objOrNum) => {
  switch (typeof objOrNum) {
    case 'number': {
      return objOrNum
    }
    case 'object': {
      let sum = 0
      for (const item in objOrNum) {
        sum += recursive(objOrNum[item])
      }
      return sum
    }
    default: throw new Error(typeof objOrNum)
  }
}

console.log(recursive(o))


// B
const linear = (initialObject) => {
  let sum = 0
  let initialMap = new Map(Object.entries(initialObject))
  const temp = new Map()
  let size = initialMap.size

  while (size) {
    temp.clear()
    initialMap.forEach((val) => {
      switch (typeof val) {
        case 'number': {
          sum += val
          break;
        }
        case 'object': {
          // Не учтен случай, с одинаковыми ключами
          Object.entries(val).forEach(item => temp.set(item[0], item[1]))
          break;
        }
        default: throw new Error(typeof val)
      }
    })
    initialMap = new Map(temp.entries())
    size = temp.size
  }

  return sum
}

console.log(linear(o))


// C
const recursiveWithMultiplier = (objOrNum, recusiveLevel = 1) => {
  switch (typeof objOrNum) {
    case 'number': {
      return objOrNum * recusiveLevel
    }
    case 'object': {
      let sum = 0
      for (const item in objOrNum) {
        sum += recursiveWithMultiplier(objOrNum[item], recusiveLevel + 1)
      }
      return sum
    }
    default: throw new Error(typeof objOrNum)
  }
}

console.log(recursiveWithMultiplier(o))