<template>
  <h1>todo</h1>
  <TodoAddBtn />
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
