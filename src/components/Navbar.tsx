import { HStack, Image, Link } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack
      justifyContent={'space-between'}
      // pos={'fixed'}
      boxShadow={'lg'}
      zIndex={'200'}
      bg={'gray.800'}
      w={'100%'}
      px={8}
      py={4}
    >
      <HStack gap={8}>
        <Link href="/">
          <Image
            h={'3rem'}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
          />
        </Link>
        <Link href="/surat">Surat</Link>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
