import {
  HStack,
  Grid,
  GridItem,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { BsChevronRight } from 'react-icons/bs';
import FormInput from '../components/FormInput';

const Surat = () => (
  <>
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateColumns={'0.2fr 1fr'}
      gridTemplateRows={'5rem 1fr 2rem'}
      minH={'100vh'}
    >
      <GridItem area={'header'}>
        <Navbar />
      </GridItem>
      <GridItem area={'nav'} bg={'gray.800'} boxShadow={'lg'} px={4} py={2}>
        <Breadcrumb spacing={1} separator={<BsChevronRight color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Surat</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </GridItem>
      <GridItem area={'main'}>
        <FormInput />
      </GridItem>
      <GridItem area={'footer'}>
        <HStack justifyContent={'center'}>
          <Text>Footer Text</Text>
        </HStack>
      </GridItem>
    </Grid>
  </>
);

export default Surat;
