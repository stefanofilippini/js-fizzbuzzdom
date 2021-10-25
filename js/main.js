console.log('JS OK');
//costanti
const ul = document.querySelector ("ul.list")

//creare 100 box
for (let i = 1; i < 101; i++ ) {
    console.log(i);
    const element = `<li class="box"></li>`;
    ul.innerHTML += element;
}