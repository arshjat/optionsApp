import _once from "lodash/once";

//providers
import { DanfoProvider } from "@core/data/providers/danfo";

//types
import { Provider } from "@core/data/types/providers";
import { ProviderInst } from "@core/data/types/providerInst";
import { Instrument } from "@core/types/instrument";

export const getProviderInst = _once(
  ({
    provider,
    instrument,
  }: {
    provider: Provider;
    instrument: Instrument;
  }): ProviderInst => {
    switch (provider) {
      default: {
        return new DanfoProvider(instrument);
      }
    }
  }
);
