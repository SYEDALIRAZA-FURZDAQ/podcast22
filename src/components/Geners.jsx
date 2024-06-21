import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, SimpleGrid, Button, Heading, Text } from '@chakra-ui/react';
import { server } from '../index';

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // to access the Genrs ID, this is the step I am missing all time 
        const promises = genreIds.map(async id => {
          const { data } = await axios.get(`${server}/genre/${id}`);
          return data;
        });

        const genreData = await Promise.all(promises);
        // console.log(genreData);

        setGenres(genreData); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching genre data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  return (
    <Container maxW={'container.xl'} py={8}>
      <Heading as="h1" size="xl" mb={4}>Genres</Heading>
      {loading ? (
        <p>Loading genres...</p>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {genres.map(genre => (
            <Box key={genre.id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Heading as="h2" size="md" mb={2}>{genre.title}</Heading>
              <Text>{genre.description}</Text>
              {/* <Text mt={2}>Number of Podcasts: {genre.shows}</Text> */}
            {/* Planning to make a slide in top section under heading to show the Shows images regarding the Genra */}
              <Button
                as={RouterLink}
                to={`/genres/${genre.id}`}
                colorScheme="blue"
                w="100%"
              >
                View Podcasts
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default GenresPage;
