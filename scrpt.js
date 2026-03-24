function createToaster(config) {
    // Edge case: Validate config object
    config = config || {};
    config.theme = config.theme || "light";
    config.positionX = config.positionX || "left";
    config.positionY = config.positionY || "top";
    config.duration = Math.max(0.5, config.duration || 3); // Min duration of 0.5 seconds

    let parent = document.querySelector(".parent")
    if (!parent) {
        console.error("parent container not found")
        return;
    }
    return function (notification) {
        // Edge case: Check if notification exists and is not empty
        if (!notification || (typeof notification === 'string' && notification.trim() === '')) {
            console.warn("Notification cannot be empty")
            return;
        }

        let div = document.createElement("div")
        // Use textContent to prevent XSS
        div.textContent = String(notification);
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity`
        parent.appendChild(div);

        // Fix: Use separate classList.add() calls instead of space-separated string
        if (config.positionX === "right") {
            parent.classList.add("right-5")
        } else {
            parent.classList.add("left-5")
        }

        if (config.positionY === "bottom") {
            parent.classList.add("bottom-5")
        } else {
            parent.classList.add("top-5")
        }

        setTimeout(() => {
            if (div.parentNode) {
                parent.removeChild(div)
            }
        }, config.duration * 1000)
    }
}




let Toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
})

Toaster("download done!")
setTimeout(() => {
    Toaster("boom baam ")
}, 4000)

