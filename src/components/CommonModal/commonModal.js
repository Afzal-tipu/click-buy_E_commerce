'use client'

//import Dialog, Transition
import { Dialog, Transition } from "@headlessui/react";

// import Fragment
import { Fragment, useState } from "react";



export default function CommonModal ({modalTittle, mainContent, showButtons, buttonComponent, show, setShow}) {
    

    // Close handler function
    const closeModal = ()=> {
        setShow(false);
    };

    return (
      <Transition show={show} as={Fragment}>
        <Dialog as="div" className={'z-10 bg-yellow-200'} open={show} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-red-400 bg-opacity-30 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-900"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                    <Dialog.Panel className={'w-screen max-w-md'}>
                        <div className="flex h-full flex-col overflow-y-scroll bg-yellow-500 shadow-lg">
                            <div className="">
                                <div>
                                    <Dialog.Title>{modalTittle}</Dialog.Title>
                                </div>
                                <div>
                                    {mainContent}
                                </div>

                            </div>
                            {
                                showButtons ? <div>{buttonComponent}</div> : null
                            }

                        </div>
                    </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};
