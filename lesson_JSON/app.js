import data from './data.js';

const launchesContainer = document.querySelector('.launches-container');

data.launches.forEach(launch => {
  const launchElement = document.createElement('div');
  launchElement.classList.add('launch');

  const titleElement = document.createElement('h2');
  titleElement.textContent = launch.mission_name;

  const dateElement = document.createElement('p');
  dateElement.textContent = `Launch Date: ${new Date(launch.launch_date_utc).toLocaleDateString()}`;

  const detailsElement = document.createElement('p');
  detailsElement.textContent = `Details: ${launch.details}`;

  launchElement.appendChild(titleElement);
  launchElement.appendChild(dateElement);
  launchElement.appendChild(detailsElement);

  launchesContainer.appendChild(launchElement);
});