import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { data } = useGenres();

    return (
        <List paddingY={9}>
            {data.map(genre => <ListItem paddingY='5px' key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius='8px ' src={getCroppedImageUrl(genre.image_background)} />
                    <Text fontSize={'lg'}>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList

