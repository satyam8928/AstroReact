function calculateBMI(){

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if(weight === "" || height === ""){
        alert("Please fill all fields");
        return;
    }

    let bmi = weight / (height * height);

    let status = "";

    if(bmi < 18.5){
        status = "Underweight ⚠️";
    }
    else if(bmi < 25){
        status = "Normal Weight ✅";
    }
    else if(bmi < 30){
        status = "Overweight ⚠️";
    }
    else{
        status = "Obese ❌";
    }

    document.getElementById("result").innerHTML =
        "BMI: " + bmi.toFixed(2) +
        "<br>" +
        status;
}