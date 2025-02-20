<script>
    import {posts} from './state.svelte';
    let title = $state("");
    let content = $state("");
    const url ="http://localhost:3000/posts";

/*when form is submitted:
    *get input from form
    send input to server POST
    clear out form inputs
    display new post on page
*/

    async function handleSubmit(ev) {
        ev.preventDefault();
        const newPost = {
            title,
            content
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
        const res = await fetch(url, options)
        const results =await res.json();
        posts.data = [...posts.data, results];
        ev.target.reset();
    }
</script>

<h2>Add New Post</h2>
<form id="add-post" onsubmit={handleSubmit}>
    <p>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" bind:value={title}>
    </p>
    <p>
        <label for="content">Content:</label>
        <textarea name="content" id="content" bind:value={content}></textarea>
    </p>
    <button>Add</button>
</form>