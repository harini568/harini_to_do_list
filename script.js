const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const removeCompletedBtn = document.getElementById('remove-completed-btn');

addTaskBtn.addEventListener('click', addTask);
removeCompletedBtn.addEventListener('click', removeCompletedTasks);
function addTask() {
	const task = taskInput.value.trim();
	if (task) {
		const li = document.createElement('li');
		li.textContent = task;
		li.addEventListener('click', toggleCompleted);
		taskList.appendChild(li);
		taskInput.value = '';
	}
}
function toggleCompleted(e) {
	e.target.classList.toggle('completed');
}
function removeCompletedTasks() {
	const completedTasks = taskList.querySelectorAll('.completed');
	completedTasks.forEach(task => task.remove());
}