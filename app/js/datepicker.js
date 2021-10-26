

let datepickerButton = document.querySelector('.datepicker')
let overlay = document.querySelector('.overlay')

datepickerButton.onclick = () => {
	overlay.classList.add('active')
}

document.querySelectorAll('.closeoverlay button').forEach(item => {
	item.onclick = () => {
		overlay.classList.remove('active')
	}
})

overlay.onclick = (e) => {
	if (e.target == overlay) {
		overlay.classList.remove('active')
	}
}

new Vue({
	el: '#datepicker',
	data: {
		range: {
			start: new Date()
		  }
	},
	methods: {
		onDayClick(day) {
			let birthInput = document.querySelector('#birthdate')
			if (birthInput) {
				birthInput.value = day.id
				birthInput.parentElement.classList.add('active')
				overlay.classList.remove('active')
				proceed.classList.add('active')
			}
		}
	}
  })