var projet = document.querySelector(".projet");
var contact = document.querySelector(".contact");
var h3 = projet.querySelector("h3");
var titleProjet = document.querySelector(".titleProjet");
var titleContact = document.querySelector(".titleContact");

projet.addEventListener("click", agrandissementProjet);
contact.addEventListener("click", agrandissementContact);

var agrandi = false;

const mouseMove = document.querySelector(".mouseMove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

document.documentElement.style.cursor = "none";

// fonction pour agrandire les div du sommmaire pour mettre en avant les projet et contacts
function agrandissementProjet() {
  if (agrandi) {
    this.style.width = "";
    this.style.height = "";
    titleProjet.style.marginRight = "";
    titleProjet.style.paddingBottom = "";
    titleProjet.style.paddingTop = "";
    agrandi = false;
    var sommaire = document.querySelector(".sommaire");

    // Appelez la fonction removeProjet en passant la référence à la div projet
    removeProjet(this);
  } else {
    this.style.width = "15em";
    this.style.height = "15em";
    titleProjet.style.paddingBottom = "1.3em";
    titleProjet.style.paddingTop = "1.1em";
    titleProjet.style.marginRight = "2em";
    titleContact.style.fontSize = "";

    agrandi = true;
    var sommaire = document.querySelector(".sommaire");
    sommaire.style.width = "30em";

    removeContact(contact);

    setTimeout(() => {
      showProjet(this);
    }, 1000);

    if (agrandi === true) {
      contact.style.width = "";
      contact.style.height = "";
    }
  }
}

function agrandissementContact() {
  if (agrandi) {
    this.style.width = "";
    this.style.height = "";
    agrandi = false;
    var sommaire = document.querySelector(".sommaire");

    removeContact(this);
  } else {
    this.style.width = "10em";
    this.style.height = "10em";
    titleProjet.style.marginRight = "";
    titleProjet.style.fontSize = "";
    agrandi = true;
    var sommaire = document.querySelector(".sommaire");
    sommaire.style.width = "30em";

    removeProjet(projet);

    setTimeout(() => {
      showContact(this);
    }, 1000);

    if (agrandi === true) {
      projet.style.width = "";
      projet.style.height = "";
    }
  }
}

function showProjet(e) {
  // Créez une div qui contiendra les listes
  var containerList = document.createElement("div");
  containerList.classList.add("container-list");

  var containerList1 = document.createElement("div");
  containerList1.classList.add("container-list1");
  containerList1.id = "cl1";
  var containerList2 = document.createElement("div");
  containerList2.classList.add("container-list2");
  containerList2.id = "cl1";

  var titleList1 = document.createElement("h2");
  titleList1.textContent = "dev web";

  var titleList2 = document.createElement("h2");
  titleList2.textContent = "dev gaming";

  // Créez un élément de liste <ul>
  var listeUl1 = document.createElement("ul");
  var listeUl2 = document.createElement("ul");

  // Créez trois éléments de liste <li>
  for (var i = 1; i <= 3; i++) {
    var listItem1 = document.createElement("li");
    listItem1.textContent = "Point " + i;
    listeUl1.appendChild(listItem1);
  }

  for (var i = 1; i <= 3; i++) {
    var listItem2 = document.createElement("li");
    listItem2.textContent = "Point " + i;
    listeUl2.appendChild(listItem2);
  }

  // Ajoutez les div enfant a leurs parents ainsi que les titres et les listes
  containerList.appendChild(containerList1);
  containerList.appendChild(containerList2);

  containerList1.appendChild(titleList1);
  containerList2.appendChild(titleList2);

  containerList1.appendChild(listeUl1);
  containerList2.appendChild(listeUl2);

  // Ajoutez la div "listContainer" à la div "projet"
  e.appendChild(containerList);
}

function removeProjet(e) {
  // Sélectionnez la div qui contiendra les listes
  var containerList = e.querySelector(".container-list");

  // Supprimez la div des listes s'il existe
  if (containerList) {
    containerList.remove();
  }
}

function showContact(e) {
  var containerContact = document.createElement("div");
  containerContact.classList.add("container-contact");

  var listeUl3 = document.createElement("ul");
  listeUl3.classList.add("ul-contact");

  // liste github
  var listItem3 = document.createElement("li");
  listItem3.innerHTML =
    '<a href="lien_vers_votre_page.html"><img src="./logo/github.jpg" alt="réseaux"></a>';
  listeUl3.appendChild(listItem3);
  listItem3.id = "li";
  listItem3.classList.add("github");

  // liste linkedin
  var listItem4 = document.createElement("li");
  listItem4.innerHTML =
    '<a href="lien_vers_votre_page.html"><img src="./logo/linkedin.png" alt="réseaux"></a>';
  listeUl3.appendChild(listItem4);
  listItem4.id = "li";
  listItem4.classList.add("linkedin");

  // liste insta
  var listItem5 = document.createElement("li");
  listItem5.innerHTML =
    '<a href="lien_vers_votre_page.html"><img src="./logo/instagramme.png" alt="réseaux"></a>';
  listeUl3.appendChild(listItem5);
  listItem5.id = "li";
  listItem5.classList.add("insta");

  containerContact.appendChild(listeUl3);

  e.appendChild(containerContact);
}

function removeContact(e) {
  var containerContact = e.querySelector(".container-contact");

  if (containerContact) {
    containerContact.remove();
  }
}
