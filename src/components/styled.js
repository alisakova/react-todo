import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`;

export const Header = styled.header`
    text-align: center;
    margin: 50px 0 30px;
`;

export const Title = styled.h1`
    font-size: 5rem;
    color: #466885;
    margin: 0;
`;

export const Form = styled.form`
    margin-bottom: 30px;
`;

export const ToDoItem = styled.li`
    cursor: pointer;
    padding: 5px 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 250ms;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    ${({ completed }) =>
    completed && `
            text-decoration: line-through;
            color: #bdc3c7;
        `
}
`;

export const IconButton = styled.button`
    min-width: 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: 1px solid #466885;
    padding: 0;
    &:not(:last-child) {
        margin-right: 15px;
    }
    svg {
        width: 14px;
        height: 14px;
    }
`;

export const EditInput = styled.input`
    height: 34px;
`;
