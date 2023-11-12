<template>
  <nav>
    <router-link :to="{ name: 'TodoView' }">Todo</router-link>
    <router-link :to="{ name: 'ChartView' }">Chart</router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
