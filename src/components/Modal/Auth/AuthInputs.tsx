import { authModalState } from "@/src/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

/**
 * Props for the AuthInputs component.
 */
type AuthInputsProps = {};

/**
 * AuthInputs component that renders the login or signup form based on the current modal state.
 *
 * @param {AuthInputsProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
