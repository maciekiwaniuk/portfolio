/**
 * Adds currently selected theme styles and event that
 * changes styles of cursor position
 */
const applyStylesAndEventOnCursor = () => {
    let theme = localStorage.getItem('theme');

    // cursor updating
    const cursor = document.querySelector('.cursor');
    cursor.classList.add(`cursor-${theme}-theme`);

    document.addEventListener('mousemove', event => {
        let cssPositions = `top: ${event.pageY - 15}px; left: ${event.pageX - 15}px;`;
        cursor.setAttribute('style', cssPositions);
    });
}

export default applyStylesAndEventOnCursor;
