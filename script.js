let menuButton = document.getElementsByClassName('menu-opener')[0];
menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
  let menuButton = document.querySelector('aside');
  let allParagraphs = document.getElementsByTagName('p');
  let logo = document.querySelector('.logo');
  let avatar = document.querySelector('.avatar-container');

  menuButton.classList.toggle('open-menu')
  menuButton.classList.toggle('closed-menu');

  logo.classList.toggle('hidden');
  avatar.classList.toggle('hidden');

  for(let i = 0; i < allParagraphs.length; i+= 1) {
    allParagraphs[i].classList.toggle('hidden');
  }
}

console.log(menuButton)