function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    return false;
}

function showDescription(type) {
    const desc = document.getElementById('description-text');
    let text = "";

    switch(type) {
        case 'training':
            text = 'We provide empowering training solutions in the domains of Finance, Analytics & Leadership Development. Be it Finance for Non-Finance, Corporate Finance, Generative AI Trainings, Business Analytics, Data Visualization, First Time Managers\' Training — we have it all! Visit <a href="https://www.markrich.in" target="_blank">www.markrich.in</a> for more details.';
            break;
        case 'education':
            text = 'As a Visiting Faculty for Management Students, I teach subjects like Organization Development, Strategic HRM, HRP, and Global Perspectives in HRM.';
            break;
        case 'guidance':
            text = 'I\'ve helped many students at crossroads in their careers with practical insights and emotional support. Always happy to help!';
            break;
        case 'events':
            text = 'With strong public speaking and event management skills, I compere for weddings, birthdays, communions, and corporate events. I also host engaging team-building activities for corporates, NGOs, and community groups.';
            break;
        default:
            text = 'Click on an item above to learn more.';
    }

    desc.innerHTML = text;
}
