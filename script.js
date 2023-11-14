let contentGridElement = document.getElementById('contentGrid');

let bookshelf = [
  {
    "id": 1,
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "description": "Alicia Berenson is one-half of a couple—she’s an artist married to her husband, Gabriel. But when Gabriel returns home late one night, she shoots him five times in the face and refuses to speak again. Now she is being held in an institution outside London. When a psychotherapist named Theo Faber becomes obsessed with her case, he finds his way to treat her",
    "picture": "book1.png",
    "genre": "psychological thriller"
  },
  {
    "id": 2,
    "title": "The Maid",
    "author": "Nita Prose",
    "description": "Molly Gray is a maid who has difficulty in social situations, but who takes great pride in her work at the hotel. One day she finds the dead body of Mr. Black, a wealthy real estate tycoon, in one of the guest rooms. In this murder mystery, she must find Mr. Black's killer or risk getting entangled in a dirty plot. And to do so, Molly must rely on those she trusts so they can clean up this mess",
    "picture": "book2.jpg",
    "genre": "mystery"
  },
  {
    "id": 2,
    "title": "The Local Woman Missing",
    "author": "Mary Kubica",
    "description": "Shelby Tebow is the first to go missing. Not long after, Meredith Dickey and her six-year-old daughter, Delilah, vanish just blocks away from where Shelby was last seen, striking fear into their once-peaceful community. After an elusive search that yields more questions than answers, the case eventually goes cold. Now, eleven years later, Delilah shockingly returns",
    "picture": "book3.png",
    "genre": "psychological thriller"
  },
  {
    "id": 3,
    "title": "The Program",
    "author": "Suzanne Young",
    "description": "In Sloane’s world, true feelings are forbidden, teen suicide is an epidemic, and the only solution is The Program. She knows better than to cry in front of anyone. With suicide now an epidimic, one outburst could land her in The Program, the only proven cure. Sloane’s parents have already lost one child; Sloane knows they’ll do anything to keep her alive. She knows that everyone who’s been through The Program returns as a blank slate. Because their depression is gone—but so are their memories",
    "picture": "book4.png",
    "genre": "romance"
  },
  {
    "id": 4,
    "title": "The Wish",
    "author": "Nicholas Sparks",
    "description": "Maggie is a successful photographer living in NYC, living a life one could only dream of… except she has cancer. She started sharing her story online, which blew up her business. A young man comes to work at her gallery, and she begins a friendship with him, eventually telling him the story of her first love. At 16, Maggie got pregnant and was sent to a small town to live with her aunt and “hide” her secret because of her Catholic parents. She’s depressed, isolated, and falling behind in school, until her aunt suggests she get a tutor",
    "picture": "book5.jpg",
    "genre": "romance"
  },
  {
    "id": 6,
    "title": "The Maidens",
    "author": "Alex Michaelides",
    "description": "Mariana finds herself on the idyllic campus of Cambridge University after her niece Zoe's closest friend, Tara, has been murdered. Zoe believes the murderer is Professor Edward Fosca, the handsome and popular Greek tragedy professor on campus. Fosca is charismatic and idolized by his students, especially a group of female students known as The Maidens. Mariana is convinced of Fosca's guilt and is drawn into the investigation, which soon grows more complicated when another body is found",
    "picture": "book6.png",
    "genre": "mystery"
  },
  {
    "id": 7,
    "title": "The Lying Game",
    "author": "Ruth Ware",
    "description": "FOUR FRIENDS. ONE PROMISE. BUT SOMEONE ISN’T TELLING THE TRUTH. Isa and her three best friends used to play the Lying Game, competing to convince people of outrageous stories. Now, after seventeen years of hiding the truth, something terrible has been found on the beach. But their little game had consequences, and as the four converge in present-day Salten, they realize their shared past was not as safely buried as they had once hoped…",
    "picture": "book7.jpg",
    "genre": "psychological thriller"
  },
  {
    "id": 8,
    "title": "Verity",
    "author": "Colleen Hoover",
    "description": "Lowen Ashleigh is a writer who takes the opportunity to complete the last three novels of a bestselling book series because the author, Verity Crawford, is unable to do so for medical reasons. When she moves into the author's house, she sees that Verity has been left unresponsive after an accident. Lowen soon discovers an autobiographical manuscript by Verity, which contains dark secrets about Verity's life. But as Lowen's feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife's words",


    "picture": "book8.png",
    "genre": "romance"
  },
  {
    "id": 9,
    "title": "The Last to Vanish",
    "author": "Megan Miranda",
    "description": "Years ago, Abigail Lovett fell into a job she loves, managing an Inn in the mountain town of Cutter’s Pass, known for its outdoor offerings, with access to the Appalachian trail and its mysterious history. The string of unsolved disappearances that has haunted the town is once again thrust into the spotlight when journalist Landon West, who was staying at the inn to investigate the story of the vanishing trail, then disappears himself",


    "picture": "book9.jpg",
    "genre": "mystery"
  }
 
];


function loadBooks(genre = 'all') {
      displayBookshelf(genre);
    }
    loadBooks();

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
    });
  AOS.init({
        duration: 800,  
        easing: 'ease-in-out', 
        once: true        
      });
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection !== "item") {
    loadBooks(urlSection);
  } else {
    displayIndividualBook(urlID);
  }
});

function displayBookshelf(genre) {
  contentGridElement.innerHTML = '';
  for (let i = 0; i < bookshelf.length; i++) {
    if (bookshelf[i]["genre"] === genre || genre === "all" || genre === null) {
      createBookPreview(bookshelf[i]);
    }
  }
}

function createBookPreview(book) {
  let newPreviewElement = document.createElement("DIV");
  newPreviewElement.classList.add("contentItem");

  let newPreviewTitle = document.createElement("H2");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = book["title"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewAuthor = document.createElement("H4");
  newPreviewAuthor.style.fontStyle = "italic";
  newPreviewAuthor.innerText = book["author"];
  newPreviewElement.appendChild(newPreviewAuthor);

  let newPreviewDescription = document.createElement("P");
  newPreviewDescription.innerText = book["description"];
  newPreviewElement.appendChild(newPreviewDescription);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");

  newPreviewThumbnail.classList.add(`book-${book["id"]}-thumbnail`);

  if (book["id"] === 2) {
    newPreviewThumbnail.classList.add("book-2-custom-width");
  }
  if (book["id"] === 4) {
    newPreviewThumbnail.classList.add("book-4-custom-width");
  }

  newPreviewThumbnail.src = book["picture"];
  newPreviewElement.setAttribute('data-aos', 'fade-up');
  newPreviewElement.appendChild(newPreviewThumbnail);

  contentGridElement.appendChild(newPreviewElement);
}



document.addEventListener("DOMContentLoaded", function () {
  showWelcomePopup();
});

function showWelcomePopup() {
  var welcomePopup = document.getElementById('welcomePopup');
  welcomePopup.style.display = 'block';
}

function closeWelcomePopup() {
  var welcomePopup = document.getElementById('welcomePopup');
  welcomePopup.style.display = 'none';
}

