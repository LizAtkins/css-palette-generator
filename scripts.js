// Function to generate a harmonious color palette with 5 colors
function generateHarmoniousPalette() {
    const baseHue = Math.floor(Math.random() * 360); // Random base color hue (0-360)
    const saturation = Math.floor(Math.random() * 40) + 60; // Random saturation (60-100)
    const lightness = Math.floor(Math.random() * 20) + 40; // Random lightness (40-60)

    // Colors based on different harmony schemes
    const colors = [
        `hsl(${baseHue}, ${saturation}%, ${lightness}%)`, // base color
        `hsl(${(baseHue + 30) % 360}, ${saturation}%, ${lightness}%)`, // analogous color
        `hsl(${(baseHue + 180) % 360}, ${saturation}%, ${lightness}%)`, // complementary color
        `hsl(${(baseHue + 120) % 360}, ${saturation}%, ${lightness}%)`,  // triadic color
        `hsl(${(baseHue + 150) % 360}, ${saturation}%, ${lightness}%)` // split-complementary color
    ];

    return colors;
}

// Function to update the color palette on the page
function updatePalette() {
    const paletteContainer = document.getElementById("palette");
    paletteContainer.innerHTML = ''; // Clear previous palette

    const colors = generateHarmoniousPalette(); // Generate new 5-color palette

    // Create color boxes for each color in the palette
    colors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color; // Set background color
        colorBox.innerText = color; // Display the color in the box (can be hex or HSL)

        // Add the color box to the palette container
        paletteContainer.appendChild(colorBox);
    });
}

// Set up event listener for the "Generate Palette" button
document.getElementById("generate").addEventListener("click", updatePalette);

// Initially generate a palette when the page loads
updatePalette();
