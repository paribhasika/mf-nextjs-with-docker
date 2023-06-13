import * as React from 'react';
import type { NextPage } from 'next';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        my={20}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <NextLink href="/product/12345">
              <Button variant="solid" colorScheme="blue">
                Link to the product{' '}
              </Button>
            </NextLink>
          </CardFooter>
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default HomePage;
