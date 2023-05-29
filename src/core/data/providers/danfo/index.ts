import { DataFrame, readCSV, toJSON } from "danfojs";

// utils
import { getFilePath } from "@core/data/utils/filePath";

//types
import { Instrument } from "@core/types/instrument";
import { TimeFrame } from "@core/types/timeframe";

export class DanfoProvider {
  private _df?: DataFrame;

  private _timeFrame?: TimeFrame;

  private _instrument?: Instrument;

  constructor() {}

  async getData(): Promise<Array<object> | null> {
    const filePath = this._getFilePath();

    if (!filePath) {
      return Promise.resolve(null);
    }

    if (!this._df) {
      this._df = await readCSV(filePath);
    }

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

  async setInstrument(instrument: Instrument) {
    this._instrument = instrument;

    await this._updateDataFrame();
  }

  async setTimeFrame(timeframe: TimeFrame) {
    this._timeFrame = timeframe;

    await this._updateDataFrame();
  }

  private _getFilePath(): string | undefined {
    if (!this._instrument || !this._timeFrame) {
      return undefined;
    }

    return getFilePath({
      instrument: this._instrument,
      timeframe: this._timeFrame,
    });
  }

  private async _updateDataFrame(): Promise<void> {
    const filePath = this._getFilePath();

    if (filePath) {
      this._df = await readCSV(filePath);
    }
  }
}
