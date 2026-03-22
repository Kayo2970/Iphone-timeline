const generations = [
    {
        year: "2007",
        title: "The Beginning",
        iphones: [
            {
                name: "iPhone",
                chip: "Samsung S5L8900",
                ram: "128MB",
                battery: "1400 mAh",
                display: "3.5\" LCD",
                predecessor: "N/A",
                changes: ["First Multi-touch interface", "Desktop-class Safari"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP2/iphone_original-color.png"
            }
        ]
    },
    {
        year: "2010",
        title: "Retina Revolution",
        iphones: [
            {
                name: "iPhone 4",
                chip: "Apple A4",
                ram: "512MB",
                battery: "1420 mAh",
                display: "3.5\" Retina",
                predecessor: "iPhone 3GS",
                changes: ["960x640 Retina Display", "First Front Camera", "Glass Sandwich Design"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP587/iphone4-black.png"
            }
        ]
    },
    {
        year: "2014",
        title: "Bigger than Bigger",
        iphones: [
            {
                name: "iPhone 6",
                chip: "Apple A8",
                ram: "1GB",
                battery: "1810 mAh",
                display: "4.7\" Retina HD",
                predecessor: "iPhone 5s",
                changes: ["Larger 4.7\" Display", "Apple Pay (NFC)", "Curved Design"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-gold.png"
            },
            {
                name: "iPhone 6 Plus",
                chip: "Apple A8",
                ram: "1GB",
                battery: "2915 mAh",
                display: "5.5\" Retina HD",
                predecessor: "iPhone 5s",
                changes: ["First 'Plus' Model", "Optical Image Stabilization", "Full HD Display"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP706/iphone6-plus-gold.png"
            }
        ]
    },
    {
        year: "2017",
        title: "The Future of Smart",
        iphones: [
            {
                name: "iPhone X",
                chip: "Apple A11 Bionic",
                ram: "3GB",
                battery: "2716 mAh",
                display: "5.8\" Super Retina OLED",
                predecessor: "iPhone 7",
                changes: ["Face ID facial recognition", "All-Screen OLED Display", "No Home Button"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP770/iphone-x.png"
            },
            {
                name: "iPhone 8",
                chip: "Apple A11 Bionic",
                ram: "2GB",
                battery: "1821 mAh",
                display: "4.7\" Retina HD",
                predecessor: "iPhone 7",
                changes: ["Glass Back Design", "Wireless Charging", "A11 Bionic Power"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP767/iphone8.png"
            }
        ]
    },
    {
        year: "2020",
        title: "Blast Past Fast",
        iphones: [
            {
                name: "iPhone 12",
                chip: "Apple A14 Bionic",
                ram: "4GB",
                battery: "2815 mAh",
                display: "6.1\" Super Retina XDR",
                predecessor: "iPhone 11",
                changes: ["5G Connectivity", "MagSafe Charging", "Ceramic Shield"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP830/iphone-12-pro.png"
            },
            {
                name: "iPhone 12 Mini",
                chip: "Apple A14 Bionic",
                ram: "4GB",
                battery: "2227 mAh",
                display: "5.4\" Super Retina XDR",
                predecessor: "iPhone 11",
                changes: ["Worlds Smallest 5G Phone", "Compact 5.4\" Display"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP829/iphone12mini-blue.png"
            }
        ]
    },
    {
        year: "2024",
        title: "Apple Intelligence",
        iphones: [
            {
                name: "iPhone 16 Pro Max",
                chip: "Apple A18 Pro",
                ram: "8GB",
                battery: "4685 mAh",
                display: "6.9\" Always-On OLED",
                predecessor: "iPhone 15 Pro Max",
                changes: ["Apple Intelligence Support", "New Camera Control Button", "Largest 6.9\" Screen"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP1005/iphone-16-pro.png"
            },
            {
                name: "iPhone 16",
                chip: "Apple A18",
                ram: "8GB",
                battery: "3561 mAh",
                display: "6.1\" Super Retina XDR",
                predecessor: "iPhone 15",
                changes: ["Action Button on Base Models", "Camera Control Button", "Macro Photography"],
                img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP1004/iphone-16.png"
            }
        ]
    }
];

const container = document.getElementById('iphone-track');
const overlay = document.getElementById('iphone-overlay');
const detailView = document.getElementById('detail-view');
const closeBtn = document.querySelector('.close-btn');
// Render Vertical Timeline
function renderVerticalTimeline() {
    container.innerHTML = '<div class="timeline-line"></div>';

    generations.forEach((gen, index) => {
        const section = document.createElement('div');
        section.className = `timeline-section ${index % 2 === 0 ? 'left' : 'right'}`;
        section.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="gen-header">
                <span class="gen-year">${gen.year}</span>
                <h2>${gen.title}</h2>
            </div>
            <div class="gen-grid">
                ${gen.iphones.map(phone => `
                    <div class="mini-card fade-in" onclick='showDetail(${JSON.stringify(phone)})'>
                        <img src="${phone.img}" alt="${phone.name}">
                        <h3>${phone.name}</h3>
                        <span class="chip-label">${phone.chip}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(section);
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-section').forEach(section => {
        observer.observe(section);
    });
}


function showDetail(phone) {
    detailView.innerHTML = `
        <div class="spec-view fade-in">
            <div class="spec-header">
                <img src="${phone.img}" class="spec-img">
                <div class="spec-titles">
                    <h1>${phone.name}</h1>
                    <p class="chip-name">${phone.chip}</p>
                </div>
            </div>
            
            <div class="spec-grid">
                <div class="spec-item"><strong>RAM</strong><span>${phone.ram}</span></div>
                <div class="spec-item"><strong>Battery</strong><span>${phone.battery}</span></div>
                <div class="spec-item"><strong>Display</strong><span>${phone.display}</span></div>
                <div class="spec-item"><strong>Predecessor</strong><span>${phone.predecessor}</span></div>
            </div>

            <div class="evolution-section">
                <h3>What's New?</h3>
                <ul class="change-list">
                    ${phone.changes.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

renderVerticalTimeline();
