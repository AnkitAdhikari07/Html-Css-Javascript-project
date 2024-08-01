const apiKey = 'be82c7cb91f748ed8b3fdec0881a1001';
const blog_Container = document.getElementById("blog-container");
const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-button")

async function fetch_Random_News(){
    try{
        const api_Url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=60&apiKey=${apiKey}`;
        const response = await fetch(api_Url);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.error("Error fetching random news", error);
        return []; 
    }
}


search_button.addEventListener('click', async ()=>{
    const query = search_input.value.trim();
    if(query != " "){
        try{
            const articles = await fetch_News_Query(query);
            display_Blogs(articles);
        }
        catch(error){
            console.log("Error fetching news by query", error);
        }
    }
})


async function fetch_News_Query(query){
    try{
        const api_Url = `https://newsapi.org/v2/everything?q=${query}&pageSize=60&apiKey=${apiKey}`;
        const response = await fetch(api_Url);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.error("Error fetching random news", error);
        return []; 
    }
}


// --------------------- Display content on Webpage ----------------------------------
function display_Blogs(articles){
    blog_Container.innerHTML = "";
    articles.forEach((article) =>{
        const blog_card = document.createElement("div");
        blog_card.classList.add("blog-card");

        // For image tag
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        // For heading tag
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30? article.title.slice(0, 30) + "....." : article.title;
        title.textContent = truncatedTitle;
        
        // For Paragraph tag
        const desc = document.createElement("p");
        desc.textContent = article.description;
        // const truncatedDesc = article.description.length > 100? article.description.slice(0, 70) + "....." : article.description;
        // desc.textContent = truncatedDesc;

        // appending the content
        blog_card.appendChild(img);
        blog_card.appendChild(title);
        blog_card.appendChild(desc);
        blog_Container.appendChild(blog_card);

        blog_card.addEventListener('click', ()=>{
            window.open(article.url, "_blank");
        });
    });
};


(async ()=>{
    try{
        const articles = await fetch_Random_News();
        console.log(articles);
        display_Blogs(articles);
    }
    catch(error){
        console.error("Error fetching random news", error);
    }
})();