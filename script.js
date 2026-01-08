//seleziono documento di output
const output = document.getElementById("container")
//creiamo ref a endpoint
const outputEndpoint = "https://lanciweb.github.io/demo/api/pictures/"
//creiamo la chiamata axios 
axios.get(outputEndpoint)
    .then(response => {
const post = response.data;
//console.log(post)
    })
    .catch()

