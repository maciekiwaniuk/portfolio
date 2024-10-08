export function addEventOnCursor(): void {
    const cursor: HTMLElement = document.querySelector('.cursor') as HTMLElement;

    document.addEventListener('mousemove', (event) => {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    });
}
