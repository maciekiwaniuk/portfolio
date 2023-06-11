import { LocalStorageMock } from '../mocks/LocalStorageMock';
import { setLangAttribute } from '@/functions/setLangAttribute';

describe('setLangAttribute function', (): void => {
    const localStorageMock: LocalStorageMock = new LocalStorageMock();
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock
    });

    beforeEach(() => {
        localStorageMock.clear();
    });

    it('updates default lang attribute when localStorage is empty', (): void => {
        setLangAttribute();

        expect(document.documentElement.getAttribute('lang'))
            .toBe('en');
    });

    it('updates lang attribute when localStorage contains value', (): void => {
        const documentElement: HTMLElement = document.documentElement;

        localStorageMock.setItem('language', 'pl');
        setLangAttribute();
        expect(documentElement.getAttribute('lang'))
            .toBe('pl');

        localStorageMock.setItem('language', 'en');
        setLangAttribute();
        expect(documentElement.getAttribute('lang'))
            .toBe('en');
    });
});
