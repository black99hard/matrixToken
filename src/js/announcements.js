const messages = [
    "SYSTEM BREACH DETECTED...",
    "UNAUTHORIZED ACCESS IN SECTOR 7...",
    "FUNDS BEING REDIRECTED...",
    "SECURITY PROTOCOLS BYPASSED...",
    "TRACKING SIGNATURES...",
    "INITIATING COUNTERMEASURES...",
    "DATA CORRUPTION IMMINENT...",
    "BLOCKCHAIN COMPROMISED..."
];

function updateAnnouncement() {
    const announcement = document.getElementById('announcement');
    let currentIndex = 0;

    setInterval(() => {
        announcement.classList.remove('fade-in');
        
        setTimeout(() => {
            announcement.textContent = messages[currentIndex];
            announcement.classList.add('fade-in');
            currentIndex = (currentIndex + 1) % messages.length;
        }, 500);
    }, 3000);
}

export { updateAnnouncement };
