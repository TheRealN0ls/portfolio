let esc = document.querySelector(".escape");
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        console.log("Esc key down 👇");
        esc.classList.add("yellow");
    }});

    document.addEventListener('keyup', function(event) {
        if (event.key === "Escape") {
            console.log("Esc key up 👆");
            esc.classList.remove("yellow");
        }});