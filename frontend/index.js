import { backend } from "declarations/backend";

// Portfolio items
const portfolioItems = [
    {
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
        title: "Modern Living Room",
        description: "Midcentury modern living space with custom furnishings"
    },
    {
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
        title: "Luxury Bedroom",
        description: "Contemporary bedroom with vintage accents"
    },
    {
        image: "https://images.unsplash.com/photo-1592928302636-93c0a098e3c5",
        title: "Dining Area",
        description: "Elegant dining space with statement lighting"
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
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
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
        statusDiv.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
        event.target.reset();
    } catch (error) {
        statusDiv.innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again.</div>';
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
