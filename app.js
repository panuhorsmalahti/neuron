// Just some neural network examples

function dotProduct(a, b) {
    return a.reduce(function(prev, current, index) {
        return prev + current * b[index];
    }, 0);
}

function σ(z) {
    return 1/(1 + Math.exp(-z));
}

function sigmoidNeuron(w, x, b) {
    return σ(dotProduct(w, x) + b);
}

console.log(sigmoidNeuron([-2, -2], [0, 1], 3));
