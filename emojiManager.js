function iconsCreation() {
    var selectTag = document.getElementsByTagName("select");
    
    emoji.forEach(element => {
        let optionTag = document.createElement("option");
        optionTag.setAttribute("value", element);
        optionTag.innerHTML = element;
        selectTag[0].add(optionTag);
    });
}