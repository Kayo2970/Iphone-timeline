const iphones = [
    {
        name: "iPhone",
        year: "2007",
        chip: "Samsung S5L8900",
        features: ["Multi-Touch", "3.5\" Display", "Safari"],
        description: "The original revolutionary device that started it all.",
        color: "linear-gradient(135deg, #8e8e93 0%, #1d1d1f 100%)"
    },
    {
        name: "iPhone 3G",
        year: "2008",
        chip: "Samsung S5L8900",
        features: ["App Store", "3G Data", "GPS"],
        description: "Bringing high-speed connectivity and the App Store to the world.",
        color: "linear-gradient(135deg, #000 0%, #333 100%)"
    },
    {
        name: "iPhone 3GS",
        year: "2009",
        chip: "Samsung S5PC100",
        features: ["Video Recording", "Voice Control", "3MP Camera"],
        description: "The 'S' stood for speed, with a vastly improved processor.",
        color: "linear-gradient(135deg, #fff 0%, #d1d1d6 100%)"
    },
    {
        name: "iPhone 4",
        year: "2010",
        chip: "Apple A4",
        features: ["Retina Display", "FaceTime", "Glass Design"],
        description: "A monumental leap in display density and a stunning industrial design.",
        color: "linear-gradient(135deg, #1d1d1f 0%, #444 100%)"
    },
    {
        name: "iPhone 4S",
        year: "2011",
        chip: "Apple A5",
        features: ["Siri", "Dual-core A5", "8MP Camera"],
        description: "The introduction of Siri, the personal assistant that changed interaction.",
        color: "linear-gradient(135deg, #f5f5f7 0%, #8e8e93 100%)"
    },
    {
        name: "iPhone 5",
        year: "2012",
        chip: "Apple A6",
        features: ["Lightning Port", "4\" Display", "LTE"],
        description: "The first iPhone with a taller screen and the ultra-durable Lightning connector.",
        color: "linear-gradient(135deg, #3a3a3c 0%, #1d1d1f 100%)"
    },
    {
        name: "iPhone 5s",
        year: "2013",
        chip: "Apple A7 (64-bit)",
        features: ["Touch ID", "M7 Coprocessor", "64-bit Architecture"],
        description: "The world's first 64-bit smartphone and the debut of Touch ID.",
        color: "linear-gradient(135deg, #d4af37 0%, #c5a028 100%)"
    },
    {
        name: "iPhone 6 / 6 Plus",
        year: "2014",
        chip: "Apple A8",
        features: ["Retina HD", "Apple Pay", "Large Displays"],
        description: "Bigger than bigger. A massive shift in screen size and the birth of Apple Pay.",
        color: "linear-gradient(135deg, #b4b4b4 0%, #8e8e93 100%)"
    },
    {
        name: "iPhone 6s",
        year: "2015",
        chip: "Apple A9",
        features: ["3D Touch", "12MP Camera", "4K Video"],
        description: "Introduced 3D Touch and Live Photos for a more interactive experience.",
        color: "linear-gradient(135deg, #e6c7c2 0%, #d4a59e 100%)"
    },
    {
        name: "iPhone 7",
        year: "2016",
        chip: "Apple A10 Fusion",
        features: ["Water Resistance", "Haptic Engine", "No Jack"],
        description: "A more immersive experience with water resistance and a new haptic Home button.",
        color: "linear-gradient(135deg, #222 0%, #000 100%)"
    },
    {
        name: "iPhone X",
        year: "2017",
        chip: "Apple A11 Bionic",
        features: ["Face ID", "OLED All-Screen", "Animoji"],
        description: "Say hello to the future. An edge-to-edge OLED display and Face ID security.",
        color: "linear-gradient(135deg, #fff 0%, #ebebeb 100%)"
    },
    {
        name: "iPhone 11 Pro",
        year: "2019",
        chip: "Apple A13 Bionic",
        features: ["Triple-Camera", "Night Mode", "Super Retina XDR"],
        description: "The first 'Pro' iPhone, with a triple-camera system for professional photography.",
        color: "linear-gradient(135deg, #4b533a 0%, #2c3122 100%)"
    },
    {
        name: "iPhone 12 Pro",
        year: "2020",
        chip: "Apple A14 Bionic",
        features: ["5G", "LiDAR Scanner", "Ceramic Shield"],
        description: "The first iPhone with 5G and the power of the LiDAR scanner for AR.",
        color: "linear-gradient(135deg, #2c445a 0%, #1a2936 100%)"
    },
    {
        name: "iPhone 13 Pro",
        year: "2021",
        chip: "Apple A15 Bionic",
        features: ["ProMotion 120Hz", "Cinematic Mode", "Macro"],
        description: "Unprecedented graphics performance and the cinematic way to shoot video.",
        color: "linear-gradient(135deg, #a7c1d1 0%, #83a1b3 100%)"
    },
    {
        name: "iPhone 14 Pro",
        year: "2022",
        chip: "Apple A16 Bionic",
        features: ["Dynamic Island", "48MP Camera", "Always-On"],
        description: "The magic of Dynamic Island and the first 48MP sensor on an iPhone.",
        color: "linear-gradient(135deg, #594f63 0%, #3e3745 100%)"
    },
    {
        name: "iPhone 15 Pro",
        year: "2023",
        chip: "Apple A17 Pro",
        features: ["Titanium", "USB-C", "Action Button"],
        description: "A titanium frame makes this the lightest Pro model ever.",
        color: "linear-gradient(135deg, #b7b4ad 0%, #8e8c87 100%)"
    },
    {
        name: "iPhone 16 Pro",
        year: "2024",
        chip: "Apple A18 Pro",
        features: ["Camera Control", "Apple Intelligence", "4K 120Hz"],
        description: "Built from the ground up for Apple Intelligence and pro-level creators.",
        color: "linear-gradient(135deg, #3c3c3e 0%, #1d1d1f 100%)"
    }
];

const track = document.getElementById('iphone-track');
const overlay = document.getElementById('iphone-overlay');
const detailView = document.getElementById('detail-view');
const closeBtn = document.querySelector('.close-btn');

function renderTimeline() {
    track.innerHTML = '';
    iphones.forEach((iphone) => {
        const card = document.createElement('div');
        card.className = 'iphone-card';
        card.innerHTML = `
            <div class="year">${iphone.year}</div>
            <div class="visual-placeholder" style="background: ${iphone.color};"></div>
            <h2>${iphone.name}</h2>
            <div class="chipset-badge">${iphone.chip}</div>
            <ul class="features">
                ${iphone.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
        
        card.addEventListener('click', () => showDetail(iphone));
        track.appendChild(card);
    });
}

function showDetail(iphone) {
    detailView.innerHTML = `
        <div class="detail-container">
            <h1 class="fade-in">${iphone.name}</h1>
            <p class="detail-year fade-in">${iphone.year}</p>
            <div class="detail-chip fade-in">Powered by ${iphone.chip}</div>
            <div class="detail-visual fade-in" style="background: ${iphone.color};"></div>
            <p class="detail-desc fade-in">${iphone.description}</p>
            <div class="detail-highlights fade-in">
                ${iphone.features.map(f => `<div class="highlight-pill">${f}</div>`).join('')}
            </div>
        </div>
    `;
    
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

renderTimeline();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
