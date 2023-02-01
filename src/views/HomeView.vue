<script setup lang="ts">

  import { reactive } from 'vue'
  import model from '@/components/model.vue';

  type StateShape = {
    currentLampe: number,
    lampes: {
      name: string,
      img: string,
      price: number
    }[]
  }

  const state = reactive<StateShape>({
    currentLampe: 1 as number,
    lampes: [
      {
        name: 'Diane n°1',
        img: '@/assets/image/promis.svg',
        price: 59
      },
      {
        name:'Diane n°2',
        img:'@/assets/image/diane2.svg',
        price: 59
      },
      {
        name:'Diane n°3',
        img:'@/assets/image/diane3.svg',
        price: 59
      }
    ]
  })

  const goRight = ():void => {
    if(state.currentLampe == 3) {
      state.currentLampe = 1
      return
    }
    state.currentLampe += 1
  }
  const goLeft = ():void => {
    if(state.currentLampe == 1) {
      state.currentLampe = 3
      return
    }
    state.currentLampe -= 1
  }

</script>


<template>
  
  <model/>
  <div class="container">
    <section class="presentation">
      <div class="description">
        <img class="logo" src="@/assets/image/logo.png" alt="Logo Naee">
        <h1>Le luminaire éco-conçu</h1>
      </div>
      <div class="img">
        <img src="@/assets/image/promis.png" alt="Image de Promis">
      </div> 
    </section>
    <section id="story">
      <div class="section-title">
        <hr>
        <h2>Notre Histoire</h2>
      </div>
      <div class="grid">
        <div>
          <img src="@/assets/image/svg1.svg" alt="">
        </div>
        <div>
          <svg class="color-img-container" width="682" height="455" viewBox="0 0 682 455" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M395.926 2.56776C317.275 -8.45265 167.143 20.0824 84.429 92.5432C30.3222 139.943 -9.95869 247.804 3.44853 295.832C33.2071 402.435 98.8502 385.264 168.888 427.632C238.927 470 411.225 456.514 476.692 429.245C513.358 405.762 601.599 331.176 661.229 220.695C735.767 82.5947 578.951 93.4643 552.905 78.6673C535.354 68.6957 494.239 16.3433 395.926 2.56776Z" fill="#FDCD41"/>
          </svg>
          <div class="paragraphe paragraphe-right">
            <p>
              La marque Naee a été créée par Mélys Pottier, Designer Produit. Formée à l’École de Design Nantes Atlantique, elle a obtenu deux diplômes en alternance, un BTS Design de Produit et une Licence Design Matériaux et Modélisations. C’est lors de son deuxième apprentissage dans une entreprise de luminaires que Mélys prend réellement conscience de l’avenir des produits après leurs usages. <br>
            </p>
            <ul>
              <li>
                Que deviennent les luminaires après leurs utilisations ?
              </li>
              <li>
                Peut-on les recycler entièrement ?
              </li>
              <li>
                Comment recycler correctement un luminaire composé de différents matériaux vissés ou collés ensemble ?
              </li>
            </ul>
          </div>
        </div>
        <div>
          <svg width="646" height="393" viewBox="0 0 646 393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M341.5 36C257.1 30 108.5 -28.1313 58.5 19C-2.49995 76.5 26.8 93.8 12 171C-6.49999 267.5 -8.0001 287 43.4999 346.5C78.2051 386.596 176.5 390.5 258 390.5C311.5 390.5 389.5 407.436 537 346.5C580.167 328.667 571.2 284.6 626 215C680.8 145.4 607.5 36 546.5 19C501 3.49997 425.9 42 341.5 36Z" fill="#D7C1A3"/>
          </svg>
          <div class="paragraphe paragraphe-left">
            <p>
              Toutes ces questions ont donné, à Mélys et ses collaborateurs, l’envie de développer un produit pensé écologiquement de la conception à sa fin de vie. Ils ont réfléchi à un produit facilement recyclable et qui encouragerait la diminution des déchets dans nos poubelles. Étant face au grand nombre de cartons situé dans l’usine de luminaires et dans les conteneurs, nous avons eu l’idée de les récupérer et de les découper pour former nos futurs luminaires. <br> <br>
              C’est ainsi que la marque Naee fut créée. Naee signifie nouveau en Hindi. C’est le “nouveau” de notre façon de penser, la nouvelle méthode de concevoir le luminaire, le nouveau de penser à l’environnement tout en se faisant plaisir avec de beaux objets.
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/image/svg1.svg" alt="">
        </div>
      </div>
    </section>
    <section id="conception">
      <div class="section-title">
        <hr>
        <h2 class="right">L'éco-conception</h2>
      </div>
      <div class="grid">
        <div style="height: 500px;">
          <div style="position: absolute;z-index: 1;">
            <svg width="638" height="252" viewBox="0 0 638 252" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M534 9.5C473 -16.5002 342.609 22.5 287.5 22.5C130 22.5 46.5 18.6663 23 74.4999C-8.14607 148.5 -15.5 170.5 62 220.5C85.7177 235.802 198.217 240.772 304 231.5C429.5 220.5 498 289 599.5 220.5C660.273 195.235 632.635 118.018 622 74.4999C590 31.9999 585 52 534 9.5Z" fill="#B35959"/>
            </svg>
            <div class="paragraphe paragraphe-left">
              <p>L’éco-conception est le maître-mot de notre entreprise. Mais l’éco-conception c’est quoi? C’est une méthode de conception qui consiste à favoriser les ressources renouvelables, à prendre conscience du renouvellement du produit et de son recyclage et à valoriser le réemploi et/ou la réparation des matériaux. En bref, c’est la volonté de concevoir un produit respectant l’environnement et le développement durable.</p>
            </div>
          </div>
          <div class="stickToTheTopElement">
            <svg width="634" height="404" viewBox="0 0 634 404" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M318.508 2.97929C200.007 8.14766 172.862 -20.808 87.6992 43.707L86.7968 44.3906C49.752 72.4515 5.41178 106.039 2.03131 145.402C-4.62956 222.964 8.55752 354.258 44.6649 383.944C67.9351 403.077 243.201 373.804 324.224 388.54C389.043 400.33 539.291 432.343 609.548 341.093C663.53 270.981 608.986 197.11 606.349 125.315C603.712 53.5207 575.683 38.4304 561.998 39.8595C511.215 33.5145 437.009 -2.18908 318.508 2.97929Z" fill="#FDCD41"/>
            </svg>
            <div class="paragraphe paragraphe-left" style="top:110px">
              <p style="color:black">Naee est une société éco-responsable car ses produits sont fabriqués avec des cartons récupérés dans des usines. Les industries qui reçoivent énormément de cartons de livraison ou de calage, jettent environ 2 à 3 conteneurs de cartons par mois. En les récupérant, nous réduisons la phase de recyclage du carton et nous permettons donc de réduire la consommation d’eau de cette étape. De plus, la conception de nos luminaires est faite de telle sorte que le recyclage du luminaire se fait bien matériau par matériau. En séparant la partie électrique, plus technique et la partie en carton, plus esthétique qui engendre la facilité d’assemblage et de démontage. Cela vous donne donc l’opportunité de réutiliser la partie électrique et de changer la partie esthétique à votre guise. </p>
            </div>
          </div>
        </div>
        <div>
          <img src="@/assets/image/svg2.svg" alt="">
        </div>
        <div>
          <img src="@/assets/image/svg3.svg" alt="">
        </div>
        <div>
          <svg width="668" height="390" viewBox="0 0 668 390" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M489.576 14.6741C386.871 -22.061 230.222 23.6937 134.5 39C1.50005 72.8262 43.6406 112.495 15.4999 177C-12.9057 242.112 0.167297 288.877 46.5001 352.791C80.3938 399.546 220.476 393.649 279.5 379.5C336.451 365.849 422.84 381.281 540.849 352.791C638.093 329.315 625.017 316.144 650.5 274.5C691.813 206.987 648.879 103.922 627 70.0003C607.856 43.3177 592.28 51.4092 489.576 14.6741Z" fill="#B35959"/>
          </svg>
          <div class="paragraphe paragraphe-left">
            <p>
              Les produits Naee sont fabriqués avec des produits récupérés et sont pensés de manière à être facilement recyclés. <br> De plus, l’usine principale d’approvisionnement est à seulement 9 kilomètres de la zone de découpage du carton. Le montage se fait également dans l’entreprise d’approvisionnement. A long terme, notre objectif est de réaliser un stockage, une conception et un montage dans les mêmes locaux pour diminuer notre empreinte carbone. <br> D’ailleurs, nos valeurs, qui se résument au respect de l’environnement, à l’honnêteté sur nos ressources et à la créativité de nos collaborateurs pour créer des produits qui plaisent, nous ont poussés à créer un site le plus éco-responsable possible.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="products">
      <div class="section-title">
        <hr>
        <h2>Nos produits</h2>
      </div>
      <div class="carousel">
        <div v-for="items, index in state.lampes" :key="items.img" >
          <div v-if="state.currentLampe == index+1">
            <div class="main">
              <img @click="goLeft" src="@/assets/image/arrow-left.svg" alt="Précédent">
              <img v-show="state.currentLampe == 1" class="animate__animated animate__slideInRight animate__faster" src="@/assets/image/diane1.svg" alt="Promis" style="width:50%;">
              <img v-show="state.currentLampe == 2" class="animate__animated animate__slideInRight animate__faster" src="@/assets/image/diane2.svg" alt="Promis" style="width:50%;">
              <img v-show="state.currentLampe == 3" class="animate__animated animate__slideInRight animate__faster" src="@/assets/image/diane3.svg" alt="Promis" style="width:50%;">
              <img @click="goRight" src="@/assets/image/arrow-right.svg" alt="Suivant">
            </div>
            <div class="details">
              <p>{{ items.name }}</p>
              <p> {{ items.price }} € </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="find-us">
      <div class="f_titel">
        <hr>
        <h1>Où nous trouver ?</h1>
      </div>
      <div class="c_cart">
        <span>
          <h1>LE MANS</h1>
          <p>Siège Social de l’entreprise et Usine de fabrication</p>
          <p>33 Avenue Général De Gaulle 72000 Le Mans 02.43.45.18.20</p>
        </span>
        <img src="@/assets/image/carte.svg" alt="carte france">
      </div>
      <div class="f_ville">
        <div class="f_right">
          <span>
            <h1>ANGERS</h1>
            <p>Boutique Caliko - 19 Rue Saint-Julien (49100) <br>
               L’atelier Coquille - 6 Rue St Blaise (49100)
            </p>
          </span>
          <span>
            <h1>AJACCIO</h1>
            <p>L’adresse décoration - 18 Boulevard Danièle Casanova (20000)</p>
          </span>
          <span>
            <h1>BORDEAUX</h1>
            <p>Murmürs - 5 Rue Louis Combes (33000)</p>
          </span>
          <span>
            <h1>LE MANS</h1>
            <p>Pop-Up Store - B Comme Design, Passage du Commerce (72000)</p>
          </span>
        </div>
        <div class="f_left">
          <span>
            <h1>LILLE</h1>
            <p>Little and Tall - 39 rue Basse (59000) <br>
              Momentum - 42 Rue des trois Mollettes (59800)
            </p>
          </span>
          <span>
            <h1>MARSEILLE</h1>
            <p>Bulle - 21bis Rue Edmond Rostand (13006)</p>
          </span>
          <span>
            <h1>NANTES</h1>
            <p>Dodé - La boutique atelier - 10 Rue Franklin (44000)</p>
          </span>
          <span>
            <h1>PARIS</h1>
            <p>La petite Boutique - 20 Quai de la Mégisserie (75001)</p>
          </span>
        </div>
      </div>
    </section>
    <section class="newsletter">
      <div class="n_titel">
        <h1>Inscrivez vous à notre Newsletter</h1>
        <p>Pour respecter nos valeurs, notre site-web est conçu le plus écologiquement possible, vous ne recevrez donc que des mails importants pour vous présenter les news de l’entreprise et ses produits (1 mail tous les 2-3 mois)</p>
      </div>
      <div class="n_form">
        <form action="">
          <input type="text" placeholder="Entrez votre adresse mail">
          <button type="submit">S’abonner</button>
        </form>
      </div>
    </section>
    <footer>
      <ul class="social_icon">
          <li>Rejoignez nous sur les réseaux sociaux :</li>
          <li><a href=""><img src="@/assets/image/instagram.svg" alt=""></a></li>
          <li><a href=""><img src="@/assets/image/tik-tok.svg" alt=""></a></li>
          <li><a href=""><img src="@/assets/image/linkedin.svg" alt=""></a></li>
      </ul>
      <ul class="menu">
          <li><a href="#">Naee © </a></li> 
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Carrières</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Localisations</a></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
  }

  li {
    list-style: inside;
  }

  .logo {
    width: 400px;
    height: 100px;
    display: block;
    margin: 0 auto;
  }

  .section-title {
    position: relative;
  }

  .section-title hr {
    height: 3px;
    background-color: #FDCD41;
    border: none;
  }

  .section-title h2 {
    background-color: #fefefe;
    width: 22%;
    margin: 0;
    position: absolute;
    top: -30px;
    left: 100px;
    font-size: 60px;
    color: #B35959;
    text-align: center;
  }

  .section-title .right {
    left: 70%;
  }

  .description h1 {
    font-weight: normal;
    color: #B35959;
    text-align: center;
    font-size: 50px;
  }

  .presentation {
    background-color: #D7C1A3;
    display: grid;
    grid-template-columns: 60% 40%;
    height: 500px;
    align-items: center;
    margin: 100px 0;
  }

  .presentation .img img {
    position: absolute;
    top: -60px;
    left: 50%;
    width: 37%;
    overflow: hidden;
  }

  .grid {
    padding: 0 5%;
    display: grid;
    grid-template-columns: 47.5% 47.5%;
    grid-gap: 10rem 5%;
    font-size: 20px;
    font-weight: bold;
    margin: 5rem 0;
  }

  .grid > div {
    position: relative;
  }

  .grid img {
    display: block;
    margin: 0 auto;
  }
  .grid .paragraphe {
    width: 500px;
    position: absolute;
    z-index: 2;
    top: 100px;
    text-align: center;
  }
  .grid .paragraphe-right {
    right: 70px;
  }
  .grid .paragraphe-left {
    left: 70px;
    top: 50px;
  }
  .grid .color-img-container {
    position: absolute;
    z-index: 1;
    top: 0;
  }

  #conception .paragraphe p {
    color: #fefefe;
  }

  #conception .grid {
    grid-gap: 5rem 0;
    align-items: center;
  }
  .stickToTheTopElement {
    position: absolute;
    top: 130px;
  }

  .carousel {
    margin-top: 8rem;
    overflow: hidden;
  }
  .carousel .main {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    align-items: center;
    padding: 0 10%;
    background-color: #D7C1A3;
  }

  .carousel .main > * {
    margin: 0 auto;
    display: block;
    cursor: pointer;
  }

  .carousel .details {
    color: #B35959;
    font-size: 60px;
    text-align: center;
  }

  .carousel .details p {
    margin: 1rem;
  }

  .find-us {

    background-color: #B35959;
    position: relative;
    width: 100%;
    height: 1200px;
  }

  .f_titel {
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .f_titel hr{
    height: 3px;
    background-color: #D7C1A3;
    border: none;
    margin-right: auto;
    position: relative;
    top: 50px;
  }

  .f_titel h1 {
    background-color: #B35959;
    width: 22%;
    margin: 0;
    color: #FDCD41;
    text-align: center;
    position: absolute;
    top: 20px;
    left: 70%;
    font-size: 60px;
    font-weight: 400;
  }

  .c_cart {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .c_cart span {
    position: relative;
    font-family: pompiere;
    color: #D7C1A3;
    font-style: normal;
    font-weight: 400;
    text-align: right;
    width: 15%;
    left: 95px;
    top: 50px;
  }

  .c_cart span h1 {
    font-size: 40px;
    margin: 0;
  }

  .c_cart span p {
    font-size: 30px;
    margin: 0;
    line-height: 40px
  }

  .c_cart img {
    position: relative;
    right: 235px;
    top: -10px;
  }
  .f_ville {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .f_ville span {
    position: relative;
    font-family: pompiere;
    color: #D7C1A3;
    font-style: normal;
    font-weight: 400;
    top: 50px;
  }

  .f_ville span h1 {
    font-size: 40px;
    margin: 0;
    color: #FDCD41;
    font-weight: 400;
  }

  .f_ville span p {
    font-size: 30px;
    margin: 10px 0px 35px;
    line-height: 40px
  }
  .f_left{
    position: relative;
    text-align: left;
    right: 100px;
  }
  .f_right{
    position: relative;
    left: 100px;
    text-align: right;
  }
  .newsletter {
    background-color: #D7C1A3;
    position: relative;
    width: 100%;
    height: 450px;
  }

  .n_titel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .n_titel h1 {
    position: relative;
    font-family: 'Pompiere';
    font-weight: 400;
    font-size: 48px;
    color: #B35959;
    top: 20px;
  }

  .n_titel p {
    position: relative;
    font-family: 'Pompiere';
    font-size: 30px;
    font-weight: 400;
    line-height: 50px;
    text-align: center;
    width: 1100px;
    height: 85px;
  }
  
  .n_form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .n_form {
    top: 20px;
  }

  .n_form input {
    position: relative;
    width: 1100px;
    height: 50px;
    border: none;
    border-radius: 25px;
    background-color: #fff;
    font-size: 30px;
    font-weight: 400;
    color: #B35959;
    margin: 10px 0;
  }

  .n_form input::placeholder {
    font-size: 30px;
    left: 10px;
  }

  .n_form button {
    position: relative;
    width: 260px;
    height: 55px;
    border: none;
    border-radius: 25px;
    background-color: #FDCD41;
    font-size: 30px;
    font-weight: 400;
    right: 100px;
  }
  footer {
      position: relative;
      width: 100%;
      height: 200px;
      background: #fefefe;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  } 
  footer .social_icon{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      flex-wrap: wrap;
  }
  footer .social_icon li {
    list-style: none;
    font-size: 30px;
    color: #B35959;
  }
  footer .social_icon li a {
    font-size: 2em;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
  }
  footer .social_icon li a:hover {
      transform: translateY(-10px);
  }
  footer .menu{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      flex-wrap: wrap;
  } 
  footer .menu li {
    list-style: none;
  }
  footer .menu li a {
    font-size: 30px;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    color: #FDCD41;
  }
  footer .menu li a:hover {
    opacity: 1;
  } 



</style>
