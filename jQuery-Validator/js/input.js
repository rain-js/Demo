;$(function() {
    function Input(selector) {
        this.init(selector)
    }

    Input.prototype = {
        constructor: 'Input',
        $ele : {},
        $errorEle: {},
        rule: {},
        validator: {},
        
        init(selector) {
            this.$ele = this.getEle(selector)
            this.$errorEle = this.getErrorEle(this.$ele)
            this.parseRule()
            console.log('$ele.text() = '+ this.$ele.text())
            this.listen()
        },

        getEle(selector) {
            if(selector instanceof jQuery) {
                return selector
            } else {
                return $(selector)
            }
        },

        getErrorEle() {
            return $(`.${this.$ele.attr('name')}-input-error`)
        },
        
        parseRule() {
            let ruleArray = this.$ele.attr('data-rule').split('|')
            // ["minlength:4", "maxlength:10"]
            console.log(ruleArray)
            
            for(let i = 0; i < ruleArray.length; i++) {
                let item = ruleArray[i].split(':')
                this.rule[item[0]] = JSON.parse(item[1])
            }
        },
        
        listen() {
            this.$ele.on('blur', function(){
                this.validator = new Validator(this.$ele.val(), this.rule)
                let status = this.validator.isValid()
                // console.log($errorEle)
                if(!status) {
                    this.$errorEle.show()
                } else {
                    this.$errorEle.hide()
                }
            }.bind(this))
        }
    }

    window.Input = Input
})