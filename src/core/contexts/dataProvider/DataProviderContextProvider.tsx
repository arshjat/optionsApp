import { ReactNode, useCallback, useMemo, useEffect } from "react";

//contexts
import { DataProviderContext } from "./dataProviderContext";

//utils
import { getProviderInst } from "@core/data/providers/utils/inst";

//types
import { Provider } from "@core/data/types/providers";

export const DataProviderContextProvider = ({
  children,
  provider,
}: {
  children: ReactNode;
  provider: Provider;
}) => {
  const DataProviderInst = useMemo(() => getProviderInst(provider), [provider]);

  return (
    <DataProviderContext.Provider value={DataProviderInst}>
      {children}
    </DataProviderContext.Provider>
  );
};
