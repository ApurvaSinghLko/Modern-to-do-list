
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.querySelector('.todo-list');





  function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    const todoDiv = document.createElement('div');
    todoDiv.className = 'todoentries';

    todoDiv.innerHTML = `
      <input type="checkbox" class="todo-check">
      <span class="todo-text">${text}</span>
      <button class="todo-delete">×</button>
    `;

    todoList.appendChild(todoDiv);

    // Reset input
    input.value = '';
    input.focus();
    updateLabel();

    // Delete single task
    todoDiv.querySelector('.todo-delete').addEventListener('click', () => {
    //   todoDiv.style.opacity = '0';
    //   todoDiv.style.transform = 'translateX(40px)';
      setTimeout(() => todoDiv.remove(), 350);
    });

    // Toggle completed
    const checkbox = todoDiv.querySelector('.todo-check');
    checkbox.addEventListener('change', () => {
      todoDiv.classList.toggle('completed', checkbox.checked);
    });
  }





  // Floating label behavior
//   this function removes the extra space. Also assigns the class 'has-value' to the input field when it has text.
  function updateLabel() {
    if (input.value.trim().length > 0) {
      input.classList.add('has-value');
    } else {
      input.classList.remove('has-value');
    }
  }

  input.addEventListener('input', updateLabel);
  updateLabel(); // initial check

  // Enter button adds task
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
      addTodo();
      e.preventDefault();
    }
  });

  // Add on button click
  addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      addTodo();
    }
  });


  // Delete all completed tasks
  document.querySelector('.deleteselected')?.addEventListener('click', () => {
    document.querySelectorAll('.todoentries.completed').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(50px)';
      setTimeout(() => item.remove(), 400);
    });
  });

  // Clear all tasks
  document.querySelector('.deleteall')?.addEventListener('click', () => {
    if (!confirm('Delete ALL tasks? This cannot be undone.')) return;

    document.querySelectorAll('.todoentries').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      setTimeout(() => item.remove(), 450);
    });
  });
});