// code your solution here
function findMatching (names, name) {
    const nameNoCase = name.toUpperCase();
    const driverMatch = names.filter(elem => nameNoCase === elem.toUpperCase())
    return driverMatch
}

function fuzzyMatch(names, letters) {
    const endInd = letters.length
    const driverMatch = names.filter(elem => elem.slice(0, endInd) === letters)
    return driverMatch
}

function matchName(names, string) {
    const driverMatch = names.filter(elem => elem.name === string);
    return driverMatch
}
