let inp = document.querySelector('input');
let btn = document.querySelector('button');
let dels = document.querySelectorAll('.delete');
let container = document.querySelector('.container');
let task = document.querySelector('.task');
let list = document.querySelector('ul');
let total = 0;

let foot = document.createElement('p');
foot.classList.add('flex');
let clear = document.createElement('a');
clear.classList.add('clear');
clear.setAttribute('href', '#');

clear.innerText = 'Clear All';
foot.innerText = `Total Task exist are ${total}`;

container.appendChild(foot);

btn.addEventListener('click', () => {
    if(inp.val != ''){
        let listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox" name="Check" id="check"><span style="overflowX: sroll">${inp.value}</span><button class="delete">X</button>`
        listItem.classList.add('flex');
        list.appendChild(listItem);
        total ++;
        inp.value = '';
        foot.innerText = `Total Task exist are ${total}`;
        foot.appendChild(clear);
    }
})

task.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        let par = event.target.parentElement;
        list.removeChild(par);
        total --;
        foot.innerText = `Total Task exist are ${total}`;
        foot.appendChild(clear);
        if(total === 0) {
            foot.removeChild(clear);
        }
    }
})

clear.addEventListener('click', (event) => {
    let siblings = clear.parentElement.parentElement.childNodes[5].childNodes[1].children;
    let siblingParent = clear.parentElement.parentElement.childNodes[5].childNodes[1];
    siblingParent.remove(siblings);
    total = 0;
    foot.innerText = `Total Task exist are ${total}`;
    if(total != 0) {
        foot.appendChild(clear);
    }
    let newUL = document.createElement('ul');
    task.appendChild(newUL);
    list = document.querySelector('ul');
})