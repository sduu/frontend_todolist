<template>
  <nav>
    <router-link :to="{ name: 'TodoView' }">Todo</router-link>
    <router-link :to="{ name: 'ChartView' }">Chart</router-link>
  </nav>
  <router-view />
</template>

<script></script>
