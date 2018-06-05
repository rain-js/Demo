$(function() {
    window.Validator = function(val, rule) {
        this.isValid = function() {

        }

        this.validateMax = function() {
            val = val.toString()
            return val <= rule.max
        }
        
        this.validateMin = function() {
            val = val.toString()
            return val >= rule.min
        }

        this.validateMaxLength = function() {
            var len = val.toString().length
            return len <= rule.maxLength
        }

        this.validateMinLength = function() {
            var len = val.toString().length
            return len >= rule.minLength
        }

        this.validateNumeric = function() {
            return $.isNumeric(val)
        }

        this.validateRequired = function() {
            let temp = val.trim()
            if (!temp && temp == 0) {
                return false
            }
            return true
        }

        this.validatePattern = function() {
            var reg = new RegExp(rule.pattern)
            return reg.test(val)
        }
    }
})