function searchContent(){

    let keyword = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    let result = document.getElementById("searchResult");

    if(keyword === ""){

        result.style.display = "none";
        return;
    }

    let data = {

        mars:{
            title:"🌌 Mars",
            description:"Explore Mars, missions, news and research."
        },

        isro:{
            title:"🇮🇳 ISRO",
            description:"ISRO missions, updates and research."
        },

        nasa:{
            title:"🚀 NASA",
            description:"NASA missions, discoveries and latest news."
        },

        blackhole:{
            title:"🕳️ Black Hole",
            description:"Research, discoveries and simulations."
        }

    };

    if(data[keyword]){

        result.style.display="block";

        result.innerHTML=`

        <h2>${data[keyword].title}</h2>

        <p>${data[keyword].description}</p>

        <br>

        <button>Open</button>

        `;

    }

    else{

        result.style.display="block";

        result.innerHTML=`

        <h2>No Results Found</h2>

        <p>Try another keyword.</p>

        `;
    }

}