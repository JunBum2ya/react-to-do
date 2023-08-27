import TodoListItem from './TodoListItem';
import { TodoInfo } from '../type/TodoInfo';

interface TodoListProps {
  todos: TodoInfo[]; // 형식 지정
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo = {todo} /> // TodoListItem 렌더링 수정
      ))}
    </div>
  );
};

export default TodoList;
