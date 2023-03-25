let titleText = document.querySelector("header").textContent;
let titleIndex = 0;

(() => {
    document.querySelector("header").textContent = "New Title";
})();

var skillsSection = document.querySelector("#skills");
var paragraphs = skillsSection.querySelector("p")
var originalText = paragraphs.textContent;
var index = 0;

setInterval(() => {
    paragraphs.textContent = originalText.substring(0, index++);
    if (index > originalText.length) {
        clearInterval();
    }
}, 100);