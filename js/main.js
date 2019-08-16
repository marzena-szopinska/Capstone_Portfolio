// FORM VALIDATION
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const form = document.querySelector('.form');
// const inputsubject = document.getElementById('subject');
const inputMessage = document.getElementById('message');
const submitBtn = document.querySelector('.submit-btn');
// display the button from the beggining so it wont be clickable
submitBtn.disabled = true;
// regular expresion for email validation
const regEx = /\S+@\S+\.\S+/;

function checkInput() {
  if(inputName.value.trim() !== '' && regEx.test(inputEmail.value)  && inputMessage.value.trim() !== ''){
    submitBtn.style.backgroundColor = '#fff';
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = '#C8C8C8';
    submitBtn.disabled = true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('This form is only for demonstration purpose.');
});

// CHANGE NAVIGATION ICONS
const hamburger = document.querySelector('.fas');
let clicked = false;
hamburger.addEventListener('click', () => {
  clicked = !clicked;
  console.log(clicked);
  if(clicked) {
    // change hamburger icon into cross
    hamburger.setAttribute('class', 'fas fa-times');
    // add the show class to the navigation
    navList.setAttribute('class', 'nav-links-s show');
  } else {
    // change cross icon into hamburger icon
    hamburger.setAttribute('class', 'fas fa-bars');
    // remove the show class from the navigation
    navList.setAttribute('class', 'nav-links-s');
  }
});

// ALERT BOX
// const cvButton = document.querySelector('.cv');
// cvButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   alert('Comming soon!');
// });

const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');
const body =  document.querySelector('body');
const links = ['Home', 'About', 'Projects', 'Contact'];
const navList = document.createElement('ul');

// GENERATE A LIST OF LINKS
for(let i = 0; i < links.length; i++) {
  let item = document.createElement('li');
  let link = document.createElement('a');
  link.setAttribute('href', `#${links[i].toLowerCase()}`);
  link.setAttribute('class', `${links[i].toLowerCase()}-marker`);
  item.appendChild(link);
  if(links[i] === 'Home'){
    link.className += ' active';
  }
  link.innerHTML = links[i];
  navList.appendChild(item);
}
navigation.appendChild(navList);

// CLOSE NAVIGATION WHEN LINK TO DIFFERENT SECTION HAS BEEN CLICKED
navList.addEventListener('click', (e)=> {
  if(navList.className === 'nav-links-s show'){
    if(e.target.tagName === 'A'){

        navList.setAttribute('class', 'nav-links-s');
        clicked = false;
        // change cross icon into hamburger icon
        hamburger.setAttribute('class', 'fas fa-bars');
      }
  }
});

// ADJUST NAVIGATION REGARDING MEDIA QUERIES
function adjust(media) {
  if (media.matches) {
    navList.setAttribute('class', 'nav-links-l');
    hamburger.style.display = 'none';
  } else {
    navList.setAttribute('class', 'nav-links-s');
    hamburger.style.display = 'block';
  }
}

var media = window.matchMedia("(min-width: 1024px)")
adjust(media);
media.addListener(adjust);


// jQuery SMOOTH SCROLL
$('ul a, .plus a').on('click', function(e){
  if(this.hash !== ''){
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
  );
  }
});

// SCROLL SPY
const linksToPages = $('ul a'),
section = $('section');

$(document).on('scroll', function(){
  let currentScrollPos = $(document).scrollTop();
  section.each(function(){
    const self = $(this);
    if(self.offset().top < (currentScrollPos + 250) && (currentScrollPos + 250) < (self.offset().top + self.outerHeight())){
      let targetClass = '.' + self.attr('class') + '-marker';
      linksToPages.removeClass('active');
      $(targetClass).addClass('active');
    }
  });
});
