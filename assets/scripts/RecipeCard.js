// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM

    const shadow = this.attachShadow({ mode: "open" });
    const article = document.createElement("article");
    article.setAttribute("id","article");
    const style = document.createElement("style");
    style.textContent = `* {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
  
    a {
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    article {
      align-items: center;
      border: 1px solid rgb(223, 225, 229);
      border-radius: 8px;
      display: grid;
      grid-template-rows: 118px 56px 14px 18px 15px 36px;
      height: auto;
      row-gap: 5px;
      padding: 0 16px 16px 16px;
      width: 178px;
    }
  
    div.rating {
      align-items: center;
      column-gap: 5px;
      display: flex;
    }
  
    div.rating>img {
      height: auto;
      display: inline-block;
      object-fit: scale-down;
      width: 78px;
    }
  
    article>img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 118px;
      object-fit: cover;
      margin-left: -16px;
      width: calc(100% + 32px);
    }
  
    p.ingredients {
      height: 32px;
      line-height: 16px;
      padding-top: 4px;
      overflow: hidden;
    }
  
    p.organization {
      color: black !important;
    }
  
    p.title {
      display: -webkit-box;
      font-size: 16px;
      height: 36px;
      line-height: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  
    p:not(.title),
    span,
    time {
      color: #70757A;
      font-size: 12px;
    }`;
    shadow.appendChild(style);
    shadow.appendChild(article);
    

  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;
    let article=document.getElementById("article");

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    const img = document.createElement("img");
    img.setAttribute("src", "https://link-to-article.com/recipe-thumbnail.jpg");
    img.setAttribute("alt", "Recipe Title");

    const title = document.createElement("p");
    img.setAttribute("class", "title");

    const title_link = document.createElement("a");
    img.setAttribute("href", "https://link-to-article.com");
    img.innerHTML=`Title`;

    const organization= document.createElement("p");
    organization.setAttribute("class","organization");
    organization.innerHTML=`The Chef's Organization`;

    const div= document.createElement("div");
    div.setAttribute("class","rating");

    const rating_star=document.createElement("span");
    rating_star.innerHTML=`5`;

    const rating_img = document.createElement("img");
    rating_img.setAttribute("src", "/assets/images/icons/5-star.svg");
    rating_img.setAttribute("alt", "5 stars");
    
    const rating_note=document.createElement("span");
    rating_note.innerHTML=`(500)`;
    
    const time= document.createElement("time");
    time.innerHTML=`50 min`;

    const ingredients= document.createElement("p");
    ingredients.setAttribute("class","ingredients");
    ingredients.innerHTML=`Comma, Separated, List, of, Ingredients`;

    title.appendChild(title_link);
    div.appendChild(rating_star);
    div.appendChild(rating_img);
    div.appendChild(rating_note);

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(organization);
    article.appendChild(div);
    article.appendChild(time);
    article.appendChild(ingredients);


    /*
    <img src="https://link-to-article.com/recipe-thumbnail.jpg"
      alt="Recipe Title">
    <p class="title">
      <a href="https://link-to-article.com">Title</a>
    </p>
    <p class="organization">The Chef's Organization</p>
    <div class="rating">
      <span>5</span>
      <img src="/assets/images/icons/5-star.svg" alt="5 stars">
      <span>(500)</span>
    </div>
    <time>50 min</time>
    <p class="ingredients">
      Comma, Separated, List, of, Ingredients
    </p>
    */
    //article.

  }
}

customElements.define("Recipe_card", RecipeCard);
// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
