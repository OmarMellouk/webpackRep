/* function hello(){
    console.log('hello .................');
}

export default hello; */

import './hello-world-btn.css'

class hellobtn {
    createbtn(){
        console.log('aaaaaaaaaaaaaaaaaaaa');
        const body = document.querySelector('body');
        const btn = document.createElement('button');
        btn.innerHTML = 'hello button 111';
        btn.classList.add('hello-btn','classs2','classss3');
        body.appendChild(btn);
    }
    hello(){
        console.log('hello .................');
    }

    /* clickbtn(){
        $( ".hello-btn" ).click(function() {
        alert( "Handler for .click() called." );
      });
    } */
    
}

export default hellobtn;