const todoList = JSON.parse(localStorage.getItem('todoList')) ||[
    {
      name: "Task",
      dueDate: "Date",
      dueTime: "Time"
    },
  ];
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = "";
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name;
      const { name, dueDate , dueTime } = todoObject;
      // const dueDate = todoObject.dueDate;
      const html = `
          <div class = "task">${name}</div>
          <div class = "dd">${dueDate}</div> 
          <div class = "dt">${dueTime}</div>          
          <button onclick = "todoList.splice(${i},1);
          renderTodoList();" class = "delete">
          Delete
          </button>
          `;
      todoListHTML += html;
    }
  
    console.log(todoListHTML);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
  
  function addTodo() {
    const inputElement = document.querySelector(".todoInput");
    let name = inputElement.value;
    let dateInputElement = document.querySelector(".js-due-date-input");
    const dueDate = dateInputElement.value;
    let timeInputElement = document.querySelector(".due-time");
    const dueTime = timeInputElement.value;
    console.log(name);
    //using push
    todoList.push({ name, dueDate ,dueTime});
    console.log(todoList);
    inputElement.value = "";
    dateInputElement.value = "";
    timeInputElement.value = "";

  
    renderTodoList();
  }
  function bg0(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/0.jpg)';
  }
  function bg1(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/1.jpg)';
  }
  function bg2(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/2.jpg)';
  }
  function bg3(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/3.jpg)';
  }
  function bg4(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/4.jpg)';
  }
  function bg5(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/5.jpg)';
  }
  function bg6(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/6.jpg)';
  }
  function bg7(){
    document.getElementById('body-bg').style.backgroundImage = 'url(Img/7.jpg)';
  }