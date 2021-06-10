  const commentFormHandler = async function (event) {
	event.preventDefault();

	const comment_id = document.querySelector('.new-comment-form').dataset.comment_id;

	const comment_content = document.querySelector('#comment-desc').value.trim();

	if (comment_content) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ comment_id, comment_content }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();

if (response.ok) {
	document.location.replace('/posts');
  } else {
	alert('Failed to post comment');
  }
 }
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);