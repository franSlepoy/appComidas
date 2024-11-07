import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {};

const RecipeModalSkeleton = (props: Props) => {
  return (
    <Container>
      <SkeletonText mt={4} mb={5} noOfLines={1} skeletonHeight={8} />
      <SkeletonText mt={4} mb={5} noOfLines={1} skeletonHeight={180} borderRadius={200} />
      <SkeletonText noOfLines={5} spacing={4} />
    </Container>
  );
};

export default RecipeModalSkeleton;
