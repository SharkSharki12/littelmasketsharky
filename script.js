window.onload = function() {
  alert("Bienvenue sur le site officiel de Littelmask & Sharky !");
  
  // Mettre à jour l'heure actuelle dans le footer
  const footer = document.querySelector("footer");
  const date = new Date();
  const heure = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  footer.innerHTML += ` | Heure actuelle : ${heure}:${minutes}`;
};

const youtubeLink = document.querySelector('a[href*="youtube.com"]');

youtubeLink.addEventListener("mouseover", function() {
  youtubeLink.textContent = "Clique ici pour notre chaîne YouTube !";
});

youtubeLink.addEventListener("mouseout", function() {
  youtubeLink.textContent = "Chaîne YouTube";
});
