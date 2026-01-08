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
            <div class="card">
            <h2>${title}</h2>
            <p>${date}</p>
        </div>`


        });
        output.innerHTML = postOutput
    })
    .catch()

