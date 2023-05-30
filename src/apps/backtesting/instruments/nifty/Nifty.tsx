"use client";

//components
import { DataTable } from "@core/components/dataTable";

//providers
import { DataProviderContextProvider } from "@core/contexts/dataProvider";

//constants
import { COLUMNS_IN_CONSIDERATION } from "@apps/backtesting/constants/columns";

//types
import { Provider } from "@core/data/types/providers";
import { Instrument } from "@core/types/instrument";

export const Nifty = (): JSX.Element => {
  return (
    <DataProviderContextProvider
      provider={Provider.DANFO}
      instrument={Instrument.NIFTY}
    >
      <DataTable title="Nifty Index Chart" columns={COLUMNS_IN_CONSIDERATION} />
    </DataProviderContextProvider>
  );
};
