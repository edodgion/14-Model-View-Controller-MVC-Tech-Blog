  const commentFormHandler = async (event) => {
	event.preventDefault();

	const comment_content = document.querySelector('#comment-desc').value.trim();
	const comment_id = document.querySelector('#new-comment').dataset.commentid;
	console.log('posting comment')

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

	  const delButtonHandler = async (event) => {
		if (event.target.hasAttribute('data-commentid')) {
		  const id = event.target.getAttribute('data-commentid');
	  
		  const response = await fetch(`/api/comments/${id}/`, {
			method: 'DELETE',
		  });
	  
		  if (response.ok) {
			document.location.replace(`/`);
		  } else {
			alert('Failed to delete comment');
		  }
		}
		console.log('delete')
	  };
	  

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);

const commentBtn = document.querySelector('.delete-comment-form');

if (commentBtn){
	commentBtn.addEventListener('click', delButtonHandler);
}


//   document
//   .querySelector('.update-comment-form')
//   .addEventListener('click', updateButtonHandler);

	