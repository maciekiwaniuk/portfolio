import { LocalStorageMock } from '@tests/mocks/LocalStorageMock';
import { updateLangAttribute } from '@/functions/updateLangAttribute';

describe('updateLangAttribute function', (): void => {
    const localStorageMock: LocalStorageMock = new LocalStorageMock();
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock
    });

    beforeEach((): void => {
        localStorageMock.clear();
    });

    it('updates default lang attribute when localStorage is empty', (): void => {
        updateLangAttribute();

        expect(document.documentElement.getAttribute('lang'))
            .toBe('en');
    });

    it('updates lang attribute when localStorage contains value', (): void => {
        const documentElement: HTMLElement = document.documentElement;

        localStorageMock.setItem('language', 'pl');
        updateLangAttribute();
        expect(documentElement.getAttribute('lang'))
            .toBe('pl');

        localStorageMock.setItem('language', 'en');
        updateLangAttribute();
        expect(documentElement.getAttribute('lang'))
            .toBe('en');
    });
});
