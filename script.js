const iphones = [
    {
        name: "iPhone",
        year: "2007",
        features: ["Multi-Touch interface", "3.5-inch display", "Safari Browser"],
        description: "The phone that changed everything. Apple's first smartphone combined a phone, an iPod, and an internet communicator.",
        color: "#000"
    },
    {
        name: "iPhone 3G",
        year: "2008",
        features: ["App Store", "3G Connectivity", "GPS Support"],
        description: "The introduction of the App Store redefined what a mobile device could do, allowing developers to create amazing apps.",
        color: "#333"
    },
    {
        name: "iPhone 4",
        year: "2010",
        features: ["Retina Display", "FaceTime", "Stainless Steel Design"],
        description: "A completely new design with a glass back and stainless steel frame. The Retina display was a massive leap in clarity.",
        color: "#f0f0f0"
    },
    {
        name: "iPhone 5",
        year: "2012",
        features: ["Lightning Connector", "4-inch Screen", "LTE Support"],
        description: "Taller, thinner, and lighter. iPhone 5 introduced the iconic Lightning connector and a beautiful aluminum body.",
        color: "#222"
    },
    {
        name: "iPhone 6",
        year: "2014",
        features: ["Larger Display", "Apple Pay", "Sleek Curved Design"],
        description: "The biggest shift in size. iPhone 6 and 6 Plus brought expansive displays and the convenience of Apple Pay.",
        color: "#gold"
    },
    {
        name: "iPhone X",
        year: "2017",
        features: ["Face ID", "OLED All-Screen", "No Home Button"],
        description: "The future of the smartphone. iPhone X removed the Home button in favor of an all-screen design and revolutionary Face ID.",
        color: "#silver"
    },
    {
        name: "iPhone 12",
        year: "2020",
        features: ["5G Connectivity", "MagSafe", "Ceramic Shield"],
        description: "Superfast 5G speeds and a new flat-edge design. MagSafe opened up a world of easy-to-attach accessories.",
        color: "#blue"
    },
    {
        name: "iPhone 15 Pro",
        year: "2023",
        features: ["Titanium Design", "USB-C", "Action Button"],
        description: "Stronger and lighter with a new aerospace-grade titanium design. The first iPhone with a high-speed USB-C port.",
        color: "#natural"
    },
    {
        name: "iPhone 16 Pro",
        year: "2024",
        features: ["Camera Control", "Apple Intelligence", "A18 Pro Chip"],
        description: "Built for Apple Intelligence. The new Camera Control button gives you an easier way to quickly capture memories.",
        color: "#desert"
    }
];

const track = document.getElementById('iphone-track');
const overlay = document.getElementById('iphone-overlay');
const detailView = document.getElementById('detail-view');
const closeBtn = document.querySelector('.close-btn');

// Render iPhone Cards
function renderTimeline() {
    iphones.forEach((iphone, index) => {
        const card = document.createElement('div');
        card.className = 'iphone-card';
        card.innerHTML = `
            <div class="year">${iphone.year}</div>
            <h2>${iphone.name}</h2>
            <ul class="features">
                ${iphone.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
        
        card.addEventListener('click', () => showDetail(iphone));
        track.appendChild(card);
    });
}

// Show Detail View
function showDetail(iphone) {
    detailView.innerHTML = `
        <div class="detail-container">
            <h1 class="fade-in">${iphone.name}</h1>
            <p class="detail-year fade-in">${iphone.year}</p>
            <div class="detail-image fade-in" style="background: ${iphone.color}; width: 200px; height: 400px; border-radius: 40px; margin: 40px auto; box-shadow: 0 40px 100px rgba(0,0,0,0.2);"></div>
            <p class="detail-desc fade-in">${iphone.description}</p>
            <div class="detail-highlights fade-in">
                ${iphone.features.map(f => `<div class="highlight-pill">${f}</div>`).join('')}
            </div>
        </div>
    `;
    
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close Overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Initial Render
renderTimeline();

// Add smooth scroll effect to navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
