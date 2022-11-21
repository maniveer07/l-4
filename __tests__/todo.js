const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const funday = new Date();
    const today = 86400000;
    [
      {
        title: "song of fire and ice",
        completed: false,
        dueDate: new Date(funday.getTime() - today).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "battle of bastards",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "night king",
        completed: false,
        dueDate: new Date(funday.getTime() + today).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("checks rate jhon snow", () => {
    expect(all.length).toEqual(3);
    add({
      title: "jhon snow is op",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("checks  story completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});