import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { catAtom, updatedCat } from "../atoms";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [_, updateCat] = useAtom(catAtom);
  const [updatedCatInfo, setUpdatedCatInfo] = useAtom(updatedCat);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const isUpdate = Boolean(updatedCatInfo);

  useEffect(() => {
    if (updatedCatInfo) {
      setName(updatedCatInfo?.name);
      setAge(updatedCatInfo?.age);
    }
  }, [updatedCatInfo]);

  const handleAddCat = () => {
    updateCat((prevState) => [
      ...prevState,
      {
        age,
        name,
        id: nanoid(),
      },
    ]);
    router.push("/");
  };

  const handleEditCat = () => {
    updateCat((prevState) => [
      ...prevState.map((cat) =>
        cat.id === updatedCatInfo?.id ? { ...cat, name, age } : cat
      ),
    ]);
    router.push("/");
    setUpdatedCatInfo(null);
  };

  const isUpdateFunction = () => (isUpdate ? handleEditCat() : handleAddCat());

  return (
    <Flex
      direction="column"
      border="3px solid #bcadad5e"
      boxShadow="8px 8px #8876765e"
      borderRadius="10px"
      padding="3rem"
    >
      <Heading fontSize="3xl">ADD A CAT</Heading>
      <Flex flexDirection="column" mt="2rem" gap="2rem">
        <Input
          value={name}
          variant="outline"
          placeholder="Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Input
          value={age}
          variant="outline"
          placeholder="Age"
          onChange={(e) => setAge(e.currentTarget.value)}
        />
        <Button variant="outline" onClick={isUpdateFunction}>
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
