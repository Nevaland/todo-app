<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let item = null
  let hovering = false
  let isEditable = false

  const handleRemoveItem = () => dispatch('remove', item)
  const handleUpdateItem = () => dispatch('update', item)
  const handleToggleEditable = () => {
    isEditable = !isEditable
    if (!isEditable) handleUpdateItem()
  }
  const handleToggleDone = () => {
    item.done = !item.done
    handleUpdateItem()
  }
</script>

{#if item}
  <div
    id={item.id}
    class="item card p-1 mb-2 shadow-sm"
    class:shadow={hovering}
    on:mouseenter={() => hovering = true}
    on:mouseleave={() => hovering = false}
  >
  <span class="drag-handle item-btn">=</span>

  {#if isEditable}
    <input bind:value={item.title} />
  {:else}
    <span class:item-done={item.done} on:click={handleToggleDone}>
      {item.title}
    </span>
  {/if}

  <div class="item-action">
    <button class="item-btn" on:click={handleToggleEditable}>E</button>
    <button class="item-btn" on:click={handleRemoveItem}>-</button>
  </div>
</div>
{/if}

<style>
  .item {
    transition: box-shadow .25s ease-in;
    flex-direction: row;
    justify-content: space-between
  }
  .item-btn {
    width: 25px;
    height: 25px;
    padding: 0;
  }
  .item-done {
    text-decoration: line-through;
    color: gray;
  }
</style>