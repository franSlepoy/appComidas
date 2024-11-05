import { Input, InputGroup } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"


type Props = {}

const Header = (props: Props) => {
  return (
    <InputGroup flex="1" /* startElement={<LuUser />} */>
        <Input placeholder="Username" />
      </InputGroup>
  )
}

export default Header
