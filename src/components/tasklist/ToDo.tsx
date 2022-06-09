import { useEffect, useState } from 'react';
import { Block, ToDoPropertiesType } from './types';

interface ToDoProps {
  block: Block;
}

export default function ToDo({ block: { id, properties} }: ToDoProps) {
  const { title, checked } = properties as ToDoPropertiesType;
  const [ isChecked, setIsChecked ] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked])

  const handleToDoChange = (event: any) => {
    // could pass in changeHander and let parent handle (but that's complex)
    // or dispatch an action passing the block id changing and 
    //  handle in a central state
    console.log("to-do block id toggled ", id)
    setIsChecked(!isChecked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleToDoChange}/>
      {title}
    </label>
  );
}
