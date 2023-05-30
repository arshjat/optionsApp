import { useCallback, useEffect, useState } from "react";

//components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//hooks
import { useDataProviderContext } from "@core/contexts/dataProvider/hooks/useDataProviderContext";

//types
import { TimeFrame } from "@core/types/timeframe";

export const FilterBar = () => {
  const DataProviderInst = useDataProviderContext();

  const [timeframe, setTimeframe] = useState(DataProviderInst.getTimeFrame());

  const handleTimeFrameChange = useCallback(
    (e: SelectChangeEvent) => {
      DataProviderInst.setTimeFrame(e.target.value as TimeFrame);
      setTimeframe(e.target.value as TimeFrame);
    },
    [DataProviderInst, setTimeframe]
  );

  return (
    <div>
      {/* 
       To be added support for Bank Nifty will be added
        <div style={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="instrument-label">Instrument</InputLabel>
          <Select
            labelId="instrument-label"
            id="instrument"
            value={instrument}
            label="Instrument"
            onChange={handleInstrumentChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <div style={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="timeframe-label">Time Frame</InputLabel>
          <Select
            labelId="timeframe-label"
            id="timeframe"
            value={timeframe}
            label="Time Frame"
            onChange={handleTimeFrameChange}
          >
            <MenuItem value={TimeFrame.ONE_MIN}>1 minute</MenuItem>
            <MenuItem value={TimeFrame.THREE_MIN}>3 minutes</MenuItem>
            <MenuItem value={TimeFrame.FIVE_MIN}>5 minutes</MenuItem>
            <MenuItem value={TimeFrame.TEN_MIN}>10 minutes</MenuItem>
            <MenuItem value={TimeFrame.FIFTEEN_MIN}>15 minutes</MenuItem>
            <MenuItem value={TimeFrame.THIRTY_MIN}>30 minutes</MenuItem>
            <MenuItem value={TimeFrame.ONE_HOUR}>1 hour</MenuItem>
            <MenuItem value={TimeFrame.ONE_DAY}>1 day</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
