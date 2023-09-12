import db from '../../config/firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const maxTaskCount = 5; // Maximum number of tasks to display
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    // Function to add a new task
    async function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return; // Don't add empty tasks
      
      try {
        const docRef = await addDoc(collection(db, "to-dolist"), {
          text: taskText,
          status: "active"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <div class="form-check w-100">
          <label class="form-check-label">
            <input class="checkbox" type="checkbox">
            ${taskText}
            <i class="input-helper rounded"></i>
          </label>
        </div>
      `;
        
      // Insert the new task at the top of the task list
      taskList.insertBefore(taskItem, taskList.firstChild);
  
      // Clear the input field
      taskInput.value = "";
  
      // Attach a click event listener to the new task item for toggling completion
      taskItem.querySelector(".checkbox").addEventListener("change", toggleTaskCompletion);
  
      // Remove older completed tasks if the task count exceeds the maximum
      removeOldCompletedTasks();
    }
  
    // Function to toggle task completion
    function toggleTaskCompletion(event) {
      const taskItem = event.target.closest("li");
      taskItem.classList.toggle("completed");
  
      // Remove older completed tasks if the task count exceeds the maximum
      removeOldCompletedTasks();
    }
  
    // Function to remove older completed tasks
    function removeOldCompletedTasks() {
      const completedTasks = taskList.querySelectorAll("li.completed");
      if (completedTasks.length > maxTaskCount) {
        for (let i = completedTasks.length - 1; i >= maxTaskCount; i--) {
          completedTasks[i].remove();
        }
      }
    }
  
    // Attach an event listener to the "Add" button to add tasks
    document.getElementById("addTaskBtn").addEventListener("click", addTask);