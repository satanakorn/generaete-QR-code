const valuebox = document.querySelector('.input');
const imgbox = document.querySelector('.imgbox');
const img = document.getElementById('img');

function GenQr() {
    if (valuebox.value.trim() !== '') {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(valuebox.value);
        imgbox.classList.add("show");
    } else {
        alert('Please enter text or URL');
    }
}
