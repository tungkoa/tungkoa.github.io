import React, { createContext, FC, ReactNode, useState } from "react";

export const StoreContext = createContext<any>({});

const StoreProvider: FC<any> = ({ children }: {children}) => {
  const [isLoading, setIsLoading] = useState(false);

  const store = {
    isLoading: [isLoading, setIsLoading],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
