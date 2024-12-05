function updateText(text) {
    let delay = 50; // delay for animation start
    let h1 = document.querySelector(".title"); // selecting the title class
    
    h1.innerHTML = text
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join(""); // splitting the text into each individual character and wrapping it in a span for styling


    Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay); // add the wavy class to each span, along with a delay based on their position so they don't all trigger at once
    });
}

updateText(document.querySelector(".title").textContent);