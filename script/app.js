
// --- Changing H1 and Images (Bg + small image) ---->

//-- identifying elements------
const mainH1Element = document.getElementById('main-h1');
const usaElement = document.getElementById('usa');
const japanElement = document.getElementById('japan');
const canadaElement = document.getElementById('canada');
const turkeyElement = document.getElementById('turkey');

// -- getting text values ------
const usaTextValue = document.getElementById('usa').innerText;
const japanTextValue = document.getElementById('japan').innerText;
const canadaTextValue = document.getElementById('canada').innerText;
const turkeyTextValue = document.getElementById('turkey').innerText;

//-- functions to change wording and bg image ---->

function changeUsaElelment(){
    mainH1Element.textContent = usaTextValue;
    document.body.style.backgroundImage = "linear-gradient(45deg,rgba(26, 20, 37, 0.5),rgba(8, 8, 8, 0.5)), url('https://d1mlmvg7rxfynq.cloudfront.net/places/Bryce%20Canyon%20National%20Park,%20Utah,%20USA.jpg')";
    document.getElementById("sub-image").src = "https://d1mlmvg7rxfynq.cloudfront.net/places/Arches%20National%20Park,%20Utah,%20USA.jpg";
}

function changeJapanElelment(){
    mainH1Element.textContent = japanTextValue;
    document.body.style.backgroundImage = "linear-gradient(45deg,rgba(26, 20, 37, 0.5),rgba(8, 8, 8, 0.5)), url('https://d1mlmvg7rxfynq.cloudfront.net/places/Kiyozumi%20Dera,%20Kyoto,%20Japan.jpg')";
    document.getElementById("sub-image").src = "https://d1mlmvg7rxfynq.cloudfront.net/places/Hiroshima,%20Japan.jpg";
}

function changeCanadaElelment(){
    mainH1Element.textContent = canadaTextValue;
    document.body.style.backgroundImage = "linear-gradient(45deg,rgba(26, 20, 37, 0.5),rgba(8, 8, 8, 0.5)), url('https://d1mlmvg7rxfynq.cloudfront.net/places/Moraine%20Lake,%20Canada.jpg')";
    document.getElementById("sub-image").src = "https://d1mlmvg7rxfynq.cloudfront.net/places/Banff,%20AB,%20Canada.jpg";
}

function changeTurkeyElelment(){
    mainH1Element.textContent = turkeyTextValue;
    document.body.style.backgroundImage = "linear-gradient(45deg,rgba(26, 20, 37, 0.5),rgba(8, 8, 8, 0.5)), url('https://d1mlmvg7rxfynq.cloudfront.net/places/Halfeti,%20Turkey.jpg')";
    document.getElementById("sub-image").src = "https://d1mlmvg7rxfynq.cloudfront.net/places/Pertevniyal%20Valide%20Sultan%20Mosque,%20Istanbul,%20Turkey.jpg";
}

//--- event listners - click --->

usaElement.addEventListener('click', changeUsaElelment);
japanElement.addEventListener('click', changeJapanElelment);
canadaElement.addEventListener('click', changeCanadaElelment);
turkeyElement.addEventListener('click', changeTurkeyElelment);

