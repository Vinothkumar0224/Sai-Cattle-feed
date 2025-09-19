document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '919597114210'; 

    const textMessage = `*New Inquiry from Sai Cattle Feed Website*\n\n*Name :* ${name}\n*Email :* ${email}\n*Phone Number :* ${phone}\n*Subject :* ${subject}\n*Message :* ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

    // window.open(whatsappUrl, '_blank');

    //Success toast
    const toastEl = document.createElement('div');
    toastEl.className = "toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3";
    toastEl.setAttribute("role","alert");
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                Your message has been sent via WhatsApp!
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div> `;
        document.body.appendChild(toastEl);
        const toast = new bootstrap.Toast(toastEl);
        toast.show();

        setTimeout(()=>{
            window.open(whatsappUrl, '_blank');
        },3000);

        document.getElementById("contactForm").reset();
});
