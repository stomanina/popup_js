window.addEventListener('load', function(){

    //функции перетаскивания
        const dragstart = function(event){
                this.classList.add('dragstart');
                event.dataTransfer.setData("Text", this.id);
        };

        const drop = function(event){
            let id = '#' + event.dataTransfer.getData("Text"),
                box = document.querySelector(id);

            if(!box) return;
            this.appendChild(box);
        };
        
        const dragover = function(){
            event.preventDefault();
        };

    //структура приложения
    //основной контейнер
    let mainContainer = document.createElement('div');
        mainContainer.classList.add('mainContainer');
        document.body.appendChild(mainContainer);

    //кнопка добавления блоков
    let buttonAdd = document.createElement('button');
        buttonAdd.classList.add('buttonAdd');
        document.body.appendChild(buttonAdd);
        buttonAdd.innerHTML = 'Добавить задачу';
        buttonAdd.after(mainContainer);

        buttonAdd.addEventListener('click', function(event){
            let box = document.createElement('div');
                box.classList.add('box');  
            let boxes = document.querySelectorAll('.box');
                box.setAttribute('id', 'box' + (boxes.length + 1));
                box.draggable = true;
                box.addEventListener('dragstart', dragstart);
                document.querySelectorAll('.container')[0].appendChild(box);

    //попытка создания кнопки удаления записей(несовсем верно решено) 
            let buttonRemove = document.createElement('button');
                buttonRemove.classList.add('buttonRemove');
                boxes.forEach((box) => {
                document.querySelectorAll('.box')[boxes.length].appendChild(buttonRemove);            //вот здесь как-то по-другому нужно сделать(?)
                buttonRemove.innerHTML = 'X'; 
                buttonRemove.addEventListener('click', function(){
                            box.remove();
                        });
                });
        });
    
    //создание контейнеров для информации
    let allTasks = document.createElement('div');
        allTasks.classList.add('container');
        document.querySelector('.mainContainer').appendChild(allTasks);
        let titleFirst = document.createElement('h2');
            titleFirst.innerHTML = 'Ваши задачи';
            document.querySelectorAll('.container')[0].appendChild(titleFirst);        

    let tasksProgress = document.createElement('div');
        tasksProgress.classList.add('container');
        document.querySelector('.mainContainer').appendChild(tasksProgress);
        let titleSecond = document.createElement('h2');
            titleSecond.innerHTML = 'В процессе выполнения';
            document.querySelectorAll('.container')[1].appendChild(titleSecond);
        
    let tasksDone = document.createElement('div');
        tasksDone.classList.add('container');
        document.querySelector('.mainContainer').appendChild(tasksDone);
        let titleThird = document.createElement('h2');
            titleThird.innerHTML = 'Завершенные цели';
            document.querySelectorAll('.container')[2].appendChild(titleThird);
        
    let tasksDefeat = document.createElement('div');
        tasksDefeat.classList.add('container');
        document.querySelector('.mainContainer').appendChild(tasksDefeat); 
        let titleFourth = document.createElement('h2');
            titleFourth.innerHTML = 'Просроченные';
            document.querySelectorAll('.container')[3].appendChild(titleFourth);
        
    let containers = document.querySelectorAll('.container');
        containers.forEach((container) => {
            container.addEventListener('dragover', dragover);
            container.addEventListener('drop', drop);
        });
});