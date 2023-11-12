<template>
  <ul :class="$style['list-container']">
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from '@/components/todo/TodoItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(['filteredTodos']),
  },
};
</script>

<style module>
.list-container {
  border: 1px solid var(--border-light);
}
</style>
