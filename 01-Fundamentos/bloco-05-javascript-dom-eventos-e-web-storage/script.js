const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';
header.style.color = 'white';

const emergencyTask = document.querySelector('.emergency-tasks');
    emergencyTask.style.backgroundColor = 'pink';

const emergencyTasks = document.querySelectorAll('.emergency-tasks h3')
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'purple';
}



const noEmergencyTask = document.querySelector('.no-emergency-tasks');
noEmergencyTask.style.backgroundColor = 'yellow';

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor ='black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'green';