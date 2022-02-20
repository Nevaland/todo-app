<script>
  import Appbar from './components/Appbar.svelte'
  import Board from './components/Board.svelte'
  import { boards } from './stores'
</script>

<Appbar />
<div class="container">
  {#each $boards as board}
    <div class="item">
      <Board board={board} />
    </div>
  {/each}
</div>

<style>
  .container {
    overflow: auto;
    display: flex;
  }
  .container .item {
    width: 300px;
    flex-grow: 1;
    margin: 32px;
  }
</style>