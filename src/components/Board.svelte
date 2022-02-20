<script>
  import Item from './Item.svelte' // Item 컴포넌트를 불러옵니다.
  import { items } from '../stores'

  export let board = null
  $: _items = $items.filter(item => item.boardId === board.id)

  const handleAddItem = () => items.add(board.id)
  const handleRemoveItem = e => items.remove(e.detail)
  const handleUpdateItem = e => items.update(e.detail)
</script>

{#if board}
  <div class="board wrapper card">
    <div class="card-body">
      <h5 class="card-title">
        {board.title}
      </h5>
      {#each _items as item (item.id)}
        <Item {item} on:update={handleUpdateItem} on:remove={handleRemoveItem} />
      {/each}
      <div class="card-action">
        <button class="add-item" on:click={handleAddItem}>+</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .board.wrapper {
    background-color: #ebebeb;
  }
  .add-item {
    float: right;
    width: 35px;
    height: 35px;
    padding: 0;
  }
</style>