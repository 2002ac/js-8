let content = document.querySelector(".body-ic");
let emoji = document.querySelector(".emoji");
let button = document.querySelector("button");
let blok = document.querySelectorAll(".blok");
let emojies = document.querySelectorAll("p");


blok.forEach(element => {
    element.addEventListener("click", () => {
        blok.forEach(e => e.classList.remove('selected'));
        element.classList.add('selected');
    }
    );
}
);

button.addEventListener("click", () => {

    let selectedEmoji = document.querySelector(".blok.selected");


    if (selectedEmoji) {

        if (selectedEmoji.classList.contains("unhappy")) {
            content.style.backgroundColor = "aqua";
            selectedEmoji.style.backgroundColor = "aqua";
        }

         else if (selectedEmoji.classList.contains("neutral")) {
            content.style.backgroundColor = "red";
            selectedEmoji.style.backgroundColor = "red";
        } 

        else if (selectedEmoji.classList.contains("happy")) {
            content.style.backgroundColor = "blue";
            selectedEmoji.style.backgroundColor = "blue";
        }
    

           let selectedEmoji1 = document.querySelector(".blok.selected p");
               emoji.innerHTML = selectedEmoji1.innerHTML;

         blok.forEach(element => {
            if (element !== selectedEmoji) {
                element.remove();
            }
         }
         );

              button.innerText = "Thanks for feedback";
                button.style.fontSize = "40px";
                button.style.backgroundColor = "bluye";
                button.style.padding = "10px";
                button.style.borderRadius = "5px"

            }
        }
        );