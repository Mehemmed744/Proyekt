document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector(".search-box button");
  const workersContainer = document.getElementById("workers");
  const jobsContainer = document.getElementById("apiJobs");
  

 
  if (workersContainer) {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        workersContainer.innerHTML = "";
        data.results.forEach(user => {
          const card = document.createElement("div");
          card.className = "service-card";
          card.innerHTML = `
            <img src="${user.picture.large}" class="icon">
            <h3>${user.name.first} ${user.name.last}</h3>
            <span>Usta • ⭐ ${(Math.random() * 1 + 4).toFixed(1)}</span>
            <p>${user.location.city}</p>
          `;
          workersContainer.appendChild(card);
        });
        
      })
      .catch(err => console.error(err));
  }


})
const workersSearch=document.getElementById('workerssearch')
const button=document.querySelector('.search')
const firstinput=document.getElementById('firstinput')
const secondinput=document.getElementById('secondinput')
button.addEventListener('click',()=>{
fetch("https://randomuser.me/api/?results=16")
  .then(response => response.json())
  .then(data => {
      workersSearch.innerHTML="";
      data.results.forEach(user=>{
        const card2=document.createElement('div')
        card2.className="service-card"
        card2.innerHTML = `
            <img src="${user.picture.large}" class="icon">
            <h3>${user.name.first} ${user.name.last}</h3>
            <span>${firstinput.value}• ⭐ ${(Math.random() * 1 + 4).toFixed(1)}</span>
            <p>${secondinput.value}</p>
             <p>+1111111</p>
          `;
          workersSearch.appendChild(card2)
      })
    
  })
  .catch(error => console.error(error));

})
data.results.forEach(user => {
  const card = document.createElement("div");
  card.className = "service-card";

  const rating = (Math.random() * 1 + 4).toFixed(1);

  card.innerHTML = `
    <img src="${user.picture.large}" class="icon">
    <h3>${user.name.first} ${user.name.last}</h3>
    <span>Usta • ⭐ ${rating}</span>
    <p>${user.location.city}</p>
    <p>+1111111</p>
  `;

  // ✅ klik zamanı yönləndir
  card.addEventListener("click", () => {
    const url = `details.html?name=${user.name.first} ${user.name.last}&city=${user.location.city}&img=${user.picture.large}&rating=${rating}`;
    window.location.href = "details.html";
  });

  workersContainer.appendChild(card);
});
