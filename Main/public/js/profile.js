const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dashboard-name').value.trim();
  const description = document.querySelector('#dashboard-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/dashboards`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create dashboard');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboards/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete dashboard');
    }
  }
};

document
  .querySelector('.new-dashboard-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.dashboard-list')
  .addEventListener('click', delButtonHandler);
