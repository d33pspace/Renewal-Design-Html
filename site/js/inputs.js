let input = document.querySelectorAll('.input-wrap .input')

let textarea = document.querySelector('.input-wrap textarea')

input.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        if (item.classList.contains('textarea')) {
            item.classList.add('filled')
            if (item.classList.contains('desc')) {
                item.setAttribute('placeholder', 'This will appear in the description of the gift on your receipt exactly as you enter it.')
            }
        }
    }
    // item.onblur = () => {
    //     if (item.value == '' && item == email) {
    //         item.classList.remove('active')
    //         emailCheckbox.setAttribute('disabled', 'disabled')
    //         emailCheckbox.checked = false
    //     }  else if (item == email) {
    //         emailCheckbox.removeAttribute('disabled')
    //     } else if (item.value == '' && item == address) {
    //         item.classList.remove('filled')
    //         item.classList.remove('active')
    //         addressCheckbox.setAttribute('disabled', 'disabled')
    //         addressCheckbox.checked = false
    //     } else if (item == address) {
    //         item.classList.remove('filled')
    //         addressCheckbox.removeAttribute('disabled')
    //     } else if (item.value == '') {
    //         item.classList.remove('active')
    //     }
    // }
    item.onblur = () => {
         if (item.classList.contains('textarea')) {
            item.classList.remove('filled')
            item.removeAttribute('placeholder')
        }
        if (item.value == '') {
            item.classList.remove('active')
        }
    }
})

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value
          if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value - restore the previous one
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value - nothing to restore
          this.value = "";
        }
      });
    });
  }

  setInputFilter(document.getElementById("phone"), function(value) {
    return /^-?\d*$/.test(value); }, "Must be an integer");