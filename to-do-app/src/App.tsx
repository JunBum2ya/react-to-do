import { useState } from 'react';
import { TodoInfo } from './type/TodoInfo';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoTemplate from './component/TodoTemplate';

const App: React.FC = () => {

  const [todos, setTodos] = useState<TodoInfo[]>([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true
    },
    {
      id : 2,
      text : '컴포넌트 스타일링해 보기',
      checked : true
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어 보기',
      checked : false
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos = {todos}/>
    </TodoTemplate>
  );
};

export default App;
