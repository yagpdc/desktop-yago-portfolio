import React from 'react'
import Image from 'next/image';

function Folder() {

    const [open, setOpen] = React.useState(true);

    const toggleState = () => {
        setOpen(!open)
    }

  return (
    <div className='flex flex-col items-center justify-center' onClick={toggleState}>
        <Image src={open ? '/folder.svg' : '/open-folder.svg'} alt='folder' width={64} height={64} />
        <h1 className='text-1xl font-bold mt-1'>Folder</h1>
    </div>
  )
}

export default Folder
