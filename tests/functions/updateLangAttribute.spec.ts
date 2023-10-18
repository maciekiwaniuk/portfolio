import { LocalStorageMock } from '@tests/mocks/LocalStorageMock';
import { updateLangAttribute } from '@/functions/updateLangAttribute';
import { EnglishLanguage, PolishLanguage } from '@/constants/app';
import { LanguageKey } from '@/constants/localStorage';

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

        expect(document.documentElement.getAttribute(LanguageKey))
            .toBe(EnglishLanguage);
    });

    it('updates lang attribute when localStorage contains value', (): void => {
        const documentElement: HTMLElement = document.documentElement;

        localStorageMock.setItem(LanguageKey, PolishLanguage);
        updateLangAttribute();
        expect(documentElement.getAttribute(LanguageKey))
            .toBe(PolishLanguage);

        localStorageMock.setItem(LanguageKey, EnglishLanguage);
        updateLangAttribute();
        expect(documentElement.getAttribute(LanguageKey))
            .toBe(EnglishLanguage);
    });
});
