<template>
  <ul :class="$style['list-container']">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from '@/components/todo/TodoItem.vue';
import { mapState } from 'vuex';

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapState({
      todos: 'todos',
    }),
  },
};
</script>

<style module>
.list-container {
  border: 1px solid var(--border-light);
}
</style>
