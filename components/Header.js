// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement("div")
    header.classList.add(".header")
    const span1 = document.createElement("span")
    span1.classList.add(".date")
    span1.textContent = "MARCH 28, 2020"
    const h1 = document.createElement("h1")
    const span2 = document.createElement("span")
    span2.classList.add(".temp")
    span2.textContent = "98°"
    header.append(span1, h1, span2)

    return header
}

const headerContainer = document.querySelector("div.header-container")

headerContainer.appendChild(Header())