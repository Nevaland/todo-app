import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

const _boards = [
  { id: 1, title: "Planning" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "All Done" },
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
  { id: 1, boardId: 1, title: "자료 조사하기", done: false },
  { id: 2, boardId: 1, title: "교양책 읽기", done: false },
  { id: 3, boardId: 2, title: "분리수거하기", done: false },
  { id: 4, boardId: 2, title: "가계부 정리하기", done: false },
  { id: 5, boardId: 3, title: "버그 수정하기", done: false },
];

const createItems = () => {
  const items = writable(_items);
  const { subscribe, reset, update: _update } = items;

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

  return { subscribe, reset, add, remove, update };
};

export const items = createItems();
