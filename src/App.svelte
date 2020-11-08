<script>
  import { onMount } from "svelte";
  export let name;
  export let timer;

  onMount(async () => {
    let data = await (await fetch("/api")).json();
    timer = data;
  });

  async function startPomo() {
    try {
      let resp = await fetch("/api", {
        method: "POST",
      });
      if (!resp.ok) throw new Error("probleme");
    } catch (error) {
      console.error(error.msg);
    }
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <h2>{timer}</h2>
  <button on:click={startPomo}>Start</button>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
