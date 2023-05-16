import { defineStore, StoreDefinition } from 'pinia';
import { CursorVisibilityType } from '@/types/CursorVisibilityType';

/**
 * Handles animation on cursor
 */
export const useCursorStore: StoreDefinition = defineStore('cursor', {
    state: (): { hover: boolean, visibility: CursorVisibilityType } => ({
        hover: false,
        visibility: localStorage.getItem('cursor-visibility') as CursorVisibilityType ?? 'visible'
    }),
    actions: {
        toggle(): void {
            this.hover = !this.hover;
        },
        setCursorToHover(): void {
            this.hover = true;
        },
        toggleVisibility(): void {
            if (this.visibility == 'visible') {
                this.visibility = 'hidden';
                localStorage.setItem('cursor-visibility', 'hidden');

            } else {
                this.visibility = 'visible';
                localStorage.setItem('cursor-visibility', 'visible');
            }
        }
    }
});
