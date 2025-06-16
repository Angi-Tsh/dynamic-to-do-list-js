document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the DOM and optionally save to Local Storage
    // It now accepts 'taskText' as an argument and a 'save' flag
    function addTask(taskText, save = true) {
        // Only get text from input if not provided as an argument (i.e., for new user input)
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        } else {
            taskText = taskText.trim();
        }

        if (taskText === "") {
            // Only alert if it's a new task being added by user, not when loading from storage
            if (save) {
                alert("Please enter a task.");
            }
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the textContent to taskText

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove from DOM

            // Remove from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText); 
            localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field only if it's a new task from user input
        if (save) {
            taskInput.value = "";

            // Save to Local Storage only if 'save' flag is true (i.e., not loading existing tasks)
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    // Attach Event Listeners
    addButton.addEventListener('click', () => addTask()); 

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); 
        }
    });

    // Invoke Load Function on DOMContentLoaded
    loadTasks();
});