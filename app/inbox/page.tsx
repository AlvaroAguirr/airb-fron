import apiService from "../services/apiService"
import { getUserId } from "../lib/acctions";
import React,{useState,useEffect} from "react"
import Conversation from "../components/inbox/Conversation"

export type UserType = {
    id:string
    name:string
    avatar_url:string
}

export type ConversationType = {
id:string
users:UserType[]

}
const inboxPage = async () => {
    const userId = await getUserId()


    if(!userId){
        return(
            <main className=" max-w-[1500px] max-auto px-6 py-12">
                <p> necesetias autentitificarte</p>
                 </main>
        )
    }

    const conversations= await apiService.get('/api/chat/')


    
    
    return (

    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
    <h1 className=" my-6 text-2xl">inbox</h1>

    {conversations.map((conversation:ConversationType)=>{
return(
    <Conversation
    userId={userId}
    key={conversation.id}
        conversation={conversation}
    ></Conversation>
    
    
)
    })}

    </main>

    ) }

    export default inboxPage