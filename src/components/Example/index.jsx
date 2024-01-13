import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/example/actions';

function Example() {
  const count = useSelector((state) => state.exampleReducer.count);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(actions.countIncrement());
    dispatch(actions.apiRequest());
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Count is
        {count}
      </button>
    </div>
  );
}

export default Example;
