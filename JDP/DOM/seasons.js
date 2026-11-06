// Content for each season, keyed by the value of the matching radio button
const seasons = {
    summer: {
        title: "Summer adventures",
        description: "Long, bright days are perfect for spending time outdoors with friends and family.",
        label: "Summer",
        activitiesTitle: "Things to enjoy in summer",
        icon: "☀",
        image: "summer.png",
        activities: ["Go swimming", "Relax in the sunshine", "Play Mölkky with friends"]
    },
    autumn: {
        title: "Fall colours",
        description: "Crisp air and colourful leaves make fall a wonderful time to slow down and explore.",
        label: "Fall",
        activitiesTitle: "Things to enjoy in fall",
        icon: "🍂",
        image: "fall.png",
        activities: ["Take a walk among the colourful leaves", "Bake an apple pie", "Visit a pumpkin patch"]
    },
    winter: {
        title: "Winter wonder",
        description: "Snowy days invite us to wrap up warm and enjoy the quiet magic of winter.",
        label: "Winter",
        activitiesTitle: "Things to enjoy in winter",
        icon: "❄",
        image: "wintwr.png",
        activities: ["Build a snowman", "Go ice skating", "Drink hot chocolate"]
    },
    spring: {
        title: "Spring is growing",
        description: "As the days become lighter, new leaves and flowers bring fresh energy to the world.",
        label: "Spring",
        activitiesTitle: "Things to enjoy in spring",
        icon: "🌷",
        image: "spring.png",
        activities: ["Plant seeds or flowers", "Look for the first spring birds", "Enjoy a picnic in the park"]
    }
};

// References to the page elements that change
const form = document.querySelector("#season-form");
const title = document.querySelector("#season-title");
const description = document.querySelector("#season-description");
const label = document.querySelector("#season-label");
const activitiesTitle = document.querySelector("#activities-title");
const activities = document.querySelector("#season-activities");
const icon = document.querySelector("#season-icon");
const status = document.querySelector("#season-status");
const image = document.querySelector("#season-image");
const content = document.querySelector("#season-content");
const resetButton = document.querySelector("#reset-button");

// Text shown in the basic (starting) look
const plain = {
    title: "Four Seasons",
    description: "Choose a season below to change the look of this page."
};

// Fills the page with the chosen season's content and switches its colour theme
function updateSeason(seasonName) {
    const season = seasons[seasonName];

    // The body class selects the CSS colour variables for the season
    document.body.className = `season--${seasonName}`;
    title.textContent = season.title;
    description.textContent = season.description;
    label.textContent = season.label;
    activitiesTitle.textContent = season.activitiesTitle;
    icon.textContent = season.icon;
    image.src = season.image;
    image.alt = `${season.label} illustration`;
    image.hidden = false;
    content.hidden = false;
    activities.replaceChildren(
        ...season.activities.map((activity) => {
            const item = document.createElement("li");
            item.textContent = activity;
            return item;
        })
    );
    // Announced to screen readers through the aria-live status paragraph
    status.textContent = `The page now shows ${season.label.toLowerCase()}.`;
}

// Returns the page to the plain black and white starting look
function resetPage() {
    form.reset();
    document.body.className = "season--plain";
    title.textContent = plain.title;
    description.textContent = plain.description;
    image.hidden = true;
    content.hidden = true;
    status.textContent = "The page is back to the basic look.";
}

resetButton.addEventListener("click", resetPage);

form.addEventListener("submit", (event) => {
    // Stop the browser from reloading the page; update it with JavaScript instead
    event.preventDefault();
    const selectedSeason = new FormData(form).get("season");
    updateSeason(selectedSeason);
});
