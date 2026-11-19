const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);

if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

//assignment 2
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  return time;
}

const time = travelTime(travelInformation);
const hours = Math.floor(time);
const minutes = Math.round((time - hours) * 60);

console.log(`${hours} hours and ${minutes} minutes`);

//assignment 3

const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 2,
    hours: 22,
    minutes: 32,
  },
  {
    title: "Breaking Bad",
    days: 2,
    hours: 2,
    minutes: 0,
  },
  {
    title: "Dark",
    days: 1,
    hours: 0,
    minutes: 33,
  },
];

const humanTotalLife = 80 * 356 * 24 * 60;

function logOutSeriesText() {
  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const eachSeriesTotalDuration =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    const seriesPercentage = (eachSeriesTotalDuration / humanTotalLife) * 100;

    console.log(`${series.title} took ${seriesPercentage}%`);
  }
}

logOutSeriesText();

// assignment 4

const notes = [];
function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      console.log(notes[id].content);
    }
  }
}

const firstNote = getNote(1);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`,
    );
  }
}

logOutNotesFormatted();
