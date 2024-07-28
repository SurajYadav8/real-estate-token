<script lang="ts">
  import { onMount } from 'svelte';
  let tokens: Array<{ [key: string]: any }> = [];

  onMount(async () => {
    const response = await fetch('/api/token/manage');
    tokens = await response.json();
  });
</script>

<main>
  <h1>Token Management Dashboard</h1>
  <ul>
    {#each tokens as token}
      <li>{token.name} - {token.symbol}</li>
    {/each}
  </ul>
</main>

<style>
  /* Add your CSS styles here */
</style>
