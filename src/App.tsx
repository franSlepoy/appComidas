import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import MainContent from "./components/MainContent";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { useState } from "react";

import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;
const makeMealUrl = (category: Category) =>
  `${baseUrl}filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    setLoadingMeal(true);
    const url = `${baseUrl}search.php?s=${searchForm.search}`;
    axios
      .get<{ meals: Meal[] }>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  };

  const { fetch, loading:loadingMealdetails, data: mealDetailData } = useFetch<MealDetails>();

   const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
  }; 

  return (
    <>
      <Grid
        templateRows="60px 1fr" // 60px de altura para el header, el resto para Nav y Main
        templateColumns={{ sm: "1fr", md: "250px 1fr" }} // Nav 250px en pantallas medianas y más grandes
        h="100vh" // Ocupar toda la altura de la ventana
      >
        {/* Header */}
        <GridItem
          pos={"sticky"}
          top={0}
          bgColor="white"
          boxShadow={"lg"}
          pt={"px"}
          colSpan={2}
        >
          <Header onSubmit={searchApi} />
        </GridItem>

        {/* Nav */}
        <GridItem
          position="sticky"
          top="60px"
          overflowY="auto"
          height="calc(100vh - 60px)" // Ocupar la altura restante
          p={5}
        >
          <SideNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={data}
            loading={loading}
          />
        </GridItem>

        {/* Main */}
        <GridItem p={4} bgColor="gray.100" overflowY="auto">
          <MainContent
            openRecipe={searchMealDetails}
            loading={loading}
            meals={dataMeal || []}
          />
        </GridItem>
      </Grid>

      <RecipeModal data={mealDetailData} loading={loadingMealdetails} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
