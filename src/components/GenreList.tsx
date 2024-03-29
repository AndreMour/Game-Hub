import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner marginY={10} />;

    return (
        <>
            <Heading fontSize='2xl' marginY={10}>Genres</Heading>
            <List paddingY={3}>
                {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8px' objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList

