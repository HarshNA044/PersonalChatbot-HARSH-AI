const userinput=document.getElementById('userinput');
const chatbox=document.getElementById('chat-container');
const sendBtn=document.getElementById('sendBtn');

function appendMessage(text,sender) {
    // creating new element for msg
    const msgSpan=document.createElement("span");
    msgSpan.classList.add("message",sender);
    msgSpan.textContent=text;

    // adding msg to chat-container for displaying it
    chatbox.appendChild(msgSpan);
    chatbox.scrollTop=chatbox.scrollHeight;
}
async function sendMessage() {
    const usermsg=userinput.value.trim();
    if (!usermsg) {
        return;
    }
    else {
        appendMessage(usermsg,"message-user");
        userinput.value='';
        sendBtn.disabled=true; // so that user can't send many requests as llm is processing the request
    }
    try {
        // sending msg from UI to fastapi
        const response = await fetch('https://personalchatbot-harsh-ai.onrender.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: usermsg }),});
        
        // check if response is ok
        if (!response.ok) throw new Error("Network response was not ok.");
    
        // converting backend json into js object
        const data = await response.json();
        appendMessage(data.reply,"message-llm");
    } 
    catch (error){
        appendMessage('Error: Could not reach the server. Please try again later.',"message-llm");
    }
    finally {
        sendBtn.disabled=false;
        userinput.focus();
    }
}
// event listeners for sending messages to chat-container
sendBtn.addEventListener("click",sendMessage);
userinput.addEventListener("keypress",function(e) {if (e.key==="Enter") sendMessage()});
