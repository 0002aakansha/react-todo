import { toast } from 'react-toastify'

const initState = {
    toDos: []
}

const reducer = (state, action) => {
    if (action.type === 'CREATE') {
        return {
            toDos: [...state.toDos, {
                id: +Date.now() + Math.floor(Math.random() * 100),
                title: action.payload,
                isCompleted: false
            }]
        }
    }
    else if (action.type === 'UPDATE') {
        const getIndex = state.toDos.findIndex(toDo => toDo.id === action.payload.id)
        state.toDos[getIndex].title = action.payload.title
        toast.success('Updated Successfully!')
        return {
            toDos: [...state.toDos]
        }
    }
    else if (action.type === 'DELETE') {
        const newTodos = state.toDos.filter(toDo => toDo.id !== action.payload)
        toast.error('Deleted Successfully!')

        return {
            toDos: newTodos
        }
    }
    else if (action.type === 'TOGGLE') {
        const getIndex = state.toDos.findIndex(toDo => toDo.id === action.payload)
        state.toDos[getIndex].isCompleted = !state.toDos[getIndex].isCompleted

        return {
            toDos: [...state.toDos]
        }
    }
}

export { initState, reducer }