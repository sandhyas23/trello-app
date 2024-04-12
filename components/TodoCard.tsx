import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd';
import React, { useEffect, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/16/solid';
import { useBoardStore } from '@/store/BoardStore';
import getUrl from '@/lib/getUrl';
import Image from 'next/image';


type Props = {
    id:TypedColumn;
    todo:Todo;
    index:number;
    innerRef:(element?: HTMLElement | null | undefined) => void;
    draggableProps:DraggableProvidedDraggableProps;
    dragHandleProps:DraggableProvidedDragHandleProps | null;

}

function TodoCard({id,todo,index,innerRef,draggableProps,dragHandleProps} : Props) {

  const [deleteTask] =  useBoardStore(state => [state.deleteTask])
  const [imageUrl,setImageUrl] = useState<string | null>(null);

  const deleteTodo = () =>{
    deleteTask(todo.$id,id,index);
    
  }

  useEffect(() => {  
    //console.log("USE EFFECTTTT11111",todo.image);  
    if(todo.image){
      //console.log("USE EFFECTTTT",todo.image);
      const fetchImage = async() =>{
        
        const url = await getUrl(todo.image!);
        if(url) {
          setImageUrl(url.toString());
        }
      }
      fetchImage();
    }
  }, [todo])

  return (
    <div
        className=' rounded-lg bg-white p-2 m-2'
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}>

       <h1 className='flex p-2 justify-between items-center'>
          <p>{todo.title}</p> 
          <button  onClick={() => deleteTodo()} className='text-red-500 hover:text-red-600'>
           <XCircleIcon className='h-8 w-8'/>
       </button>
       </h1> 

       {imageUrl && (
        <div className='w-full rounded-b-md border'>
          <Image 
             src={imageUrl}
             alt="task image"
             width={400}
             height={200}
             className='w-full'/>
        </div>
       )}
       


    </div>
  )
}

export default TodoCard