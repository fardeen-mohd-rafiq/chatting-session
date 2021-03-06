import React from "react";
import styles from "../../styles/Home.module.scss";
import Link from 'next/link'
import {
  Box,
  Flex,
  Textarea,
  FormControl,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function CreateSession(params) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box className={styles.createsessionpage}>
      <Flex pt="120px">
        <Box w="60%" bg={"#fff"} className={styles.textbox} p="15px">
          <FormControl p="4" textAlign="right">
            <Textarea
              h="300px"
              className={styles.sessionText}
              placeholder="Paste Your Code Here"
            />
            <Text fontSize="lg" color="#9e9e9e">
              0/5000
            </Text>
            <Link href="/ChattingSession">
              <Button
                px="20px"
                py="5px"
                bg={"#2b3954"}
                color="#fff"
                fontSize="20px"
                type="submit"
                className={styles.submit_btn}
              >
                Create Session
              </Button>
            </Link>

          </FormControl>
        </Box>
        <Box w="40%" p={70} pt="0px">

          <Button
            type="button"
            bg={"#2b3954"}
            color="#fff"
            fontSize="20px"
            p="15px"
            className={styles.join_btn}
            onClick={onOpen}
          >
            Join Session
          </Button>
          <Modal size='lg' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color='#fff' bg='#2b3954'>Confirmation</ModalHeader>
              <ModalCloseButton color='#fff' border='none' boxShadow='none' />
              <ModalBody textAlign='center' fontSize='18px'>
                <Input placeholder="Token ID" required type='number' maxLength='4' minLength='4' />
              </ModalBody>

              <ModalFooter color='#fff' borderTop='1px solid #999'>
                <Button bg='#6c757d' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg='#28a745' >Join</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
}
export default CreateSession;