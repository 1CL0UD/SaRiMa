import {
  VStack,
  Card,
  CardBody,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Text,
} from '@chakra-ui/react';

const FormInput = () => {
  return (
    <VStack py={'2rem'}>
      <Card w={'75%'}>
        <CardBody>
          <form>
            <Stack>
              <Text textAlign={'center'} fontWeight={'bold'}>
                Form Administratif
              </Text>
              <Divider my={2} />
              <FormControl id="first-name" isRequired>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input placeholder="Nama Lengkap" />
                <FormErrorMessage>Kalau Error</FormErrorMessage>
              </FormControl>
              <FormControl id="no-kk" isRequired>
                <FormLabel>Nomor KK</FormLabel>
                <Input placeholder="Nomor KK" />
                <FormErrorMessage>Kalau Error</FormErrorMessage>
              </FormControl>
              <FormControl id="nik" isRequired>
                <FormLabel>NIK</FormLabel>
                <Input placeholder="NIK" />
                <FormErrorMessage>Kalau Error</FormErrorMessage>
              </FormControl>
              <FormControl id="alamat" isRequired>
                <FormLabel>Alamat</FormLabel>
                <Input placeholder="Alamat" />
                <FormErrorMessage>Kalau Error</FormErrorMessage>
              </FormControl>
              <FormControl id="kolom-baru" isRequired>
                <FormLabel>Kolom Baru</FormLabel>
                <Input placeholder="Kolom Baru" />
                <FormHelperText>Untuk Helper</FormHelperText>
                <FormErrorMessage>Kalau Error</FormErrorMessage>
              </FormControl>
              <Divider my={2} />
              <Button colorScheme="green" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default FormInput;
