document.addEventListener('DOMContentLoaded', function() {
    // ------------Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ---------Create the addTask Function
    function addTask() {
        // -----------Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // ----------Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; 
        }

        // Task Creation
        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set its textContent to taskText

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; 
        removeButton.className = 'remove-btn'; 

        // Assign an onclick event to the remove button
        // When triggered, it removes the li element from taskList
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // remove button to the li element
        listItem.appendChild(removeButton);

        // li to taskList
        taskList.appendChild(listItem);

        // empty html element if condition is false
        taskInput.value = "";
    }

    // Attach Event Listeners
    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });
});