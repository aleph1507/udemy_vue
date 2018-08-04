<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler"
      type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
      <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
    </ul>
      <ul class="navbar-nav ml-auto">
        <li><a href="#">End Day</a></li>
        <li class="nav-item dropdown">
         <a
           class="nav-link dropdown-toggle"
           href="#"
           id="navbarDropdownMenuLink"
           role="button"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false">
             Save & Load
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <a class="dropdown-item" href="#">Save Data</a>
           <a class="dropdown-item" href="#">Load Data</a>
         </div>
       </li>
      </ul>
  </div>
</nav>
</template>
