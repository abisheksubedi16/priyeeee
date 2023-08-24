

function submit() {
    let name = document.getElementById("Name").value;
    let namee = name.toUpperCase();
    if (namee == "ADVO" || namee == "ADVOCATE" || namee == "AAKRITI" || namee == "AKRITI" || namee == "PARI" || namee == "ADRI") {

        const dateInput = document.getElementById('dateInput').value;
        const selectedDate = new Date(dateInput);
        if (dateInput == '2007-08-25' || dateInput == '2007-08-24') {
            alert("Ohh!, Pari tw po hos.\nSorry hai verify garnw parxa garo xa 🤷🏻‍♂️.")
            window.location.href = "happybday.html";

        }else if(dateInput == ''){
            alert("Please, Enter your Date of Birth.  ")
        }else  if (dateInput != '2007-08-25' || dateInput != '2007-08-24') {
            alert("This Date of Birth is not Valid 🤨. Try Again🤷🏻‍♂️")
        }
    } else if (namee == "") {
        alert("Please, Enter your First Name.  ")
    } else if (namee != "ADVO" || namee != "ADVOCATE" || namee != "AAKRITI" || namee != "AKRITI" || namee != "PARI" || namee != "ADRI") {
        alert("This Name is not Valid 🤨. Try Again🤷🏻‍♂️")
    }



}


