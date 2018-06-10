;$(function() {
    window.Validator = function(val, rule) {
        this.isValid = function() {
            for(let key in rule) {
                let status = this['validate_'+key]()
                if(!status) {
                    return false
                }
            }
            return true
        }

        this.validate_max = function() {
            val = val.toString()
            return val <= rule.max
        }
        
        this.validate_min = function() {
            val = val.toString()
            return val >= rule.min
        }

        this.validate_maxlength = function() {
            var len = val.toString().length
            return len <= rule.maxlength
        }

        this.validate_minlength = function() {
            console.log('call validate_minlength val = ' + val)
            var len = val.toString().length
            console.log('len = ' + len)
            console.log(`rule.minlength = ${rule.minlength}`)
            console.log(len >= rule.minlength)
            return len >= rule.minlength
        }

        this.validate_numeric = function() {
            return $.isNumeric(val)
        }

        this.validate_required = function() {
            let temp = val.trim()
            if (!temp) {
                return false
            }
            return true
        }

        this.validate_pattern = function() {
            var reg = new RegExp(rule.pattern)
            return reg.test(val)
        }
    }
})