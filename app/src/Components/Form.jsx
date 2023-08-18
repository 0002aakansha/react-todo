import { useReducer, useState } from "react"
import Render from "./Render"
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
    else if (action.type === 'UPDATE') {
        const getIndex = state.toDos.findIndex(toDo => toDo.id === action.payload.id)
        state.toDos[getIndex].title = action.payload.title
        toast.success('Updated Successfully!')
        return {
            toDos: [...state.toDos]
        }
    }
}

const Form = () => {
    const [toDo, setToDo] = useState('')
    const [allToDos, dispatch] = useReducer(reducer, initState)

    const submitHandler = (e) => {
        e.preventDefault()
        toDo ? dispatch({ type: 'CREATE', payload: toDo }) : toast.error('Please insert todo before submit!')
        setToDo('')
    }

    return (
        <>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <div className="input-box">
                        <label htmlFor="todo">Create ToDo</label>
                        <input type="text" onChange={e => setToDo(e.target.value)} value={toDo} autoFocus={true} />
                    </div>
                    <div className="button">
                        <button>Create</button>
                    </div>
                </form>
            </div>
            <Render toDos={allToDos.toDos} toggle={dispatch} delete={dispatch} update={dispatch} />
        </>
    )
}

export default Form