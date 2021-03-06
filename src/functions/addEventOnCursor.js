/**
 * Adds currently selected theme styles and event that
 * changes styles of cursor position
 */
const addEventOnCursor = () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', event => {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    });
}

export default addEventOnCursor;
