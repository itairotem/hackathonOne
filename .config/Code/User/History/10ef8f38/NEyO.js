// Define an array of planets with their names and corresponding background colors
const planets = [
    { name: "Mercury", color: "#999999" },
    { name: "Venus", color: "#ffeecc" },
    { name: "Earth", color: "#66ccff" },
    { name: "Mars", color: "#ff3300" },
    { name: "Jupiter", color: "#ffcc66" },
    { name: "Saturn", color: "#ffcc00" },
    { name: "Uranus", color: "#66ffff" },
    { name: "Neptune", color: "#3366ff" }
]

document.addEventListener("DOMContentLoaded", function () {
    const listPlanets = document.querySelector(".listPlanets");

    // Function to create a planet div element
    function createPlanetDiv(planet) {
        const planetDiv = document.createElement("div");
        planetDiv.className = "planet";
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;
        return planetDiv;
    }

    // Iterate over the planets array to create planet divs and append them to the section
    planets.forEach(planet => {
        const planetDiv = createPlanetDiv(planet);
        listPlanets.appendChild(planetDiv);
    })
})
