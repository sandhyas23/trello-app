import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import TodoCard from './TodoCard'
import { PlusCircleIcon } from '@heroicons/react/16/solid'

type Props = {
    id: TypedColumn;
    todos: Todo[];
    index:number;
}

const idToText : {
    [key in TypedColumn]: string;
} = {
        "todo" : "To Do",
        "inprogress" :"In Progress",
        "done": "Done"

}

function Column({id,todos,index}: Props) {
    //console.log("in column",id,todos);
  return (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}>
                <Droppable droppableId={index.toString()} type='card'>
                    {(provided,snapshot) => (
                        <div
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                         className={`p-2 rounded-2xl shadow-sm my-2
                                    ${snapshot.isDraggingOver?"bg-green-200":"bg-white/50"}`
                                   }>
                            <h2 className='flex text-lg font-bold justify-between items-center'>
                                {idToText[id]}
                                <span className=' text-gray-400 bg-gray-200 rounded-lg text-sm p-2'>
                                {todos.length}
                            </span>
                            </h2>
                            <div>
                                {todos.map((todo,index,arr) => {
                                    return <Draggable key={todo.$id} draggableId={todo.$id} index={index}>
                                        {(provided) => (
                                            <TodoCard
                                             innerRef={provided.innerRef}
                                             draggableProps={provided.draggableProps}
                                             dragHandleProps={provided.dragHandleProps}
                                             todo={todo}
                                             id={id}
                                             index={index}/>
                                        )}

                                    </Draggable>
                                })}
                                {/* space when a todo is dragged and dropped */}
                                {provided.placeholder}

                                {/* button to add todo */}
                                <div className='flex justify-end p-2 m-2'>
                                    <button className='text-green-500 hover:text-green-600'>
                                        <PlusCircleIcon className='h-10 w-10'/>
                                    </button>
                                </div>

                                {/* ADD image later */}
                            </div>  
                        </div>
                    )}

                </Droppable>

            </div>
        )

        }
    </Draggable>
  )
}

export default Column