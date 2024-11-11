import { backend } from "declarations/backend";

// Portfolio items with 70s inspired content
const portfolioItems = [
    {
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
        title: "Retro Living Room",
        description: "Sunken conversation pit with vintage furnishings"
    },
    {
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
        title: "70s Inspired Bedroom",
        description: "Warm tones with geometric patterns"
    },
    {
        image: "https://images.unsplash.com/photo-1592928302636-93c0a098e3c5",
        title: "Vintage Dining Space",
        description: "Authentic 70s pieces with modern accents"
    }
];

// Initialize portfolio grid
function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="portfolio-item">
                <div class="retro-frame">
                    <img src="${item.image}" alt="${item.title}" class="img-fluid">
                </div>
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(col);
    });
}

// Handle contact form submission
async function handleContactSubmission(event) {
    event.preventDefault();
    
    const statusDiv = document.getElementById('submission-status');
    statusDiv.innerHTML = '<div class="alert alert-info">Sending message...</div>';
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await backend.submitContact(name, email, message);
        statusDiv.innerHTML = '<div class="alert alert-success">Far out! Message sent successfully!</div>';
        event.target.reset();
    } catch (error) {
        statusDiv.innerHTML = '<div class="alert alert-danger">Bummer! Failed to send message. Please try again.</div>';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    document.getElementById('contact-form').addEventListener('submit', handleContactSubmission);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
