import React, {useState} from 'react';
import { 
  useMultiChatLogic,
  MultiChatSocket, 
  MultiChatWindow 
} from 'react-chat-engine-advanced';
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import Ai from '@/components/customMessageForms/Ai';
import AiFriend from '@/components/customMessageForms/AiFriend';
import AiDate from '@/components/customMessageForms/AiDate';
import AiWork from '@/components/customMessageForms/AiWork';
import AiAssist from '@/components/customMessageForms/AiAssist';
// import CustomChatList from './customChatList';

function Chat({user, secret}) {

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  )

  return (
    <div style={{ flexBasis: "100%"}}>
      <MultiChatSocket {...chatProps} />  
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh"}}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat")) {
            return <Ai props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiFriend")) {
            return <AiFriend props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiDate")) {
            return <AiDate props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiWork")) {
            return <AiWork props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiAssist")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />
          }
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat