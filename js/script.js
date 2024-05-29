/* ==================== typing animation =================== */ 
var typed = new Typed(".typing", {
    strings:[" ","Developpeur Web","Designer Web","Ingenieur Logiciel", "Ingenieur Informatique"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Supprimer la classe "active" de tous les éléments de menu
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Ajouter la classe "active" à l'élément de menu cliqué
    item.classList.add('active');
  });
});


