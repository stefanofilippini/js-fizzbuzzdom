console.log('JS OK');
//costanti
const ul = document.querySelector ("ul.list")

//creare 100 box
for (let i = 1; i < 101; i++ ) {

    //verifica divisibilità
    let u = (i % 3);
    let r = (i % 5);

    //confronti
    let element
    if (u == 0 && r == 0) {
        element = `<li class="box blue">fizzbuzz</li>`;
    } else if (r == 0) {
        element = `<li class="box red">buzz</li>`;
    } else if (u == 0) {
        element = `<li class="box purple">fizz</li>`;
    } else {
        element = `<li class="box">${i}</li>`;
    }
    ul.innerHTML += element;
}