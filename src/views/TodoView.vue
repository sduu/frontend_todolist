<template>
  <TodoAddBtn class="btn-add-container" />
  <TodoList />
</template>

<script>
import TodoAddBtn from '@/components/todo/TodoAddBtn.vue';
import TodoList from '@/components/todo/TodoList.vue';

export default {
  components: {
    TodoAddBtn,
    TodoList,
  },
};
</script>

<style scoped>
.btn-add-container {
  margin-bottom: 20px;
}
</style>
