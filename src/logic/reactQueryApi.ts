import { QueryFunctionContext } from "react-query";
import { publicRequest } from "./axiosConfig";

export const getQueryApiFn = async <T>({
  queryKey,
}: QueryFunctionContext<[string]>): Promise<T> => {
  const data = await publicRequest.get(queryKey[0]);
  return data.data;
};
