<script>
  import Appbar from './components/Appbar.svelte'
  import Board from './components/Board.svelte'

  const boards = [
    { id: 1, title: 'Planning' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'All Done' },
  ]
  const items = [
    { id: 1, boardId: 1, title: '자료 조사하기', done: false },
    { id: 2, boardId: 1, title: '교양책 읽기', done: false },
    { id: 3, boardId: 2, title: '분리수거하기', done: false },
    { id: 4, boardId: 2, title: '가계부 정리하기', done: false },
    { id: 5, boardId: 3, title: '버그 수정하기', done: false },
  ]
</script>

<Appbar />
<div class="container">
  {#each boards as board}
    <div class="item">
      <Board 
        board={board} 
        items={items.filter(item => item.boardId === board.id)}/>
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