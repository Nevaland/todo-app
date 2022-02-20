import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

const _boards = [
  { id: uuid(), title: "Planning" },
  { id: uuid(), title: "In Progress" },
  { id: uuid(), title: "All Done" },
];

const createBoards = () => {
  const boards = writable(_boards);
  const { subscribe, reset, update: _update } = boards;

  const add = () => {
    _update((boards) => boards.concat({ id: uuid(), title: "" }));
  };

  const remove = (board) => {
    if (!board) return;
    _update((boards) => boards.filter((_board) => _board.id !== board.id));
  };

  const update = (board) => {
    if (!board) return;
    _update((boards) =>
      boards.map((_board) => (_board.id === board.id ? board : _board))
    );
  };

  return { subscribe, reset, add, remove, update };
};

export const boards = createBoards();

const _items = [
  { id: uuid(), boardId: _boards[0].id, title: "자료 조사하기", done: false },
  { id: uuid(), boardId: _boards[0].id, title: "교양책 읽기", done: false },
  { id: uuid(), boardId: _boards[1].id, title: "분리수거하기", done: false },
  { id: uuid(), boardId: _boards[1].id, title: "가계부 정리하기", done: false },
  { id: uuid(), boardId: _boards[2].id, title: "버그 수정하기", done: false },
];

const createItems = () => {
  const items = writable(_items);
  const { subscribe, reset, update: _update, set } = items;

  const add = (boardId) => {
    if (!boardId) return;
    _update((items) =>
      items.concat({ id: uuid(), boardId, title: "새 항목", done: false })
    );
  };

  const remove = (item) => {
    if (!item) return;
    _update((items) => items.filter((_item) => _item.id !== item.id));
  };

  const update = (item) => {
    if (!item) return;
    _update((items) =>
      items.map((_item) => (_item.id === item.id ? item : _item))
    );
  };

  return { subscribe, reset, set, add, remove, update };
};

export const items = createItems();
