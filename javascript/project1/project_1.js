const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(buttons) {
    console.log(buttons);
    buttons.addEventListener("click", function(e){
        const color = e.target.id
        switch (color) {
            case "blue":
                body.style.backgroundColor("blue")
                break;
            case "white":
                body.style.backgroundColor("white")
                break;
            case "yellow":
                body.style.backgroundColor("yellow")
                break;
            case "green":
                body.style.backgroundColor("green")
                break;
            default:
                break;
        }
    })
    
});