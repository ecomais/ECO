window.onload = function() {

  // const mobileMenu = ` 
  //   <nav id="mobile-menu">
  //   <a href="index.html" >
  //       <img src="src/Gallery/Logo-ECO-Plus-Site.png" alt="logo" class="logo-menu">
  //   </a>
  //   <ul>
  //       <li><a href="index.html" rel="next" target="_self">INICIO</a></li>
  //       <li><a href="../eco+/ecoplus.html" rel="next" target="_self">ECO+</a></li>
  //       <li><a href="../solucoes/solucoes.html" rel="next" target="_self">SOLUÇÕES</a></li>
  //       <li><a href="../cases/cases.html" rel="next" target="_self">CASES</a></li>
  //       <li><a href="../news/news.html" rel="next" target="_self">NEWS</a></li>
  //       <li><a href="../clientes/clientes.html" rel="next" target="_self">CLIENTES</a></li>
  //   </ul>
  //   <a href="../contato/contato.html" rel="next" target="_self" class="bot1">CONTATO</a>
  // </nav>`;
  let active = false;
  let lightTheme = false;
  const body = document.body
  const container = document.querySelector('.container');
  const nav = document.getElementById("mobile-menu");
  const barComponents = document.querySelectorAll('#check, .top, .middle, .bottom');
  const logos = document.querySelector(".logos");
  const checkbox = document.getElementById("checkbox");
  const m2 = document.getElementById("m2");
  const aEcoPlus = document.getElementById("aEcoPlus");
  const textoFoto = document.getElementById("textoFoto");
  const ecoTitle = document.getElementById("ecoTitle");
  const btnTheme = document.querySelector(".btn-theme");
  
  // Clone the logos-slide element
  const copy = document.querySelector('.logos-slide').cloneNode(true);
  logos.appendChild(copy);

  function toggleClick() {
    active = !active;

    if (active) {
      console.log(active);
      nav.style.cssText = 'opacity: 1; z-index: 4; visibility: visible;';
    } else {
      console.log("closed");
      nav.style.cssText = 'opacity: 0; z-index: 0; visibility: hidden;';
    }
  }

  function toggleLight() {
    lightTheme = !lightTheme;

    if (lightTheme) {
      console.log('lightTheme: On');
      body.style.cssText = 'background-color: rgb(8, 41, 12)';
      m2.style.cssText = 'background-color: rgb(8, 36, 6)';
      aEcoPlus.style.cssText = 'background-color: rgb(174, 180, 174)';
      textoFoto.style.cssText = 'color: #254C1F';
      ecoTitle.style.cssText = 'color: #254D1F'
    } else {
      console.log("OFF");
      body.style.cssText = 'background-color: rgb(11,11,11)';
      m2.style.cssText = 'background-color: rgb(11,11,11)';
      aEcoPlus.style.cssText = 'background-color: rgb(11,11,11)';
      textoFoto.style.cssText = 'color: #d9d9d9;'
      ecoTitle.style.cssText = 'color: #d9d9d9;'
    }
  }

  barComponents[0].addEventListener("click", toggleClick);
  checkbox.addEventListener("click", toggleLight);
};
