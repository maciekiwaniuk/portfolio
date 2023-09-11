import { defineStore } from 'pinia';
import { CursorVisibilityType } from '@/types/CursorVisibilityType';
import { CursorHidden, CursorVisible } from '@/constants/app';

/**
 * Handles animation on cursor
 */
export const useCursorStore = defineStore('cursor', {
    state: (): { hover: boolean, visibility: CursorVisibilityType } => ({
        hover: false,
        visibility: localStorage.getItem('cursor-visibility') as CursorVisibilityType ?? 'visible'
    }),
    actions: {
        toggle(): void {
            this.hover = !this.hover;
        },
        toggleVisibility(): void {
            if (this.visibility === CursorVisible) {
                this.visibility = CursorHidden;
                localStorage.setItem('cursor-visibility', CursorHidden);

            } else {
                this.visibility = CursorVisible;
                localStorage.setItem('cursor-visibility', CursorVisible);
            }
        }
    }
});
