import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { RiWhatsappLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";

export default function Productos() {
  const list = [
    {
      title: "Raspberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$10.00",
      description: "A delicious raspberry for your snacks and recipes!",
    },
    {
      title: "Strawberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$8.00",
      description: "Fresh and juicy strawberries for your desserts!",
    },
    {
      title: "Raspberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$10.00",
      description: "A delicious raspberry for your snacks and recipes!",
    },
    {
      title: "Strawberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$8.00",
      description: "Fresh and juicy strawberries for your desserts!",
    },
    {
      title: "Raspberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$10.00",
      description: "A delicious raspberry for your snacks and recipes!",
    },
    {
      title: "Strawberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$8.00",
      description: "Fresh and juicy strawberries for your desserts!",
    },
    {
      title: "Raspberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$10.00",
      description: "A delicious raspberry for your snacks and recipes!",
    },
    {
      title: "Strawberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$8.00",
      description: "Fresh and juicy strawberries for your desserts!",
    },
    {
      title: "Raspberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$10.00",
      description: "A delicious raspberry for your snacks and recipes!",
    },
    {
      title: "Strawberry",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwZ7Jepk0fhfRiZMTWZAy73OrL54DgMUyMQ&usqp=CAU",
      price: "$8.00",
      description: "Fresh and juicy strawberries for your desserts!",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleOpen = (index) => {
    setSelectedProduct(list[index]);

    onOpen();
  };

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-3">
      {list.map((item, index) => (
        <div key={index}>
          <Card shadow="sm" isPressable onPress={() => handleOpen(index)}>
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
          <div>
            <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {selectedProduct && (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {selectedProduct.title}
                    </ModalHeader>
                    <ModalBody>
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={selectedProduct.title}
                        className="w-full object-cover h-[140px]"
                        src={selectedProduct.img}
                      />

                      <p>{selectedProduct.price}</p>
                      <p>{selectedProduct.description}</p>
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        className="border-1 border-pink-700"
                        color="danger"
                        variant="light"
                        onPress={onClose}
                      >
                        Cerrar
                      </Button>

                      <div>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              className="border-1 border-blue-700"
                              color="primary"
                              variant="light"
                            >
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
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
}
