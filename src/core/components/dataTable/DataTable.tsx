import { Column, Table } from "react-virtualized";

import "react-virtualized/styles.css"; // only needs to be imported once
import "app/globals.css";

import _map from "lodash/map";
import _capitalize from "lodash/capitalize";

//components
import { Loader } from "@core/components/loader";

//hooks
import { useTableData } from "./hooks/useTableData";

//types
import { Instrument } from "@core/types/instrument";
import { TimeFrame } from "@core/types/timeframe";

export const DataTable = ({
  columns,
  title,
  instrument,
  timeframe,
}: {
  columns: string[];
  title: string;
  instrument: Instrument;
  timeframe: TimeFrame;
}) => {
  const { data, loading } = useTableData({
    instrument,
    timeframe,
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="full-height w-full flex flex-col items-center">
      <h1 style={{ fontSize: "4rem", fontWeight: 600 }}>{title}</h1>

      <div style={{ maxHeight: "40rem", marginTop: "4rem" }}>
        <Table
          width={600}
          height={500}
          headerHeight={20}
          rowHeight={30}
          rowCount={data?.length ?? 0}
          rowGetter={({ index }) => data?.[index]}
        >
          {_map(columns, (column) => (
            <Column label={_capitalize(column)} dataKey={column} width={100} />
          ))}
        </Table>
      </div>
    </div>
  );
};
