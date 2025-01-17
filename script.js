// Function to switch content sections
function switchSection(sectionId) {
    // Hide all sections and remove active class
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Add click handlers to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(l => 
            l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get the section id from data attribute and switch to it
        const sectionId = this.getAttribute('data-section');
        switchSection(sectionId);
    });
});

// Add click handlers to Read More buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const article = this.closest('.blog-post');
        const title = article.querySelector('h2').textContent;
        alert(`Reading more about: ${title}`);
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Message sent! (This is a demo - no actual message was sent)');
    this.reset();
});

// Show home section by default
document.addEventListener('DOMContentLoaded', function() {
    switchSection('home');
});