function shuffleValues(){
    const checkboxes = Array.from(checkboxForm.querySelectorAll("input[type=checkbox]"));
    checkboxes.forEach((checkbox) => {
        const randomIndex = Math.floor(Math.random() * checkboxes.length);
        checkboxForm.insertBefore(checkbox.parentElement, checkboxes[randomIndex].parentElement);
    });
}    


function showSelectedValues() {
let checkboxes = document.querySelectorAll('#checkboxForm input[type="checkbox"]');
let selectedCheckboxes = document.querySelectorAll('#checkboxForm input[type="checkbox"]:checked');
let values = Array.from(selectedCheckboxes).map(cb => cb.value);

    if (selectedCheckboxes.length === 0) {
    document.getElementById('selectedValues').textContent = 'Please select at least one value!';
    } else if (selectedCheckboxes.length < checkboxes.length) {
    document.getElementById('selectedValues').textContent = 'Some values are not selected! Selected values: ' + values.join(', ');
    } else {
    document.getElementById('selectedValues').textContent = 'All values selected! Selected values: ' + values.join(', ');
    }
}



function changeValues() {
    const newValues = ["Value1", "Value2", "Value3", "Value4"];
    
    let checkboxes = document.querySelectorAll('#checkboxForm input[type="checkbox"]');
    let labels = document.querySelectorAll('#checkboxForm label');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].value = newValues[i];
        labels[i].childNodes[0].nodeValue = newValues[i] + " ";  // update the label text
    }
}

