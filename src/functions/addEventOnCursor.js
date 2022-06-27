/**
 * Adds currently selected theme styles and event that
 * changes styles of cursor position
 */
const addEventOnCursor = () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', event => {
        let cssPositions = `top: ${event.pageY}px; left: ${event.pageX}px;`;
        cursor.setAttribute('style', cssPositions);
    });
}

export default addEventOnCursor;
