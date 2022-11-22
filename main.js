let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');
let hal = document.getElementById('hallo')

container.style.backgroundColor = '#ffa';
container.style.height = '100px';


after.onclick = function () {
    container.after(before);
    container.style.backgroundColor = 'blue';
}
before.onclick = function (){
    container.before(content);
    container.style.backgroundColor = 'green';
}

append.onclick = function (){
    container.append(content);
    container.style.backgroundColor = 'red';
}

hal.onclick = function (){
    hal.classList.toggle("name")
}
