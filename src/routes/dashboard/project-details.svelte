<script lang="ts">
  let projectName: string = '';
  let description: string = '';
  let location: string = '';

  async function handleSubmit() {
    const response = await fetch('/api/project/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectName, description, location }),
    });
    const result = await response.json();
    if (result.success) {
      window.location.href = '/dashboard/token-parameters';
    } else {
      alert('Project creation failed');
    }
  }
</script>

<main>
  <h1>Project Details</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="projectName">Project Name</label>
    <input type="text" id="projectName" bind:value={projectName} required />

    <label for="description">Description</label>
    <textarea id="description" bind:value={description} required></textarea>

    <label for="location">Location</label>
    <input type="text" id="location" bind:value={location} required />

    <button type="submit">Next</button>
  </form>
</main>

<style>
  /* Add your CSS styles here */
</style>
