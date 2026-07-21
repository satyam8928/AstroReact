/* ==========================================
AstroReact - Universe Simulator
Version : 0.1
Author  : Satyam Chauhan
========================================== */

"use strict";

// ==============================
// MODULE NAVIGATION
// ==============================

const exploreButtons = document.querySelectorAll(".explore-btn");

exploreButtons.forEach(button => {

    button.addEventListener("click", function(){

        const module = this.dataset.module;

        switch(module){

            case "astronomy":

                window.location.href =
                "Astronomy/Astronomy.html";

                break;

            case "planetary-systems":

                window.location.href =
                "PlanetarySystems/PlanetarySystems.html";

                break;

            default:

                alert("Module not available.");

        }

    });

});

// ==============================
// COMING SOON MODULES
// ==============================

const comingSoonButtons =
document.querySelectorAll(".coming-soon-btn");

comingSoonButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert(
            "🚀 This module will be available in a future AstroReact update."
        );

    });

});