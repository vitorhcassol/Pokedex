<template>
  <router-view/>
</template>

<script>

export default {
  
}

</script>

<style>

/* IMPORTANDO A FONTE VT323 */
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

/* IMPORTANDO A FONTE CANTORA ONE */
@import url('https://fonts.googleapis.com/css2?family=Cantora+One&display=swap');

/* RESET DE ESTILIZAÇÃO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Paleta de cores */
  --primary-color: #DC092C;
  --secondary-color: #28ABFD;
  --terciary-color: #01261F;
  --white: #fff;
  --black: #222529;
  --light-terciary: hsla(169, 95%, 8%, 0.4);
  --light-black: hsl(214, 9%, 15%, 0.95);
  --box-shadow-color: hsla(169, 95%, 8%, 0.2);

  /* Fontes */
  --pixel-font: 'VT323', monospace;
  --logo-font: 'Cantora One', sans-serif;

  /* Padronização de tamanho */
  font-size: 62.5%; /* 1rem = 10px */
}

html,
body {
  width: 100%;
  height: 100%;
}

</style>