/* ==========================================
AstroReact - Solar System Simulator
Version : 0.3
Author  : Satyam Chauhan
========================================== */

"use strict";
// ==============================
// PLANET DATA
// ==============================

const planets = {

    Mercury: {
        name: "Mercury",
        diameter: "4,879 km",
        moons: 0,
        distance: "57.9 million km",
        gravity: "3.7 m/s²",
        day: "58.6 Earth days",
        year: "88 Earth days",
        color: "#9e9e9e",
        description: "Mercury is the smallest and closest planet to the Sun."
    },

    Venus: {
        name: "Venus",
        diameter: "12,104 km",
        moons: 0,
        distance: "108.2 million km",
        gravity: "8.87 m/s²",
        day: "243 Earth days",
        year: "225 Earth days",
        color: "#d4af37",
        description: "Venus is the hottest planet in our Solar System."
    },

    Earth: {
        name: "Earth",
        diameter: "12,742 km",
        moons: 1,
        distance: "149.6 million km",
        gravity: "9.8 m/s²",
        day: "24 hours",
        year: "365 days",
        color: "#2196f3",
        description: "Earth is the only known planet that supports life."
    },

    Mars: {
        name: "Mars",
        diameter: "6,779 km",
        moons: 2,
        distance: "227.9 million km",
        gravity: "3.71 m/s²",
        day: "24.6 hours",
        year: "687 days",
        color: "#d84315",
        description: "Mars is known as the Red Planet."
    },

    Jupiter: {
        name: "Jupiter",
        diameter: "139,820 km",
        moons: 95,
        distance: "778.5 million km",
        gravity: "24.79 m/s²",
        day: "9.9 hours",
        year: "11.86 years",
        color: "#d2b48c",
        description: "Jupiter is the largest planet in our Solar System."
    },

    Saturn: {
        name: "Saturn",
        diameter: "116,460 km",
        moons: 146,
        distance: "1.43 billion km",
        gravity: "10.44 m/s²",
        day: "10.7 hours",
        year: "29.4 years",
        color: "#d8c690",
        description: "Saturn is famous for its beautiful rings."
    },

    Uranus: {
        name: "Uranus",
        diameter: "50,724 km",
        moons: 28,
        distance: "2.87 billion km",
        gravity: "8.69 m/s²",
        day: "17.2 hours",
        year: "84 years",
        color: "#7dd3fc",
        description: "Uranus rotates on its side."
    },

    Neptune: {
        name: "Neptune",
        diameter: "49,244 km",
        moons: 16,
        distance: "4.49 billion km",
        gravity: "11.15 m/s²",
        day: "16.1 hours",
        year: "164.8 years",
        color: "#2563eb",
        description: "Neptune is the farthest known planet from the Sun."
    }

};

// ==============================
// SHOW PLANET INFORMATION
// ==============================

function showPlanet(planetName){

    const planet = planets[planetName];

    if(!planet){
        return;
    }

    const planetInfo = document.getElementById("planetInfo");

    planetInfo.innerHTML = `
        <h2>${planet.name}</h2>

        <hr>

        <p><strong>Diameter:</strong> ${planet.diameter}</p>

        <p><strong>Distance:</strong> ${planet.distance}</p>

        <p><strong>Gravity:</strong> ${planet.gravity}</p>

        <p><strong>Moons:</strong> ${planet.moons}</p>

        <p><strong>Length of Day:</strong> ${planet.day}</p>

        <p><strong>Length of Year:</strong> ${planet.year}</p>

        <br>

        <p>${planet.description}</p>
    `;

}
// ==============================
// RESET BUTTON
// ==============================

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("planetInfo").innerHTML = `
        <h3>No Planet Selected</h3>
        <p>Click a planet to view detailed information.</p>
    `;

});

const orbitData = {

    Mercury:{
        angle:0,
        radius:75,
        speed:0.04,
        rotation:2
    },

    Venus:{
        angle:0,
        radius:110,
        speed:0.03,
        rotation:1
    },

    Earth:{
        angle:0,
        radius:150,
        speed:0.025,
        rotation:3
    },

    Mars:{
        angle:0,
        radius:190,
        speed:0.02,
        rotation:2.5
    },

    Jupiter:{
        angle:0,
        radius:235,
        speed:0.015,
        rotation:5
    },

    Saturn:{
        angle:0,
        radius:280,
        speed:0.012,
        rotation:4
    },

    Uranus:{
        angle:0,
        radius:325,
        speed:0.009,
        rotation:3
    },

    Neptune:{
        angle:0,
        radius:370,
        speed:0.007,
        rotation:3
    }

};
// ==============================
// ANIMATE PLANETS
// ==============================

let isAnimating = true;

function animatePlanets(){

    if(!isAnimating){
        requestAnimationFrame(animatePlanets);
        return;
    }

    for(const planetName in orbitData){

        const planet = document.querySelector(
            "." + planetName.toLowerCase() + "Planet"
        );

        const orbit = orbitData[planetName];

        orbit.angle += orbit.speed;

        const x = Math.cos(orbit.angle) * orbit.radius;

        const y = Math.sin(orbit.angle) * orbit.radius;

        planet.style.left = `calc(50% + ${x}px)`;

        planet.style.top = `calc(50% + ${y}px)`;

        planet.style.transform = `rotate(${orbit.angle * orbit.rotation * 50}deg)`;

    document.getElementById("playBtn").addEventListener("click", function(){

    isAnimating = true;

    });

    document.getElementById("pauseBtn").addEventListener("click", function(){

    isAnimating = false;

    });

    }

    requestAnimationFrame(animatePlanets);

}
animatePlanets();

// ==============================
// CREATE STARS
// ==============================

const starsContainer = document.querySelector(".stars");

for(let i=0; i<250; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}