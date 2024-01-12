import { HStack, Tag, Text, VStack } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';

const Jumbotron = () => {
  return (
    <VStack bg={'purple'} pt={24} h={'100vh'}>
      <h1>Test</h1>
      <HStack bg={'black'} rounded={'full'} px={3} py={2}>
        <Tag size={'lg'} rounded={'full'} variant="solid" colorScheme="teal">
          Teal
        </Tag>
        <Text>Sistem Informasi Rejomulyo Lima</Text>
        <BsChevronRight />
      </HStack>
    </VStack>
  );
};

export default Jumbotron;
