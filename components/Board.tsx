'use client'
import React, { useEffect } from 'react'
import { useBoardStore } from '@/store/BoardStore';
import { DragDropContext,Droppable } from 'react-beautiful-dnd';

function Board() {

  const getBoard = useBoardStore((state) => state.getBoard)
  useEffect(()=>{
    //get board info
    getBoard();

  },[getBoard])
  return (
    <div>hi</div>
    // <div>
    //     <DragDropContext>
    //         <Droppable droppableId='board' direction='horizontal' type='column'>
    //             {(provided) => <div></div>}
    //         </Droppable>
    //     </DragDropContext>
    // </div>
  )
}

export default Board