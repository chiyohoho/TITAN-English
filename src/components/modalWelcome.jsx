import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react';

function VideoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        if (showModal) {
            onOpen();
        }
    }, [onOpen, showModal]);

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
                <ModalOverlay />
                <ModalContent pb={10}>
                    <ModalHeader>Giới Thiệu Về Trung Tâm TITAN ENGLISH</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Video giới thiệu */}
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/NwgvR-ZfUO0"
                            title="Video Giới Thiệu"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default VideoModal;
