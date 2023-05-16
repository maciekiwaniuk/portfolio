/**
 * Sets lang attribute
 */
export const setLangAttribute = (): void => {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem('language') ?? 'en'
    );
};
