function addToChoiceList() {
    // Get Emoji from Form
    var emojis = document.getElementsByTagName("select");
    var picked = emojis[0].selectedOptions[0].value;
    
    // Get Text from Form
    var inputBox = document.getElementsByTagName("input");
    var choice = inputBox[0].value;
    
    // Add Choice to Page Content
    var tableRow = document.createElement("tr");

    var tableEmojiData = document.createElement("td");
    tableEmojiData.innerHTML = picked;
    
    var tableTextData = document.createElement("td");
    tableTextData.innerHTML = choice;
    
    tableRow.appendChild(tableEmojiData);
    tableRow.appendChild(tableTextData);
    document.getElementsByTagName("table")[0].appendChild(tableRow);
}

function formSubmissionCancel(event) {
    event.preventDefault();
    addToChoiceList();
}