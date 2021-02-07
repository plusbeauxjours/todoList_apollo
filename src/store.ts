import { makeVar } from "@apollo/client"

export interface Todo {
    id: number;
    content: string;
}
export const todoIdCounterVar = makeVar(0);
export const todoVar = makeVar<Todo[]>([]);
// makeVar를 통해 반응변수를 만들었다. 
// 이 반응변수는 Apollo Client캐시 외부에 로컬 상태로 저장하기 위해 사용된다. 

export const addTodo = (content: string) => {
    const prevId = todoIdCounterVar();
    const currentTodo = todoVar();
    const newTodo = { id: prevId + 1, content };
    todoVar([...currentTodo, newTodo]);
    // 위와 같이 인자를 넣으면 해당인자의 값으로 업데이트,
    // todoVar()와 같이 인자를 넣지 않으면 해당 반응 변수의 값이 리턴 된다.
    todoIdCounterVar(prevId + 1);
}

export const deleteTodo = (id: number) => {
    const currentTodo = [...todoVar()]
    const deleteIndex = currentTodo.findIndex((todo) => todo.id === id)
    if (deleteIndex === -1) return;
    currentTodo.splice(deleteIndex, 1);

    todoVar(currentTodo)
}

export const getTodos = {
    read() {
        return todoVar();
        // 위와 같이 인자를 넣지 않으면 해당 반응 변수의 값이 리턴
        // todoVar(data)와 같이 인자를 넣으면 해당인자의 값으로 업데이트 된다.
    }
}

export const getTodosCounter = {
    read() {
        return todoIdCounterVar();
        // 위와 같이 인자를 넣지 않으면 해당 반응 변수의 값이 리턴
        // todoVar(data)와 같이 인자를 넣으면 해당인자의 값으로 업데이트 된다.
    }
}

