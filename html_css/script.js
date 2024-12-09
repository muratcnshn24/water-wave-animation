// Piksel kutularını dinamik olarak oluştur
const pixelGrid = document.querySelector('.pixel-grid');

// Piksel gridini doldur (20x40)
for (let row = 0; row < 20; row++) { // 20 satır
  for (let col = 0; col < 40; col++) { // 40 sütun
    const pixel = document.createElement('div');
    pixel.style.setProperty('--row', row); // Satır numarasını ayarla
    pixel.style.setProperty('--col', col); // Sütun numarasını ayarla
    pixelGrid.appendChild(pixel); // Pikseli grid'e ekle
  }
}
