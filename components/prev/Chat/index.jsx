import chatbot from "@/components/prev/assets/images/global/Chatbot.png";
import Image from "next/image";

const Chat = () => {
  return (
    <div className="h-[60px] w-[60px] bg-[#FFD15F] fixed right-4 md:right-6 bottom-20 rounded-full flex justify-center items-center z-30">
      <Image src={chatbot} alt="Chatbot icon" />
    </div>
  );
};

export default Chat;
