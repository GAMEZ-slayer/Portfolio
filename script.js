// Mobile hamburger menu toggle
(function () {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
})();

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
