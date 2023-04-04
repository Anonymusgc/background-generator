let color1 = document.getElementsByTagName("input")[0]
let color2 = document.getElementsByTagName("input")[1]
let css = document.querySelector("h3");
let body = document.querySelector("body")
console.log(body.style.background)

function setGradient() {
    body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
    css.textContent = body.style.background
}

// body.style.background = "linear-gradient(to right, blue , yellow)";
color1.addEventListener("input", function() {
    // console.log(color1.value)
    setGradient();
})
color2.addEventListener("input", function() {
    setGradient();
})