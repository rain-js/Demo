var validator = new Validator('  1 ', {
    max: 10
})

var result = validator.validateMax()
console.log(result)