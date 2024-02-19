const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    if (noun && adjective && person && verb && place) {
        const story = `Once upon a time, ${person} went to ${place} with their ${adjective} ${noun}. While there, they decided to ${verb}.`;
        storySpan.textContent = story;
    } else {
        console.error("Please fill out all fields.");
    }
});

shuffleButton.addEventListener('click', function() {
    const stories = [
        "Once upon a time, {person} went to {place} with their {adjective} {noun}. While there, they decided to {verb}.",
        "In a land far away, {person} discovered a {adjective} {noun} and decided to {verb} it.",
        "Under the starry sky, {person} and their {adjective} {noun} journeyed to {place} to {verb} together."
    ];

    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    const randomIndex = Math.floor(Math.random() * stories.length);
    let storyTemplate = stories[randomIndex];
    storyTemplate = storyTemplate.replace('{noun}', noun);
    storyTemplate = storyTemplate.replace('{adjective}', adjective);
    storyTemplate = storyTemplate.replace('{person}', person);
    storyTemplate = storyTemplate.replace('{verb}', verb);
    storyTemplate = storyTemplate.replace('{place}', place);

    storySpan.textContent = storyTemplate;
});