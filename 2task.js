
          const namess = document.getElementById("names");
          const num=document.getElementById("no");
          const submit=document.getElementById("sub");
          const mail=document.getElementById("email");
          const message=document.getElementById("message");
          const nameerror=document.getElementById("nameerror");
          const pherror=document.getElementById("pherror");
          const mailerror=document.getElementById("mailerror");
          const msgerror=document.getElementById("msgerror");   
          submit.addEventListener('click',()=>{
            nameerror.textContent="";
            pherror.textContent="";
            mailerror.textContent="";
            msgerror.textContent="";

            let namez=namess.value.trim();
            let phone=num.value.trim();
            let mails=mail.value.trim();
            let msgs=message.value.trim();
            let check=true;
            const phregex = /^[0-9]+$/;
            const nameRegex = /^[A-Za-z\s]+$/;
            let  emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(namez==""){
                nameerror.textContent="field is empty";
                check=false;
            }
             
           else if(!nameRegex.test(namez))
            {
            nameerror.textContent="invalid name";
            check=false; 
            
            }
           
            if(!phregex.test(phone)){
                    pherror.textContent="Enter valid phone number";
                    check=false;
                }
                else if(phone.length!=10){
                pherror.textContent="invalid length";
                check=false;
            }
                
            
            if(!emailpattern.test(mails)){
                mailerror.textContent="invalid email pattern";
                check=false;
            }
            if(msgs==""){
                msgerror.textContent="empty field";
                check=false;
            }
          })