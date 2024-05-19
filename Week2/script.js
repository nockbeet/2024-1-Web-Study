document.addEventListener('DOMContentLoaded', (event) => {
    const webTitle = document.getElementById('webTitle');
    const button = document.getElementById('colorButton');
    // webTitle에서 변경될 색상들
    const titleColors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
    let currentColor = 0;

    function changeTitleColor() {
        currentColor = (currentColor + 1) % titleColors.length;
        webTitle.style.color = titleColors[currentColor];
    }

    button.addEventListener('click', changeTitleColor);
})

