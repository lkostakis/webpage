const homeSection = document.querySelector("#home h2");
const originalHomeText = "Welcome to my personal web page!<br>" +
                        "Here you can learn more about me, my interests, and my work.<br>" +
                        "Feel free to explore and get in touch if you have any questions or just want to say hello!<br> Thank you for visiting!";
let indexHome = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayWelcomeText() {
    await sleep(3000);
    setInterval(() => {
        homeSection.innerHTML = originalHomeText.substring(0, indexHome++);
        if (indexHome > originalHomeText.length) {
            clearInterval();
        }
    }, 75);
}
displayWelcomeText()

async function hideSections() {
    await sleep(19500);
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(element => {
        element.style.display = 'block';
    });
}
hideSections()