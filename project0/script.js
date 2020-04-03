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

	let item = document.createElement("li");
	item.className = classNames.TODO_ITEM;

	let itemCheckBox = document.createElement("input");
	itemCheckBox.setAttribute("type", "checkbox");
	itemCheckBox.className = classNames.TODO_CHECKBOX;
	itemCheckBox.addEventListener("change", function() {
		if (this.checked) {
			uncheckedItemCount--;
			updateUncheckedItemCount();
		} else {
			uncheckedItemCount++;
			updateUncheckedItemCount();
		}
	});

	let text = document.createElement("span");
	text.className = classNames.TODO_TEXT;
	text.innerHTML = input;
	
	let itemDelete = document.createElement("button");
	itemDelete.innerText = "Delete";
	itemDelete.className = classNames.TODO_DELETE;
	itemDelete.addEventListener("click", function() { 
		list.removeChild(this.parentNode); 
		itemCount--; 
		updateItemCount();

		if (!itemCheckBox.checked) {
			uncheckedItemCount--;
			updateUncheckedItemCount();
		}
	});
	
	item.appendChild(text);
	item.appendChild(itemCheckBox);
	item.appendChild(itemDelete);

	list.appendChild(item);

	itemCount++;
	updateItemCount();

	uncheckedItemCount++;
	updateUncheckedItemCount();
}
