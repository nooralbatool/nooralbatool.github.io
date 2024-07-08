  /****chatpot**/
    document.getElementById('chatbot-icon').addEventListener('click', function () {
			var popup = document.getElementById('chatbot-popup');
			if (popup.style.display === 'flex') {
			  popup.style.display = 'none';
			} else {
			  popup.style.display = 'flex';
			}
		  });
		  
		  document.getElementById('close-popup').addEventListener('click', function () {
			document.getElementById('chatbot-popup').style.display = 'none';
		  });
		  
		  function showAnswer(question) {
			var response = '';
			switch (question) {
			  case 'Question 1':
				response = 'We offer a wide range of tech services including software development, website design, and cloud solutions.';
				break;
			  case 'Question 2':
				response = 'You can contact technical support via email at support@example.com or call us at 123456789.';
				break;
			  case 'Question 3':
				response = 'We adhere to strict security policies to protect customer data and ensure confidentiality.';
				break;
			}
			addChatMessage(response, 'answer');
		  }
		  
		  function addChatMessage(message, type) {
			var chatMessages = document.getElementById('chat-messages');
			var messageElement = document.createElement('div');
			messageElement.className = 'message ' + type;
			messageElement.innerText = message;
			chatMessages.appendChild(messageElement);
			chatMessages.scrollTop = chatMessages.scrollHeight;
		  }
		  
		  document.getElementById('send-btn').addEventListener('click', function () {
			var userInput = document.getElementById('user-input');
			var message = userInput.value.trim();
			if (message !== '') {
			  addChatMessage(message, 'question');
			  userInput.value = '';
			  //    backend
			}
		  });
		  
		  function openChatbot() {
			document.getElementById('chatbot-popup').style.display = 'flex';
			document.getElementById('chatbot-notification').style.display = 'none';
		  }
		  
		  // Display notification after a delay
		  setTimeout(function () {
			document.getElementById('chatbot-notification').style.display = 'flex';
		  }, 2000); // Change the delay as needed
		  
		  document.getElementById('chatbot-notification-icon').addEventListener('click', function () {
			openChatbot();
		  });
		  
		  
				  // Display notification after a delay
				  setTimeout(function () {
					  document.getElementById('chatbot-notification').style.display = 'flex';
				  }, 2000); // Change the delay as needed
		  
				  document.addEventListener('DOMContentLoaded', function() {
				  var path = window.location.pathname.split("/").pop();
				  if (path === '') {
					  path = 'index.html';  
				  }
				  var menuItems = document.querySelectorAll('.main-menu a, .mobile-menu a');
		  
				  menuItems.forEach(function(item) {
					  if (item.getAttribute('href') === path) {
						  item.classList.add('active');
					  }
				  });
			  });
		   //
