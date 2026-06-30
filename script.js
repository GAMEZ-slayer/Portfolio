(function () {
    const ORIGINAL_SRC = 'images/roy.jpeg';
    const img = document.getElementById('profileImg');

    // Make src property read-only so DevTools tampering is ignored
    Object.defineProperty(img, 'src', {
        get: function () { return ORIGINAL_SRC; },
        set: function () { /* silently ignore changes */ }
    });

    // Watch DOM for removal of the image element and restore it
    const observer = new MutationObserver(function () {
        if (!document.body.contains(img)) {
            document.getElementById('profilePic').appendChild(img);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
