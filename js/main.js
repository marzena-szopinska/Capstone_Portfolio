// CHANGE NAVIGATION ICONS
const hamburger = document.querySelector('.fas');
let clicked = false;
hamburger.addEventListener('click', () => {
  clicked = !clicked;
  console.log(clicked);
  if(clicked) {
    // change hamburger icon into cross
    hamburger.setAttribute('class', 'fas fa-times');
    navList.setAttribute('class', 'nav-links-s show');
  } else {
    // change cross icon into hamburger icon
    hamburger.setAttribute('class', 'fas fa-bars');
    navList.setAttribute('class', 'nav-links-s');
  }
});


const navigation = document.querySelector('.navigation');
const container = navigation.children[0];
const header = document.querySelector('header');
const body =  document.querySelector('body');
const links = ['Home', 'About', 'Projects', 'Contact'];
const navList = document.createElement('ul');

// GENERATE A LIST OF LINKS
for(let i = 0; i < links.length; i++) {
  let item = document.createElement('li');
  let link = document.createElement('a');
  link.setAttribute('href', '#');
  item.appendChild(link);
  if(links[i] === 'Home'){
    link.className += 'active';
  }
  link.innerHTML = links[i];
  navList.appendChild(item);
}

// ADJUST NAVIGATION REGARDING MEDIA QUERIES
function adjust(media) {
  if (media.matches) {
    navList.setAttribute('class', 'nav-links-l');
    container.appendChild(navList);
    hamburger.style.display = 'none';
  } else {
    navList.setAttribute('class', 'nav-links-s');
    body.insertBefore(navList, header);
    hamburger.style.display = 'block';
  }
}

var media = window.matchMedia("(min-width: 1024px)")
adjust(media);
media.addListener(adjust);
