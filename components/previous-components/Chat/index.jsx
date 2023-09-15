import React from "react";
import chatbot from "../../assets/images/global/Chatbot.png";

const Chat = () => {
  return (
    <div className="h-[60px] w-[60px] bg-[#FFD15F] fixed right-20 bottom-28 rounded-full flex justify-center items-center z-50">
      <img src={chatbot} alt="Chatbot icon" />
    </div>
  );
};

export default Chat;
