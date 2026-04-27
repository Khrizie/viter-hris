import { useQuery } from "@tanstack/react-query";
import { queryData } from "./queryData";

// Queries hook
const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
<<<<<<< HEAD
  refetchOnWindowFocus = false,
=======
  refetchOnWindowFocus = false
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchOnWindowFocus: refetchOnWindowFocus,
    cacheTime: 200,
  });
};

export default useQueryData;
