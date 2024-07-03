let slideIndex = 0;
let slideshowInterval;

// Start slideshow automatically
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slideshowInterval = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function enlargeImage(image) {
    const enlargedImageContainer = document.getElementById('enlargedImageContainer');
    const enlargedImage = document.getElementById('enlargedImage');
    const slideshowSection = document.querySelector('.slideshow-section');

    // Stop slideshow when image is clicked
    clearInterval(slideshowInterval);

    // Hide slideshow section
    slideshowSection.style.display = 'none';

    // Display enlarged image
    enlargedImage.src = image.src.replace('_thumb', '');
    enlargedImageContainer.style.display = 'flex';
}

// Function to close enlarged image
document.getElementById('enlargedImageContainer').onclick = function() {
    this.style.display='none';
    // Restart slideshow after closing enlarged image
    document.querySelector('.slideshow-section').style.display = 'block';
    showSlides(); // Restart slideshow
};

