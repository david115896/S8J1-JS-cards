//Fonctionnalité 1 :
let footer = document.getElementsByTagName('footer')[0];

var onButtonClick = function(){
    console.log("clique");
};
footer.addEventListener("click", onButtonClick);

//Fonctionnalité 1-bis :
let numbClick = 1;
var onButtonClickNb = function(){
    console.log(`clique ${numbClick}`);
    numbClick += 1;
};
footer.addEventListener("click", onButtonClickNb);

//Fonctionnalité 2 :
let navBtn = document.querySelector('.navbar-toggler');
let navClass = document.getElementById("navbarHeader")
var clickBtn = function(){
    if  (navClass.classList.contains('collapse')){
        navClass.classList.remove('collapse')
    }else {
        navClass.classList.add('collapse')
    }
};
navBtn.addEventListener("click", clickBtn);


//Fonctionnalité 3 :
var firstCard = document.querySelector('.col-md-4 .btn-group .btn-outline-secondary');
var textRed = function(){
    firstCard.style.color = "red";
};
firstCard.addEventListener("click", textRed);

//Fonctionnalité 4 :
var secondCard = document.querySelectorAll('.col-md-4 .btn-group .btn-outline-secondary')[1];
var textGreen = function(){
    if (secondCard.style.color != "green"){
        secondCard.style.color = "green";
    }else {
        secondCard.style.color = "gray";
    }
};
secondCard.addEventListener("click", textGreen);

//Fonctionnalité 5 :
let navBar = document.querySelector('.navbar');
let styleCss = document.getElementsByTagName("link")[0]

var changeCss = function(event){
    if (styleCss.getAttribute('href') != "style.css") {
    styleCss.setAttribute("href", "style.css"); 
    event.stopPropagation(); //stop la methode click
    }
};
navBar.addEventListener("dblclick", changeCss);

var changeCss = function(){
    if (styleCss.getAttribute('href') == "style.css") {
        styleCss.getAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    }
};
document.addEventListener("dblclick", changeCss);

//Fonctionnalité 6 :
//La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
//Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles.
// Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
let allCards = document.querySelectorAll('.col-md-4 .btn-group .btn-success');

var overCard = function(){
    cardThis = this.closest('.col-md-4');
    img = cardThis.getElementsByTagName('img')[0];
    img = cardThis.getElementsByTagName('img')[0];
    text = cardThis.querySelector('.card-text');
    
    if (text.style.visibility != "hidden"){
        img.style.width = "20%";
        text.style.visibility = "hidden";
    }else {
        img.style.width = "100%";
        text.style.visibility = "visible";
    }
};

allCards.forEach(el => el.addEventListener('mouseover', overCard));

//Fonctionnalité 7 :
//Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite)
// va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

let btnSwitch = document.querySelectorAll('section a')[1];


function insertdNode() {
    let cards = document.querySelectorAll('.col-md-4');
    let stCard = cards[0];
    let lastCard = cards[cards.length-1];
    let parentNode = document.querySelector('.album .row');
        parentNode.insertBefore(lastCard, stCard);
}
btnSwitch.addEventListener("click", insertdNode);

//Fonctionnalité 8 :
//Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==,
// la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau...
// sauf qu'il y a quelques pièges. 
let btnSwitchInver = document.querySelectorAll('section a')[0];


function insertAfter(event) {
    event.preventDefault();
    let cards = document.querySelectorAll('.col-md-4');
    let stCard = cards[0];
    let lastCard = cards[cards.length-1];
    let parentNode = document.querySelector('.album .row');
    parentNode.insertBefore(stCard, lastCard.nextSibling);
}
btnSwitchInver.addEventListener("click", insertAfter);