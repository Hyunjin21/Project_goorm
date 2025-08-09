import List from "./List";

export default function Lists({ todoData, setTodoData }) {
  return (
    <div>
      {todoData.map((data) => {
        // 서버/로컬 혼재 대응 (필드 정규화)
        const id = data.id ?? data._id;
        const completed = data.completed ?? data.done ?? false;

        return (
          <List
            key={id}
            title={data.title}
            completed={completed}
            id={id}
            todoData={todoData}
            setTodoData={setTodoData}
          />
        );
      })}
    </div>
  );
}
