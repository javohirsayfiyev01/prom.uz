<script setup>
function enter() {

}
</script>
<template>
  <div class="container box">
    <h1>Login Vue
    </h1>
<div class="boxx">
  <input type="text" placeholder="name">
  <input type="number" placeholder="number">
  <button @click="enter">Ro'yxatdan o'tish</button>
</div>
  </div>
</template>

<style scoped>
.box{
  width: 100%;
  height: 150px;
  background-color: rgb(54, 53, 53);
}
.boxx{
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
h1{
  text-align: center;
  color: white;
}

</style>