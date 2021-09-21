$.datepicker.regional['ru'] = {
	dayNamesShort: ['S','M','T','W','T','F','S'],
	dayNamesMin: ['S','M','T','W','T','F','S'],
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);


$(function(){
	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		},
        minDate: 0,
        // showButtonPanel: true,
        showOtherMonths: true,
        selectOtherMonths: true
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
});

let datepickerButton = document.querySelector('.filter span')

datepickerButton.onclick = () => {
	document.querySelector('.overlay').classList.add('active')
}

document.querySelectorAll('.closeoverlay button').forEach(item => {
	item.onclick = () => {
		document.querySelector('.overlay').classList.remove('active')
	}
})