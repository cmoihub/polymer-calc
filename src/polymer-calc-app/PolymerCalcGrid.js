/**
 * @customElement
 * @polymer
 */
class PolymerCalcGrid extends Polymer.Element {
    static get is() { return 'polymer-calc-grid'; }
    static get properties() {
        // return {
        //     number: {
        //         type: Object,
        //         value: 0,
        //     }
        // };
    }
    
    equal() {
        console.log('equals');
        let value = this.$.display.value;
        let operators = ['+', '-', '/', '*'];
        // value.toString().charAt(0) !== '-'
        if ((+value === +value) || (value==="")) {
            return
        }
        let operator = ""
        for (let op of operators) {   
            value = value.toString()
            console.log(value);
            if (value.includes(op)) {
                operator = op;
                if(value.charAt(0) === '-'){
                    // so for -1-5 -> -1 & 5
                    value = value.slice(1,value.length).split(operator)
                    // make first value negative
                    value[0] = -value[0]
                } else {
                    // for 1-5 -> 1 & 5
                    value = value.split(operator);
                }
                break
            }
            else {
                // handle case where there is no operator in the display
                this.$.preview.value = value
            }
        }
        // convert the strings to their integer values
        value[0] = +value[0]
        value[1] = +value[1]

        // perform an operation on the the two values
        if (operator === operators[0]) {
            this.$.preview.value = value[0] + value[1];
        } else if (operator === operators[1]) {
            this.$.preview.value = value[0] - value[1];
        } else if (operator === operators[2]) {
            this.$.preview.value = value[0] / value[1];
        } else {
            this.$.preview.value = value[0] * value[1];
        }
        this.$.display.value = this.$.preview.value;
        // this.$.preview.value = '';
    }

    // Operators
    add() {
        console.log('adding');
        // this.equal();
        this.$.display.value += '+'
    }
    subtract() {
        console.log('subtracting');
        // this.equal();
        this.$.display.value += '-'
    }
    multiply() {
        console.log('multiplying');
        // this.equal();
        this.$.display.value += '*'
    }
    divide() {
        console.log('dividing');
        // this.equal();
        this.$.display.value += '/'
    }

    // Numbers & Symbols
    zero() {
        console.log('zero pressed');
        this.$.display.value += '0'
    }
    one() {
        console.log('one pressed');
        this.$.display.value += '1'
    }
    two() {
        console.log('two pressed');
        this.$.display.value += '2'
    }
    three() {
        console.log('three pressed');
        this.$.display.value += '3'
    }
    four() {
        console.log('four pressed');
        this.$.display.value += '4'
    }
    five() {
        console.log('five pressed');
        this.$.display.value += '5'
    }
    six() {
        console.log('six pressed');
        this.$.display.value += '6'
    }
    seven() {
        console.log('seven pressed');
        this.$.display.value += '7'
    }
    eight() {
        console.log('eight pressed');
        this.$.display.value += '8'
    }
    nine() {
        console.log('nine pressed');
        this.$.display.value += '9'
    }
    decimal() {
        console.log('decimal pressed');
        if (this.$.display.value.includes(".")) {
            // ensure there are no existing decimals
            return;
        } else {
            this.$.display.value += "."
        }
    }

    backspace() {
        console.log('backspace');
        this.$.display.value = this.$.display.value.slice(0, this.$.display.value.length - 1)
    }
    delete() {
        /**
         * This is used to clear the calculator's display
         */
        console.log('delete');
        if (this.$.display.value === '') {
            // used to avoid repeating action
            return;
        }
        this.$.display.value = '';
    }
}

window.customElements.define(PolymerCalcGrid.is, PolymerCalcGrid);