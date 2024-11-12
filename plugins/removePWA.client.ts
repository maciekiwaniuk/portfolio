export default defineNuxtPlugin(() => {
    if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const registration of registrations) {
                registration.unregister();
            }
        });
    }
    if ('caches' in window) {
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    return caches.delete(key);
                }),
            );
        });
    }
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const registration of registrations) {
                registration.unregister();
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        });
    }
});
