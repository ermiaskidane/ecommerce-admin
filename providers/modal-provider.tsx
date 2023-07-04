"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";
// all this done is prevent the hydration
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  )
}