import {
  Heading,
  Image,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  const ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredient !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

const RecipeModalContent = ({ data }: Props) => {
  const ingredients = joinIngredients(data);
  console.log(ingredients);
  return (
    <>
      <ModalHeader> {data.strMeal} </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          src={data.strMealThumb}
          alt={data.strMeal}
          width={"100%"}
          borderRadius={"lg"}
        />
        <Heading mt={4} mb={4} size={"md"}>
          Ingredientes
        </Heading>
        <OrderedList>
            {
                ingredients.map((i)=>(
                    <ListItem key={i}>{i}</ListItem>
                ))
            }
        </OrderedList>
        <Text whiteSpace={"pre-line"} mt={4}>
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
};

export default RecipeModalContent;
