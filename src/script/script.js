function valider() {
  let tab = new Array();

  let lettres =
    "abcdeéfghijklmnopqrstuvwxyz-ABCDEÉFGHIJKLMNOPQRSTUVWXYZ' '".split("");

  // let images = lettres.map((el) => "src/img/" + el + ".png");
  let images = lettres.map((el) => {
    if (el === " ") {
      return "src/img/espace.png";
    }
    return "src/img/" + el + ".png";
  });

  const conteneur = document.getElementById("conteneur");
  conteneur.innerHTML = "";

  let mot = document.getElementById("mot").value;
  let count = 0;

  while (count < mot.length) {
    let lettre = mot.substring(count, count + 1);
    let index = lettres.indexOf(lettre);
    getImage(index, count);
    count++;
  }

  function getImage(idx, count) {
    let image = new Image();
    let url = images[idx];
    image.onload = function () {
      tab.push(image);
      if (tab.length == mot.length) trier();
    };
    image.onerror = function () {
      console.log("erreur avec image : " + url);
    };
    image.src = url;
    image.classList.add(count);
  }
  function trier() {
    tab.sort((a, b) => a.className - b.className);
    for (let i = 0; i < tab.length; i++) conteneur.appendChild(tab[i]);
  }
}
