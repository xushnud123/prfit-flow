"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";
import Main from "./_components/layout/main";
import Sidebar from "./_components/sidebar/sidebar";
import Navbar from "./_components/navbar/navbar";
import useWindowSize from "@/hooks/use-window-size";
import Loader from "./_components/loader";

interface ProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Provider: FC<ProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const { innerWidth } = useWindowSize();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={NextAdapterApp}>
          {loading ? (
            <Loader />
          ) : (
            <div className='w-screen h-screen'>
              {innerWidth < 900 && <Navbar />}
              <Main
                body={
                  <div className='flex flex-col gap-5 h-full'>{children}</div>
                }
                sidebar={
                  <div className='flex flex-col gap-5 h-full'>
                    {<Sidebar />}
                  </div>
                }
              />
            </div>
          )}
        </QueryParamProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provider;
