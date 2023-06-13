import { GetServerSideProps } from 'next';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  Grid,
  StackDivider,
  GridItem,
} from '@chakra-ui/react';

interface ProductTemplateProps {
  productId: string;
}
export const ProductTemplate = ({ productId }: ProductTemplateProps) => {
  return (
    <Container maxW={'7xl'}>
      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        py={{ base: 18, md: 24 }}
        justifyContent="center"
        gap={6}
      >
        <GridItem>
          <Flex>
            <Image
              rounded={'md'}
              alt={`product image of ${productId}`}
              src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
        </GridItem>
        <GridItem>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                <Text as="b"> Automatic Watch</Text>
              </Heading>
              <Text color={'gray.900'} fontWeight={300} fontSize={'2xl'}>
                $350.00 USD
              </Text>
              <Text color={'gray.900'} fontWeight={300} fontSize={'lg'}>
                Product ID : {productId}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={<StackDivider color={'gray.500'} />}
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text color={'gray.900'} fontSize={'2xl'} fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
              </VStack>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'gray.900'}
              color={'white'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Add to cart
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Pass data to the page via props
  return { props: { productId: ctx.query.slug } };
};

export default ProductTemplate;
