const fragment = document.createDocumentFragment();
const cards = document.getElementById("cards");


const printData = (data) => {
  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    const itemH2 = document.createElement("h2");
    const itemH3 = document.createElement("h3");
    const itemImg = document.createElement("img");
    const itemP = document.createElement("p");
    
    itemH2.textContent = item.date;
    itemH3.textContent = item.title;
    itemImg.src = item.image;
    itemP.textContent = item.text;

    itemDiv.appendChild(itemH2);
    itemDiv.appendChild(itemH3);
    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemP);

    cards.appendChild(itemDiv);
  });
};

const fetchData = async () => {
  const res = await fetch('./zelda-timeline.json');
  const data = await res.json();
  data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  
  return data;
};


fetchData().then(data => printData(data));