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
    toastEl.className = "toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3 shadow-lg rounded-3";
    toastEl.setAttribute("role","alert");
    toastEl.innerHTML = `
        <div class="d-flex align-items-center p-2">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                 alt="WhatsApp" width="24" height="24" class="me-2">
            <div class="toast-body">
                Your message is ready!
                <a href="${whatsappUrl}" target="_blank" class="text-white fw-bold text-decoration-underline ms-1">Open WhatsApp</a>
            </div>
            <button type="button" class="btn-close btn-close-white ms-2 me-1" data-bs-dismiss="toast"></button>
        </div> `;
        document.body.appendChild(toastEl);
        const toast = new bootstrap.Toast(toastEl);
        toast.show();

        // setTimeout(()=>{
        //     window.open(whatsappUrl, '_blank');
        // },3000);

        document.getElementById("contactForm").reset();
});
