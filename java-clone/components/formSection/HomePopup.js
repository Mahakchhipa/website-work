"use client";
import { useState, useEffect } from "react";
import PopupForm from "./PopupForm";
export default function HomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log("Popup should appear now.");
      setIsVisible(true);
    }, 30000); // 30 seconds
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <PopupForm isOpen={true} onClose={handleClose} />
        </div>
      )}
    </>
  );
}
