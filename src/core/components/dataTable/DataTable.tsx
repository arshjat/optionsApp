import { Column, Table } from "react-virtualized";

import "react-virtualized/styles.css"; // only needs to be imported once
import "app/globals.css";

import _map from "lodash/map";
import _capitalize from "lodash/capitalize";

//components
import { Loader } from "@core/components/loader";
import { FilterBar } from "./components/filterBar/FilterBar";

//hooks
import { useTableData } from "./hooks/useTableData";

export const DataTable = ({
  columns,
  title,
}: {
  columns: string[];
  title: string;
}) => {
  const { data: tableData, loading } = useTableData();

  return (
    <div className="full-height w-full flex flex-col items-center">
      <h1 style={{ fontSize: "4rem", fontWeight: 600 }}>{title}</h1>
      <FilterBar />
      <div style={{ maxHeight: "40rem", marginTop: "4rem" }}>
        {loading ? (
          <Loader />
        ) : (
          <Table
            width={1400}
            height={500}
            headerHeight={20}
            rowHeight={30}
            rowCount={tableData?.length ?? 0}
            rowGetter={({ index }) => tableData?.[index]}
          >
            {_map(columns, (column) => (
              <Column
                label={_capitalize(column)}
                dataKey={column}
                width={300}
              />
            ))}
          </Table>
        )}
      </div>
    </div>
  );
};
