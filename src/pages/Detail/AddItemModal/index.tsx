import { useState } from "react";
import Modal from "components/Modal";
import Button from "components/Button";
import React, { CSSProperties } from "react";
import CloseIcon from "components/Icons/CloseIcon";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
  secondaryButtonText?: string;
  primaryButtonText?: string;
  overlayStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
  onClose: () => void;
}

const AddItemModal = ({ children, onClose }: ModalProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // if (!isOpen) return null;

  return (
    <div>
      <Button
        color="bg-primary"
        label="+ Tambah"
        onClick={() => setIsOpenModal(true)}
      />
      {/* <Modal
        title="Tambah List Item"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onPrimaryButtonClick={() => console.log("CLICKED!")}
        onSecondaryButtonClick={() => setIsOpenModal(false)}
        primaryButtonText="Simpan Sebagai Diambil"
      ></Modal> */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className="fixed inset-0"
      >
        <div className="bg-white rounded-xl w-[55.6%] min-w-[720px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="border-b flex justify-between items-center py-5 px-8">
            <h3 className="text-lg font-semibold leading-normal">
              Tambah List Item
            </h3>
            <span role="button" onClick={onClose}>
              <CloseIcon />
            </span>
          </div>
          <div className="flex flex-col gap-10 p-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold">NAMA LIST ITEM</h1>
              <input
                className="w-full px-3 py-2 rounded-md outline-none border text-md"
                type="text"
                placeholder="Tambahkan nama Activity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xs font-semibold">PRIORITY</h1>
              <input
                type="search"
                name=""
                className="w-1/4 px-3 py-2 rounded-md outline-none border-2 text-md"
                id=""
              >
                {/* <div role="option" className="text-3xl">
                  Halo
                </div>
                <div role="option" className="text-3xl">
                  Halo
                </div>
                <div role="option" className="text-3xl">
                  Halo
                </div> */}
              </input>
            </div>
          </div>
          <div className="border-t px-8 py-5 flex justify-end items-center">
            <Button color="bg-primary" label="Simpan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
