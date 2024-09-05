const leafImages = [
    'https://purepng.com/public/uploads/large/purepng.com-autumn-leafnatureleafleavesautumnautumn-leaf-961524677638rmjtr.png',
    'https://freepngimg.com/thumb/categories/2142.png',
    'https://static.vecteezy.com/system/resources/thumbnails/027/729/273/small_2x/autumn-colored-fall-leaf-isolated-png.png',
    'https://www.pngmart.com/files/10/Fall-Leaves-PNG-Image.png',
    'https://pngimg.com/d/green_leaves_PNG3672.png'
];

const numberOfLeaves = 20; // Adjust the number of leaves
const container = document.querySelector('.falling-leaves');

for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = document.createElement('img');
    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 5 + 5}s`; // Speed variation
    leaf.style.animationDelay = `${Math.random() * 5}s`; // Delay variation
    leaf.style.width = `${Math.random() * 100 + 150}px`; // Random size
    container.appendChild(leaf);
}
