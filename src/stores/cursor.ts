import { defineStore } from 'pinia';
import { CursorVisibilityType } from '@/types/CursorVisibilityType';

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
            if (this.visibility === 'visible') {
                this.visibility = 'hidden';
                localStorage.setItem('cursor-visibility', 'hidden');

            } else {
                this.visibility = 'visible';
                localStorage.setItem('cursor-visibility', 'visible');
            }
        }
    }
});
