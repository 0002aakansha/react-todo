import { useReducer, useState } from "react"
import Render from "./Render"
import { toast } from 'react-toastify'
import { initState, reducer } from "../Reducer/todoReducer"

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