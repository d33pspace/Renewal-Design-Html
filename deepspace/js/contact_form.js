// Contact Form Handler

let submit = document.querySelector('#contact-form button')
let data = document.querySelectorAll('.form-row .input')
let form = document.querySelector('#contact-form')
let dataForm = new Array(4)
	data.forEach((item, id) => { 
        item.onchange = function (e) {
            dataForm[id] = e.target.value
        }
    })

// let textarea = document.querySelector('.form-row textarea')

// textarea.onfocus = () => textarea.classList.add('active')
// textarea.onblur = () => textarea.classList.remove('active')




form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log(dataForm)
    
    let request = new XMLHttpRequest();
    
    request.addEventListener('load', function() {
        // let lang = document.documentElement.getAttribute('lang')
        // lang == 'en' ? 
        // alert(`Thanks for contacting us! You'll be hearing from us soon.`) : 
        // alert(`谢谢联系我们！我们很快就回复您！`)
        // document.location.href = '/'
        // form.reset()
        document.querySelector('.contact-block').style.display = 'none'
        document.querySelector('.thank-message').style.display = 'flex'
    });
    
    request.open('POST', '/mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(dataForm[0]) + '&phone=' + encodeURIComponent(dataForm[1]) + '&email=' + encodeURIComponent(dataForm[2]) + '&userMessage=' + encodeURIComponent(dataForm[3]));
});
