function turnTheWheel() {
    var listSize = choiceList.length;
    var p = document.getElementsByTagName("p");
    console.log(p)
    if (listSize) {
        // If choiceList is no more empty, remove the error message
        if(p[0]) {
            var wheel = document.getElementById("choiceWheel");
            wheel.removeChild(p[0]);
        }

        var emojiSpan = document.getElementById("emojiSpan");
        var choiceSpan = document.getElementById("choiceSpan");
        var random, timeout;
        
        // Turn the wheel with a slow down impression
        for (let index = 0; index < 25; index++) {
            timeout = 500 + (index * 100);
            setTimeout(() => {
                random = Math.floor(Math.random() * listSize);
                emojiSpan.innerText = choiceList[random][0];
                choiceSpan.innerText = choiceList[random][1];     
            }, timeout);
            console.log(timeout);
        }
    }
    else {
        if(p[0]) {
            var wheel = document.getElementById("choiceWheel");
            wheel.removeChild(p[0]);
        }
        var errorMessage = document.createElement("p");
        errorMessage.innerText = "La liste est vide et tu veux que je choisisse pour toi ?"
        document.getElementById("choiceWheel").appendChild(errorMessage);
         
    }
    
}