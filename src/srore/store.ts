import create from 'zustand';
import { Todo } from '../types/todoTypes';

type State = {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const useStore = create<State>((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text: text, completed: false },
            ],
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
}));

export default useStore;
