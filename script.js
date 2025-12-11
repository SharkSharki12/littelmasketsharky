// === 1️⃣ Message de bienvenue à l'ouverture ===
window.onload = function() {
  alert("Bienvenue sur le site officiel de Littelmask & Sharky !");

  // === 2️⃣ Mettre l'heure actuelle dans le footer ===
  const footer = document.querySelector("footer");
  const date = new Date();
  const heure = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  footer.innerHTML += ` | Heure actuelle : ${heure}:${minutes}`;

  // === 3️⃣ Création du compteur de clics pour YouTube ===
  const youtubeLink = document.querySelector('a[href*="youtube.com"]');
  let clickCount = 0;

  youtubeLink.addEventListener("click", () => {
    clickCount++;
    console.log(`Lien YouTube cliqué ${clickCount} fois`);
  });

  // === 4️⃣ Changement de couleur du header au survol ===
  const header = document.querySelector("header");
  header.addEventListener("mouseover", () => header.style.backgroundColor = "#8B0000");
  header.addEventListener("mouseout", () => header.style.backgroundColor = "#C41414");

  // === 5️⃣ Texte dynamique sur le lien YouTube au survol ===
  youtubeLink.addEventListener("mouseover", function() {
    youtubeLink.textContent = "Clique ici pour notre chaîne YouTube !";
  });

  youtubeLink.addEventListener("mouseout", function() {
    youtubeLink.textContent = "Chaîne YouTube";
  });

  // === 6️⃣ Bouton surprise qui change le texte d'un paragraphe ===
  const main = document.querySelector("main");
  const surpriseBtn = document.createElement("button");
  surpriseBtn.textContent = "Clique ici pour une surprise !";
  surpriseBtn.style.marginTop = "20px";
  surpriseBtn.style.padding = "10px 20px";
  surpriseBtn.style.cursor = "pointer";
  main.appendChild(surpriseBtn);

  const surpriseText = document.createElement("p");
  surpriseText.textContent = "";
  main.appendChild(surpriseText);

  surpriseBtn.addEventListener("click", function() {
    const messages = [
      "🎉 Tu as trouvé une surprise !",
      "✨ Merci de visiter notre site !",
      "😎 Continue de nous suivre sur YouTube !"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    surpriseText.textContent = randomMsg;
  });

  // === 7️⃣ Message secret au clic sur le header ===
  header.addEventListener("click", function() {
    alert("🤫 Message secret : Littelmask & Sharky vous remercient !");
  });
};
