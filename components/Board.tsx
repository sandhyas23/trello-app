'use client'
import React, { useEffect } from 'react'
import { useBoardStore } from '@/store/BoardStore';
import { DragDropContext,DropResult,Droppable } from '@hello-pangea/dnd';
import Column from './Column';

function Board() {

  const [board, getBoard,setBoardState] = useBoardStore((state) => 
                             [state.board,state.getBoard,state.setBoardState])
  useEffect(()=>{
    //get board info
    getBoard();

  },[getBoard])

  const handleOnDragEnd = (result: DropResult) =>{
    const {destination,source,type} = result;
    console.log(destination);
    console.log(source);
    console.log(type);

    if(!destination) return;

    if(type === 'column'){
      const entries = Array.from(board.columns.entries());
     const [removed] = entries.splice(source.index,1);
     console.log("removed",removed);
     entries.splice(destination.index,0,removed);
     const rearrangedColumns = new Map(entries);

     console.log("entries",rearrangedColumns);

     setBoardState({...board,columns:rearrangedColumns})
    


    }  
  }

 console.log(board);
 {console.log(Array.from(board.columns.entries()))}
  return (
    <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(provided) => (
                <div
                {...provided.droppableProps}
                  ref={provided.innerRef}
                  className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto '
                  >
                    {Array.from(board.columns.entries()).map((value,index,arr)=> (
                      
                      <Column key={value[0]} id={value[0]} todos={value[1].todos} index={index}/>
                    ))}
                  </div>
                  )}
            </Droppable>
        </DragDropContext>
    </div>
  )
}

export default Board