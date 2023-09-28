
const doneThisTask = (element) => {
    const thisList = element.target.parentNode.parentNode;

    const index = Array.from(listChildren).indexOf(thisList);
    listArray[index].state = "done";

    thisList.classList.add("done");
    element.target.remove();
}

const deleteThisTask = (element) => {
    const thisList = element.target.parentNode.parentNode;

    const index = Array.from(listChildren).indexOf(thisList);

    listArray.splice(index, 1);

    thisList.remove();

}

const operationBox = document.createElement("div");

const doneButton = document.createElement("button");

doneButton.setAttribute("onlick", "doneThisTask(this)");
doneButton.innerHTML = "Done";
doneButton.addEventListener("click", doneThisTask);
operationBox.append(doneButton);


const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.setAttribute("onlick", "deleteThisTask(this)");
deleteButton.addEventListener("click", deleteThisTask);
operationBox.append(deleteButton);

div.append(operationBox);
