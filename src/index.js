module.exports = function solveEquation(equation) {
    var arr = equation.split(" * x");
    var a = +arr[0];
    var strB = arr[1].split("^2 ");
    var b = strB[1].split(" ");
    if (b[0] === "+") {
        b = +b[1];
    } else {
        b = -b[1];
    }

    var c = arr[2].split(" ");
    if (c[1] === "+") {
        c = +c[2];
    } else {
        c = -c[2];
    }

    var d = Math.pow(b,2) - 4*a*c;
    var x1 = Math.round((-b + Math.sqrt(d))/(2*a));
    var x2 = Math.round((-b-Math.sqrt(d))/(2*a));

    if (x1 > x2) {
        return [x2,x1];
    } else {
        return [x1,x2];
    }
}
