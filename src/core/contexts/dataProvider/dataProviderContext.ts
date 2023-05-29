import { createContext } from "react";

//type
import { ProviderInst } from "@core/data/types/providerInst";

export const DataProviderContext = createContext<ProviderInst>(null as any); // since default value is not necessary.
