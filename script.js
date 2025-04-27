// script.js

// Navigate button functionality for Skills
const navigateButton = document.getElementById('navigateButton');

if (navigateButton) {
    navigateButton.addEventListener('click', () => {
        // This scrolls smoothly to the "Skills" section
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Navigate button functionality for Projects
const projectButton = document.getElementById('projectButton');

if (projectButton) {
    projectButton.addEventListener('click', () => {
        // This scrolls smoothly to the "Projects" section
        const projectSection = document.getElementById('projects');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
