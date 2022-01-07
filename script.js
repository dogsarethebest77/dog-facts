const factElement = document.getElementById('fact');
const pictureElement = document.getElementById('picture');
const loading = document.getElementById('loading');

displayNewFact();

pictureElement.onload = function() {
  const fact = getFact();
  factElement.innerText = fact;
  loading.hidden = true;
  pictureElement.hidden = false;
};

function getFact() {
  const numberOfFacts = facts.length;
  const randomIndex = Math.floor(Math.random() * numberOfFacts);
  return facts[randomIndex].fact;
}

async function displayNewFact() {
  loading.hidden = false;
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  pictureElement.src = data.message;
}