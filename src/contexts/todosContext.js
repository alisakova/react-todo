import React from 'react';
import todosReducer from '../reducers/todosReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultTodos = [
    { id: '0', task: 'Read a book', completed: false },
    { id: '1', task: 'Jog in a playground', completed: true },
    { id: '2', task: 'Write articles', completed: false },
];

export const TodosContext = React.createContext(defaultTodos);

export function TodosProvider({ children }) {
    const [todos, dispatch] = useLocalStorageReducer(
        'todos',
        todosReducer,
        defaultTodos,
    );

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    );
}
