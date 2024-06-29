import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form"),n=document.getElementById("email"),s=document.getElementById("message"),l=`
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
`,r=document.createElement("style");r.textContent=l;document.head.appendChild(r);const a=localStorage.getItem("feedback-form-state");if(a){const e=JSON.parse(a);n.value=e.email||"",s.value=e.message||""}o.addEventListener("submit",function(e){e.preventDefault();const m=n.value,i=s.value,t={email:m,message:i};console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t)),o.reset()});
//# sourceMappingURL=commonHelpers.js.map
