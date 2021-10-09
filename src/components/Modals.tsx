import React, { RefObject } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    ModalFooter,
    ModalBody,
    Box,
    Button,
    Flex
} from "@chakra-ui/react"
import { useRouter } from 'next/router'

type SubmitCodeProps = {
    isOpen: boolean;
    onClose: () => void

};

export const SubmitCode: React.FC<SubmitCodeProps> = ({ isOpen, onClose }) => {
    const router = useRouter()

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Box>
                        <Text>Ready to submit your code?</Text>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde illo nihil tempora explicabo quas tempore et minus accusantium, consequatur officiis atque, nemo provident cumque rerum ipsam recusandae enim doloremque.
                        </Text>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Flex width="100%" >
                        <Button onClick={() => {
                            alert('Attempt submitted')
                            router.push('/student')
                            }} >
                            Submit Code
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Go back
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
