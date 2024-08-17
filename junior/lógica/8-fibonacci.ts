let f1: number = 0;
let f2: number = 1;
let fn: number = 0;

for (let i = 2; i < 10; i++) {

    fn = f1 + f2;
    console.log(fn);
    f1 = f2;
    f2 = fn;
}