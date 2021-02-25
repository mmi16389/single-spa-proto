<template>
  <form>
  <div class="form-group">
    <label for="uname">Nom:</label>
    <input type="text" class="form-control"  placeholder="Saisir votre nom" name="uname" required>
  </div>
  <div class="form-group">
    <label for="pwd">Prénom:</label>
    <input type="text" class="form-control" placeholder="Saisir votre prénom" name="pswd" required>
  </div>
  <div class="form-group">
    <label for="pwd">Sécurité sociale:</label>
    <input type="text" class="form-control" id="pwd" placeholder="Saisir votre numéro de sécurité sociale" name="pswd" required>
  </div>
   <div class="form-group">
    <label for="pwd">E-mail:</label>
    <input type="text" class="form-control" placeholder="Saisir votre é-mail" name="pswd" required>
  </div>
  <button type="submit" class="btn btn-default">Annuler</button>
  <button type="submit" class="btn btn-primary float-right">Valider</button>
</form>
</template>
<style scoped>
.v-application .btn-primary {
    background-color: #003463 !important;
    border-color: #003463 !important;
    color: white;
    width: 150px;
}
.btn-default{
   background-color: #dbe4ec !important;
    border-color: #003463 !important;
    width: 150px;
}
</style>
<script>
export default {
  
}
</script>