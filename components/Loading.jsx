import { Center, Spinner, Text } from "@chakra-ui/react"

const LoadingAnimation = () => {
  <>
    <Center zIndex={10} mt={"50vh"}>
      <Spinner size={"xl"}></Spinner>
    </Center>
    <Center mt={"4"}>
      <Text>if you are reading this, change your internet</Text>
    </Center>
  </>
}

export default LoadingAnimation