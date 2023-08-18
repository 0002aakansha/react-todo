import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Modal from './Modal'
import remove from '../assets/delete.png'
import update from '../assets/update.png'

const Render = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [toDo, setToDo] = useState({})

    return (
        <div className="toDos">
            {props.toDos.length !== 0 && (<table className='table table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>ToDos</th>
                        <th>isCompleted</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.toDos.map((toDo, indx) => (
                        <tr key={toDo.id}>
                            <td>{toDo.title}</td>
                            <td>{
                                <button className={`status-btn ${toDo.isCompleted ? 'incomplete' : 'complete'}`} onClick={() => props.toggle({ type: 'TOGGLE', payload: toDo.id })}>
                                    {'Mark'} {toDo.isCompleted ? 'Incomplete' : 'Complete'}
                                </button>
                            }</td>
                            <td>{
                                <button className='update-btn' onClick={() => {
                                    setIsOpen(!isOpen)
                                    setToDo({ id: toDo.id, title: toDo.title })
                                }}>
                                    <img src={update} alt="update todo" className='remove' />
                                </button>
                            }</td>
                            <td>{
                                <button className='remove-btn' onClick={() => props.delete({ type: 'DELETE', payload: toDo.id })}>
                                    <img src={remove} alt="delete todo" className='remove' />
                                </button>
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
            {isOpen && <Modal update={props.update} setIsOpen={setIsOpen} oldToDo={toDo} />}
        </div>
    )
}

export default Render