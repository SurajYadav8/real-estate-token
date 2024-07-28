<script lang="ts">
  let email: string = '';
  let password: string = '';
  let confirmPassword: string = '';

  async function handleRegister() {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.success) {
      window.location.href = '/login';
    } else {
      alert('Registration failed');
    }
  }
</script>

<main>
  <h1>Register</h1>
  <form on:submit|preventDefault={handleRegister}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required />

    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" bind:value={confirmPassword} required />

    <button type="submit">Register</button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  button {
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
</style>
