import { Center, Text, Pressable, IPressableProps } from 'native-base';
import { COLORS } from '../../assets/COLORS';

interface Props extends IPressableProps {
  title: string;
  isSelected: boolean;
}

export function Option({ title, isSelected = false, ...rest }: Props) {
  return (
    <Pressable flex={1} h={7} maxH={7} {...rest}>
      <Center h="full" w="full" bgColor={isSelected ? COLORS.COLOR_GOLD4 : "transparent"} rounded="sm" >
        <Text color={isSelected ? COLORS.COLOR_BLACK : COLORS.COLOR_GOLD3} fontFamily="heading" fontSize="xs" fontWeight="bold">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
}