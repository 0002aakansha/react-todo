import { useState } from "react"

const Modal = (props) => {
    const [title, setTitle] = useState(props.oldToDo.title)

    const submitHandler = (e) => {
        e.preventDefault()
        props.update({ type: 'UPDATE', payload: { id: props.oldToDo.id, title } })
        props.setIsOpen()
    }

    return (
        <div className="update-box">
            <form action="" onSubmit={submitHandler}>
                <div className="update-input">
                    <label htmlFor="todo">Update ToDo</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} autoFocus={true} />
                </div>
                <div className="button">
                    <button>Update</button>
                </div>
            </form>
        </div>
    )

}

export default Modal