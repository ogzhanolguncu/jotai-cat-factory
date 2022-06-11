import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Text, Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { catAtom, updatedCat } from "../atoms";

export default function Home() {
  const router = useRouter();

  const [catList, updateCat] = useAtom(catAtom);
  const [_, updatedCatInfo] = useAtom(updatedCat);

  const handleCatDelete = (id: string) =>
    updateCat((prevState) => prevState.filter((cat) => cat.id !== id));

  const handleCatUpdate = (id: string) => {
    const selectedCat = catList.find((cat) => cat.id === id);
    if (selectedCat) updatedCatInfo(selectedCat);
    router.push("/add-cat");
  };

  return (
    <Flex
      direction="column"
      border="3px solid #bcadad5e"
      boxShadow="8px 8px #8876765e"
      borderRadius="10px"
      padding="3rem"
    >
      <Heading fontSize="3xl">CAT LIST</Heading>
      <Flex direction="column" gap="2rem">
        {catList.map((cat) => (
          <Flex
            key={cat.id}
            alignItems="center"
            gap="2rem"
            mt="2rem"
            border="3px solid #bcadad5e"
            boxShadow="8px 8px #8876765e"
            borderRadius="10px"
            padding="1rem"
          >
            <Flex direction="column">
              <Flex fontSize="xl" gap="0.5rem">
                <Text>Name:</Text>
                <Text fontWeight="bold">{cat.name}</Text>
              </Flex>
              <Flex fontSize="xl" gap="0.5rem">
                <Text>Age:</Text>
                <Text fontWeight="bold">{cat.age}</Text>
              </Flex>
            </Flex>
            <IconButton
              onClick={() => handleCatDelete(cat.id)}
              aria-label="Delete a cat"
              icon={<DeleteIcon w={6} h={6} />}
            />
            <IconButton
              onClick={() => handleCatUpdate(cat.id)}
              aria-label="Edit a cat"
              icon={<EditIcon w={6} h={6} />}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
