<template>
    <div class="bodyMenu">
        <div class="headerMenu">
            <a href="#home" class="logo">Logo</a>
            <div class="items">
                <a class="active" href="#juegos">Juegos</a>
                <a href="#rankings">Rankings</a>
                <a href="#signIn">Iniciar sesión</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>
.bodyMenu { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.headerMenu {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
}

.headerMenu a {
    float: left;
    color: black;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
}

.headerMenu a.logo {
    font-size: 25px;
    font-weight: bold;
}

.headerMenu a:hover {
    background-color: #ddd;
    color: black;
}

.headerMenu a.active {
    background-color: dodgerblue;
    color: white;
}

.items {
  float: right;
}

@media screen and (max-width: 500px) {
  .headerMenu a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .items {
    float: none;
  }
}
</style>