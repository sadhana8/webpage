const upload = document.getElementById("upload");
const image = document.getElementById("image");

const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const blur = document.getElementById("blur");
const sepia = document.getElementById("sepia");

const resetBtn = document.getElementById("reset");
const downloadBtn = document.getElementById("download");

// Default values
let filters = {
  brightness: 100,
  contrast: 100,
  blur: 0,
  sepia: 0
};

// Upload image
upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    image.src = URL.createObjectURL(file);
    image.style.display = "block";
  }
});

// Apply filters
function applyFilters() {
  image.style.filter = `
    brightness(${filters.brightness}%)
    contrast(${filters.contrast}%)
    blur(${filters.blur}px)
    sepia(${filters.sepia}%)
  `;
}

[brightness, contrast, blur, sepia].forEach(control => {
  control.addEventListener("input", () => {
    filters.brightness = brightness.value;
    filters.contrast = contrast.value;
    filters.blur = blur.value;
    filters.sepia = sepia.value;
    applyFilters();
  });
});

// Reset filters
resetBtn.addEventListener("click", () => {
  filters = { brightness: 100, contrast: 100, blur: 0, sepia: 0 };
  brightness.value = 100;
  contrast.value = 100;
  blur.value = 0;
  sepia.value = 0;
  applyFilters();
});

// Download image
downloadBtn.addEventListener("click", () => {
  if (!image.src) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  // Apply filters
  ctx.filter = `
    brightness(${filters.brightness}%)
    contrast(${filters.contrast}%)
    blur(${filters.blur}px)
    sepia(${filters.sepia}%)
  `;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Download
  const link = document.createElement("a");
  link.download = "filtered-image.jpg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
