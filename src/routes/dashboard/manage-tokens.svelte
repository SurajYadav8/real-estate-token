<script lang="ts">
  let tokens: Array<{ [key: string]: any }> = [];

  async function fetchTokens() {
    const response = await fetch('/api/token/manage');
    tokens = await response.json();
  }

  onMount(fetchTokens);

  async function distributeTokens(tokenId: string) {
    const response = await fetch(`/api/token/distribute/${tokenId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 100 }), // Example amount
    });
    const result = await response.json();
    if (result.success) {
      alert('Tokens distributed successfully');
    } else {
      alert('Token distribution failed');
    }
  }
</script>

<main>
  <h1>Manage Tokens</h1>
  <ul>
    {#each tokens as token}
      <li>
        {token.name} - {token.symbol}
        <button on:click={() => distributeTokens(token._id)}>Distribute Tokens</button>
      </li>
    {/each}
  </ul>
</main>

<style>
  /* Add your CSS styles here */
</style>
