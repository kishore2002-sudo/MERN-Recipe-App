import useAuthToken from "./useAuthToken";

export const useGetUserID = () => {
  const {token}= useAuthToken()  
  return token;
};
