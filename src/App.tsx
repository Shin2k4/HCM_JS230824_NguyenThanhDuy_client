import { useState } from 'react';
import { ImBin } from "react-icons/im";
import './app.scss';

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'abcxnclkklklkl',
      completed: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e:any) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }

    const newTodo = {
      id: todoList.length + 1,
      title: inputValue,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputValue('');
  };

  const renderTodoList = () => {
    return todoList.map(todo => (
      <div key={todo.id} className='item'>
        <label className='text'>{todo.title}</label>
        <ImBin className='icon' />
      </div>
    ));
  };

  return (
    <form className='all'>
      <div className='header'>
        <h2 className='title'>Todo List</h2>
        <label>Get things done. one item at a time.</label>
        <div className='line'></div>
      </div>
      <div className='content'>
        {renderTodoList()}
      </div>
      <div className='footer'>
        <h3>Add to the todo list</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={addTodo}>ADD ITEM</button>
      </div>
    </form>
  );
}
