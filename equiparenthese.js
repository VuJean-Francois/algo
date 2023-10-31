function equiParentheses(expression) {
    const stack = [];
    for(let i=0; i<expression.length; i++) {

        const caractere = expression[i];

        if(caractere === "(") {
            stack.push(caractere);

        } else if(caractere === ")") {
            if(stack.pop() !== "(") {
                return false;
            }
        }
    }
    return stack.length === 0;

}
const expression = "((a+b)*(c-d))";
const estEqui = equiParentheses(expression);
console.log("Les parenthèses sont équilibrées : " + estEqui);