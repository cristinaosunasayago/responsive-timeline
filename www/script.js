const fragment = document.createDocumentFragment();
const card= document.getElementById("card")
const fetchData = async () => {
    const res = await fetch('./zelda-timeline.json');
    const data = await res.json();
    console.log(data)
    data.sort((a, b) => {
      return a.date - b.date;
      });
    console.log(data);    
    pintarCards(data);
  };
  
  // timeline zelda
  const pintarCards = (data) => {
    console.log("entramos a pintar");
    console.log(data);
    console.log(card);
    data.forEach((item) => {
      console.log(item.title);
      card.querySelector('h2').textContent = item.date;
      card.querySelector('h3').textContent = item.title;
      card.querySelector('img').src = item.image;
      card.querySelector('p').textContent = item.text;
      const clone = card.cloneNode(true);
      fragment.appendChild(clone);
    });
    card.shift();
    card.appendChild(fragment);
    
  };
  fetchData()