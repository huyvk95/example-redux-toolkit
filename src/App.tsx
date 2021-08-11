import { useSelector, useDispatch } from "react-redux";
import { counterSlice, displaySlice } from "./reducer";
import { StoreType } from "./store";

const App = () => {
  const { count, display } = useSelector((state: StoreType) => state);
  const { decreasement, increasement } = counterSlice.actions;
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
      {display.isShow ? <div>Number: {count.count}</div> : null}
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
