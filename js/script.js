// Code goes here

function addtask(){
  //adding the task
        var task = document.createElement("div");
        task.className="task";
        var inputValue = document.getElementById("input").value;
        var t = document.createTextNode(inputValue);
      
        task.appendChild(t);
        
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("all_tasks").appendChild(task);
        }
        document.getElementById("input").value = "";
  
 // adding the buttons
      var span = document.createElement("span");
      span.className = "delete pull-right glyphicon glyphicon-remove";
      task.appendChild(span);
      
      var span2 = document.createElement("span");
      span2.className = "editit pull-right glyphicon glyphicon-pencil";
      task.appendChild(span2);
      
      var span3= document.createElement("span");
      span3.className = "marky pull-right glyphicon glyphicon-ok";
      task.appendChild(span3);
      
      var span4= document.createElement("button");
      span4.className = "active pull-right";
      var text = document.createTextNode("Active");
      span4.appendChild(text);
      task.appendChild(span4);
  
//deleting task
      var remove = document.getElementsByClassName("delete");
      for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }
//mark as complete task
    var mark = document.getElementsByClassName("marky");
    for (i = 0; i < mark.length; i++) {
      mark[i].onclick = function() {
        var div2 = this.parentElement;
        div2.classList.add("mark_complete");
      };
    }
  //making task active again
      var active = document.getElementsByClassName("active");
      
      for (i = 0; i < active.length; i++) {
        active[i].onclick = function() {
          var div3 = this.parentElement;
          div3.classList.remove("mark_complete");
        };
      }
    //editing the list item
   var edit = document.getElementsByClassName("editit");
     for(i=0 ; i < edit.length; i++){
       edit[i].onclick = function(){
   
       }
     }
}