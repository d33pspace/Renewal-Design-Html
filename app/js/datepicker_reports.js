let startDate = document.querySelector('.startDate')
let endDate = document.querySelector('.endDate')

// Set placeholders
let initialStart = new Date().toJSON().slice(0,10)
let initialEnd = new Date()
	initialEnd.setDate(initialEnd.getDate() + 7)
	initialEnd = initialEnd.toJSON().slice(0,10)

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

today.innerHTML = initialStart

today.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = initialStart
	let nextDay = new Date()
		nextDay.setDate(nextDay.getDate() + 1)
		nextDay = nextDay.toJSON().slice(0,10)
	endDate.innerHTML = nextDay
}

// Set yesterday 

let prevDay = new Date()
	prevDay.setDate(prevDay.getDate() - 1)
	prevDay = prevDay.toJSON().slice(0,10)

yesterday.innerHTML = prevDay

yesterday.closest('.datepicker-button').onclick = () => {
	startDate.innerHTML = prevDay
	endDate.innerHTML = initialStart
}

// Set this Week 


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
			} else if (!initial && date.id < startDate.innerHTML) {
				startDate.innerHTML = date.id
				initial = true
			}
		}
	}
  })
