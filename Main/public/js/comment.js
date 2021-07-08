  const commentFormHandler = async (event) => {
	event.preventDefault();

	const comment_content = document.querySelector('#comment-desc').value.trim();
	const comment_id = document.querySelector('#new-comment').value;

	if (comment_content && comment_id ) {
	
		const response = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ comment_content, comment_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			document.location.reload();
		  } else {
			alert('Failed to create post');
		  }
		}
	  };

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);