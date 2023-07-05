"use client";
import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
  // doesnt work with useEffect follow the second method
  // const storeModal = useStoreModal();
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen])

  return null;
  // return (
  //   <div className='p-4'>
  //     Root Page
  //   </div>
  // )
}

export default SetupPage;
