function calculateGravity(){

    let mass = document.getElementById("mass").value;
    let gravity = document.getElementById("planet").value;

    if(mass === "" || gravity === ""){
        alert("Please fill all fields");
        return;
    }

    let weightForce = mass * gravity;

    let equivalentKg = weightForce / 9.81;

    document.getElementById("result").innerHTML =

        "🌍 Weight Force: <br><b>" +
        weightForce.toFixed(2) +
        " N</b><br><br>" +

        "⚖️ Equivalent Earth Weight:<br><b>" +
        equivalentKg.toFixed(2) +
        " kg</b><br><br>" +

        "🧪 Gravity Used:<br><b>" +
        gravity +
        " m/s²</b>";
}