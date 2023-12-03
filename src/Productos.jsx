import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import { itemList } from "./productos_index"; // Importa la lista desde el archivo data.js

export default function Productos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); // Reinicia el índice de la imagen al abrir un nuevo elemento
    onOpen();
  };

  const nextImage = () => {
    if (selectedItem) {
      const nextIndex = (currentImageIndex + 1) % selectedItem.imgs.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const previousImage = () => {
    if (selectedItem) {
      const prevIndex =
        currentImageIndex === 0
          ? selectedItem.imgs.length - 1
          : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-3">
        {itemList.map((item, index) => (
          <div key={index}>
            <Card shadow="sm" isPressable onPress={() => handleOpen(item)}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="dark text-foreground bg-background"
      >
        {selectedItem && (
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2> {selectedItem.title}</h2>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="relative">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={selectedItem.title}
                      className="w-full object-cover h-[140px]"
                      src={selectedItem.imgs[currentImageIndex]} // Cambiado
                    />
                    <br />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-all duration-300">
                      {selectedItem.imgs.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 w-2 rounded-full cursor-pointer ${
                            index === currentImageIndex
                              ? "bg-purple-700"
                              : "bg-gray-300"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div div className="flex flex-col items-center gap-5">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onClick={previousImage}
                      
                      >
                        Anterior
                      </Button>
                      <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onClick={nextImage}
                      >
                        Siguiente
                      </Button>
                    </div>
                  </div>
                </div>

                <p>{selectedItem.price}</p>
                <p>{selectedItem.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}   className="font-bold">
                  Cerrar
                </Button>
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="ghost" color="primary"   className="font-bold">
                        Comprar
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem className="flex items-center ">
                        <a
                          href="https://wa.me/qr/MYKTSS2CGIZ5N1"
                          className="flex items-center text-sm"
                        >
                          <span className="mr-1"> Via: Whatsapp</span>
                          <RiWhatsappLine className="text-2xl" />
                        </a>
                      </DropdownItem>
                      <DropdownItem className="flex items-center ">
                        <a
                          href="https://wa.me/qr/MYKTSS2CGIZ5N1"
                          className="flex items-center text-sm"
                        >
                          <span className="mr-1">Via: Messenger</span>
                          <RiMessengerLine className="text-2xl" />
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </ModalFooter>
            </>
          </ModalContent>
        )}
      </Modal>
    </>
  );
}
