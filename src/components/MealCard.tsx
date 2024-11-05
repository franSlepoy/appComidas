import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meal: Meal;
  loading: boolean
};

const MealCard = ({ meal, loading }: Props) => {
  return (
    <Card m={4} boxShadow={"lg"} overflow="hidden">
      <Image src={meal.strMealThumb} alt={meal.strMeal} />
      <CardBody>
        <Heading size="md" color={"blue.400"}>
          <Text mt={4}>{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt={0}>
        <Button color={"white"} bg={"blue.400"}>
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
