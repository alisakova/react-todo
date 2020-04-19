import uuid from 'uuid/v4';
import * as actions from '../constants/actions';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case actions.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case actions.TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case actions.EDIT_TODO:
            return state.map(todo => todo.id === action.id ? { ...todo, task: action.task } : todo);
        default:
            return state;
    }
};

export default reducer;
