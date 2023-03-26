const homeSection = document.querySelector("#home h2");
const originalHomeText = "Welcome to my personal web page!<br>" +
                        "Here you can learn more about me, my interests, and my work.<br>" +
                        "Feel free to explore and get in touch if you have any questions or just want to say hello!<br> Thank you for visiting!";
let indexHome = 0;
let skipAnimation = 0

document.addEventListener("click", function() {
    skipAnimation = 1;
    clearInterval(delayThreeSeconds);
    homeSection.innerHTML = originalHomeText
    displaySections();
});

const delayThreeSeconds =  setInterval(() => {
    const displayWelcomeText = setInterval(() => {
        homeSection.innerHTML = originalHomeText.substring(0, indexHome++);
        if (indexHome > originalHomeText.length || skipAnimation ==1) {
            clearInterval(displayWelcomeText);
            homeSection.innerHTML = originalHomeText
        }
    }, 30);
    clearInterval(delayThreeSeconds);
}, 3000);

function displaySections() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(element => {
        element.style.display = 'block';
    });
}

(() => {
    const delaySections = setInterval(() => {
        if (skipAnimation !=1) {
            displaySections();
            clearInterval(delaySections)
        }
        clearInterval(delaySections)
    }, 5000)
})();
