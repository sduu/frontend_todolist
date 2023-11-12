<template>
  <nav :class="$style.nav">
    <router-link :to="{ name: 'TodoView' }" :class="{ [$style.active]: isTabActive('TodoView') }">목록</router-link>
    <router-link :to="{ name: 'ChartView' }" :class="{ [$style.active]: isTabActive('ChartView') }">통계</router-link>
  </nav>
  <main :class="$style.main">
    <router-view />
  </main>
</template>

<script>
export default {
  methods: {
    isTabActive(tabName) {
      return this.$route.name === tabName;
    },
  },
};
</script>

<style module>
.nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 16px;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
}

.nav a {
  padding: 0 8px;
}

.active {
  border-bottom: 4px solid #fff;
}

.main {
  width: 100%;
  max-width: 738px;
  margin: 0 auto;
  padding: 24px 64px;
  background-color: #fff;
}
</style>
