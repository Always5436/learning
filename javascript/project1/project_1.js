const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(buttons) {
    console.log(buttons);
    buttons.addEventListener("click", function(e){
        const clr = e.target.id
        console.log(clr)
        switch (clr) {
            case "blue":
                body.style.backgroundColor("blue")
                break;
            case "white":
                body.style.backgroundColor("white")
                break;
            case "yellow":
                body.style.backgroundColor())
                break;
            case "green":
                body.style.backgroundColor(color)
                break;
            default:
                break;
        }
    })
    
});