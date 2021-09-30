const billAmount = document.querySelector("#bill");
const cashAmount = document.querySelector("#cash");
const buttonCheck = document.querySelector("#btn-id");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function validateInputs() {
    if (billAmount.value > 0) {
        if (Number(cashAmount.value) >= Number(billAmount.value)) {
            const changeAmount = cashAmount.value - billAmount.value;
            calculateChange(changeAmount);
        } else
            message.innerText = "Cash amount should be equal or greater than bill amount ";
    } else {
        message.innerText = "Bill Amount should be greater than 0";
    }
}

function calculateChange(changeAmount) {
    //by dividing we get number of notes required of that particular denomination
    //by modulous we get the left out changeAmount that to be passed to next denomination
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(changeAmount / availableNotes[i]);
        changeAmount = changeAmount % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }


}

buttonCheck.addEventListener("click", validateInputs);