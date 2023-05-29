import _once from "lodash/once";

//providers
import { DanfoProvider } from "@core/data/providers/danfo";

//types
import { Provider } from "@core/data/types/providers";
import { ProviderInst } from "@core/data/types/providerInst";

export const getProviderInst = _once((provider: Provider): ProviderInst => {
  switch (provider) {
    default: {
      return new DanfoProvider();
    }
  }
});
