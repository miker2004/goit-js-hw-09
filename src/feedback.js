document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.feedback-form');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    const formStyle = `
        .feedback-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 0;
            margin: 0px 200px;
        }

        .form-label {
            font-weight: bold;
            margin-bottom: 4px;
        }

        #email, #message {
            width: 360px;
            height: 40px;
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        #message {
            height: 80px;
            resize: none;
        }

        #submitBtn {
            width: 95px;
            height: 40px;
            border-radius: 8px;
            padding: 8px 16px; 
            background-color: #4E75FF;
            color: #FFFFFF;
            align-self: start; 
            cursor: pointer; 
            border: none;
            font-size: 14px;
        }
    `;
    const styleElement = document.createElement('style');
    styleElement.textContent = formStyle;
    document.head.appendChild(styleElement);
    const formDataJSON = localStorage.getItem('feedback-form-state');
    if (formDataJSON) {
        const formData = JSON.parse(formDataJSON);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const emailValue = emailInput.value;
        const messageValue = messageTextarea.value;
        console.log("Email:", emailValue);
        console.log("Message:", messageValue);
        const formData = {
            email: emailValue,
            message: messageValue
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        form.reset();
    });
});