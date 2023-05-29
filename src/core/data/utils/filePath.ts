//types
import { Instrument } from "@core/types/instrument";
import { TimeFrame } from "@core/types/timeframe";

const BASE_PATH = `../datasets/`;

export const getFilePath = ({
  instrument,
  timeframe,
}: {
  instrument: Instrument;
  timeframe: TimeFrame;
}): string | undefined => {
  const filePath = `${BASE_PATH}/${instrument}/${timeframe}.csv`;

  return filePath;
};
