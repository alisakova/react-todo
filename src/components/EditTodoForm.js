import React from 'react';
import { TodosContext } from '../contexts/todosContext';
import { useInputState } from '../hooks/useInputState';
import { EditInput } from './styled';

export const EditTodoForm = ({ id, toggleEditForm }) => {
    const { todos, dispatch } = React.useContext(TodosContext);
    const editedTodo = todos.find(todo => todo.id === id);
    const [value, handleChange, clearValue] = useInputState(editedTodo.task);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'EDIT_TODO', task: value, id });
        toggleEditForm();
        clearValue();
    };
    return (
        <form onSubmit={handleSubmit}>
            <EditInput autoFocus type="text" value={value} onClick={e => e.stopPropagation()} onChange={handleChange}/>
        </form>
    );
};
