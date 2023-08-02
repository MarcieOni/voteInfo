window.onload = function() {  //do this stuff when the window loads
    const form =  document.querySelector("form"); 
    form.onsubmit = function(event) { //do this stuff when u press submit button
        event.preventDefault(); //stops the page from doing refresh that clears ur stuff x.x 
        form.setAttribute("class", "hidden"); 

            // this does things x.x
        let voteInfo = document.getElementById("voteInfo");
        voteInfo.setAttribute("class", "hidden");
        let underAgeMsg = document.getElementById("underAge");
        underAgeMsg.setAttribute("class", "hidden");
        let startMsg = document.getElementById("startMsg");

            // this gets the age value n changes it back 2 a number so we can compare it 2 the age requirements
        const age = parseInt(document.querySelector("input#age").value);

        if(age >= 18) {
            voteInfo.removeAttribute("class")
        } else {
            startMsg.setAttribute("class", "hidden")
            underAgeMsg.removeAttribute("class")
        }

    }
}