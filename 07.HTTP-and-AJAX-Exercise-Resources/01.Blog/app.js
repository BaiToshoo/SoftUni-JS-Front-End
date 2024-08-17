function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';
    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const buttonView = document.getElementById('btnViewPost');

    buttonLoadPosts.addEventListener('click', async () => {
        selectPosts.innerHTML = '';
        const response = await fetch(baseURL);
        const data = await response.json();
        const posts = Object.values(data);

        posts.forEach(post => {
            const option = document.createElement('option');
            option.value = post.id;
            option.textContent = post.title;
            selectPosts.appendChild(option);
        });
    });

    buttonView.addEventListener('click', async () => {
        const postId = selectPosts.value;
        const postURL = `http://localhost:3030/jsonstore/blog/posts/${postId}`;

        
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(postURL),
            fetch(commentsURL)
        ]);

        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();

        document.getElementById('post-title').textContent = postData.title;
        document.getElementById('post-body').textContent = postData.body;

        const comments = Object.values(commentsData).filter(comment => comment.postId === postId);
        const ul = document.getElementById('post-comments');
        ul.innerHTML = '';

        comments.map(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            ul.appendChild(li);
        });
    });

}

attachEvents();
