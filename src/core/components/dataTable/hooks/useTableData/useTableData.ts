import { useState, useMemo, useEffect, useCallback } from "react";
import _keys from "lodash/keys";

//types
import { Provider } from "@core/data/types/providers";
import { Instrument } from "@core/types/instrument";
import { TimeFrame } from "@core/types/timeframe";
import { useDataProviderContext } from "@/src/core/contexts/dataProvider/hooks/useDataProviderContext";

export const useTableData = ({
  instrument,
  timeframe,
}: {
  instrument: Instrument;
  timeframe: TimeFrame;
}): {
  data: Array<object> | null;
  loading: boolean;
} => {
  const [tableData, setTableData] = useState<Array<object> | null>(null);
  const [loading, setLoading] = useState(true);

  const ProviderInst = useDataProviderContext();

  const loadData = useCallback(async () => {
    setLoading(true);
    await ProviderInst.setMetaData({ instrument, timeframe });

    const res = await ProviderInst.getData();

    setTableData(res);
    setLoading(false);
  }, [instrument, timeframe, ProviderInst]);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instrument, timeframe]);

  return {
    data: tableData,
    loading,
  };
};
