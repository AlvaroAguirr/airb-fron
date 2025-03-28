import { getUserId } from "@/app/lib/acctions"
import ConversationDetail from "@/app/components/inbox/ConversationDetail"
import React, {useState, useEffect} from 'react'
import apiService from "@/app/services/apiService"
import { UserType } from "../page"
import { getAccessToken } from "@/app/lib/acctions"

export type MessageType={
id:string
name:string
body:string
conversationId: string;
sent_to:UserType;
create_by:UserType

}
const ConversationPage  =async ({params}:{params:{id:string}}) => {
    const userId = await getUserId()
  const token= await getAccessToken()

    if(!userId || !token){
        return(
            <main className=" max-w-[1500px] max-auto px-6 py-12">
                <p> necesetias autentitificarte</p>
                 </main>
        )
    }

    const conversation = await apiService.get(`/api/chat/${params.id}/`)





    return (

    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <ConversationDetail
      token={token}
      userId={userId}
      messages={conversation.messages}
      conversation={conversation.conversation}>
        
      </ConversationDetail>
    </main>
    ) 

}

export default ConversationPage