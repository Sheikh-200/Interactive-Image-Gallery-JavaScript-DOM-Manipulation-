const thumbsContainer = document.getElementById('thumbsContainer');
const mainImage = document.getElementById('mainImage');

// Generate 400 thumbnails dynamically using Lorem Picsum
for (let i = 0; i < 400; i++) {
  const thumb = document.createElement('img');
  thumb.src = `https://picsum.photos/seed/${i}/150/100`;
  thumb.alt = `Thumbnail ${i + 1}`;
  
  // Click event to change main image
  thumb.addEventListener('click', () => {
    mainImage.src = `https://picsum.photos/seed/${i}/800/600`;
    mainImage.alt = `Image ${i + 1}`;
  });

  thumbsContainer.appendChild(thumb);
}
