import { QueryClient } from "@tanstack/react-query";

const Client = {
	queryClient: new QueryClient(),
};

export const getQueryClient = () => Client.queryClient;
