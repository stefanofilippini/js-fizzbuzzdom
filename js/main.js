console.log('JS OK');
//costanti
const ul = document.querySelector ("ul.list")

//creare 100 box
for (let i = 1; i < 101; i++ ) {
    let u = (i % 3);
    let r = (i % 5);
    if (u == 0 && r == 0) {
        const element = `<li class="box blue">fizzbuzz</li>`;
        ul.innerHTML += element;
    } else if (r == 0) {
        const element = `<li class="box red">buzz</li>`;
        ul.innerHTML += element;
    } else if (u == 0) {
        const element = `<li class="box purple">fizz</li>`;
        ul.innerHTML += element;
    } else {
        const element = `<li class="box">${i}</li>`;
        ul.innerHTML += element;
    }

}