// ================================
// Adsterra Native Banner Loader
// ================================

(function () {
    if (window.self !== window.top) return;
    if (location.hostname.includes("localhost")) return;

    // Pastikan container ada
    if (!document.getElementById("container-c91f58436b6e63cae98448db683d45b8")) {
        console.warn("Adsterra container not found");
        return;
    }

    // Delay sedikit biar DOM stabil
    setTimeout(() => {
        const s = document.createElement("script");
        s.async = true;
        s.setAttribute("data-cfasync", "false");
        s.src = "https://pl24561007.effectivegatecpm.com/c91f58436b6e63cae98448db683d45b8/invoke.js";
        document.body.appendChild(s);
    }, 1000);
})();
