import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score >= 75 ? 'green' : score >= 60 ? 'yellow' : '';
  const criticScore = score ?? 0;
  return (
    <Badge size="md" colorPalette={color}>
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
