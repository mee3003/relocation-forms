import styled from "@emotion/styled";
import { FormControlLabel, FormHelperText, Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useId } from "react";

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  yesLabel?: string;
  noLabel?: string;
  renderRow?: boolean;
  description?: string;
}

export const YesNo: React.FunctionComponent<Props> = ({
  value,
  onChange,
  label,
  yesLabel = "Ja",
  noLabel = "Nein",
  renderRow = true,
  description,
}) => {
  const labelId = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "true");
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FormLabel sx={{ marginTop: "0.5rem" }} id={labelId}>
          {label}
        </FormLabel>
        <RadioGroup
          sx={{ gap: "1rem 1.5rem", flexWrap: "nowrap" }}
          value={value}
          onChange={handleChange}
          row={renderRow}
          aria-labelledby={labelId}
        >
          <FormControlLabel value={true} control={<Radio />} label={yesLabel} />
          <FormControlLabel value={false} control={<Radio />} label={noLabel} />
        </RadioGroup>
      </FormControl>
      {description && <FormHelperText>{description}</FormHelperText>}
    </div>
  );
};
