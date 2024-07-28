<script lang="ts">
  let email: string = '';
  let password: string = '';

  async function handleLogin() {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.success) {
      localStorage.setItem('token', result.token);
      window.location.href = '/dashboard';
    } else {
      alert('Login failed');
    }
  }
</script>

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Login</button>
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
