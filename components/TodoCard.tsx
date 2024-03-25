import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd';
import React from 'react'
import { XCircleIcon } from '@heroicons/react/16/solid';

type Props = {
    id:TypedColumn;
    todo:Todo;
    index:number;
    innerRef:(element?: HTMLElement | null | undefined) => void;
    draggableProps:DraggableProvidedDraggableProps;
    dragHandleProps:DraggableProvidedDragHandleProps | null;

}

function TodoCard({id,todo,index,innerRef,draggableProps,dragHandleProps} : Props) {

  return (
    <div
        className=' rounded-lg bg-white p-2 m-2'
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}>

       <h1 className='flex p-2 justify-between items-center'>
          <p>{todo.title}</p> 
          <button className='text-red-500 hover:text-red-600'>
           <XCircleIcon className='h-8 w-8'/>
       </button>
       </h1> 
       


    </div>
  )
}

export default TodoCard