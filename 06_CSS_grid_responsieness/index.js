const API_ENDPOINT = "https://saurav.tech/NewsAPI/everything/cnn.json";

const displayNewsItem = (item, divToAttachTo) => {
  console.log(item.title);
  
const time = item.publishedAt.split('T');
console.log(time);
time[1] = time[1].replace('Z', '');
time[1] = time[1].slice(0, -3);

// time[0] = time[0].replace('-', '.');

 
  newsContainer = document.createElement("div");
  newsContainer.classList = "news-item"
  newsContainer.innerHTML = `
  <img src="${item.urlToImage}" >
  <h1>${item.title}</h1>
  <p class="info">${time[0]}, ${time[1]}<p>
  <p class="info" by <span class="author">${item.author || ' '}</span></p>
  <p class="content">${item.description}
   
  </p>

  <div class="news-footer"><a href="${item.url}">Click to open the article</a></div>
 
    
    
  `
 
  newsContainer.addEventListener('click', ()=> {
      window.open(item.url);
  })
 
  divToAttachTo.appendChild(newsContainer);
};

const loadNews = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const contentDiv = document.querySelector(".content-container");

      for (let i = 0; i< 10; i++) {
       
        const rand = Math.floor(Math.random() *(  data.articles.length-1));
        console.log(rand);
        displayNewsItem(data.articles[rand], contentDiv);
 
      }

  
      

     
    });
};

window.addEventListener("load", loadNews);
