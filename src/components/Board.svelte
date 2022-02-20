<script>
  import { onMount } from 'svelte'
  import Sortable from 'sortablejs'
  import Item from './Item.svelte' // Item 컴포넌트를 불러옵니다.
  import { items } from '../stores'

  export let board = null
  $: _items = $items.filter(item => item.boardId === board.id)

  const handleAddItem = () => items.add(board.id)
  const handleRemoveItem = e => items.remove(e.detail)
  const handleUpdateItem = e => items.update(e.detail)

  const handleSortItem = e => {
    const target = $items.find(item => item.id === e.item.id)
    const allItems = $items.filter(item => item.id !== e.item.id)
    const _items = allItems.filter(item => item.boardId === e.to.id)
    target.boardId = e.to.id
    _items.splice(e.newIndex, 0, target)

    const newItems = allItems
      .filter(item => item.boardId !== e.to.id)
      .concat(_items)
    items.set(newItems)
  }

  let list = null
  onMount(() => {
    if(list) {
      new Sortable(list, {
        group: 'board',
        handle: '.drag-handle',
        animation: 300,
        onEnd: handleSortItem,
      })
    }
  })
</script>

{#if board}
  <div class="board wrapper card">
    <div class="card-body">
      <h5 class="card-title">
        {board.title}
      </h5>

      <div id={board.id} class="item-list" bind:this={list}>
      {#each _items as item (item.id)}
        <Item
          {item}
          on:update={handleUpdateItem}
          on:remove={handleRemoveItem}
        />
      {/each}
      </div>
      
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