const homeSection = document.querySelector("#home h2");
const originalHomeText = "Welcome to my personal web page! " +
                        "Here you can learn more about me, my interests, and my work." +
                        "Feel free to explore and get in touch if you have any questions or just want to say hello!<br> Thank you for visiting!";
let indexHome = 0;
let skipAnimation = 0

document.addEventListener("click", function() {
    skipAnimation = 1;
    clearInterval(delayThreeSeconds);
    homeSection.innerHTML = originalHomeText
    displaySections();
});

(() => {
    
})

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
    }, 9500)
})();



const menuLinks = document.querySelectorAll('.hidden a');
const contentDiv = document.querySelector('#content');
const aboutMe = '<p>You can find me at: <a href="https://www.github.com/terrys48" target="_blank"><img src="Assets/github.png" alt="Github"></a>' +
' or <a href="https://www.linkedin.com/in/eleftherios-kostakis/" target="_blank"><img src="Assets/linkedin.png" alt="LinkedIn"></a>' +
'</p> <p>Email Account: lp.kostakis@gmail.com</p>';
contentDiv.innerHTML = aboutMe;

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');
        switch (href) {
            case '#about-me':
                contentDiv.innerHTML = aboutMe;
            break;
          case '#education':
              contentDiv.innerHTML = '<p>I hold a Master of Engineering degree (EQF level 7) from the Department ' +
                  'of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>';
              break;
          case '#skills':
              contentDiv.innerHTML = '<p>Here are my skills and abilities.</p>';
              break;
        default:
              contentDiv.innerHTML = 'diuadiawhduiauwduhiwaahuidhuaw';
    }
  });
});

$("#links a").click(function () {
    $("#links a").removeClass("active");
    $(this).addClass("active");
    var sectionId = $(this).attr("href");
    $("#content div").hide();
    $(sectionId).show();
});