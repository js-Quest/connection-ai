import React, { useState } from 'react';
import MessageFormUI from './MessageFormUI';
import { usePostAiWorkMutation } from '@/state/api';

function AiWork({ props, activeChat }) {
  // const [message, setMessage] = useState("");
  const message = "Give me a Question!"
  const [attachment, setAttachment] = useState("");
  const [trigger] = usePostAiWorkMutation();

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };


    props.onSubmit(form); // submit message
    trigger(form); //trigger api call to openAI
    // setMessage("");
    setAttachment("");
  };
  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default AiWork
