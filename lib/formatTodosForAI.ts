export const formatTodosForAI = (board:Board) => {
    const todosArr = Array.from(board.columns.entries());
    const todoObj = {'todo':0 ,'inprogress':0,'done':0}

    todosArr.map((item,index,arr) => {
        return todoObj[item[0]] = item[1].todos.length;
    });

    return todoObj;
   
}