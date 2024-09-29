import { defineStore } from 'pinia';
import { CursorHidden, CursorVisible } from '~/constants/cursor';
import { CursorVisibilityKey } from '~/constants/localStorage';
import type { CursorVisibilityType } from '~/types/CursorVisibilityType';

export const useCursorStore = defineStore('cursor', {
    state: (): { hover: boolean; visibility: CursorVisibilityType } => ({
        hover: false,
        visibility: (import.meta.client)
            ? localStorage.getItem(CursorVisibilityKey) as CursorVisibilityType ?? CursorVisible
            : CursorHidden,
    }),
    actions: {
        toggle(): void {
            this.hover = !this.hover;
        },
        toggleVisibility(): void {
            if (!import.meta.client) {
                return;
            }

            if (this.visibility === CursorVisible) {
                this.visibility = CursorHidden;
                localStorage.setItem(CursorVisibilityKey, CursorHidden);
            }
            else {
                this.visibility = CursorVisible;
                localStorage.setItem(CursorVisibilityKey, CursorVisible);
            }
        },
    },
});
