"use strict";

// ==============================
// SEARCH PLANETARY SYSTEMS
// ==============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const searchValue = this.value.toLowerCase();

    const cards = document.querySelectorAll(".system-card");

    cards.forEach(card =>{

        const title = card.querySelector("h2")
                        .textContent
                        .toLowerCase();

        if(title.includes(searchValue)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

});

const exploreButtons =
document.querySelectorAll(".explore-btn");

exploreButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const system = this.dataset.system;

        switch(system){

            case "solar-system":

                window.location.href =
                "SolarSystem/SolarSystem.html";

                break;

        }

    });

});
// ==============================
// COMING SOON
// ==============================

const comingSoonButtons =
document.querySelectorAll(".coming-soon-btn");

comingSoonButtons.forEach(button=>{

    button.addEventListener("click",function(){

        alert(
            "🚀 This planetary system will be available in a future AstroReact update."
        );

    });

});