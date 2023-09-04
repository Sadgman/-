let current
let addOptionn
let animecapsn

document.addEventListener("DOMContentLoaded", function rae(){
  current = rae
  document.body.innerHTML = ""
  const EDS = `<header id="EDR">
  <h2 id="fan">ANIME FAN SITE</h2>
      <nav id="lolo">
          <a class="total" href="">Historia</a>
          <a class="total" href="https://chat.whatsapp.com/EsJmGTC0t0s5nTkbNeC2gq">Grupo</a>
          <a class="total" href="https://api.whatsapp.com/send/?phone=+50258482434">Contacto</a>
      </nav>
  </header>
  <section id="section-poster"></section>`
  document.body.insertAdjacentHTML("afterbegin",EDS)
  const section_poster = document.querySelector("#section-poster")
  fetch("anime.json").then(response => response.json()).then(data => {
    for(let namean in data.name){
      const anime_caps_option_poster = `
      <img class="poster" id="${namean}" src="${data.name[namean].poster.principal}" alt="${data.name[namean].poster.alternativa}">`
      section_poster.insertAdjacentHTML("afterbegin",anime_caps_option_poster)
    }
    document.querySelectorAll(".poster").forEach(imagen => imagen.addEventListener("click", function animecaps(anime){
      history.pushState({page: 2}, "anime info");
      prevAnime = anime;
      animecapsn = animecaps
      current = animecaps
      document.body.innerHTML = ""
      const anime_caps_option_present = `
      <header id="container-poster">
          <img id="poster-present" src="${data.name[anime.target.id].poster.principal}" alt="${data.name[anime.target.id].poster.alternativa}">
        <section id="container-text-poster">
          <h2 id="name-poster-present">${anime.target.id}</h2>
          <p id="poster-description-present">${data.name[anime.target.id].description}</p>
        </section>
      </header>
      <ol id="cap-num-ep-container">
      </ol>
      `
      document.body.insertAdjacentHTML("afterbegin", anime_caps_option_present)
      for(capi in data.name[anime.target.id].caps){
        const cap_num_ep = `
          <a class="cap-num-ep">${capi}</a>
        `
        document.querySelector("#cap-num-ep-container").insertAdjacentHTML("afterbegin",cap_num_ep)
      }
      document.querySelectorAll(".cap-num-ep").forEach(link => link.addEventListener("click", function addOption(cap){
        document.body.innerHTML = ""
        history.pushState({page: 3}, "video anime");
        current = addOption
        addOptionn = addOption
        const EDR = `
        <header id="EDR">
          <h2>ANIME FAN SITE</h2>
        </header>
        <a id="back-button"></a>
        `
        document.body.insertAdjacentHTML("afterbegin",EDR)
          
        const videocode = `
        <section id="video">
          <nav id="bar">
            <a class="op">Mega</a>
            <a class="op">OnlyFans</a>
          </nav>
          <iframe id="va" src="${data.name[anime.target.id].caps[cap.target.textContent].mega}" width="640px" height="360px" frameborder="0" allowfullscreen></iframe>
        </section>
        `
        document.querySelector("#EDR").insertAdjacentHTML("afterend", videocode);
        document.querySelector("#back-button").addEventListener("click", function(){rae()})

        document.querySelectorAll(".op").forEach(op => op.addEventListener("click", function change(local){
          if(local.target.textContent == "Mega"){
            va.src = data.name[anime.target.id].caps[cap.target.textContent].mega;
          }
          else if(local.target.textContent == "OnlyFans"){
            va.src = data.name[anime.target.id].caps[cap.target.textContent].onlyfans;
          }
        }))

      }))
      
    }))
    window.addEventListener("popstate", function(){
      console.log(current)
      if(current){
        if(current == addOptionn){
          animecapsn(prevAnime)
        }
        else if(current == animecapsn){
          rae()
        }
    }}) 
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  })
})
