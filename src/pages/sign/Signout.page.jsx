import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../apis/sign.apis";

export const SignOutPage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    signOut();
    navigation("/");
  }, []);
  return null;
};
