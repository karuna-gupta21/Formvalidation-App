import { useMutation } from "@tanstack/react-query";
import { loginUser ,signUpUser} from "../api/auth.ts";

export const useLoginMutation=()=>{

  return useMutation({
    mutationFn:loginUser
  })
}


export const useSignUpMutation=()=>{
  return useMutation({
    mutationFn:signUpUser
  })
}