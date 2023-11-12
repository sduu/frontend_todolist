<template>
  <div :class="$style['item-container']">
    <div :class="$style['item-content']" v-if="!showTodoInput">
      <h3 :class="$style['item-title']">{{ todo.title }}</h3>
      <p :class="{ [$style['item-status']]: true, [$style['tag-ing']]: todo.status === '진행중', [$style['tag-end']]: todo.status === '완료' }">{{ todo.status }}</p>
      <p :class="$style['item-desc']">{{ todo.description }}</p>
      <button :class="$style['btn-edit']" @click="editTodo" aria-label="Todo 수정"><i class="far fa-edit"></i></button>
      <p :class="$style['item-dday']">{{ todo.date }}</p>
    </div>

    <todo-input v-if="showTodoInput" :todo="todo" @modify="toggleEditedTodo" @cancel="toggleEditedTodo" />
  </div>
</template>

<script>
import TodoInput from '@/components/todo/TodoInput.vue';

export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      showTodoInput: false,
    };
  },
  methods: {
    editTodo() {
      this.showTodoInput = true;
      this.$emit('edit', this.todo);
    },
    toggleEditedTodo() {
      this.showTodoInput = false;
    },
  },
  components: {
    TodoInput,
  },
};
</script>

<style module>
.item-container {
  padding: 20px 16px;
}

.item-container + .item-container {
  border-top: 1px solid var(--border-light);
}

.item-content {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 4px;
}

.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}

.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 16px;
  font-size: 16px;
}

.item-dday {
  align-self: center;
  font-size: 12px;
}

.item-status {
  align-self: center;
  justify-self: center;
  padding: 4px 8px;
  border-radius: 50px;
  color: #e55c5c;
  font-size: 12px;
  background-color: #fce8e8;
}

.btn-edit {
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  align-self: flex-end;
  font-size: 20px;
}

.tag-ing {
  color: #34c6f6;
  background-color: #e8f7fc;
}

.tag-end {
  color: #53df61;
  background-color: #dbf9de;
}
</style>
