import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Column() {
  return (
    <Draggable>
        {(provided) => (
            <div>
                
            </div>
        )

        }
    </Draggable>
  )
}

export default Column