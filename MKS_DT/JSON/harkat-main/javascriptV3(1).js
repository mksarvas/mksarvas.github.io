const sentenceTemplates = [
  "Lucy lives in a {} house.",
  "He has a {} car.",
  "They saw a {} bird in the tree.",
  "She wore a {} dress to the party.",
  "It's a {} day today.",
  "I read a {} book last night.",
  "We had a {} party.",
  "That dog is very {}.",
  "That's a really {} idea!",
  "My phone is {}."
];

// Näytetään esimerkkilauseet sivulla
window.onload = function () {
  const inputsDiv = document.getElementById('inputs');
  const examplesUl = document.getElementById('exampleSentences');

  for (let i = 0; i < 10; i++) {
    // Luo syötekenttä
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Adjektiivi ${i + 1}`;
    input.id = `adj${i}`;
    inputsDiv.appendChild(input);

    // Näytä esimerkkilause viivalla
    const li = document.createElement('li');
    li.textContent = sentenceTemplates[i].replace("{}", "______");
    examplesUl.appendChild(li);
  }
};

// Lauseiden generointi
function generateSentences() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const adjektiivit = [];
  const errors = [];

  for (let i = 0; i < 10; i++) {
    const adj = document.getElementById(`adj${i}`).value.trim();

    if (adj === '') {
      errors.push(`Adjektiivi ${i + 1} puuttuu.`);
    } else if (!/^[a-zA-Z]+$/.test(adj)) {
      errors.push(`Adjektiivi ${i + 1} sisältää virheellisiä merkkejä.`);
    }

    adjektiivit.push(adj);
  }

  if (errors.length > 0) {
    resultsDiv.innerHTML = '<ul style="color:red;">' + errors.map(e => `<li>${e}</li>`).join('') + '</ul>';
    return;
  }

  for (let i = 0; i < 10; i++) {
    const sentence = sentenceTemplates[i].replace("{}", adjektiivit[i]);
    const p = document.createElement('p');
    p.textContent = sentence;
    resultsDiv.appendChild(p);
  }
}