<script >


</script>
<template>
  <div>
  <div class="container">
    <nav class="navbar">
        <div class="logo">
            <a @click="home">
              <!-- <img src="./img/log/logo__ansar.svg" alt="404" width="50" height="50" > -->
               <a @click="home">prom.uz</a>
            </a>
        </div>
        <ul class="nav-links">
            <li>
              <a href="#">
               <RouterLink to="/">Bosh sahifa</RouterLink>
              </a>
            </li>
            <li><a href="#">
              <RouterLink to="/about">Mahsulotlar</RouterLink>
            </a></li>
            <li class="dropdown">
                <a href="#">Kategorya</a>
                <div class="dropdown-content">
                    <a href="#">Ayollar uchun</a>
                    <a href="#">Erkaklar uchun</a>
                    <!-- <a href="#">Uniseks</a> -->
                </div>
            </li>
            <li><a href="#">
              <RouterLink to="">Aloqa</RouterLink>
            </a></li>
        </ul>

        <div class="user-options">
          <button class="user-btn" type="button">
            <RouterLink class="user-btn__text" to="/login">Ro'yxatdan o'tish</RouterLink>
          </button>

            <!--
            <a href="">
              <img src="./img/icon/Handbag.svg" alt="404">
            </a>
            -->
        </div>
    </nav>
  </div>

    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 25px;
  color: white;
}

.logo{
  cursor: pointer;
}
.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}
.logo a:hover{
  /* box-shadow: 0px 8px 16px #AB572D; */
  color: #AB572D;
  opacity: 0.8;
}
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 70px;
  margin: 0;
  padding: 0;
}
.nav-links li {
  position: relative;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #AB572D;
}
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 2px 15px #AB572D;
  z-index: 1;
}
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.dropdown:hover .dropdown-content {
  display: block;
  background-color: black;
}
.main-container{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Horizontal markazlash */
  padding: 0 15px; /* Chap va o'ng tomondan ichki chekka */
}
.user-options{
  display: flex;
  justify-content: space-between;
  gap: 25px;
}
.user-btn{
  width: 100%;
  height: auto;
  border: none;
  border-radius: 10px;
  background-color: #AB572D;
}
.user-btn__text{
  text-decoration: none;
  color: white;
  padding: 10px;
  font-weight: 300;
  font-size: 15px;

}
.user-btn:hover{
  opacity: 0.8;
}
.user-options a img:hover{
  box-shadow: 0px 8px 16px #AB572D;
  opacity: 0.8;
}
</style>