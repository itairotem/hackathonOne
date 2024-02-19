// Define an array of objects for each planet in the solar system
const planets = [
    { name: "Mercury", color: "#999999", moons: 0 },
    { name: "Venus", color: "#ffeecc", moons: 0 },
    { name: "Earth", color: "#66ccff", moons: 1 },
    { name: "Mars", color: "#ff3300", moons: 2 },
    { name: "Jupiter", color: "#ffcc66", moons: 79 },
    { name: "Saturn", color: "#ffcc00", moons: 82 },
    { name: "Uranus", color: "#66ffff", moons: 27 },
    { name: "Neptune", color: "#3366ff", moons: 14 }
];

// Function to create a planet div element
function createPlanetDiv(planet) {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    return planetDiv;
}

// Function to create a moon div element
function createMoonDiv() {
    const moonDiv = document.createElement("div");
    moonDiv.className = "moon";
    return moonDiv;
}

// Function to append moons to a planet
function appendMoons(planetDiv, moonCount) {
    for (let i = 0; i < moonCount; i++) {
        const moonDiv = createMoonDiv();
        // Randomly position moons around the planet
        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        moonDiv.style.left = `${x}px`;
        moonDiv.style.top = `${y}px`;
        planetDiv.appendChild(moonDiv);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const listPlanets = document.querySelector(".listPlanets");

    // Iterate over the planets array to create planet divs
    planets.forEach(planet => {
        const planetDiv = createPlanetDiv(planet);
        listPlanets.appendChild(planetDiv);
        
        // If the planet has moons, append them
        if (planet.moons > 0) {
            appendMoons(planetDiv, planet.moons);
        }
    });
});
