export class LocalStorageMock {
    private store: {};
    constructor() {
        this.store = {};
    }

    clear(): void {
        this.store = {};
    }

    getItem(key: any): any {
        return this.store[key as keyof Object] || null;
    }

    setItem(key: any, value: any): void {
        this.store[key as keyof Object] = value;
    }

    removeItem(key: any): void {
        delete this.store[key as keyof Object];
    }
}
