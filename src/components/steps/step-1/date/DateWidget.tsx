import Typography from "@mui/material/Typography/Typography";

import React from "react";
import { DatePicker } from "../../../commons/date-picker";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const DateWidget: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <Typography variant="h5">Ihr Umzugsdatum</Typography>

      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Steht Ihr Umzugsdatum fest?
          </FormLabel>
          <RadioGroup
            value={true}
            onChange={handleChange}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value={true} control={<Radio />} label="Ja" />
            <FormControlLabel value={false} control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </div>

      <DatePicker
        value="12.12.2022"
        onChange={console.log}
        label="Umzugsdatum"
      />
    </div>
  );
};
