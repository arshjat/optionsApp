import { useState, useMemo, useEffect, useCallback } from "react";
import _keys from "lodash/keys";

//constants
import { DP_CHANGE_EVENT } from "@core/data/providers/danfo";

//types
import { useDataProviderContext } from "@core/contexts/dataProvider/hooks/useDataProviderContext";

export const useTableData = (): {
  data: Array<object> | null;
  loading: boolean;
} => {
  const [tableData, setTableData] = useState<Array<object> | null>(null);
  const [loading, setLoading] = useState(true);

  const DataProviderInst = useDataProviderContext();

  const loadData = useCallback(async () => {
    setLoading(true);

    const res = await DataProviderInst.getData();

    setTableData(res);
    setLoading(false);
  }, [DataProviderInst]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    DataProviderInst.addEventListener(DP_CHANGE_EVENT, () => {
      console.log("hey there");
      loadData();
    });

    return () => {
      DataProviderInst.removeEventListener(DP_CHANGE_EVENT, () => {
        loadData();
      });
    };
  }, [loadData, DataProviderInst]);

  return {
    data: tableData,
    loading,
  };
};
