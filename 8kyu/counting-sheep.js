function countSheeps(sheep) {
    let numOfSheep = 0
    sheep.map((i) => i === true ? numOfSheep += 1 : undefined)
    return numOfSheep
}