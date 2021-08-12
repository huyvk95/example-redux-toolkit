import { useSelector, useDispatch } from "react-redux";
import {
  countSlice,
  displaySlice,
  getCountSelector,
  getDisplaySelector,
} from "./reducer";

const App = () => {
  const count = useSelector(getCountSelector);
  const isShow = useSelector(getDisplaySelector);

  const { decreasement, increasement } = countSlice.actions;
  const { show, hide } = displaySlice.actions;
  const dispatch = useDispatch();

  const onClickIncrease = () => {
    dispatch(increasement());
  };

  const onClickDecrease = () => {
    dispatch(decreasement());
  };

  const onClickShow = () => {
    dispatch(show());
  };

  const onClickHide = () => {
    dispatch(hide());
  };

  return (
    <div>
      {isShow ? <div>Number: {count}</div> : null}
      <div>
        <button onClick={onClickIncrease}>Increase</button>
        <button onClick={onClickDecrease}>Decrease</button>
      </div>
      <div>
        <button onClick={onClickShow}>Show</button>
        <button onClick={onClickHide}>Hide</button>
      </div>
    </div>
  );
};

export default App;
