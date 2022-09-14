import React, { createContext, FC, ReactNode, useState } from "react";

export const StoreContext = createContext<any>({});

const StoreProvider: FC<any> = ({ children }: {children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [studioData, setStudioData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [trialMindBodyFormData, setTrialMindBodyFormData] = useState({});

  const store = {
    isLoading: [isLoading, setIsLoading],
    studioData: [studioData, setStudioData],
    userInfo: [userInfo, setUserInfo],
    trialMindBodyFormData: [trialMindBodyFormData, setTrialMindBodyFormData],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
