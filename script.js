const iphones = [
    {
        name: "iPhone",
        year: "2007",
        chip: "Samsung S5L8900",
        models: ["Original"],
        description: "The revolution that combined a phone, an iPod, and an internet communicator.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP2/iphone_original-color.png"
    },
    {
        name: "iPhone 3G / 3GS",
        year: "2008-2009",
        chip: "S5L8900 / S5L8920",
        models: ["3G", "3GS"],
        description: "High-speed 3G and the debut of the App Store.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP495/iphone3gs.png"
    },
    {
        name: "iPhone 4 / 4S",
        year: "2010-2011",
        chip: "Apple A4 / A5",
        models: ["4", "4S"],
        description: "Retina Display and the introduction of Siri.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP643/sp643_iphone4s_color_black.png"
    },
    {
        name: "iPhone 5 Series",
        year: "2012-2013",
        chip: "Apple A6 / A7",
        models: ["5", "5s", "5c"],
        description: "Lightning connector, Touch ID, and 64-bit architecture.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP685/sp685-iphone5s-silver.png"
    },
    {
        name: "iPhone 6 Series",
        year: "2014-2015",
        chip: "Apple A8 / A9",
        models: ["6", "6 Plus", "6s", "6s Plus"],
        description: "The era of larger screens and the birth of Apple Pay.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-gold.png"
    },
    {
        name: "iPhone 7 / 8 / X",
        year: "2016-2017",
        chip: "A10 / A11 Bionic",
        models: ["7", "7 Plus", "8", "8 Plus", "X"],
        description: "Edge-to-edge OLED and the future of authentication: Face ID.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP770/iphone-x.png"
    },
    {
        name: "iPhone 11 Series",
        year: "2019",
        chip: "Apple A13 Bionic",
        models: ["11", "11 Pro", "11 Pro Max"],
        description: "Pro photography with a triple-camera system.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP804/iphone-11-pro.png"
    },
    {
        name: "iPhone 12 Series",
        year: "2020",
        chip: "Apple A14 Bionic",
        models: ["12", "12 Mini", "12 Pro", "12 Pro Max"],
        description: "The power of 5G meets MagSafe and Ceramic Shield.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP830/iphone-12-pro.png"
    },
    {
        name: "iPhone 13 Series",
        year: "2021",
        chip: "Apple A15 Bionic",
        models: ["13", "13 Mini", "13 Pro", "13 Pro Max"],
        description: "ProMotion displays and the best battery life yet.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP852/iphone-13-pro.png"
    },
    {
        name: "iPhone 14 Series",
        year: "2022",
        chip: "A15 / A16 Bionic",
        models: ["14", "14 Plus", "14 Pro", "14 Pro Max"],
        description: "Dynamic Island and a new 48MP main sensor.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP876/iphone-14-pro.png"
    },
    {
        name: "iPhone 15 Series",
        year: "2023",
        chip: "A16 / A17 Pro",
        models: ["15", "15 Plus", "15 Pro", "15 Pro Max"],
        description: "Titanium design and the universal convenience of USB-C.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP899/iphone-15-pro.png"
    },
    {
        name: "iPhone 16 Series",
        year: "2024",
        chip: "A18 / A18 Pro",
        models: ["16", "16 Plus", "16 Pro", "16 Pro Max"],
        description: "Built for Apple Intelligence. Introducing Camera Control.",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP1005/iphone-16-pro.png"
    }
];

const track = document.getElementById('iphone-track');
const themeBtn = document.getElementById('theme-btn');
const overlay = document.getElementById('iphone-overlay');
const detailView = document.getElementById('detail-view');
const closeBtn = document.querySelector('.close-btn');

// Theme Toggle Logic
themeBtn.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', target);
    themeBtn.textContent = target === 'light' ? 'Dark Mode' : 'Light Mode';
});

// Render Timeline
function render() {
    track.innerHTML = '';
    iphones.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'iphone-card fade-in';
        card.innerHTML = `
            <div class="year">${phone.year}</div>
            <img src="${phone.img}" alt="${phone.name}" class="iphone-img">
            <h2>${phone.name}</h2>
            <div class="chipset-badge">${phone.chip}</div>
            <div class="sub-models">${phone.models.join(' • ')}</div>
        `;
        card.onclick = () => showDetail(phone);
        track.appendChild(card);
    });
}

function showDetail(phone) {
    detailView.innerHTML = `
        <div class="detail-container">
            <h1 class="fade-in">${phone.name}</h1>
            <img src="${phone.img}" alt="${phone.name}" class="detail-img-large fade-in">
            <p class="detail-chip fade-in">${phone.chip}</p>
            <p class="detail-desc fade-in">${phone.description}</p>
            <div class="detail-highlights fade-in">
                ${phone.models.map(m => `<div class="highlight-pill">${m}</div>`).join('')}
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

render();
