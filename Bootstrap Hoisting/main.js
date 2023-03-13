const submitButton = document.querySelector(".submitButton")
const studentNameInput = document.querySelector(".studentNameInput")
const studentSurnameInput = document.querySelector(".studentSurnameInput")
const studentAgeInput = document.querySelector(".studentAgeInput")
const studentEmailInput = document.querySelector(".studentEmailInput")
const indoTr = document.querySelector(".indoTr")
const maleİnput = document.querySelector(".maleİnput")
const genderInput = document.querySelectorAll(".genderInput")

let gender = ""


submitButton.addEventListener("click", () => {
    for (let i = 0; i < genderInput.length; i++) {
        console.log(genderInput);
        if (genderInput[i].checked == true) {
            gender = genderInput[i].value
        }
    }
    if (studentNameInput.value.trim() == "" && studentSurnameInput.value.trim() == "" && studentAgeInput.value.trim() == "" && studentEmailInput.value.trim() == "" && genderInput[i].value.trim() == "") {
        alert("Please fulled all form input...")
    } else {
        indoTr.innerHTML +=
            `<tr class="text-dark bg-white">
                <td>${studentNameInput.value}</td>
                <td>${studentSurnameInput.value}</td>
                <td>${studentAgeInput.value}</td>
                <td>${gender}</td>
                <td>${studentEmailInput.value}</td>
            </tr>
        `
        studentNameInput.value = ""
        studentSurnameInput.value = ""
        studentAgeInput.value = ""
        genderInput.value = ""
        genderInput.value = ""
        studentEmailInput.value = ""
    }
})