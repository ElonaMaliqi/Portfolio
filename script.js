document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "portfoliowebsite79@gmail.com",
        Password : "7D8AF19F18AF86ACC39645CF2F542B0E2A63",
        To : 'portfoliowebsite79@gmail.com',
        From : 'portfoliowebsite79@gmail.com',
        Subject : `${subject.value}`,
        Body : `Name: ${fullName.value},<br>
        Email:${email.value},<br>
        Phone:${phone.value}, <br>
        Message:${mess.value}`
    }).then(
      message => {
        console.log (message);
                    if(message=='OK'){
                    alert('Thanks for submitting details. I will contact you soon.');
                    }
                    else{
                        console.error (message);
                        alert('Error submitting form.')
                    }
      }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
})

