<template>
  <SearchBar class="todo-container" />
  <TodoAddBtn class="todo-container" />
  <TodoList />
</template>

<script>
import SearchBar from '@/components/search/SearchBar.vue';
import TodoAddBtn from '@/components/todo/TodoAddBtn.vue';
import TodoList from '@/components/todo/TodoList.vue';

export default {
  components: {
    SearchBar,
    TodoAddBtn,
    TodoList,
  },
};
</script>

<style scoped>
.todo-container {
  margin-bottom: 20px;
}
</style>
