function updateTable() {
    // Reset table
    var table = document.getElementById("choiceView");
    table.textContent = "";

    // Recreate table content with list content
    for (const element of choiceList) {
        var tableRow = document.createElement("tr");
    
        var tableEmojiData = document.createElement("td");
        var tableTextData = document.createElement("td");
        var tableDeleteData = document.createElement("td");
        
        var deleteButton = createDeleteButton();
        tableDeleteData.append(deleteButton);

        tableEmojiData.innerHTML = element.emoji;
        tableTextData.innerHTML = element.choice;

        tableRow.appendChild(tableEmojiData);
        tableRow.appendChild(tableTextData);
        tableRow.appendChild(tableDeleteData);

        table.appendChild(tableRow);
    }
}

function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "deleteButton btn btn-secondary")
    deleteButton.innerText = "Supprimer choix";
    deleteButton.addEventListener("click", deleteButtonClicked);
    return deleteButton;
}

function deleteButtonClicked() {
    
    var tableRow = this.parentNode.parentNode;
    var emoji = tableRow.children[0].innerText;
    var text = tableRow.children[1].innerText;
    removeFromChoiceList(emoji, text);
}