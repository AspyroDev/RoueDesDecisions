var choiceList = [];

function addToChoiceList() {
    // Get Emoji from Form
    var emojis = document.getElementsByTagName("select");
    var picked = emojis[0].selectedOptions[0].value;
    
    // Get Text from Form
    var inputBox = document.getElementsByTagName("input");
    var choice = inputBox[0].value;
    choiceList.push(new Choice(picked, choice));

    updateTable();
}

function removeFromChoiceList(emoji, text) {
    // Remove Choice element containing emoji and text
    for (const element of choiceList) {
        if (element.emoji == emoji && element.choice == text) {
            index = choiceList.indexOf(element);
            if (index > -1) {
                choiceList.splice(index, 1);
                break;
            }
        }
    }
    updateTable();
}