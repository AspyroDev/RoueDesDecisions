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
        
        var deleteLink = createDeleteLink();
        tableDeleteData.append(deleteLink);

        tableEmojiData.innerHTML = element.emoji;
        tableTextData.innerHTML = element.choice;

        tableRow.appendChild(tableEmojiData);
        tableRow.appendChild(tableTextData);
        tableRow.appendChild(tableDeleteData);

        table.appendChild(tableRow);
    }
}

function createDeleteLink() {
    var deleteLink = document.createElement("a");
    deleteLink.setAttribute("href", "#");
    deleteLink.setAttribute("class", "deleteLink");
    deleteLink.innerText = "Supprimer choix";
    deleteLink.addEventListener("click", deleteLinkClicked);
    return deleteLink;
}

function deleteLinkClicked() {
    
    var tableRow = this.parentNode.parentNode;
    var emoji = tableRow.children[0].innerText;
    var text = tableRow.children[1].innerText;
    removeFromChoiceList(emoji, text);
}