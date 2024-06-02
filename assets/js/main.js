/**
* Template Name: Tempo
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
};

initComments({
  node: document.getElementById("comment-section"),
  defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
  serverName: "cactus.chat",
  siteName: "Project-2",
  commentSectionId: "section1"
})

$(document).ready(function() {
  $('#newsletterForm').on('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      toastr.success("You've been subscribed!","Success");
  });
});


// JSON
let entities = [];

document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            entities = data;
            displayEntities(entities);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayEntities(entities) {
        const tableBody = document.querySelector('#entity-table tbody');
        tableBody.innerHTML = '';

        entities.forEach(entity => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entity.id}</td>
                <td>${entity.name}</td>
                <td>${entity.model}</td>
                <td>
                    <button onclick="editEntity(${entity.id})">Edit</button>
                    <button onclick="deleteEntity(${entity.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.editEntity = function (id) {
        const entity = entities.find(e => e.id === id);
        if (entity) {
            document.getElementById('edit-id').value = entity.id;
            document.getElementById('edit-name').value = entity.name;
            document.getElementById('edit-model').value = entity.model;
            document.getElementById('edit-form').classList.remove('hidden');
        }
    };

    window.deleteEntity = function (id) {
        entities = entities.filter(e => e.id !== id);
        displayEntities(entities);
    };

    document.getElementById('edit-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const id = parseInt(document.getElementById('edit-id').value, 10);
        const name = document.getElementById('edit-name').value;
        const model = document.getElementById('edit-model').value;

        const entityIndex = entities.findIndex(e => e.id === id);
        if (entityIndex !== -1) {
            entities[entityIndex].name = name;
            entities[entityIndex].model = model;
            displayEntities(entities);
            document.getElementById('edit-form').classList.add('hidden');
        }
    });
});
