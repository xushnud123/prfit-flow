import useWindowSize from "@/hooks/use-window-size";
import cn from "@/lib/cn";
import { FC, ReactNode } from "react";

interface MainProps {
  body: ReactNode;
  sidebar: ReactNode;
}

const Main: FC<MainProps> = ({ sidebar, body }) => {
  const { innerWidth } = useWindowSize();
  const isMd = innerWidth < 900;
  return (
    <div className={cn("block h-screen pt-[60px]", !isMd && "pt-0")}>
      <div
        className={cn(
          "max-w-7xl h-[calc(100vh_-_60px)] px-4 mx-auto flex items-center",
          !isMd && "h-screen"
        )}
      >
        {!isMd && (
          <div className={cn("h-screen overflow-x-auto w-3/12 p-5")}>
            {sidebar}
          </div>
        )}
        <div
          className={cn(
            "h-[calc(100vh_-_60px)] box-border w-9/12 max-[900px]:p-5 max-[900px]:px-0 py-5",
            isMd && "w-full",
            !isMd && "h-screen"
          )}
        >
          <div
            className={cn(
              "h-[calc(100vh_-_100px)] overflow-y-auto overflow-hidden",
              !isMd && "h-[calc(100vh_-_40px)] overflow-y-auto"
            )}
            style={{
              overflowY: "auto",
            }}
          >
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
