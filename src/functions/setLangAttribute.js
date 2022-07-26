/**
 * Sets lang attribute
 */
export const setLangAttribute = () => {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem('language') ?? 'en'
    );
};
