import { createMatrixRain } from './matrixEffect.js';
import { startTransactionUpdates } from './transactions.js';
import { updateAnnouncement } from './announcements.js';

function initializeApp() {
    createMatrixRain();
    const transactionsContainer = document.querySelector('.transactions');
    if (transactionsContainer) {
        startTransactionUpdates(transactionsContainer);
    }
    updateAnnouncement();
}

window.addEventListener('load', initializeApp);