import React from 'react';
import { TodosContext } from '../contexts/todosContext';
import { Todo } from './Todo';

export const TodoList = () => {
    const { todos } = React.useContext(TodosContext);
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
