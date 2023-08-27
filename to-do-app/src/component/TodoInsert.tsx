import { useState, useCallback, ChangeEvent } from 'react';
import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent) => {
    setValue((e.target as HTMLInputElement).value);
  }, []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
