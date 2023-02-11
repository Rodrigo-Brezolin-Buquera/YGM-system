import {
    Modal, ModalBody, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton
} from "@chakra-ui/react";


export const ModalComponent = ({ isOpen, onClose , header, children}) => {
   

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

