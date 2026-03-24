//Proper working Source Code
function sendEmail(){
        const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
        };

        emailjs.send("service_mu34tfr", "template_dz4giwa", params)
            .then(function(response){
                alert("Email Sent!!!");
            })
            .catch(function(error){
                alert("Email failed: " + (error.text || JSON.stringify(error)));
            });
}
//Above is the Proper working Source Code