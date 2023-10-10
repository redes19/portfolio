var projet = document.querySelector(".projet");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");
var h3 = projet.querySelector("h3");
var titleProjet = document.querySelector(".titleProjet");
var titleAbout = document.querySelector(".titleAbout");
var titleContact = document.querySelector(".titleContact");

// projet.addEventListener("click", agrandissementProjet);
// contact.addEventListener("click", agrandissementContact);

projet.addEventListener("click", () => agrandissementProjet(projet));
about.addEventListener("click", () => agrandissementAbout(about));
contact.addEventListener("click", () => agrandissementContact(contact));


var agrandi1 = false;
var agrandi2 = false;
var agrandi3 = false;

// fonction pour agrandire les div du sommmaire pour mettre en avant les projet et contacts
function agrandissementProjet(e) {
  if (agrandi1) {
    e.style.width = "";
    e.style.height = "";
    titleProjet.style.marginRight = "";
    titleProjet.style.paddingBottom = "";
    titleProjet.style.paddingTop = "";
    agrandi1 = false;
    console.log("2" + agrandi1 + " " + agrandi2 + " " + agrandi3);

    // Appelez la fonction removeProjet en passant la référence à la div projet
    removeProjet(e);
  } else {
    e.style.width = "15em";
    e.style.height = "15em";
    titleProjet.style.paddingBottom = "1.3em";
    titleProjet.style.paddingTop = "1.1em";
    titleProjet.style.marginRight = "2em";
    titleContact.style.fontSize = "";
    console.log("1" + agrandi1 + " " + agrandi2 + " " + agrandi3);

    agrandi1 = true;
    agrandi2 = false;
    agrandi3 = false;
    var sommaire = document.querySelector(".sommaire");
    sommaire.style.width = "30em";

    setTimeout(() => {
      showProjet(e);
    }, 1000);


    contact.style.width = "";
    contact.style.height = "";
    about.style.width = "";
    about.style.height = "";

    removeContact(contact);
    removeAbout(about);
  }
}

function agrandissementAbout(e){
  if(agrandi2){
    e.style.width = "";
    e.style.height = "";
    agrandi2 = false;
    removeAbout(e);

    console.log("5" + agrandi1 + " " + agrandi2 + " " + agrandi3);


  } else {
    e.style.width = "10em";
    e.style.height = "7em";
    
    agrandi1 = false;
    agrandi2 = true;
    agrandi3 = false;
    var sommaire = document.querySelector(".sommaire");
    sommaire.style.width = "30em";

    console.log("6" + agrandi1 + " " + agrandi2 + " " + agrandi3);

    setTimeout(() => {
      showAbout(e);
    }, 1000);

    projet.style.width = "";
    projet.style.height = "";
    contact.style.width = "";
    contact.style.height = "";

    removeProjet(projet);
    removeContact(contact);

  }

}

function agrandissementContact(e) {
  if (agrandi3) {
    e.style.width = "";
    e.style.height = "";
    agrandi3 = false;
    var sommaire = document.querySelector(".sommaire");
    console.log("4" + agrandi1 + " " + agrandi2 + " " + agrandi3);

    removeContact(e);
  } else {
    e.style.width = "10em";
    e.style.height = "10em";

    agrandi2 = false;
    agrandi1 = false;
    agrandi3 = true;

    var sommaire = document.querySelector(".sommaire");
    sommaire.style.width = "30em";
    console.log("3" + agrandi1 + " " + agrandi2 + " " + agrandi3);

    

    setTimeout(() => {
      showContact(e);
    }, 1000);

    projet.style.width = "";
    projet.style.height = "";
    about.style.width = "";
    about.style.height = "";

    removeProjet(projet);
    removeAbout(about);

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

function showAbout(e){
  var containerAbout = document.createElement("div");
  containerAbout.classList.add("container-about");

  var p = document.createElement("p");
  p.classList.add("text-about");

  p.innerHTML = 'Apprenez à me connaître <a href="/about-me/index.html"><img src="/logo/about-me.png"></a>'; 


  containerAbout.appendChild(p);
  e.appendChild(containerAbout);
}

function removeAbout(e){
  var containerAbout = e.querySelector(".container-about");

  if (containerAbout) {
    containerAbout.remove();
  }
}