import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';
import { TodoInfo } from '../type/TodoInfo';

interface TodoListItemProps {
  todo: TodoInfo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className='checkbox'>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
        <div className='text'>{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
