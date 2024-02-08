import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner marginY={10} />;

    return (
        <List paddingY={9}>
            {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius='8px ' src={getCroppedImageUrl(genre.image_background)} />
                    <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList

