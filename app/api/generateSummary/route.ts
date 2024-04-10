import openai from "@/openai";
import { NextResponse } from "next/server";
//import { json } from "stream/consumers";


export async function POST(request: Request){
    //todos in the body of post req
    const {todos} = await request.json();
    console.log(todos);

    //communicate with openai

    const response = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        temperature:0.8,
        n:1,
        stream:false,
        messages:[
            {
                role:"system",
                content:`When responding, welcome the user always as Ms.Sandhya and say welcome to the app!
                Limit the response to 200 characters`
            },
            {
                role:"user",
                content:`Hi there, provide a summary of the following todos. Count how many todos are there
                in each category such as To do, in progress and done, then tell the user to have a productive day!
                Here is the data: ${JSON.stringify(
                    todos
                )}`
            }
        ]
    });

   

    console.log("DATA IS: ",response);
    console.log(response.choices[0].message);

    return NextResponse.json(response.choices[0].message);


}