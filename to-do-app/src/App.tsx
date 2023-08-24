import TodoInsert from './component/TodoInsert';
import TodoTemplate from './component/TodoTemplate';

const App: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
    </TodoTemplate>
  );
};

export default App;
