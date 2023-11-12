<template>
  <div :class="$style['input-container']" v-if="visible">
    <div>
      <label for="title">제목</label>
      <input type="text" id="title" placeholder="제목을 입력하세요" v-model="title" />
    </div>

    <div>
      <label for="description">내용</label>
      <input type="text" id="description" placeholder="설명을 입력하세요" v-model="description" />
    </div>

    <div :class="$style['util-container']">
      <div>
        <label>D-day</label>
        <VueDatePicker v-model="date" locale="ko" format="yyyy-MM-dd" placeholder="Select Date" />
      </div>

      <div>
        <label for="status">상태</label>
        <select id="status" v-model="status">
          <option value="진행전">진행전</option>
          <option value="진행중">진행중</option>
          <option value="완료">완료</option>
        </select>
      </div>
    </div>

    <div :class="$style['util-container']">
      <button :class="$style['btn-confirm']" v-if="!isEditing" @click="addTodo">추가 완료</button>
      <button :class="$style['btn-confirm']" v-if="isEditing" @click="updateTodo">수정 완료</button>
      <button :class="$style['btn-cancel']" @click="cancelAdd">취소</button>
    </div>
  </div>
</template>

<script>
import '@vuepic/vue-datepicker/dist/main.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import dayjs from 'dayjs';

export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      title: '',
      description: '',
      date: null,
      status: '진행전',
      isEditing: false,
    };
  },
  computed: {
    visible() {
      return this.$parent.showTodoInput;
    },
  },
  watch: {
    todo: {
      immediate: true,
      handler(newTodo) {
        if (newTodo) {
          this.id = newTodo.id || '';
          this.title = newTodo.title || '';
          this.description = newTodo.description || '';
          this.date = newTodo.date || null;
          this.status = newTodo.status || '진행전';
          this.isEditing = true;
        }
      },
    },
  },
  components: { VueDatePicker },
  methods: {
    addTodo() {
      this.$store.dispatch('ADD', {
        title: this.title,
        description: this.description,
        date: dayjs(this.date).format('YYYY-MM-DD'),
        status: this.status,
      });

      this.title = '';
      this.description = '';
      this.date = null;
      this.status = '진행전';

      this.$emit('add');
    },
    updateTodo() {
      const modifiedTodo = {
        id: this.id,
        title: this.title,
        description: this.description,
        date: dayjs(this.date).format('YYYY-MM-DD'),
        status: this.status,
      };
      this.$store.dispatch('UPDATE', modifiedTodo);

      this.$emit('modify');
    },
    cancelAdd() {
      this.$emit('cancel');
    },
  },
};
</script>

<style module>
.input-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 4px;
  width: 100%;
}
.input-container label {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
}

.input-container select {
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 16px;
}

.input-container > div > input {
  width: 100%;
  line-height: 32px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 4px;
  font-size: 16px;
}

.util-container {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.util-container > div {
  width: 100%;
}

.util-container > button {
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 8px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
}

.util-container .btn-confirm {
  color: #fff;
  border-color: var(--secondary-color);
  background-color: var(--secondary-color);
}
.util-container .btn-cancel {
  border-color: var(--border-bold);
  background-color: #fff;
}
</style>
