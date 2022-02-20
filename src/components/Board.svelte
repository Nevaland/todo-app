<script>
  import Item from './Item.svelte'; // Item 컴포넌트를 불러옵니다.

  export let board = null;
  export let items = []; // App 컴포넌트에서 전달하는 items를 받습니다.
</script>

{#if board}
<div class="board wrapper card">
  <div class="card-body">
    <h5 class="card-title">
      {board.title}
    </h5>
    {#each items as item (item.id)}
    <Item {item} />
    <!-- <Item item={item} />과 동일함. 속성과 변수명이 같으면 생략가능 -->
    {/each}
  </div>
</div>
{/if}

<style>
  .board.wrapper {
    background-color: #ebebeb;
  }
</style>