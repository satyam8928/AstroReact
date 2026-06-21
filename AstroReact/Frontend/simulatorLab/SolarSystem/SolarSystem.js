function showPlanet(planet){

    let info = document.getElementById("planetInfo");

    if(planet === "earth"){
        info.innerHTML = `
        <h2>🌍 Earth</h2>
        <p><b>Distance from Sun:</b> 149.6 Million km</p>
        <p><b>Gravity:</b> 9.81 m/s²</p>
        <p><b>Moons:</b> 1</p>
        <p><b>Day Length:</b> 24 Hours</p>
        <p><b>Fun Fact:</b> 71% of Earth is covered by water.</p>
        `;
    }

    else if(planet === "mars"){
        info.innerHTML = `
        <h2>🔴 Mars</h2>
        <p><b>Distance from Sun:</b> 227.9 Million km</p>
        <p><b>Gravity:</b> 3.71 m/s²</p>
        <p><b>Moons:</b> 2</p>
        <p><b>Day Length:</b> 24.6 Hours</p>
        <p><b>Fun Fact:</b> Mars has the largest volcano in the Solar System.</p>
        `;
    }

    else if(planet === "jupiter"){
        info.innerHTML = `
        <h2>🟠 Jupiter</h2>
        <p><b>Distance from Sun:</b> 778.5 Million km</p>
        <p><b>Gravity:</b> 24.79 m/s²</p>
        <p><b>Moons:</b> 95+</p>
        <p><b>Day Length:</b> 9.9 Hours</p>
        <p><b>Fun Fact:</b> Jupiter is the largest planet in the Solar System.</p>
        `;
    }

    else if(planet === "saturn"){
        info.innerHTML = `
        <h2>🪐 Saturn</h2>
        <p><b>Distance from Sun:</b> 1.43 Billion km</p>
        <p><b>Gravity:</b> 10.44 m/s²</p>
        <p><b>Moons:</b> 140+</p>
        <p><b>Day Length:</b> 10.7 Hours</p>
        <p><b>Fun Fact:</b> Saturn is famous for its beautiful rings.</p>
        `;
    }

    else if(planet === "uranus"){
        info.innerHTML = `
        <h2>🟦 Uranus</h2>
        <p><b>Distance from Sun:</b> 2.87 Billion km</p>
        <p><b>Gravity:</b> 8.69 m/s²</p>
        <p><b>Moons:</b> 27</p>
        <p><b>Day Length:</b> 17 Hours</p>
        <p><b>Fun Fact:</b> Uranus rotates on its side.</p>
        `;
    }

    else if(planet === "neptune"){
        info.innerHTML = `
        <h2>🔵 Neptune</h2>
        <p><b>Distance from Sun:</b> 4.50 Billion km</p>
        <p><b>Gravity:</b> 11.15 m/s²</p>
        <p><b>Moons:</b> 16</p>
        <p><b>Day Length:</b> 16 Hours</p>
        <p><b>Fun Fact:</b> Neptune has the fastest winds in the Solar System.</p>
        `;
    }
}