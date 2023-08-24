import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert : React.FC = () => {
    return (
        <form className="TodoInsert">
            <input type="text" placeholder="할 일을 입력하세요."></input>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;