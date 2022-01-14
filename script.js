const factElement = document.getElementById('fact');
const originalPictureElement = document.getElementById('picture');
const originalPictureLinkElement = document.getElementById('picture-link');
const loading = document.getElementById('loading');

const lightbox = new SimpleLightbox('.gallery a', {
  overlay: true
});


displayNewFact();

originalPictureElement.onload = function() {
  const toRemove = document.getElementsByClassName("additional");

  while (toRemove[0]) {
    toRemove[0].parentNode.removeChild(toRemove[0]);
  }

  const fact = getFact();
  factElement.innerText = fact;
  loading.hidden = true;
  originalPictureElement.hidden = false;
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



  originalPictureElement.src = data.message;
  originalPictureLinkElement.href = data.message;
  lightbox.refresh();
}

async function addImage() {
  loading.hidden = false;
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  newLinkElement = originalPictureLinkElement.cloneNode();
  newImgElement = originalPictureElement.cloneNode();
  originalPictureLinkElement.parentElement.appendChild(newLinkElement);
  newLinkElement.appendChild(newImgElement);
  newLinkElement.classList.add('additional');

  newImgElement.src = data.message;
  newLinkElement.href = data.message;

  newImgElement.onload = function() {
    loading.hidden = true;
  }

  lightbox.refresh();
}