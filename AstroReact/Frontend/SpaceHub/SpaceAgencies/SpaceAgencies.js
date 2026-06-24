function showAgency(agency){

    let info = document.getElementById("agencyInfo");

    if(agency === "isro"){
        info.innerHTML = `
        <h2>🇮🇳 ISRO</h2>
        <p><b>Founded:</b> 1969</p>
        <p><b>Country:</b> India</p>
        <p><b>Headquarters:</b> Bengaluru</p>
        <p><b>Major Missions:</b> Chandrayaan, Mangalyaan, Gaganyaan</p>
        `;
    }

    else if(agency === "nasa"){
        info.innerHTML = `
        <h2>🇺🇸 NASA</h2>
        <p><b>Founded:</b> 1958</p>
        <p><b>Country:</b> United States</p>
        <p><b>Headquarters:</b> Washington, D.C.</p>
        <p><b>Major Missions:</b> Apollo, Artemis, Voyager</p>
        `;
    }

    else if(agency === "esa"){
        info.innerHTML = `
        <h2>🇪🇺 ESA</h2>
        <p><b>Founded:</b> 1975</p>
        <p><b>Region:</b> Europe</p>
        <p><b>Headquarters:</b> Paris, France</p>
        <p><b>Major Missions:</b> JUICE, Rosetta, Gaia</p>
        `;
    }

    else if(agency === "jaxa"){
        info.innerHTML = `
        <h2>🇯🇵 JAXA</h2>
        <p><b>Founded:</b> 2003</p>
        <p><b>Country:</b> Japan</p>
        <p><b>Headquarters:</b> Tokyo</p>
        <p><b>Major Missions:</b> Hayabusa, SLIM</p>
        `;
    }

    else if(agency === "cnsa"){
        info.innerHTML = `
        <h2>🇨🇳 CNSA</h2>
        <p><b>Founded:</b> 1993</p>
        <p><b>Country:</b> China</p>
        <p><b>Headquarters:</b> Beijing</p>
        <p><b>Major Missions:</b> Tianwen, Chang'e</p>
        `;
    }

    else if(agency === "spacex"){
        info.innerHTML = `
        <h2>🚀 SpaceX</h2>
        <p><b>Founded:</b> 2002</p>
        <p><b>Founder:</b> Elon Musk</p>
        <p><b>Country:</b> United States</p>
        <p><b>Major Missions:</b> Falcon 9, Dragon, Starship</p>
        `;
    }
}