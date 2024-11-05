import { Box, Heading, Link, SkeletonText, Stack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};
const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

const SideNav = ({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {


  return loading? <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" /> :  (
    <>
      <Heading fontSize={14} fontWeight={"bold"} mb={4} color={"blue.400"}>
        CATEGORIAS
      </Heading>
      <Stack>
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            fontSize={14}
            px={2}
            py={2}
            borderRadius={5}
            {...(selectedCategory.strCategory === c.strCategory &&
              selectedProps)}
            _hover={{ textDecoration: "none" }}
            key={c.strCategory}
          >
            {c.strCategory}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default SideNav;
