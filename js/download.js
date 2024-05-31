// Récupérer le bouton de téléchargement
const downloadButton = document.getElementById('download-button');
console.log("Ceci a ete fait1")

// Ajouter un écouteur d'événement "click" au bouton
downloadButton.addEventListener('click', () => {

  // Télécharger le fichier PDF à partir de l'URL spécifiée
  downloadPDF('file/CV de Steve Didier ELOUGA NYOBE.pdf');
  console.log("Ceci a ete fait7")
});



async function downloadPDF(url) {
  console.log(url)
  // Récupérer le fichier PDF à partir de l'URL
  const response = await fetch(url);

  // Convertir la réponse en un objet Blob
  const blob = await response.blob();
  console.log("Ceci a ete fait3")

  // Créer un lien de téléchargement invisible
  const anchor = document.createElement('a');
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  console.log("Ceci a ete fait4")

  // Définir les attributs du lien de téléchargement
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'CV.pdf';
  console.log("Ceci a ete fait5")
  // Déclencher un clic sur le lien de téléchargement
  anchor.click();

  // Supprimer le lien de téléchargement
  document.body.removeChild(anchor);
  console.log("Ceci a ete fait6")
}