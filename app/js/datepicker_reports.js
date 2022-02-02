let startDate = document.querySelector('.startDate')
let endDate = document.querySelector('.endDate')

// Set placeholders
let initialEnd = new Date().toJSON().slice(0,10)
let initialStart = new Date()
	initialStart.setDate(initialStart.getDate() - 7)
	initialStart = initialStart.toJSON().slice(0,10)

startDate.innerHTML = initialStart
endDate.innerHTML = initialEnd

// Set buttons values
let today = document.querySelector('.today .date')
let yesterday = document.querySelector('.yesterday .date')
let thisWeek = document.querySelector('.this_week .date')
let lastWeek = document.querySelector('.last_week .date')
let thisMonth = document.querySelector('.this_month .date')
let lastMonth = document.querySelector('.last_month .date')

// Set today

today.innerHTML = initialEnd

today.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = initialEnd
	endDate.innerHTML = initialEnd
	toggleDatepicker()
}

// Set yesterday 

let prevDay = new Date()
	prevDay.setDate(prevDay.getDate() - 1)
	prevDay = prevDay.toJSON().slice(0,10)

yesterday.innerHTML = prevDay

yesterday.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = prevDay
	endDate.innerHTML = prevDay
	toggleDatepicker()
}

// Set this Week 

let firstDay = new Date().getDate() - new Date().getDay()
	firstDay = new Date(new Date().setDate(firstDay)).toJSON().slice(0,10)

thisWeek.innerHTML = firstDay + ' -- ' + initialEnd

thisWeek.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = firstDay
	endDate.innerHTML = initialEnd
	toggleDatepicker()
}

// Set last week 

let firstDayLastWeek = new Date().getDate() - new Date().getDay() - 7
firstDayLastWeek = new Date(new Date().setDate(firstDayLastWeek)).toJSON().slice(0,10)

let lastDayLastWeek = new Date().getDate() - new Date().getDay() - 1
lastDayLastWeek = new Date(new Date().setDate(lastDayLastWeek)).toJSON().slice(0,10)



lastWeek.innerHTML = firstDayLastWeek + ' -- ' + lastDayLastWeek

lastWeek.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = firstDayLastWeek
	endDate.innerHTML = lastDayLastWeek
	toggleDatepicker()
}

// Set this month 

let firstDayMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 2).toJSON().slice(0,10)

thisMonth.innerHTML = firstDayMonth + ' -- ' + initialEnd

thisMonth.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = firstDayMonth
	endDate.innerHTML = initialEnd
	toggleDatepicker()
}

// Set Last Month 

let firstDayLastMonth = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 2).toJSON().slice(0,10)
let lastDayLastMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toJSON().slice(0,10)

lastMonth.innerHTML = firstDayLastMonth + ' -- ' + lastDayLastMonth

lastMonth.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = firstDayLastMonth
	endDate.innerHTML = lastDayLastMonth
	toggleDatepicker()
}


let initial = true

new Vue({
	el: '#datepicker',
	data: {
		range: {
			start: new Date()
		  }
	},
	methods: {
		onDayClick(date) {
			if (initial) {
				startDate.innerHTML = date.id
				endDate.innerHTML = date.id
				initial = false
			} else if (!initial && date.id > startDate.innerHTML) {
				endDate.innerHTML = date.id
				initial = true
				toggleDatepicker()
			} else if (!initial && date.id < startDate.innerHTML) {
				startDate.innerHTML = date.id
				initial = true
				toggleDatepicker()
			} else if (!initial) {
				initial = true
				toggleDatepicker()
			}
		}
	}
  })


let toggleDatepickerButton = document.querySelector('.dates .toggleButton')
let popupDatepicker = document.querySelector('.dates-popup')
let datepickerCustom = document.querySelector('#datepicker')
let datepickerCustomButton = document.querySelector('.datepicker-wrapper .custom')
let datepickerCloseButton = document.querySelector('.datepicker-close')

datepickerCloseButton.onclick = () => {
	datepickerCustom.classList.remove('active')
}

toggleDatepickerButton.onclick = () => {
	toggleDatepicker()
}

function toggleDatepicker() {
	toggleDatepickerButton.classList.toggle('active')
	popupDatepicker.classList.toggle('active')
	datepickerCustom.classList.remove('active')
}


datepickerCustomButton.onclick = () => {
	datepickerCustom.classList.add('active')
}