function ChatBubble() {
     return (
          <>
               <div className="chat chat-start">
                    <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                         </div>
                    </div>
                    <div className="chat-bubble">Siempre tuve ganas de aprender a tocar la guitarra.</div>
               </div>
               <div className="chat chat-start">
                    <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                         </div>
                    </div>
                    <div className="chat-bubble">Después de tanto buscar un profesor, encontré uno con el que me siento cómoda.</div>
               </div>
               <div className="chat chat-start">
                    <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                         </div>
                    </div>
                    <div className="chat-bubble">¡Desdé que empecé clases con Damián me encanta la musica!</div>
               </div>
          </>
     );
}

export default ChatBubble;