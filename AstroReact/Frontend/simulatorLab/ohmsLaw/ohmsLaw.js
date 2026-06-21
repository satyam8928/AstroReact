function calculateResistance(){

    let voltage = document.getElementById("voltage").value;
    let current = document.getElementById("current").value;

    if(voltage === "" || current === ""){
        alert("Please fill all fields");
        return;
    }

    if(current == 0){
        alert("Current cannot be 0");
        return;
    }

    let resistance = voltage / current;

    document.getElementById("result").innerHTML =

        "⚡ Resistance:<br><b>" +
        resistance.toFixed(2) +
        " Ω</b><br><br>" +

        "📘 Formula Used:<br>" +
        "R = V / I<br><br>" +

        "🧮 Calculation:<br>" +
        "R = " + voltage + " / " + current +
        "<br><br>" +

        "✅ Result:<br>" +
        resistance.toFixed(2) + " Ω";
}