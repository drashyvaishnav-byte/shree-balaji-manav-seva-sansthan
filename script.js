// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card, .package').forEach((el) => {
    observer.observe(el);
});

// Donation button
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert("धन्यवाद! आपकी सहायता से हम और लोगों तक मदद पहुँचा सकते हैं।");
    });
});

// Welcome message
window.onload = () => {
    console.log("श्री बालाजी मानव सेवा संस्थान वेबसाइट सफलतापूर्वक लोड हो गई!");
};
