/* ==========================================
AstroReact - Astronomy
Version : 0.1
Author  : Satyam Chauhan
========================================== */

"use strict";

// ==============================
// SEARCH ASTRONOMY TOPICS
// ==============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const searchValue = this.value.toLowerCase();

    const cards = document.querySelectorAll(".topic-card");

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

// ==============================
// EXPLORE BUTTON
// ==============================

const exploreButtons =
document.querySelectorAll(".explore-btn");

exploreButtons.forEach(button =>{

    button.addEventListener("click", function(){

        const topic = this.dataset.topic;

        switch(topic){

            case "stars":

                window.location.href =
                "Stars/Stars.html";

                break;

            default:

                alert("Topic not available.");

        }

    });

});

// ==============================
// COMING SOON
// ==============================

const comingSoonButtons =
document.querySelectorAll(".coming-soon-btn");

comingSoonButtons.forEach(button =>{

    button.addEventListener("click", function(){

        alert(
            "🚀 This Astronomy topic will be available in a future AstroReact update."
        );

    });

});