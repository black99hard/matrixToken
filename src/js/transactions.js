const WALLETS = [
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    "0x9A67F1940164d0318612b497E8e6038f902a00a4",
    "0x1F98431c8aD98523631AE4a59f267346ea31F984",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
];

const MAX_TRANSACTIONS = 5;
const UPDATE_INTERVAL = 3000;

export function createTransaction() {
    const amount = (Math.random() * 2000000 + 100000).toFixed(0);
    const wallet = WALLETS[Math.floor(Math.random() * WALLETS.length)];
    
    const transaction = document.createElement('div');
    transaction.className = 'transaction';
    transaction.innerHTML = `
        <span class="amount">-$${amount}</span>
        <div class="wallet-container">
            <span class="wallet" title="${wallet}">
                <span class="wallet-text">${wallet}</span>
                <span class="wallet-mobile">${truncateAddress(wallet)}</span>
            </span>
            <button class="copy-btn" data-wallet="${wallet}">
                <i class="fas fa-copy"></i>
            </button>
        </div>
    `;
    
    // Add click handler for copy button
    const copyBtn = transaction.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => copyToClipboard(wallet));
    
    return transaction;
}

function truncateAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        // Optional: Show a tooltip or notification that the copy was successful
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

export function startTransactionUpdates(container) {
    const updateTransactions = () => {
        const transaction = createTransaction();
        container.insertBefore(transaction, container.firstChild);
        
        if (container.children.length > MAX_TRANSACTIONS) {
            container.removeChild(container.lastChild);
        }
    };

    const interval = setInterval(updateTransactions, UPDATE_INTERVAL);
    return interval;
}