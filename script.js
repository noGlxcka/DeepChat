const usernamePopup = document.getElementById('username-popup');
const usernameInput = document.getElementById('username-input');
const joinChatButton = document.getElementById('join-chat-button');
const chatContainer = document.getElementById('chat-container');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
// ... (rest of the code from previous response)

joinChatButton.addEventListener('click', function() {
  const username = usernameInput.value.trim();
  if (username !== '') {
    usernamePopup.style.display = 'none'; // Hide popup after entering username
    chatContainer.style.display = 'block'; // Show chat container

    usernames.push(username); // Add username to the list

    // **Functionality to open the chat**
    let welcomeMessage = "Welcome";
    if (username === "Zendaya") {
      welcomeMessage += " <span class='rainbow'>Admin</span>"; // Add rainbow "Admin" tag for Zendaya
    }
    welcomeMessage += ", " + username + "!";
    const youMessage = document.createElement('div');
    youMessage.classList.add('you');
    youMessage.textContent = welcomeMessage;
    chatBox.appendChild(youMessage);

    const joinMessage = document.createElement('div');
    joinMessage.classList.add('me');
    joinMessage.textContent = username + " joined the chat!";
    chatBox.appendChild(joinMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    // **Handle chatting with friends (placeholder for server-side implementation)**
    // (This part needs server-side logic to handle real-time messaging)
  }
});

// **Function to handle sent messages (placeholder for server-side implementation)**
sendButton.addEventListener('click', function() {
  const message = messageInput.value.trim();
  if (message !== '') {
    // (This part needs server-side logic to send the message to other users)
    const meMessage = document.createElement('div');
    meMessage.classList.add('me');
    meMessage.textContent = message;
    chatBox.appendChild(meMessage);
    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
});
      
