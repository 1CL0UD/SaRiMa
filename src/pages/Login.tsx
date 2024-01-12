import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { CiLock } from 'react-icons/ci';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid
      templateAreas={`"image main"`}
      gridTemplateRows={'1fr'}
      gridTemplateColumns={'1fr 0.6fr'}
      h={'100vh'}
    >
      <GridItem area={'image'}>
        <Image
          objectFit={'cover'}
          h={'100%'}
          w={'100%'}
          src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </GridItem>
      <GridItem area={'main'} alignSelf={'center'}>
        <VStack gap={8} paddingX={8}>
          <Wrap>
            <WrapItem>
              <Avatar size={'lg'} bg={'green.400'} icon={<CiLock />} />
            </WrapItem>
          </Wrap>
          <InputGroup>
            <InputLeftElement>
              <FaUser />
            </InputLeftElement>
            <Input variant={'outline'} placeholder={'Username'}></Input>
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <RiLockPasswordFill />
            </InputLeftElement>
            <Input variant={'outline'} placeholder={'Password'}></Input>
          </InputGroup>
          <Checkbox colorScheme="blue" alignSelf={'start'}>
            Remember Me
          </Checkbox>
          <Button w={'100%'} colorScheme="green" variant={'solid'}>
            Login
          </Button>
          <Link to={'/home'}>Lupa Password?</Link>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Login;
