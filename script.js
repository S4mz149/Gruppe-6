// Liste des événements à venir
const events = [
    'Webinaire d\'introduction : 10 mars 2026',
    'Soirée de lancement : 20 mars 2026',
    'Championnat de jeu : 30 mars 2026'
];

const eventList = document.getElementById('event-list');

events.forEach(event => {
    const listItem = document.createElement('li');
    listItem.textContent = event;
    eventList.appendChild(listItem);
});
