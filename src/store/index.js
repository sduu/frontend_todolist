import { createStore } from 'vuex';

const STORAGE_KEY = 'todos';

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
    searchFilter: {
      category: 'title',
      term: '',
    },
  },
  mutations: {
    SET(state, todos) {
      state.todos = todos;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },
    ADD(state, newTodo) {
      newTodo.id = state.todos.length + 1;
      state.todos.unshift(newTodo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    },
    MODIFY(state, modifiedTodo) {
      const index = state.todos.findIndex(todo => todo.id === modifiedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, modifiedTodo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      }
    },
    SET_SEARCH_FILTER(state, { category, term }) {
      state.searchFilter = { category, term };
    },
  },
  actions: {
    async ADD({ commit }, newTodo) {
      // 목록 추가하기 서버 API 호출 또는 비동기 작업
      // ...
      commit('ADD', newTodo);
    },
    async UPDATE({ commit }, modifiedTodo) {
      // 목록 수정하기 서버 API 호출 또는 비동기 작업
      // ...
      commit('MODIFY', modifiedTodo);
    },
  },
  getters: {
    todos: state => state.todos,
    filteredTodos: state => {
      const { category, term } = state.searchFilter;

      if (!term) {
        return state.todos;
      }

      return state.todos.filter(todo => {
        switch (category) {
          case 'title':
            return todo.title.includes(term);
          case 'description':
            return todo.description.includes(term);
          case 'status':
            return todo.status.includes(term);
          case 'date':
            return todo.date.includes(term);
          default:
            return false;
        }
      });
    },
  },
});
