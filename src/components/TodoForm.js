import React from 'react';
import { TodosContext } from '../contexts/todosContext';
import { useInputState } from '../hooks/useInputState';
import { Form } from './styled';

export const TodoForm = () => {
    const { dispatch } = React.useContext(TodosContext);
    const [value, handleChange, clearValue] = useInputState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', task: value });
        clearValue();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} placeholder="What do you want to do next?"/>
        </Form>
    );
};
