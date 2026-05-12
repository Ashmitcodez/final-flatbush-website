// Script for the read more button
function toggleReadMore() {
  var content = document.querySelector('.read-more-content');
  var toggleButton = document.querySelector('.read-more-toggle');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    toggleButton.textContent = 'Read Less';
  } else {
    content.style.display = 'none';
    toggleButton.textContent = 'Read More';
  }
}

// Scripts for the portfolio page display buttons
function showProjects(category) {
  // Hide all project containers
  var projectContainers = document.querySelectorAll('.project-container');
  projectContainers.forEach(function (container) {
    container.style.display = 'none';
  });

  // Show the selected project container
  var selectedContainer = document.getElementById(category);
  if (selectedContainer) {
    selectedContainer.style.display = 'block';
  }
}

function showAllProjects() {
  // Show all project containers
  var projectContainers = document.querySelectorAll('.project-container');
  projectContainers.forEach(function (container) {
    container.style.display = 'block';
  });
}

function showMoreInfo(infoId) {
  // Show more information container
  var moreInfoContainer = document.getElementById(infoId);
  if (moreInfoContainer) {
    moreInfoContainer.style.display = 'block';
  }
}
