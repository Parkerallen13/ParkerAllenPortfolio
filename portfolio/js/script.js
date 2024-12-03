// Array of image sources
const imageSources = [
    "https://neguentropia.org/wp-content/uploads/2023/12/logo-invd.png",
    "https://neguentropia.org/wp-content/uploads/2023/12/logo-qbx-quadbike.png",
    "https://neguentropia.org/wp-content/uploads/2023/12/FARAL_Automotive_Logotype_RGB.webp",
    "https://neguentropia.org/wp-content/uploads/2023/12/ADEME.png",
    "https://neguentropia.org/wp-content/uploads/2023/12/CNRS.png",
    "https://neguentropia.org/wp-content/uploads/2023/12/Logo-INRAE_Quadri-web.jpg",
    "https://neguentropia.org/wp-content/uploads/2023/12/PolyTech-Clermont.png",
    "https://neguentropia.org/wp-content/uploads/2023/12/Logo_Universite_Clermont-Auvergne_partenariat_Wikimedia.png",
    // Add more image URLs as needed
];

// Function to generate a random assortment of images
function getRandomImages(num) {
    const shuffledImages = imageSources.sort(() => 0.5 - Math.random());
    return shuffledImages.slice(0, num);
}

// Insert images into the orbit container
function populateOrbit() {
    const orbitContainer = document.querySelector('.orbit');
    const images = getRandomImages(10);

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;

        // Calculate position on the circle
        const angle = (index / images.length) * 2 * Math.PI;
        const radius = 250; // Adjust as needed for orbit radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        img.style.transform = `translate(${x}px, ${y}px)`;
        orbitContainer.appendChild(img);
    });
}

// Run the function when the page loads
window.onload = populateOrbit;
