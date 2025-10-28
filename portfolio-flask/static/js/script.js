// Mobile menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typing animation
document.addEventListener("DOMContentLoaded", function () {
    const text = "Software developer/Networking Engineer/IT Support";
    const typingText = document.querySelector(".typing-text");
    let i = 0;
    const speed = 100; // typing speed in ms

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Animation complete - keep the cursor blinking
            typingText.style.borderRight = "2px solid var(--secondary-color)";
            typingText.style.animation = "blink-caret 0.75s step-end infinite";
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', () => {
        closemenu();
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
