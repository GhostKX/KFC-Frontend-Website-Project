const firstName = document.querySelector("#fname")
const successMessage = document.querySelector("#success")
const sendButton = document.querySelector("button")
const lastName = document.querySelector("#lname")
const clearButton = document.querySelector("#clear")


sendButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (firstName.value.length < 4) {
        console.log("First name is too short")
    // } else if (lastName.value.length < 5) {
    //     console.log("Last name is too short")
    } else {
        successMessage.style.display = "block"
    }  
})
clearButton.addEventListener("click", () => {
    successMessage.style.display = "none"
})

// function submit() {
//     var link = "mailto:me@example.com"
//              + "?cc=myCCaddress@example.com"
//              + "&subject=" + escape("This is my subject")
//              + "&body=" + escape(document.getElementById('myText').value)
//     ;

//     window.location.href = link;
// }