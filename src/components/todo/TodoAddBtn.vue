<template>
  <div>
    <button :class="$style.button" v-if="!showTodoInput" @click="showInput" aria-label="TODO 추가"><i class="fas fa-plus"></i></button>

    <todo-input v-if="showTodoInput" @add="hideInput" @cancel="hideInput" />
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue';

export default {
  components: {
    TodoInput,
  },
  data() {
    return {
      showTodoInput: false,
    };
  },
  methods: {
    showInput() {
      this.showTodoInput = true;
    },
    hideInput() {
      this.showTodoInput = false;
    },
  },
};
</script>

<style module>
.button {
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  color: #fff;
  font-size: 24px;
  background-color: var(--secondary-color);
}
</style>
