import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';

function DataTable() {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getData = async () => {
       const data = await server_calls.get()
       console.log(data);
       
        
    }

  return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Vehicle
                </button>
            </div>
            <Button className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' >Update</Button>
            <Button className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' >Delete</Button>
        </div>
        {/* Data Table section */}
        <button onClick={getData}>Get Data</button>
    </>
  )
}

export default DataTable