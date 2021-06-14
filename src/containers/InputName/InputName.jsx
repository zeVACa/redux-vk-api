import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../redux/user/actions';

const InputName = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handler = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  return (
    <div>
      <input type="text" placeholder="Введите новое имя" value={user.name} onChange={handler} />
    </div>
  );
};

export default InputName;
