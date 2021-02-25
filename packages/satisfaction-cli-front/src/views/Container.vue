<template>
  <div
    style="
      width: 95%;
      border: 1px solid white;
      margin: auto;
      background: white;
      min-height: 250px;
      border-radius: 5px 2px;
      padding: 15px;
    "
  >
    <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
      <h2 style="text-indent: 15px; max-width: 400px">Formulaire Assurée</h2>
      <p style="border: px solid red; float: right; margin-top: -45px">
        <router-link to="home">Formulaire Assurée</router-link>
        | <router-link to="about">Liste des Assurées</router-link>
      </p>
    </div>
    <div style="padding: 15px"><RouterView /></div>
    <div style="border-top: 1px solid rgba(0, 0, 0, 0.1); height: 50px">
      {{ JSON.stringify(process) }}
    </div>
  </div>
</template>
<script>
export default {};
</script>