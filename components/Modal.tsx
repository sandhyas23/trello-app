'use client'
import { Fragment } from 'react'
import { useModalStore } from '@/store/ModalStore'
import { Dialog, Transition } from '@headlessui/react'
import { useBoardStore } from '@/store/BoardStore'
import RadioGroupTask from './RadioGroupTask'

function Modal() {
    
  const [isOpen,closeModal] = useModalStore((state) => [state.isOpen,state.closeModal])
  const [newTaskInput,setNewTaskInput] = useBoardStore((state) => [state.newTaskInput, state.setNewTaskInput])

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog 
           as="form"
           className="relative z-10"
          onClose={closeModal}>

        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>


        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
             <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* <div className="fixed inset-0 bg-black bg-opacity-25" /> */}

                <Dialog.Panel className="w-full transform rounded-2xl p-6 shadow-xl bg-white max-w-md items-center text-left  ">
                  <Dialog.Title 
                     as="h3"
                     className="font-medium text-lg text-gray-900">
                     Add a task
                  </Dialog.Title>

                  <div>
                    <input
                    type='text'
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    placeholder='Enter a new task'
                    className='w-full border rounded-md outline-none p-5'/>
                  </div>

                  <RadioGroupTask/>

                </Dialog.Panel>
             </Transition.Child>

          </div>

        </div>
        
      </Dialog>
    </Transition>
  )
}

export default Modal;