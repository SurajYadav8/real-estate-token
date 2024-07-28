<script lang="ts">
  let tokenName: string = '';
  let tokenSymbol: string = '';
  let totalSupply: number = 0;

  async function handleDefineToken() {
    const response = await fetch('/api/token/define', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenName, tokenSymbol, totalSupply }),
    });
    const result = await response.json();
    if (result.success) {
      window.location.href = '/dashboard/confirmation';
    } else {
      alert('Token definition failed');
    }
  }
</script>

<main>
  <h1>Token Parameters</h1>
  <form on:submit|preventDefault={handleDefineToken}>
    <label for="tokenName">Token Name</label>
    <input type="text" id="tokenName" bind:value={tokenName} required />

    <label for="tokenSymbol">Token Symbol</label>
    <input type="text" id="tokenSymbol" bind:value={tokenSymbol} required />

    <label for="totalSupply">Total Supply</label>
    <input type="number" id="totalSupply" bind:value={totalSupply} required />

    <button type="submit">Create Token</button>
  </form>
</main>

<style>
  /* Add your CSS styles here */
</style>
