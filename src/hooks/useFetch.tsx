import { useQuery } from "@tanstack/react-query";

export const useFetch = <T,>(url: string, keys: unknown[], enable = true) => {
    const { data, isError, isLoading,isSuccess } = useQuery({
        queryKey: keys,
        queryFn: () => fetch(url).then(res => res.json()),
        enabled: enable,

    });

    return { data, isError, isLoading ,isSuccess};
};
