<script lang="ts">
  import { onMount } from 'svelte';
  let tokenDetails: { [key: string]: any } = {};

  onMount(async () => {
    const response = await fetch('/api/token/get-details');
    tokenDetails = await response.json();
  });

  async function handleCreateToken() {
    const response = await fetch('/api/token/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenDetails),
    });
    const result = await response.json();
    if (result.success) {
      alert('Token created successfully!');
      window.location.href = '/dashboard/manage-tokens';
    } else {
      alert('Token creation failed');
    }
  }
</script>

<main>
  <h1>Token Creation Confirmation</h1>
  <p>Project Name: {tokenDetails.projectName}</p>
  <p>Token Name: {tokenDetails.tokenName}</p>
  <p>Token Symbol: {tokenDetails.tokenSymbol}</p>
  <p>Total Supply: {tokenDetails.totalSupply}</p>
  
  <button on:click={handleCreateToken}>Confirm and Create Token</button>
</main>

<style>
  /* Add your CSS styles here */
</style>
