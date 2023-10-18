import { LocalStorageMock } from '@tests/mocks/LocalStorageMock';
import { updateBackgroundColorOnScrollbar } from '@/functions/updateBackgroundColorOnScrollbar';
import { ThemeType } from '@/types/ThemeType';
import { DarkTheme, LightTheme } from '@/constants/app';
import { ThemeKey } from '@/constants/localStorage';

describe('updateBackgroundColorOnScrollbar function', (): void => {
    const localStorageMock: LocalStorageMock = new LocalStorageMock();
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock
    });

    const scrollbarSelector = '::-webkit-scrollbar-track';

    const documentMock = {
        body: {},
        addEventListener: jest.fn(),
        styleSheets: [
            { addRule: jest.fn() }
        ]
    };
    Object.defineProperty(window, 'document', {
        value: documentMock
    });

    beforeEach((): void => {
        localStorageMock.clear();
        documentMock.styleSheets[0].addRule.mockClear();
    });

    it('updates default color on scrollbar when localStorage is empty', (): void => {
        const mockGetComputedStyle = jest.fn().mockReturnValue({
            getPropertyValue: jest.fn().mockReturnValue(
                localStorage.getItem(ThemeKey) as ThemeType ?? DarkTheme
            ),
        });
        Object.defineProperty(window, 'getComputedStyle', {
            value: mockGetComputedStyle
        });

        updateBackgroundColorOnScrollbar();
        expect(documentMock.styleSheets[0].addRule).toHaveBeenCalledWith(
            scrollbarSelector,
            `background-color: ${DarkTheme};`
        );
    });

    it('updates color on scrollbar when localStorage contains value', () => {
        localStorageMock.setItem(ThemeKey, LightTheme);

        const mockGetComputedStyle = jest.fn().mockReturnValue({
            getPropertyValue: jest.fn().mockReturnValue(
                localStorage.getItem(ThemeKey) as ThemeType ?? DarkTheme
            ),
        });
        Object.defineProperty(window, 'getComputedStyle', {
            value: mockGetComputedStyle
        });

        updateBackgroundColorOnScrollbar();

        expect(documentMock.styleSheets[0].addRule).toHaveBeenCalledWith(
            scrollbarSelector,
            `background-color: ${LightTheme};`
        );
    });
});
