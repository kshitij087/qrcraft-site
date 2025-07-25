document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM Elements =====
    const textInput = document.getElementById('text-input');
    const sizeSlider = document.getElementById('size-slider');
    const sizeValue = document.getElementById('size-value');
    const colorDotInput = document.getElementById('color-dot');
    const colorBgInput = document.getElementById('color-bg');
    const logoUpload = document.getElementById('logo-upload');
    const generateBtn = document.getElementById('generate-btn'); // New button
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const qrCanvas = document.getElementById('qr-canvas');

    // ===== State =====
    let logoImage = null;
    let history = JSON.parse(localStorage.getItem('qrHistory')) || [];

    // ===== QR Code Instance =====
    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'svg',
        data: 'Welcome to QRcraft!',
        dotsOptions: { color: '#000000', type: 'rounded' },
        backgroundOptions: { color: '#ffffff' },
        cornersSquareOptions: { type: 'extra-rounded' },
        cornersDotOptions: { type: 'dot' },
        imageOptions: { crossOrigin: 'anonymous', margin: 10 }
    });

    // ===== Functions =====
    const updateQRCode = () => {
        const options = {
            width: parseInt(sizeSlider.value, 10),
            height: parseInt(sizeSlider.value, 10),
            data: textInput.value || 'Welcome to QRcraft!',
            dotsOptions: { color: colorDotInput.value },
            backgroundOptions: { color: colorBgInput.value },
            image: logoImage,
        };
        qrCode.update(options);
    };

    const saveToHistory = () => {
        if (!textInput.value) return; // Don't save empty QRs
        const config = {
            data: textInput.value,
            size: sizeSlider.value,
            dotColor: colorDotInput.value,
            bgColor: colorBgInput.value,
            timestamp: new Date().toISOString()
        };
        // Avoid duplicates
        if (!history.some(item => item.data === config.data)) {
            history.unshift(config); // Add to the beginning
            if (history.length > 10) history.pop(); // Keep history to a max of 10
            localStorage.setItem('qrHistory', JSON.stringify(history));
            renderHistory();
        }
    };

    const renderHistory = () => {
        historyList.innerHTML = '';
        if (history.length === 0) {
            historyList.innerHTML = '<p>No history yet.</p>';
            return;
        }
        history.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.textContent = item.data;
            div.dataset.index = index;
            div.onclick = () => loadFromHistory(index);
            historyList.appendChild(div);
        });
    };

    const loadFromHistory = (index) => {
        const item = history[index];
        textInput.value = item.data;
        sizeSlider.value = item.size;
        sizeValue.textContent = item.size;
        colorDotInput.value = item.dotColor;
        colorBgInput.value = item.bgColor;
        logoImage = null; // Logo isn't saved in history
        logoUpload.value = '';
        updateQRCode(); // Immediately update preview when loading from history
    };
    
    const resetAll = () => {
        textInput.value = '';
        sizeSlider.value = 300;
        sizeValue.textContent = 300;
        colorDotInput.value = '#000000';
        colorBgInput.value = '#ffffff';
        logoUpload.value = '';
        logoImage = null;
        updateQRCode();
    };

    // Theme Management
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.checked = theme === 'dark';
    };

    // ===== Event Listeners =====
    
    // Main Generate Button
    generateBtn.addEventListener('click', () => {
        updateQRCode();
        saveToHistory();
    });

    // Live update for slider value text, but not the QR code
    sizeSlider.addEventListener('input', () => {
        sizeValue.textContent = sizeSlider.value;
    });

    // Live update when a logo is chosen for better UX
    logoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                logoImage = reader.result;
                updateQRCode();
            };
            reader.readAsDataURL(file);
        }
    });

    downloadBtn.addEventListener('click', () => {
        qrCode.download({ name: 'qrcraft-code', extension: 'png' });
    });

    resetBtn.addEventListener('click', resetAll);
    
    clearHistoryBtn.addEventListener('click', () => {
        history = [];
        localStorage.removeItem('qrHistory');
        renderHistory();
    });
    
    themeToggle.addEventListener('change', (e) => {
        applyTheme(e.target.checked ? 'dark' : 'light');
    });

    // ===== Initial Load =====
    qrCode.append(qrCanvas);
    renderHistory();
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});