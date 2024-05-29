// Récupérer le bouton de téléchargement
const downloadButton = document.getElementById('download-button');

// Ajouter un écouteur d'événement "click" au bouton
downloadButton.addEventListener('click', () => {

  // Télécharger le fichier PDF à partir de l'URL spécifiée
  downloadPDF('/file/CV de Steve Didier ELOUGA NYOBE.pdf');
});

async function downloadPDF(url) {

  // Récupérer le fichier PDF à partir de l'URL
  const response = await fetch(url);

  // Convertir la réponse en un objet Blob
  const blob = await response.blob();

  // Créer un lien de téléchargement invisible
  const anchor = document.createElement('a');
  anchor.style.display = 'none';
  document.body.appendChild(anchor);

  // Définir les attributs du lien de téléchargement
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'CV.pdf';

  // Déclencher un clic sur le lien de téléchargement
  anchor.click();

  // Supprimer le lien de téléchargement
  document.body.removeChild(anchor);
}