import React, { useState } from "react";
import { Stack, Input, Textarea, Flex, Button } from "@chakra-ui/react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
    prompt: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  handleGenerateText: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  handleGenerateText,
  loading,
}) => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        value={textInputs.title}
        onChange={onChange}
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
      />
      <Textarea
        name="body"
        value={textInputs.body}
        onChange={onChange}
        fontSize="10pt"
        placeholder="Text (optional)"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        height="100px"
      />
      <Textarea
        name="prompt"
        value={textInputs.prompt}
        onChange={onChange}
        fontSize="10pt"
        placeholder="Create with ChatGPT"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        height="100px"
      />
      <Flex justify="space-between">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={!textInputs.title}
          isLoading={loading}
          onClick={handleCreatePost}
        >
          Post
        </Button>
        <Button
          height="34px"
          padding="0px 20px"
          disabled={!textInputs.prompt.trim()}
          isLoading={loading}
          onClick={handleGenerateText}
        >
          Generate Text
        </Button>
      </Flex>
    </Stack>
  );
};

export default TextInputs;
