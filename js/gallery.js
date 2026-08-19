const GALLERY_IMAGE_COUNT = 10;

const galleryGrid = document.getElementById("gallery-grid");

if (galleryGrid) {
  for (let i = 1; i <= GALLERY_IMAGE_COUNT; i++) {
    const num = String(i).padStart(2, "0");

    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `gallery/${num}.jpg`;
    img.alt = `รูปภาพ ${i}`;

    figure.appendChild(img);
    galleryGrid.appendChild(figure);
  }
}
