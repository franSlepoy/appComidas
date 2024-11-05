import { Grid } from "@chakra-ui/react";
import { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
};

const MainContent = ({ meals, loading }: Props) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
      
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }}>
        {loading && skeletons.map((s)=> <SkeletonCard key={s}/>)}
        {!loading && meals.map((m) => (
          <MealCard key={m.idMeal} meal={m} loading={loading} />
        ))}
      </Grid>
   
  );
};

export default MainContent;
