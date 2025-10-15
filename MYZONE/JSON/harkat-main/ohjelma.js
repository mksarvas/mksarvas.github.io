// Pääkaupunkien tietokanta
const paakaupungit = {
    "helsinki": "Suomi",
    "tukholma": "Ruotsi",
    "oslo": "Norja",
    "kööpenhamina": "Tanska",
    "pariisi": "Ranska",
    "berliini": "Saksa",
    "rooma": "Italia"
  };

  // Maiden liput
  const tiedot = {
    "helsinki": { maa: "Suomi", lippu: "https://flagcdn.com/w320/fi.png" },
    "tukholma": { maa: "Ruotsi", lippu: "https://flagcdn.com/w320/se.png" },
    "oslo": { maa: "Norja", lippu: "https://flagcdn.com/w320/no.png" },
    "pariisi": { maa: "Ranska", lippu: "https://flagcdn.com/w320/fr.png" },
    "berliini": { maa: "Saksa", lippu: "https://flagcdn.com/w320/de.png" },
    "rooma": { maa: "Italia", lippu: "https://flagcdn.com/w320/it.png" }
  };
  
  document.getElementById("haeMaa").addEventListener("click", function() {
    const syote = document.getElementById("paakaupunki").value.toLowerCase().trim();
    const vastausLaatikko = document.getElementById("vastaus");
    const lippuKuva = document.getElementById("lippu");
  
    if (tiedot[syote]) {
      vastausLaatikko.textContent = `${capitalize(syote)} sijaitsee maassa: ${tiedot[syote].maa}`;
      lippuKuva.src = tiedot[syote].lippu;
      lippuKuva.style.display = "block";
    } else {
      vastausLaatikko.textContent = "Pääkaupunkia ei löydy tietokannasta.";
      lippuKuva.style.display = "none";
    }
  });
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  


  //Funktiot
  document.addEventListener("DOMContentLoaded", function() {
    const nappi = document.getElementById("haeMaa");
  
    nappi.addEventListener("click", function() {
      const syote = document.getElementById("paakaupunki").value.toLowerCase().trim();
      const vastausLaatikko = document.getElementById("vastaus");
  
      if (paakaupungit[syote]) {
        vastausLaatikko.textContent = `${capitalize(syote)} sijaitsee maassa ${paakaupungit[syote]}.`;
      } else {
        vastausLaatikko.textContent = "Pääkaupunkia ei löydy tietokannasta.";
      }
    });
  });
  


  
  // Funktio joka muuttaa alkukirjaimen isoksi
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }