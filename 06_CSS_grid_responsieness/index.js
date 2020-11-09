const API_ENDPOINT = "https://saurav.tech/NewsAPI/everything/cnn.json";
const TOTAL_ARTICLES_IN_ONE_FETCH = 6;

const loadMoreButton = document.querySelector(".load-more");

const displayNewsItem = (item, divToAttachTo) => {


  // format time and date
  const time = item.publishedAt.split("T");
  time[1] = time[1].replace("Z", "");
  time[1] = time[1].slice(0, -3);

  // create an article body
  newsContainer = document.createElement("div");
  newsContainer.classList = "news-item";
  newsContainer.innerHTML = `
  <img src="${item.urlToImage}" >
  <h1>${item.title}</h1>
  <p class="info">${time[0]}, ${time[1]}<p>
  <p class="info" by <span class="author">${item.author || " "}</span></p>
  <p class="content">${item.description}   
  </p>
  <div class="news-footer"><a href="${
    item.url
  }">Click to open the article</a></div>    
  `;

  // when article clicked go to the original page
  newsContainer.addEventListener("click", () => {
    window.open(item.url);
  });

  // add article to the content holder
  divToAttachTo.appendChild(newsContainer);

  return newsContainer;
};

const loadNews = (scrollUp) => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {

      // select the content holder 
      const contentDiv = document.querySelector(".content-container");

      // this holds the first created article in the batch so I know where to scroll to 
      let firstCreatedNewsContainer;
      let i = TOTAL_ARTICLES_IN_ONE_FETCH;
      while (i > 0) {

        // get a random articles from the fetch data and check if they have title and content not null
        const rand = Math.floor(Math.random() * (data.articles.length - 1));

        if (
          data.articles[rand].title !== null &&
          data.articles[rand].content !== null
        ) {
          const createdNewsContainer = displayNewsItem(
            data.articles[rand],
            contentDiv
          );
          // save a reference to the first article 
          if (i === TOTAL_ARTICLES_IN_ONE_FETCH) {
            firstCreatedNewsContainer = createdNewsContainer;
          }
          i--;
        }
      }
      //if scroll up allowed, scroll to the article 
      if (scrollUp) {
        firstCreatedNewsContainer.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
};

//load more button handle 
loadMoreButton.addEventListener("click", () => {
  loadNews(1);
});

window.addEventListener("load", () => {
  loadNews(0);
});
