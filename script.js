window.onload = function() {
  // Message de bienvenue
  alert("Bienvenue sur le site officiel de Littelmask & Sharky !");

  // Heure dans le footer
  const footer = document.querySelector("footer");
  const date = new Date();
  const heure = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  footer.innerHTML += ` | Heure actuelle : ${heure}:${minutes}`;

  // Lien YouTube dynamique et compteur
  const youtubeLink = document.querySelector('a[href*="youtube.com"]');
  let clickCount = 0;
  youtubeLink.addEventListener("click", () => {
    clickCount++;
    console.log(`Lien YouTube cliqué ${clickCount} fois`);
  });
  youtubeLink.addEventListener("mouseover", () => {
    youtubeLink.textContent = "Clique ici pour notre chaîne YouTube !";
  });
  youtubeLink.addEventListener("mouseout", () => {
    youtubeLink.textContent = "Chaîne YouTube";
  });

  // Changement couleur header
  const header = document.querySelector("header");
  header.addEventListener("mouseover", () => header.style.backgroundColor = "#8B0000");
  header.addEventListener("mouseout", () => header.style.backgroundColor = "#C41414");

  // Bouton surprise en bas à gauche
  const surpriseBtn = document.createElement("button");
  surpriseBtn.textContent = "Surprise !";
  surpriseBtn.style.position = "fixed";
  surpriseBtn.style.bottom = "50px";
  surpriseBtn.style.left = "20px";
  surpriseBtn.style.padding = "5px 10px";
  surpriseBtn.style.fontSize = "12px";
  surpriseBtn.style.cursor = "pointer";
  surpriseBtn.style.backgroundColor = "#C41414";
  surpriseBtn.style.color = "white";
  surpriseBtn.style.border = "none";
  surpriseBtn.style.borderRadius = "5px";
  document.body.appendChild(surpriseBtn);

  const surpriseText = document.createElement("p");
  surpriseText.style.position = "fixed";
  surpriseText.style.bottom = "80px";
  surpriseText.style.left = "20px";
  surpriseText.style.backgroundColor = "#FFF3";
  surpriseText.style.padding = "5px 10px";
  surpriseText.style.borderRadius = "5px";
  surpriseText.style.fontSize = "14px";
  document.body.appendChild(surpriseText);

  surpriseBtn.addEventListener("click", function() {
    const messages = [
      "🎉 Tu as trouvé une surprise !",
      "✨ Merci de visiter notre site !",
      "😎 Continue de nous suivre sur YouTube !"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    surpriseText.textContent = randomMsg;
  });

  // Message secret header
  header.addEventListener("click", function() {
    alert("🤫 Message secret : Littelmask & Sharky vous remercient !");
  });
};
