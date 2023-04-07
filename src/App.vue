<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <div>
    <RouterLink to="/">ref 和 reactive</RouterLink>
    <RouterLink to="/toRef">toRef toRefs toRaw</RouterLink>
    <RouterLink to="/computed">computed</RouterLink>
    <RouterLink to="/watch">watch</RouterLink>
    <RouterLink to="/watchEffect">watchEffect</RouterLink>
                                    <RouterLink to="/component">component</RouterLink>
                                    <RouterLink to="/directive">directive</RouterLink>
                                    <RouterLink to="/hooks">hooks</RouterLink>
                                  </div> -->

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo"
            loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/">ref 和 reactive</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/toRef">toRef toRefs toRaw</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/computed">computed</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/watch">watch</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/watchEffect">watchEffect</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/component">component</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/directive">directive</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/hooks">hooks</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/use">use</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/socks">socks</RouterLink>
            </a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->
        <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>

        <!-- Notifications -->
        <div class="dropdown">
          <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell"></i>
            <!-- 消息提示 -->
            <!-- <span class="badge rounded-pill badge-notification bg-danger">1</span> -->
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div>
        <!-- Avatar -->
        <div class="dropdown">
          <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="./assets/img/preview.jpg" class="rounded-circle ava " alt="avatar" loading="lazy" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->



  <RouterView />
</template>

<style scoped>
a {
  color: #0000008c;
}

.ava {
  height: 25px;
  width: auto;
}
</style>
