document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '919791660051';

    const textMessage = `*New Inquiry from Shri Sai Cattle Feeds Website*\n\n*Name :* ${name}\n*Email :* ${email}\n*Phone Number :* ${phone}\n*Subject :* ${subject}\n*Message :* ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

    document.getElementById("openWhatsapp").setAttribute("href", whatsappUrl);

    const whatsappModal = new bootstrap.Modal(document.getElementById('whatsappModal'));
    whatsappModal.show();

    document.getElementById("contactForm").reset();
});

const showMoreBtn = document.getElementById("showMoreBtn");
const showMoreText = document.getElementById("showMoreText");
const moreFaqs = document.getElementById("moreFaqs");

showMoreBtn.addEventListener("click", () => {

    if (moreFaqs.style.display === "none" || moreFaqs.style.display === "") {
        moreFaqs.style.display = "block";

        showMoreText.setAttribute("data-i18n", "indexPage.faq_section.show_less");

    } else {
        moreFaqs.style.display = "none";

        showMoreText.setAttribute("data-i18n", "indexPage.faq_section.show_more");
    }

    loadLanguage(localStorage.getItem("lang"));
});

document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById("langTip");

    // Show after 1 second
    setTimeout(() => {
        tooltip.classList.add("show");
    }, 1000);

    // Hide after 4 seconds
    setTimeout(() => {
        tooltip.classList.remove("show");
    }, 5000);
});

