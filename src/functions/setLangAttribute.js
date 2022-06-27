/**
 * Sets lang attribute
 */
const setLangAttribute = () => {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem('language')
    );
};

export default setLangAttribute;
