import "app/globals.css";

import { Nifty } from "@/src/apps/backtesting/instruments/nifty";

const Page = () => {
  return (
    <div className="full-height">
      <Nifty />
    </div>
  );
};

export default Page;
