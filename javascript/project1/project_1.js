const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(buttons) {
    console.log(buttons);
    buttons.addEventListener("click", function(e){
        console.log(e);
        const clr = e.target.id
        console.log(clr)
        switch (clr) {
            case "blue":
                body.style.backgroundColor = clr
                console.log("this is for color blue");
                break;

            case "swhite":
                body.style.backgroundColor = "white"
                console.log("this is for color white");
                break;

            case "yellow":
                body.style.backgroundColor= clr
                console.log("this is for color yellow");
                break;

            case "green":
                body.style.backgroundColor = clr
                console.log("this is for color green");
                break;

            default:
                body.style.backgroundColor = "grey"
                break;
        }
    })
    
});
