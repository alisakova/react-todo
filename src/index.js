import ReactDOM from 'react-dom';
import React from 'react';
import { TodosProvider } from './contexts/todosContext';
import { TodoList, TodoForm } from './components';
import { Header, Title, Wrapper } from './components/styled';
import './styles/index.css';

const App = () => {
    return (
        <Wrapper>
            <Header>
                <Title>toDo list</Title>
            </Header>
            <TodosProvider>
                <TodoForm/>
                <TodoList/>
            </TodosProvider>
        </Wrapper>
    );
};

const wrapper = document.getElementById('container');
ReactDOM.render(<App/>, wrapper);
