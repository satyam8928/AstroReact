function showNews(category){

    let info = document.getElementById("newsInfo");

    if(category === "isro"){
        info.innerHTML = `
        <h2>🛰️ ISRO News</h2>
        <p><b>Update:</b> Gaganyaan mission preparations continue.</p>
        <p><b>Status:</b> Testing & Development</p>
        <p><b>Focus:</b> Human Spaceflight Program</p>
        `;
    }

    else if(category === "nasa"){
        info.innerHTML = `
        <h2>🚀 NASA News</h2>
        <p><b>Update:</b> Artemis II mission planning is progressing.</p>
        <p><b>Status:</b> Upcoming</p>
        <p><b>Focus:</b> Moon Exploration</p>
        `;
    }

    else if(category === "spacex"){
        info.innerHTML = `
        <h2>🛸 SpaceX News</h2>
        <p><b>Update:</b> Starship development and testing continue.</p>
        <p><b>Status:</b> Active Development</p>
        <p><b>Focus:</b> Mars & Deep Space Missions</p>
        `;
    }

    else if(category === "esa"){
        info.innerHTML = `
        <h2>🌍 ESA News</h2>
        <p><b>Update:</b> JUICE mission is exploring Jupiter's system.</p>
        <p><b>Status:</b> Active Mission</p>
        <p><b>Focus:</b> Jupiter and Icy Moons</p>
        `;
    }

    else if(category === "discoveries"){
        info.innerHTML = `
        <h2>🔭 Discoveries</h2>
        <p><b>Latest:</b> New exoplanets continue to be discovered.</p>
        <p><b>Field:</b> Astronomy & Astrophysics</p>
        <p><b>Focus:</b> Understanding the Universe</p>
        `;
    }
}