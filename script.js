// JavaScript for handling smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchorLinks) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust the offset as needed
                    behavior: 'smooth'
                });
            }
        });
    }
});

// JavaScript for handling the "Join Mailing List" button
document.addEventListener('DOMContentLoaded', function () {
    const joinButton = document.querySelector('.cta-button.join-mailing-list');
    
    if (joinButton) {
        joinButton.addEventListener('click', function () {
            // Replace this URL with your mailing list sign-up page
            window.location.href = 'https://example.com/mailing-list-signup';
        });
    }
});
