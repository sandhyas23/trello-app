import { databases } from "@/appwrite"

export const getTodosGroupedByColumn = async() =>{
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );

    //console.log(data.documents);

    let columns = new Map<TypedColumn,Column>();

    data.documents.map((item,index,array) =>{
        if(!columns.get(item.status)){
            columns.set(item.status, {id:item.status,todos:[]})
        }
            let todosArry = columns.get(item.status)!.todos;
            todosArry.push({$id: item.$id, $createdAt:item.$createdAt,title:item.title,status:item.status,
            ...(item.image && {image:JSON.parse(item.image)})});

            columns.set(item.status,{id:item.status,todos:todosArry})
    })

    //always show the 3 columns
    const columnTypes: TypedColumn[] = ["todo","inprogress","done"];
    for(const columnType of columnTypes){
        if(!columns.get(columnType)){
            columns.set(columnType,{id:columnType,todos:[]});
        }
    }
    //always show todo,inprogress and done in same order

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a,b) => (
            columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
            )
        )
        )


    return {columns:sortedColumns};


}