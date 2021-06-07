  const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

	const comment_description = document.querySelector('#dashboard-desc').value.trim();

	if (comment_description) {
		await fetch('/api/dashboard', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);