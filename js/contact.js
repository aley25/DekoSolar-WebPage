document.addEventListener("DOMContentLoaded", () => {

    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('u6OUOY3CrhO5Yn_sN');
    })();


    document.getElementById('submit_contact').addEventListener('click', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        console.log(name, phone);
        if (name === "" || phone === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Información incompleta, ingrese nombre y télefono.',
            });
        } else {
            // these IDs from the previous steps
            emailjs.sendForm('dekosolar_service', 'dekosolar_leads', document.getElementById('contact'))
                .then(function () {
                    Swal.fire({
                        icon: 'success',
                        title: 'Hemos recibido tus datos.',
                        text: 'Nos pondremos en contacto con usted.',
                    });
                    document.getElementById('name').value = '';
                    document.getElementById('phone').value = '';
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }

    });

});
