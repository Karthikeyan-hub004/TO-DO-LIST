let input = document.getElementById('input');
let btn = document.getElementById('add');
let list = document.getElementById('todolist');
let total = document.getElementById('total')
let del = document.getElementById('del');

let todos=[];

btn.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    todos.push(input.value);
    addtodo(input.value);
    input.value = '';
    del.style.display = 'block';
  } else {
    alert('Please fill the input');
  }
});
function addtodo (todo) {
  let para = document.createElement('p');
  para.style.fontSize = '30px';
  del.addEventListener('click', () => {
    todos = [];
    list.innerHTML = '';
    updateTotal();
  });
  para.innerText = todo;
  para.addEventListener('click', () => {
    
    para.style.textDecoration = 'line-through';
    para.style.cursor = 'pointer';
    para.style.color = 'green';
  });
  list.appendChild(para);
  updateTotal();
}

function updateTotal() {
  total.innerText = `Total: ${todos.length}`;
  total.style.fontSize = '20px';
}
  
        