<template>
  <div>
    <hr />
    <div class="container">
      <h1>L'histoire de la marque</h1>
      <p>
        La marque <strong>Promis</strong> a été créée par
        <strong> Mélys Pottier </strong>, Designer Produit. Formée à l’École de
        Design Nantes Atlantique, elle a obtenu deux diplômes en alternance, un
        BTS Design de Produit et une Licence Design Matériaux et Modélisations.
        C’est lors de son deuxième apprentissage dans une entreprise de
        luminaires que Mélys Pottier prend réellement conscience de l’avenir des
        produits après leurs usages. <br />
        <strong> Que deviennent les luminaires </strong> après leurs
        utilisations ? Peut-on les recycler entièrement ?
        <strong> Comment recycler </strong> correctement un luminaire composé de
        différents matériaux vissés ou collés ensemble ?
      </p>
    </div>
    <div id="reseaux">
      <a href="">
        <img src="@/assets/image/facebook.svg" alt="Facebook" />
      </a>
      <a href="">
        <img src="@/assets/image/instagram.svg" alt="Instagram" />
      </a>
      <a href="">
        <img src="@/assets/image/tic-tac.svg" alt="Tiktok" />
      </a>
      <a href="">
        <img src="@/assets/image/pinterest.svg" alt="Pinterest" />
      </a>
      <a href="">
        <img src="@/assets/image/linkedin.svg" alt="Linkedin" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 60%;
  text-align: center;
  margin: 5rem auto;
}
p {
  margin-top: 5rem;
}
#reseaux {
  position: fixed;
  top: 250px;
  left: 2.5%;
}

#reseaux a {
  display: block;
  margin: 1rem 0;
}

#reseaux a img {
  width: 50%;
}

@media screen and (max-width: 426px) {
  .container {
    margin: 3rem auto;
    width: 70%;
  }
  p {
    margin-top: 3rem;
  }
}
</style>