import React from 'react';
import { TodosContext } from '../contexts/todosContext';
import { useToggleState } from '../hooks/useToggleState';
import { EditTodoForm } from './EditTodoForm';
import { ToDoItem, IconButton } from './styled';
import DeleteIcon from '../icons/delete.svg';
import EditIcon from '../icons/edit.svg';

export const Todo = React.memo(({ todo }) => {
    const { id, completed, task } = todo;
    const { dispatch } = React.useContext(TodosContext);
    const [isEditing, toggleTodoState] = useToggleState();
    const handleToggleTask = () => {
        dispatch({ type: 'TOGGLE_TODO', id });
    };
    const handleDeleteTask = () => {
        dispatch({ type: 'DELETE_TODO', id });
    };
    const handleTodoState = e => {
        e.stopPropagation();
        toggleTodoState();
    };
    return isEditing ?
        (
            <li onClick={toggleTodoState} role="presentation">
                <EditTodoForm id={id} toggleEditForm={toggleTodoState}/>
            </li>
        ) :
        (
            <ToDoItem onClick={handleToggleTask} completed={completed}>
                <span>{task}</span>
                <div>
                    <IconButton onClick={handleDeleteTask}><DeleteIcon/></IconButton>
                    <IconButton onClick={handleTodoState}><EditIcon/></IconButton>
                </div>
            </ToDoItem>
        );
});
