import "app/globals.css";

import { Nifty } from "@apps/backtesting/instruments/nifty";

const Page = () => {
  return (
    <div className="full-height">
      <Nifty />
    </div>
  );
};

export default Page;
