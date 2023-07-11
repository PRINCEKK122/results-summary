const ul = document.getElementById("icon-category");
const scoresAverage = document.getElementById("scores-average");
const scores = [];

const createListItem = (element, {category, score, icon}) => {
  scores.push(score);
  const li = document.createElement(element);

  const categoryDiv = document.createElement("div");
  const img = document.createElement("img");
  
  categoryDiv.setAttribute("class", category.toLowerCase());
  img.setAttribute("src", icon);
  img.setAttribute("alt", "");
  
  const categorySpan = document.createElement("span");
  categorySpan.textContent = category;

  categoryDiv.appendChild(img)
  categoryDiv.appendChild(categorySpan);
  li.appendChild(categoryDiv);
  
  const ratingDiv = document.createElement("div");
  const ratingScore = document.createElement("span");
  const percentage = document.createElement("span");
  
  ratingDiv.setAttribute("class", "rating");
  ratingScore.setAttribute("class", "score");
  
  ratingScore.textContent = score;
  percentage.textContent = "/ 100";
  ratingDiv.appendChild(ratingScore);
  ratingDiv.appendChild(percentage);
  li.appendChild(ratingDiv);
  
  ul.appendChild(li);
};

// load the elements from data.json
const xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json");

xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
        const data = JSON.parse(this.response);

        data.forEach(item => {
            createListItem("li", item)
        });

        const average = scores.reduce((accumulator, currentVal) => accumulator + currentVal) / scores.length;
        scoresAverage.textContent = Math.floor(average);
    }
}

xhr.send();
