function showMission(mission){

    let info = document.getElementById("missionInfo");

    if(mission === "gaganyaan"){
        info.innerHTML = `
        <h2>🚀 Gaganyaan</h2>
        <p><b>Agency:</b> ISRO</p>
        <p><b>Launch Date:</b> Planned</p>
        <p><b>Status:</b> Testing Phase</p>
        <p><b>Objective:</b> India's first human spaceflight mission.</p>
        `;
    }

    else if(mission === "artemis"){
        info.innerHTML = `
        <h2>🌙 Artemis II</h2>
        <p><b>Agency:</b> NASA</p>
        <p><b>Launch Date:</b> Upcoming</p>
        <p><b>Status:</b> Preparation</p>
        <p><b>Objective:</b> Carry astronauts around the Moon.</p>
        `;
    }

    else if(mission === "starship"){
        info.innerHTML = `
        <h2>🛸 Starship</h2>
        <p><b>Agency:</b> SpaceX</p>
        <p><b>Launch Date:</b> Ongoing Tests</p>
        <p><b>Status:</b> Development</p>
        <p><b>Objective:</b> Future Moon and Mars missions.</p>
        `;
    }

    else if(mission === "juice"){
        info.innerHTML = `
        <h2>🛰️ JUICE</h2>
        <p><b>Agency:</b> ESA</p>
        <p><b>Launch Date:</b> Launched</p>
        <p><b>Status:</b> Active</p>
        <p><b>Objective:</b> Study Jupiter and its icy moons.</p>
        `;
    }

    else if(mission === "tianwen"){
        info.innerHTML = `
        <h2>🔴 Tianwen</h2>
        <p><b>Agency:</b> CNSA</p>
        <p><b>Launch Date:</b> Ongoing Program</p>
        <p><b>Status:</b> Active</p>
        <p><b>Objective:</b> Explore Mars and deep space.</p>
        `;
    }
}