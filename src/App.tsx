import { useState, type ChangeEvent, type FormEvent } from "react";
import "./index.css";
import { useAppSelector, useAppDispatch } from "./lib/hooks/appStore"; // ✅ не менял
import { addNewTodo, toggleTodo } from "./store/todoSlice.ts/todoSlice"; // ✅ не менял
import { languageSLice } from "./store/todoSlice.ts/language"; // ✅ не менял
import { changeTheme } from "./store/todoSlice.ts/theme"; // ✅ добавил импорт, иначе не найдёт функцию

function App() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useAppDispatch();

  // ✅ Получаем язык и тему из Redux
  const { lang, theme } = useAppSelector((magazine) => magazine);

  // ✅ Получаем массив todos из Redux
  const todos = useAppSelector((magazine) => magazine.todos);

  // ✅ Обработчик изменения текста в input
  function inputValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  // ✅ Сабмит формы
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newTodo.trim() === "") return;

    const janiTapshirma = {
      todo: newTodo,
      id: crypto.randomUUID(),
      completed: false,
    };

    dispatch(addNewTodo(janiTapshirma));
    setNewTodo("");
  }

  // ✅ Переключение completed
  function toggleTodoHandler(id: string) {
    dispatch(toggleTodo(id));
  }

  // ✅ Изменение языка
  function changeLanguage(til: string) {
    dispatch(languageSLice.actions.changeLanguage(til));
  }

  // ✅ Изменение темы

  function changeThemeHandler(tema: "dark" | "light") {
    dispatch(changeTheme(tema));
  }

  const translate = {
    en: "TODO APP",
    ru: "ПРИЛОЖЕНИЕ ДЛЯ ЗАДАЧ",
    kg: "ТАПШЫРМА ТИЗМЕСИ",
  };

  const themeColorsBg = theme.theme === "dark" ? "black" : "white";
  const themeColors = theme.theme === "dark" ? "white" : "black";
  return (
    <div style={{ background: themeColorsBg }} className="min-h-screen">
      <h1 style={{ color: themeColors }}  className="text-2xl font-bold mb-4">
        {translate[lang.language]} — {lang.language.toUpperCase()}
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          Русский
        </button>
        <button
          onClick={() => changeLanguage("kg")}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          Кыргызча
        </button>

        <button
          onClick={() => changeThemeHandler("dark")}
          className="bg-black text-white px-3 py-2 rounded hover:bg-gray-900 transition"
        >
          Dark
        </button>
        <button
          onClick={() => changeThemeHandler("light")}
          className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-300 transition"
        >
          Light
        </button>
      </div>

      <form onSubmit={onSubmit} className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Add new todo"
          onChange={inputValueHandler}
          value={newTodo}
          className="border border-gray-400 rounded px-3 py-2 w-full bg-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </form>

      <div className="flex flex-col max-w-[600px] mx-auto gap-3">
        {todos.map((el: any) => (
          <div
            key={el.id}
            className={`border border-gray-400 p-3 rounded bg-white shadow-sm flex justify-between items-center ${
              el.completed ? "opacity-50 line-through" : ""
            }`}
          >
            <span>{el.todo}</span>
            <input
              type="checkbox"
              checked={el.completed}
              onChange={() => toggleTodoHandler(el.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
