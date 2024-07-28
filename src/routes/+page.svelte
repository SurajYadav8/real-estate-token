<script lang="ts">
  // TypeScript code goes here if needed
  // In this case, no specific TypeScript logic is required for the home page.
</script>

<main>
  <header>
    <nav>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  </header>

  <section>
    <h1>Welcome to Real Estate Tokenization Platform</h1>
    <p>
      Create and manage tokens for your real estate projects on the BitcoinSV blockchain.
    </p>
  </section>

  <footer>
    <p>&copy; 2024 Real Estate Tokenization Platform. All rights reserved.</p>
  </footer>
</main>

<style>
  /* Styles for the main page */
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 0 2rem;
    text-align: center;
  }

  header {
    width: 100%;
    padding: 1rem 0;
    background-color: #333;
    color: white;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    padding: 1rem 0;
    background-color: #333;
    color: white;
    width: 100%;
    text-align: center;
  }
</style>
