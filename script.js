//Proper working Source Code
document.getElementById("submission_frm").addEventListener("submit", function(event){
    event.preventDefault();
    const form = event.currentTarget;
    const submitButton = form.querySelector("button[type=submit]");
        const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
        };

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        emailjs.send("service_mu34tfr", "template_dz4giwa", params)
            .then(function(response){
                alert("Thank you. Your enquiry has been sent.");
                form.reset();
            })
            .catch(function(error){
                alert("Your enquiry could not be sent. Please call +27 61 492 9047.");
            })
            .finally(function(){
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            });
});

