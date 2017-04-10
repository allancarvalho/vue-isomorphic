<template>
  <div id="inner-app">
    <h1>Random App Title</h1>
    <!-- Routes get rendered here -->
    <router-view></router-view>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/foo">Foo</router-link>
  </div>
</template>
