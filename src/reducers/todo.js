const todoReducer = (state, action) => {
    console.log("Reducer", state, action)
    switch (action.type) {
        case "ADD":
            console.log("ADD Click")
            return [...state, { title: action.payload.todoTitle, id: action.payload.todoId }];

        case "DELETE":
            return state.filter((item) => item.id !== action.payload.todoId);

    }
}

export { todoReducer }