const Verbs = [
    "eat", "dance", "swim", "laugh", "sleep", "run", "play", "walk", "read", "write", "learn", "draw", "drive"
];

function tarkistaVerbit() {
    let isValid = true;
    let syötetytVerbit = [];
    let emptyField = false;
    let hasSpellingError = false;

    // Käydään läpi kaikki käyttäjän syötteet
    for (let j = 1; j <= 10; j++) {
        const inputId = 'verbi' + j;
        const userInput = document.getElementById(inputId).value.trim().toLowerCase();

        // Tarkistetaan, onko kenttiä jätetty tyhjäksi
        if (userInput === "") {
            emptyField = true;
            document.getElementById(inputId).style.borderColor = "red";  // Muutetaan kenttä punaiseksi, jos käyttäjä on tehnyt virheitä
        } else {
            document.getElementById(inputId).style.borderColor = ""; // Palautetaan normaali väri
        }

        // Tarkistetaan, onko syötteessä kirjoitusvirhe
        if (!Verbs.includes(userInput) && userInput.match(/^[a-z]+$/)) {
            hasSpellingError = true;
            document.getElementById(inputId).style.borderColor = "red"; // Punainen kenttä taas kirjoitusvirheelle
        }

        // Tarkistetaan, että syöte sisältää vain kirjaimia ja että verbi löytyy listaltamme
        if (userInput.match(/^[a-z]+$/) && Verbs.includes(userInput)) {
            syötetytVerbit.push(userInput);
        } else if (!hasSpellingError) {
            isValid = false;
            break;
        }
    }

    // Virheilmoitus, jos käyttäjä jättää jonkin kentistä tyhjäksi
    if (emptyField) {
        document.getElementById("message").textContent = "Muistathan täyttää kaikki kentät!";
        document.getElementById("message").style.color = "red";
    }
    // Virheilmoitus, jos käyttäjän syötteessä kirjoitusvirhe
    else if (hasSpellingError) {
        document.getElementById("message").textContent = "Oho, nyt taisi tulla kirjoitusvirhe! Kokeilepa uudelleen.";
        document.getElementById("message").style.color = "red";
    }
    // Jos kaikki verbit on oikein
    else if (isValid && syötetytVerbit.length === 10) {
        document.getElementById("message").textContent = "Jee, muistit 10 verbiä englanniksi!";
        document.getElementById("message").style.color = "green";

        // Lauseet käyttäjän syöttämistä verbeistä
        let lauseet = "";
        lauseet += `<p>We ${syötetytVerbit[0]} together.</p>`;
        lauseet += `<p>I like to ${syötetytVerbit[1]}.</p>`;
        lauseet += `<p>He might ${syötetytVerbit[2]}.</p>`;
        lauseet += `<p>I would like to ${syötetytVerbit[3]} tomorrow.</p>`;
        lauseet += `<p>You could ${syötetytVerbit[4]}.</p>`;
        lauseet += `<p>They ${syötetytVerbit[5]} with us.</p>`;
        lauseet += `<p>She wants to ${syötetytVerbit[6]}.</p>`;
        lauseet += `<p>We could ${syötetytVerbit[7]} here.</p>`;
        lauseet += `<p>We ${syötetytVerbit[8]}.</p>`;
        lauseet += `<p>I should ${syötetytVerbit[9]} more.</p>`;

        document.getElementById("sentences").innerHTML = lauseet;
    }
    // Muut virheet, kuten ei kelvollisia merkkejä
    else {
        document.getElementById("message").textContent =
            'Verbikone osaa lukea pelkästään kirjaimia, ja syötettävät verbit pitää löytyä listalta! Älä siis syötä numeroita tai muita merkkejä.';
        document.getElementById("message").style.color = "red";
    }
}

