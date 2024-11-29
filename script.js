// Matrix rain effect
function createMatrixRain() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

// Simulate new transactions appearing
function addNewTransactions() {
    const wallets = [
        "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        "0x9A67F1940164d0318612b497E8e6038f902a00a4",
        "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    ];
    
    const transactionsDiv = document.querySelector('.transactions');
    
    setInterval(() => {
        const amount = (Math.random() * 2000000 + 100000).toFixed(0);
        const wallet = wallets[Math.floor(Math.random() * wallets.length)];
        
        const transaction = document.createElement('div');
        transaction.className = 'transaction';
        transaction.innerHTML = `
            <span class="amount">-$${amount}</span>
            <span class="wallet">${wallet}</span>
        `;
        
        transactionsDiv.insertBefore(transaction, transactionsDiv.firstChild);
        
        if (transactionsDiv.children.length > 5) {
            transactionsDiv.removeChild(transactionsDiv.lastChild);
        }
    }, 3000);
}

// Initialize
window.onload = () => {
    createMatrixRain();
    addNewTransactions();
};

// Handle window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrix');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});