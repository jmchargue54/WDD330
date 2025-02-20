<script>
	import Post from './lib/Post.svelte';
	let name = $state('world');
	let posts = $state([]);
  let q = $state('');
  let filteredPosts = $state("");
	const url = 'https://dummyjson.com/posts/'
	async function getPosts(url) {
		const response = await fetch(url);
		return response.json();
	}

	async function init() {
		const data = await getPosts(url);
		posts = data.posts;
    filteredPosts = posts;
		console.log(data);
	}

  function filterPosts() {
    filteredPosts = 
      posts.filter(
        (post) =>
          post.title.toLowerCase().include(q.toLowerCase()) ||
          post.body.toLowerCase().includes(q.toLowerCase()) ||
          post.tags.indexOf(q) != -1
      ) || [];
  
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    filterPosts();
    console.log(ev);
  
  }

	
	init();
</script>

<main>
<h1>Svelte Demo</h1>
 <form action="" onsubmit={handleSubmit}>
   <input type="search" id="search" name="search" bind:value={q}>
   <button>Search</button>
</form>
{#each filteredPosts as post}
	<Post post={post} />
	<!-- { JSON.stringify(post) } -->
{/each}
</main>

<style>
	main {
		font-family: courier;
	}
</style>

<!-- <script>
  import Post from './lib/Post.svelte';
    let name = $state('world');
    let posts = $state([]);
    const url = 'https://dummyjson.com/posts/'
    async function getPosts(url) {
      const response = await fetch(url);
      return response.json();
    }
    async function init() {
      const data = await getPosts(url);
      posts = data.posts;
      console.log(data);
    }
    
    init();</script>

<main>
  <h1>Svelte Demo</h1>

  <div class="card">
    <Counter />
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->


