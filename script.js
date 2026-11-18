
// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Contact Form - WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("serviceType").value;
    const message = document.getElementById("customerMessage").value.trim();

    if (!name || !phone || !service) {
        alert("من فضلك أكمل البيانات المطلوبة");
        return;
    }

    const whatsappNumber = "966552987489";

    const text = `
طلب خدمة جديد من الموقع

الاسم: ${name}
رقم الجوال: ${phone}
الخدمة المطلوبة: ${service}
تفاصيل الطلب: ${message || "لا توجد تفاصيل إضافية"}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});

// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});
