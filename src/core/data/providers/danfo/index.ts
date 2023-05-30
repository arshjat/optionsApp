import { DataFrame, readCSV, toJSON } from "danfojs";

// utils
import { getFilePath } from "@core/data/utils/filePath";

//types
import { Instrument } from "@core/types/instrument";
import { TimeFrame } from "@core/types/timeframe";

export const DP_CHANGE_EVENT = "dpContextChange";

export class DanfoProvider extends EventTarget {
  private _df?: DataFrame;

  private _timeFrame: TimeFrame = TimeFrame.FIVE_MIN;

  private _instrument: Instrument = Instrument.NIFTY;

  constructor(instrument: Instrument) {
    super();
    this._instrument = instrument;
  }

  async getData(): Promise<Array<object> | null> {
    const filePath = this._getFilePath();

    if (!filePath) {
      return Promise.resolve(null);
    }

    this._df = await readCSV(filePath);

    return (toJSON(this._df) ?? null) as any;
  }

  async setMetaData({
    instrument,
    timeframe,
  }: {
    instrument: Instrument;
    timeframe: TimeFrame;
  }) {
    this._instrument = instrument;
    this._timeFrame = timeframe;
  }

  setInstrument(instrument: Instrument) {
    this._instrument = instrument;

    this.dispatchEvent(new CustomEvent(DP_CHANGE_EVENT));
  }

  setTimeFrame(timeframe: TimeFrame) {
    this._timeFrame = timeframe;

    this.dispatchEvent(new CustomEvent(DP_CHANGE_EVENT));
  }

  private _getFilePath(): string | undefined {
    return getFilePath({
      instrument: this._instrument,
      timeframe: this._timeFrame,
    });
  }

  getTimeFrame(): TimeFrame {
    return this._timeFrame;
  }

  getInstrument(): Instrument {
    return this._instrument;
  }
}
