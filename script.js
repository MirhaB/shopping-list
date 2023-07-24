const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
 

itemForm.addEventListener('submit', addItem);

function addItem(e) {
 e.preventDefault();

 if(itemInput.value === '')
 alert('Unesite item');

 const li = document.createElement('li');

 li.appendChild(document.createTextNode(itemInput.value));
const button = createButton('remove-item btn-link text-red');

li.appendChild(button);
itemList.appendChild(li); 
}


function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('icon');
    icon.className = classes;
    return icon;
}