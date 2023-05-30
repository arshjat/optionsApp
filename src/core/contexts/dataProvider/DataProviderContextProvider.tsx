import { ReactNode, useCallback, useMemo, useEffect } from "react";

//contexts
import { DataProviderContext } from "./dataProviderContext";

//utils
import { getProviderInst } from "@core/data/providers/utils/inst";

//types
import { Provider } from "@core/data/types/providers";
import { Instrument } from "@core/types/instrument";

export const DataProviderContextProvider = ({
  children,
  provider,
  instrument,
}: {
  children: ReactNode;
  provider: Provider;
  instrument: Instrument;
}) => {
  const DataProviderInst = useMemo(
    () => getProviderInst({ provider, instrument }),
    [provider, instrument]
  );

  return (
    <DataProviderContext.Provider value={DataProviderInst}>
      {children}
    </DataProviderContext.Provider>
  );
};
