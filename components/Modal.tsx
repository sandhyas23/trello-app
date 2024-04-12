'use client'
import {  FormEvent, Fragment, useRef } from 'react'
import { useModalStore } from '@/store/ModalStore'
import { Dialog, Transition } from '@headlessui/react'
import { useBoardStore } from '@/store/BoardStore'
import RadioGroupTask from './RadioGroupTask'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/16/solid'

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);
  
    
  const [isOpen,closeModal] = useModalStore((state) => [state.isOpen,state.closeModal])
  const [addTask,newTaskInput,newTaskType,setNewTaskInput,image,setImage] = 
    useBoardStore((state) => [
      state.addTask,
      state.newTaskInput,
      state.newTaskType, 
      state.setNewTaskInput,
      state.image, 
      state.setImage])

  const handleSubmit = (e:FormEvent) =>{
     e.preventDefault();
     if(!newTaskInput) return;

     addTask(newTaskInput,newTaskType, image);
     setImage(null);
     closeModal();
  }

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog 
           as="form"
           className="relative z-10"
           onClose={closeModal}
           onSubmit={ handleSubmit}>

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
                  {/* Radio group for type of task */}
                  <RadioGroupTask/>

                  {/* Add image */}
                  <div>
                    <button
                       type="button"
                       onClick={() => {imagePickerRef.current?.click()}}
                       className='w-full border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2
                                 focus-visible:ring-blue-500'>
                        <PhotoIcon className='h-6 w-6 mr-2 inline-block'/>
                        Upload Image

                    </button>
                    {image && (
                      <Image
                          alt="Uploaded image"
                          width={200}
                          height={200}
                          className="w-full h-44 cursor-not-allowed mt-2 filter hover:grayscale transition-all"
                          src={URL.createObjectURL(image)}
                          onClick={() =>{
                            setImage(null);
                          }}
                      />
                    )}
                    <input
                    type='file'
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      if(!e.target.files![0].type.startsWith("image/")) return;
                      setImage(e.target.files![0]);
                    }}/>
                  </div>

                  <div>
                    <button 
                      type='submit'
                      disabled={!newTaskInput}
                      className=' justify-center inline-flex rounded-md border mt-2 px-4 py-2
                       text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none disabled:cursor-not-allowed
                       disabled:text-gray-300 disabled:bg-gray-100 '>
                      Add Task
                    </button>
                  </div>

                </Dialog.Panel>
             </Transition.Child>

          </div>

        </div>
        
      </Dialog>
    </Transition>
  )
}

export default Modal;