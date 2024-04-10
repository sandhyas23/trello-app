import { create } from 'zustand';
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { databases } from '@/appwrite';

interface BoardState{
    board:Board;
    getBoard: () =>void;
    setBoardState:(board: Board) =>void;
    updateToDoInDB : (todo:Todo,columnId:TypedColumn) => void;

    searchString:string;
    setSearchString :(searchString:string) => void;

    newTaskInput:string;
    setNewTaskInput: (newTaskInput:string) => void;

    newTaskType:TypedColumn;
    setNewTaskType: (newTaskType:TypedColumn) => void;

    image: File | null;
    setImage: (image: File | null) => void;
}

export const useBoardStore = create<BoardState>((set,get) => ({
  board:{
    columns: new Map<TypedColumn,Column>(),
  },

  getBoard: async() => {
    const board = await getTodosGroupedByColumn();
   // console.log("bb",board);
    set({board})
  },

  setBoardState: (board) => set({board}),

  updateToDoInDB: async(todo,columnId) =>{
     await databases.updateDocument(process.env.NEXT_PUBLIC_DATABASE_ID!,
                   process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
                   todo.$id,
                   {
                    title:todo.title,
                    status:columnId
                    }
      );
  },

  searchString :"",
  
  setSearchString: (searchString) => set({searchString}),

  newTaskInput:"",
  setNewTaskInput: (newTaskInput) => set({newTaskInput}),

  newTaskType:"todo",
  setNewTaskType: (newTaskType) => set({newTaskType}),

  image:null,
  setImage: (image: File | null) => set({image})


}))