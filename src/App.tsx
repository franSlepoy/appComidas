import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "./components/MainContent";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { useState } from "react";

import { Category, Meal } from "./types";
import useHttpData from "./hooks/HttpData";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory} `;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);
  const { loading: loadingMeal, data: dataMeal } = useHttpData<Meal>(
    makeMealUrl(defaultCategory)
  );

  return (
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
        <Header />
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
        <MainContent loading={loading} meals={dataMeal} />
      </GridItem>
    </Grid>
  );
}

export default App;
