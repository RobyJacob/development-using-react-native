const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0;
let uncheckedItemCount = 0;

function updateItemCount() {
	itemCountSpan.innerHTML = itemCount;
}

function updateUncheckedItemCount() {
	uncheckedCountSpan.innerHTML = uncheckedItemCount;
}

function newTodo() {
	let input = prompt("Enter TODO");
<<<<<<< HEAD

	let item = document.createElement("li");
	item.className = classNames.TODO_ITEM;

	let itemCheckeBox = document.createElement("input");
	itemCheckeBox.setAttribute("type", "checkbox");
	itemCheckeBox.className = classNames.TODO_CHECKBOX;

	let text = document.createElement("span");
	text.className = classNames.TODO_TEXT;
	text.innerHTML = input;
	
	let itemDelete = document.createElement("button");
	itemDelete.innerText = "Delete";
	itemDelete.className = classNames.TODO_DELETE;
	itemDelete.addEventListener("click", function() { list.removeChild(this.parentNode); itemCount--; updateItemCount(); });
	
	item.appendChild(text);
	item.appendChild(itemCheckeBox);
	item.appendChild(itemDelete);

	list.appendChild(item);

	itemCount++;
	updateItemCount();
	updateUncheckedItemCount();
=======
	let item = document.createElement("li");

	item.appendChild(document.createTextNode(input));
	list.appendChild(item);
>>>>>>> 4f8302b09b80fe2c215b909ec2b33a99a54dfe01
}
