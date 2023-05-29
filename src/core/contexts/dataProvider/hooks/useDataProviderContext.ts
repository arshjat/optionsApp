import { useContext } from "react";
import { DataProviderContext } from "../dataProviderContext";

export const useDataProviderContext = () => useContext(DataProviderContext);
