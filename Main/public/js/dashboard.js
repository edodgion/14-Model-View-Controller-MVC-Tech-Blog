const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dashboard-name').value.trim();
  const description = document.querySelector('#dashboard-desc').value.trim();

  if (name && description) {
    console.log("inside jsfrontend dashboard route")
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'UPDATE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to Update post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('.post-update')
  .addEventListener('click', updateButtonHandler);


