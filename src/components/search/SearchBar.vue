<template>
  <div :class="$style['search-container']">
    <label for="category">카테고리:</label>
    <select v-model="selectedCategory" id="category">
      <option value="title">제목</option>
      <option value="description">설명</option>
      <option value="status">상태</option>
      <option value="date">날짜</option>
    </select>

    <label for="search">검색어:</label>
    <input v-model="searchTerm" type="text" id="search" @input="search" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      selectedCategory: 'title',
      searchTerm: '',
    };
  },
  computed: {
    ...mapState(['searchFilter']),
    searchResults() {
      return this.$store.getters.filteredTodos;
    },
  },
  methods: {
    ...mapMutations(['SET_SEARCH_FILTER']),
    search() {
      this.SET_SEARCH_FILTER({
        category: this.selectedCategory,
        term: this.searchTerm,
      });
    },
  },
};
</script>

<style module>
.search-container {
  display: flex;
  gap: 8px;
}

.search-container label {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
}

.search-container input {
  width: 100%;
  line-height: 32px;
  border: 1px solid var(--border-bold);
  padding: 4px 16px;
  font-size: 16px;
  font-family: inherit;
}

.search-container select {
  width: 100px;
  line-height: 32px;
  border: 1px solid var(--border-bold);
  padding: 0 4px;
  font-size: 16px;
  font-family: inherit;
}
</style>
