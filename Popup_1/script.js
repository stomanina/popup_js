window.addEventListener('load', function(){

    let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

    let button = document.createElement('button');
        button.classList.add('button');
        document.querySelector('.container').appendChild(button);
        button.innerHTML = 'Click here';
        button.addEventListener('click', function(event){

            let popupBlock = document.createElement('div');
                popupBlock.classList.add('popupBlock');
                document.querySelector('.container').appendChild(popupBlock);
                popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                
            let popupTitle = document.createElement('h2');
                document.querySelector('.popupBlock').appendChild(popupTitle);
                popupTitle.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            
            let popupText = document.createElement('p');
                document.querySelector('.popupBlock').appendChild(popupText);
                popupText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis quisquam excepturi ad doloribus, veniam dolorem nemo dignissimos autem minima officia exercitationem officiis pariatur nam labore repudiandae.';

            let popupButton = document.createElement('button');
                popupButton.classList.add('popup_button');
                document.querySelector('.popupBlock').appendChild(popupButton);
                popupButton.innerHTML = 'Close';
                popupButton.addEventListener('click', function(event){
                    popupBlock.remove();
                })
        });

        


    























})