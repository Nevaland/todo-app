<script>
  export let item = null // Board에서 item값을 전달 받습니다.
  let hovering = false
</script>

{#if item}
<div
  class="item card p-1 mb-1 shadow-sm"
    class:shadow={hovering}
    on:mouseenter={() => hovering = true}
    on:mouseleave={() => hovering = false}
>
  <span>
    {item.title}
    <!-- item의 제목을 출력합니다. -->
  </span>
</div>
{/if}

<style>
  .item {
    transition: box-shadow 0.25s ease-in;
  }
</style>