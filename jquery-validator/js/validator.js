;$(function() {
    window.Validator = Validator

    function Validator(val, rule) {
        this.init(val, rule)
        this.isValid()
    }

    Validator.prototype = {
        constructor: 'Validator',
        val: '',
        rule: {},

        init(valPara, rulePara) {
            val = valPara
            rule = rulePara
        },
        
        isValid() {
            for(let key in rule) {
                let status = this['validate_'+key]()
                if(!status) {
                    return false
                }
            }
            return true
        },

        validate_max() {
            val = val.toString()
            return val <= rule.max
        },
        
        validate_min() {
            val = val.toString()
            return val >= rule.min
        },

        validate_maxlength() {
            const len = this.getLength(val)
            return len <= rule.maxlength
        },

        validate_minlength() {
            const len = this.getLength(val)
            console.log('len = ' + len)
            console.log(`rule.minlength = ${rule.minlength}`)
            console.log(len >= rule.minlength)
            return len >= rule.minlength
        },

        validate_numeric() {
            return $.isNumeric(val)
        },

        validate_required() {
            const temp = val.trim()
            if (!temp) {
                return false
            }
            return true
        },

        validate_pattern() {
            const reg = new RegExp(rule.pattern)
            return reg.test(val)
        },

        getLength(val) {
            return val.toString().length
        }
    }
})