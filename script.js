//seleziono documento di output
const output = document.getElementById("container")
//creiamo ref a endpoint
const outputEndpoint = "https://lanciweb.github.io/demo/api/pictures/"
//creiamo la chiamata axios 
axios.get(outputEndpoint)
    .then(response => {
        const posts = response.data;
        //console.log(posts)
        let postOutput = "";
        posts.forEach(post => {
            const title = post.title
            const date = post.date
            postOutput += `
        <figure class="card">
            <div class="pin">
             <img src="pin.svg" alt="">
            </div>
            <div class="wrap-image">
                <img class="img-va" src="jucentuss.png" alt="">
            </div>
            <figure-caption class="text">
              <h2>${title}</h2>
              <p>${date}</p>
            </figure-caption>
        </figure>`


        });
        output.innerHTML = postOutput
    })
    .catch()

