import React from 'react';
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

function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
  )

  return (
    <div style={{ flexBasis: "100%"}}>
      <MultiChatSocket {...chatProps} />  
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh"}}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiFriend_")) {
            return <AiFriend props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiDate_")) {
            return <AiDate props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiWork_")) {
            return <AiWork props={props} activeChat={chatProps.chat} />
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
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