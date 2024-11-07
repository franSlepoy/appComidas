import {
    Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { SearchForm } from "../types";



type Props = {
  onSubmit: (data: SearchForm) => void;
};

const Header = ({onSubmit}: Props) => {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container mt={1} maxW={"3xl"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray.300" />
          </InputLeftElement>
          <Input
            /* focusBorderColor={!!formState.error.search ? "crimson" : "blue.400"}
            isInvalid={!!formState.error.search ? "crimson" : "blue.400"} */
            {...register("search", { required: true })}
            type="text"
            placeholder="Intenta con chicken o beans..."
          />
          <Button ml={4} bgColor={"blue.400"} color={"white"} type="submit">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
};

export default Header;
