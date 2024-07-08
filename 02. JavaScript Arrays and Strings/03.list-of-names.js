function SortListOfNames(names) {
    names.sort((a, b) => a.localeCompare(b)).map((name, index) => {
        console.log(`${index + 1}.${name}`)
    })
}

SortListOfNames(["John","Bob","Christina","Ema"])