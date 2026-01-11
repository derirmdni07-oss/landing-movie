// ================================
// Adsterra Native Banner
// ================================

(function () {
    // Jangan load di iframe
    if (window.self !== window.top) return;

    // Jangan tampil di localhost
    if (location.hostname.includes("localhost")) return;

    const containerId = "container-c91f58436b6e63cae98448db683d45b8";

    // Buat container banner
    const container = document.createElement("div");
    container.id = containerId;
    container.style.maxWidth = "100%";
    container.style.margin = "20px auto";
    container.style.textAlign = "center";

    // Taruh banner di bawah video
    const target = document.querySelector(".video-stage") || document.body;
    target.after(container);

    // Load script Adsterra
    const s = document.createElement("script");
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    s.src = "https://pl24561007.effectivegatecpm.com/c91f58436b6e63cae98448db683d45b8/invoke.js";

    document.body.appendChild(s);
})();
