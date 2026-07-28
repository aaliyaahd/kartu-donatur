document.addEventListener("DOMContentLoaded", function () {
    // Membaca URL Query Parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    const nameParam = urlParams.get('nama');
    const eventParam = urlParams.get('event');
    const dateParam = urlParams.get('tgl');

    // Menerapkan parameter URL jika ada
    if (nameParam) {
        document.getElementById('donorName').textContent = nameParam;
        document.getElementById('inputName').value = nameParam;
    }

    if (eventParam) {
        document.getElementById('eventName').textContent = eventParam;
        document.getElementById('textBadge').textContent = eventParam;
        document.getElementById('inputEvent').value = eventParam;
    }

    if (dateParam) {
        document.getElementById('eventDate').textContent = dateParam;
        document.getElementById('inputDate').value = dateParam;
    }
});

// Update manual via form control panel
function updateLetter() {
    const nameValue = document.getElementById('inputName').value.trim();
    const eventValue = document.getElementById('inputEvent').value.trim();
    const dateValue = document.getElementById('inputDate').value.trim();

    if (nameValue !== "") document.getElementById('donorName').textContent = nameValue;
    if (eventValue !== "") {
        document.getElementById('eventName').textContent = eventValue;
        document.getElementById('textBadge').textContent = eventValue;
    }
    if (dateValue !== "") document.getElementById('eventDate').textContent = dateValue;
}

// Fitur Salin / Share Link
function shareLetter() {
    if (navigator.share) {
        navigator.share({
            title: 'Surat Ucapan Terima Kasih - Mission and Care',
            text: 'Terima kasih telah menjadi saluran berkat!',
            url: window.location.href,
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link surat berhasil disalin! Tinggal paste ke WhatsApp donatur.');
    }
}