const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){
        alert("من فضلك املأ جميع الحقول");
        return;
    }

    const phone = "2010xxxxxxxx"; // رقم الواتساب بدون +

    const text =
`طلب جديد من الموقع

👤 الاسم:
${name}

📧 البريد:
${email}

📌 الموضوع:
${subject}

📝 الرسالة:
${message}`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});