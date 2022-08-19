
function calculate(args) {
    let answer
    if (args.op === '+') {
        answer = args.n1 + args.n2
        console.log(answer);
    } else if (args.op === '-') {
        answer = Number(args.n1) - Number(args.n2)
        console.log(answer);
    } else if (args.op === '*') {
        answer = Number(args.n1) * Number(args.n2)
        console.log(answer);
    }else if (args.op === '/') {
        answer = Number(args.n1) / Number(args.n2)
        console.log(answer);
    } else {
        console.log('Not supported');
    }
}


    calculate({ n1: 2, n2: 3, op: '+' }); // result to 5
    calculate({ n1: 5, n2: 2, op: '-' }); // result to 3
    calculate({ n1: 1, n2: 6, op: 'x' }); // result to 'Not supported'