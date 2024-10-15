const canvas = document.getElementById('canvas');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', generateArtwork);

function generateArtwork() {
    // Clear the canvas
    canvas.innerHTML = '';

    // Generate random shapes
    const numberOfShapes = Math.floor(Math.random() * 10) + 5; // Random number of shapes

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        const size = Math.random() * 100 + 20; // Random size between 20px and 120px
        const top = Math.random() * (canvas.clientHeight - size);
        const left = Math.random() * (canvas.clientWidth - size);
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color

        shape.style.position = 'absolute';
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.backgroundColor = color;
        shape.style.top = top + 'px';
        shape.style.left = left + 'px';
        shape.style.borderRadius = Math.random() < 0.5 ? '50%' : '0'; // Randomly make it circular or square

        canvas.appendChild(shape);
    }
}
