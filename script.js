document.addEventListener('DOMContentLoaded', function() {
    // ------------Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the value from the task input field

    // Check if taskText is not empty
    if (taskText !== "") {
        // Create a new li element. Set its textContent to taskText.
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; 
        removeButton.className = 'remove-btn'; 

        // Assign an onclick event to the remove button
        // that, when triggered, removes the li element from taskList.
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li to taskList.
        taskList.appendChild(listItem);

        // Clear the task input field by setting taskInput.value to an empty string.
        taskInput.value = "";
    } else {
        alert("Please enter a task."); 
    }
}