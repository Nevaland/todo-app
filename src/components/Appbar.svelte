<script>
  const appTitle = 'Svelte Todo App'
</script>

<div class="appbar">
  <h1 class="title">{appTitle}</h1>
</div>

<style>
  .appbar {
    background-color: darkslategrey;
    padding: 8px;
  }

  .appbar > .title {
    text-align: center;
    color: white;
  }
</style>