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

    // Set WhatsApp link inside modal button
    document.getElementById("openWhatsapp").setAttribute("href", whatsappUrl);

    // Show modal
    const whatsappModal = new bootstrap.Modal(document.getElementById('whatsappModal'));
    whatsappModal.show();

    // Reset form
    document.getElementById("contactForm").reset();
});
const showMoreBtn = document.getElementById("showMoreBtn");
const moreFaqs = document.getElementById("moreFaqs");

showMoreBtn.addEventListener("click", () => {
    if (moreFaqs.style.display === "none") {
        moreFaqs.style.display = "block";
        showMoreBtn.textContent = "Show Less ↑";
    } else {
        moreFaqs.style.display = "none";
        showMoreBtn.textContent = "Show More ↓";
    }
});
