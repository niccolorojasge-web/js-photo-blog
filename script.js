// 1️ Selezione elementi HTML


const container = document.getElementById("container");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay-img");
const closeBtn = document.querySelector(".close-btn");

// 2️ Endpoint API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

// 3️ Chiamata API
axios.get(endpoint)
  .then(response => {
    const posts = response.data;
    let cardsHTML = "";

    // 4️ Creazione card
    posts.forEach(post => {
      cardsHTML += `
        <figure class="card">
          <div class="pin">
            <img src="pin.svg" alt="">
          </div>

          <div class="wrap-image">
            <img class="img-va" src="${post.url}" alt="${post.title}">
          </div>

          <figcaption class="text">
            <h2>${post.title}</h2>
            <p>${post.date}</p>
          </figcaption>
        </figure>
      `;
    });

    // 5️ Inserimento nel DOM
    container.innerHTML = cardsHTML;

    // 6️Click sulle immagini → overlay
    const images = document.querySelectorAll(".img-va");

    images.forEach(img => {
      img.addEventListener("click", () => {
        overlayImg.src = img.src;       
        overlay.classList.remove("hidden"); 
      });
    });
  })
  .catch(error => {
    console.error("Errore API:", error);
  });

// 7️ Chiusura overlay
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  });

   

