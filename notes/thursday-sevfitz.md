# Thursday-sevfitz Notes

## Pull Requests

convention:
name functions with verbs, since they do things
name variables with nouns, since they are things

good functions: do one thing, no side effects, one line is great
note console.log is useful for debugging, but it’s a side effect, so don’t leave it in there

it’s great to have fifty one-line functions

have to declare an anonymous function before it can be invoked in a program

// anonymous function:
var subtract = function (num1, num2) {
    return num1 + num2;
};
subtract(6, 4);

// named function:
function add(num1, num2) {
    return num1 + num2;
}
add(4, 6);

// IIFE:
(function(first, second) {
    add(first, second);
} (4, 6));

we name the variables when we declare the function; we provide actual values when we invoke the function
