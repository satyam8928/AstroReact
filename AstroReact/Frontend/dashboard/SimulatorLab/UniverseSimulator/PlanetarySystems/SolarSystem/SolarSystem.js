// ==============================
// PLANET DATA
// ==============================

const planets = {

    Mercury: {
        name: "Mercury",
        diameter: "4,879 km",
        gravity: "3.7 m/s²",
        moons: "0",
        temperature: "167°C",
        description: "The smallest planet in our Solar System."
    },

    Venus: {
        name: "Venus",
        diameter: "12,104 km",
        gravity: "8.87 m/s²",
        moons: "0",
        temperature: "464°C",
        description: "The hottest planet in our Solar System."
    },

    Earth: {
        name: "Earth",
        diameter: "12,742 km",
        gravity: "9.8 m/s²",
        moons: "1",
        temperature: "15°C",
        description: "Our home planet."
    },

    Mars: {
        name: "Mars",
        diameter: "6,779 km",
        gravity: "3.71 m/s²",
        moons: "2",
        temperature: "-63°C",
        description: "Known as the Red Planet."
    },

    Jupiter: {
        name: "Jupiter",
        diameter: "139,820 km",
        gravity: "24.79 m/s²",
        moons: "95+",
        temperature: "-145°C",
        description: "The largest planet."
    },

    Saturn: {
        name: "Saturn",
        diameter: "116,460 km",
        gravity: "10.44 m/s²",
        moons: "146+",
        temperature: "-178°C",
        description: "Famous for its beautiful rings."
    },

    Uranus: {
        name: "Uranus",
        diameter: "50,724 km",
        gravity: "8.69 m/s²",
        moons: "27",
        temperature: "-224°C",
        description: "Rotates on its side."
    },

    Neptune: {
        name: "Neptune",
        diameter: "49,244 km",
        gravity: "11.15 m/s²",
        moons: "16",
        temperature: "-214°C",
        description: "The farthest known planet."
    }

};

// ==============================
// SHOW PLANET INFO
// ==============================

function showPlanet(planetName){

    const planet = planets[planetName];

    document.getElementById("planetInfo").innerHTML = `

        <h2>${planet.name}</h2>

        <br>

        <p><strong>Diameter:</strong> ${planet.diameter}</p>

        <p><strong>Gravity:</strong> ${planet.gravity}</p>

        <p><strong>Moons:</strong> ${planet.moons}</p>

        <p><strong>Temperature:</strong> ${planet.temperature}</p>

        <br>

        <p>${planet.description}</p>

    `;

}

// ==============================
// BUTTON EVENTS
// ==============================

document.getElementById("playBtn").addEventListener("click",function(){

    alert("Animation will be available in Version 0.7");

});

document.getElementById("pauseBtn").addEventListener("click",function(){

    alert("Pause feature coming soon.");

});

document.getElementById("resetBtn").addEventListener("click",function(){

    document.getElementById("planetInfo").innerHTML =

    "<h3>No Planet Selected</h3>";

});