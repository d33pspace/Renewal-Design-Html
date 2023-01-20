// Contact Form Handler

let submit = document.querySelector('#contact-form button')
let data = document.querySelectorAll('.form-row input')
let form = document.querySelector('#contact-form')
let dataForm = new Array(4)
	data.forEach((item, id) => { 
        item.onchange = function (e) {
            dataForm[id] = e.target.value
        }
    })

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log(dataForm)
    
    let request = new XMLHttpRequest();
    
    request.addEventListener('load', function() {
        console.log(request.response);
        alert('Your message has been send!');
        form.reset();
    });
    
    request.open('POST', '/mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(dataForm[0]) + '&phone=' + encodeURIComponent(dataForm[1]) + '&email=' + encodeURIComponent(dataForm[2]) + '&userMessage=' + encodeURIComponent(dataForm[3]));
});
