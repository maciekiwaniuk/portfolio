import { defineStore } from 'pinia';
import { CursorVisibilityType } from '@/types/CursorVisibilityType';
import { CursorHidden, CursorVisible } from '@/constants/app';
import { CursorVisibilityKey } from '@/constants/localStorage';

/**
 * Handles animation on cursor
 */
export const useCursorStore = defineStore('cursor', {
    state: (): { hover: boolean, visibility: CursorVisibilityType } => ({
        hover: false,
        visibility: localStorage.getItem(CursorVisibilityKey) as CursorVisibilityType ?? CursorVisible
    }),
    actions: {
        toggle(): void {
            this.hover = !this.hover;
        },
        toggleVisibility(): void {
            if (this.visibility === CursorVisible) {
                this.visibility = CursorHidden;
                localStorage.setItem(CursorVisibilityKey, CursorHidden);

            } else {
                this.visibility = CursorVisible;
                localStorage.setItem(CursorVisibilityKey, CursorVisible);
            }
        }
    }
});
