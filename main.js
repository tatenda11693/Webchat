window.addEventListener('DOMContentLoaded', () => {
    // const socket = new WebSocket("wss://fathomless-forest-60431.herokuapp.com/web_dev_chat_server"); 
    // const socket = new WebSocket("ws://localhost:8080/web_dev_chat_server"); 
    const socket = new WebSocket('wss://www.el-evan.com/web_dev_chat_server'); 

    socket.addEventListener('open', () => {
        console.log('Socket, opened!'); 
    
        document.querySelector('#send').addEventListener('click', () => {
            socket.send(JSON.stringify({
                Name: document.querySelector('#name').value, 
                Message: document.querySelector('#message').value
            })); 
        }); 
    }); 

    socket.addEventListener('message', socketMessage => {
        const incoming = JSON.parse(socketMessage.data); 
        document.querySelector('#chat-stream').innerText += '\n' + incoming.Name + '\t' + incoming.Message; 
    }); 
}); 