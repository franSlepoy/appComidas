import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    SkeletonText,
    Text,
  } from "@chakra-ui/react";

type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <Card  m={4} boxShadow={"lg"} overflow="hidden">
      
      <CardBody>
      <SkeletonText width={300} mt="1" noOfLines={1} spacing="4" skeletonHeight="220" />
      <SkeletonText width={"100%"} mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      
      </CardBody>
      
    </Card>
  );
};

export default SkeletonCard;
