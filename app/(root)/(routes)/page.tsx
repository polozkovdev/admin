"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const RootPage = () => {
  const onOpen = useStoreModal((s) => s.onOpen);
  const isOpen = useStoreModal((s) => s.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default RootPage;
