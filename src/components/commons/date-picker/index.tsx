import React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import deLocale from "date-fns/locale/de";

interface Props {
  value: any;
  onChange: (value: any) => void;
  label: string;
  minDate?: any;
}

export const DatePicker: React.FC<Props> = ({ onChange, value, label, minDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={deLocale}>
      <DesktopDatePicker
        disablePast
        disableMaskedInput
        minDate={minDate}
        label={label}
        inputFormat="dd.MM.yyyy"
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
  );
};
