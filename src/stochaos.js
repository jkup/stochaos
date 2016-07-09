window.onload = () => {
    const size = 250;
    const originalImage = document.getElementById('originalImage');

    // Initialize
    const original = document.getElementById('original');
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    // Set all canvas sizes to 250
    original.height = original.width = parent.width = parent.height = child.width = child.height = size;

    // Set contexts
    const originalCtx = original.getContext('2d');
    const parentCtx = parent.getContext('2d');
    const childCtx = child.getContext('2d');

    // Paint original image to canvas
    originalCtx.drawImage(originalImage, 0, 0);

    // Fill parent green
    parentCtx.fillStyle = 'green';
    parentCtx.fillRect(0, 0, size, size);

    // Fill child red
    childCtx.fillStyle = 'red';
    childCtx.fillRect(0, 0, size, size);

};
