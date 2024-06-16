import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image borderRadius="full" boxSize="150px" src="/path/to/profile-pic.jpg" alt="Profile Picture" />
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate blogger who loves to write about technology, travel, and life experiences. Follow my journey and stay updated with my latest posts.
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <Link href="https://twitter.com/yourprofile" isExternal mx={2}>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal mx={2}>
            <FaGithub size="30px" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal mx={2}>
            <FaLinkedin size="30px" />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;