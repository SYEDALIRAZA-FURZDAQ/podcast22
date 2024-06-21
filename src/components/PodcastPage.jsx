import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Heading, Text, SimpleGrid, Box, Image } from '@chakra-ui/react';
import { server } from '../index';

const PodcastPage = () => {
  const { genreId } = useParams(); 
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const { data } = await axios.get(`${server}/genre/${genreId}`);
        setGenre(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching genre data:', error);
        setLoading(false);
      }
    };

    fetchGenreData();
  }, [genreId]); 

  const fetchShowDetails = async (showId) => {
    try {
      const { data } = await axios.get(`${server}/shows/${showId}`);
      console.log('Show details:', data); 
    } catch (error) {
      console.error('Error fetching show details:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!genre) return <p>Genre not found.</p>;

  return (
    <Container maxW={'container.xl'} py={8}>
      <Heading as="h1" size="xl" mb={4}>{genre.title}</Heading>
      <Text fontSize="lg" mb={4}>{genre.description}</Text>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {genre.shows.map((showId, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src={`${server}/shows/${showId}/image`} alt={`Show ${index + 1}`} />
            <Text mt={2}>Show ID: {showId}</Text>
            <button onClick={() => fetchShowDetails(showId)}>Fetch Show Details</button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PodcastPage;
