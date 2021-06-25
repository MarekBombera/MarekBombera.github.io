const getInputForm = document.getElementById("inputForm");
const getList = document.getElementById("list");
const li = document.getElementsByTagName("LI");

const addsTextInputToList = () => {
	const getInputValue = inputForm.value;

	if (getInputValue.length === 0) {
		getInputForm.style.backgroundColor = 'red';
		alert(`Form can't be empty`);
		getInputForm.style.backgroundColor = 'white';
		return;
	}

	const createListElement = document.createElement("LI");
	getList.appendChild(createListElement).innerText = getInputValue;
	inputForm.value = "";

	//Also Line-Through LI on click
	createListElement.addEventListener('click', () => {
		createListElement.style.textDecoration = "line-through";
	})

	//Also Removes LI on dblclick
	createListElement.addEventListener('dblclick', () => {
		createListElement.remove();
	})


};

const clearsWholeList = () => {
	const list = document.getElementById("list");
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
};


const addToListButton = document
	.getElementById("addToListButton")
	.addEventListener("click", addsTextInputToList);

const clearListButton = document
	.getElementById("clearListButton")
	.addEventListener("click", clearsWholeList);