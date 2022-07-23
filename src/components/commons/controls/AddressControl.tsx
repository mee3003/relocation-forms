import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { TextField } from "@mui/material";
import { Loader } from "@googlemaps/js-api-loader";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { ModuleProps } from "../../../Module";
import { AppState } from "../../../store";

const Root = styled.div`
  width: 100%;
  & .MuiTextField-root {
    width: 100%;
  }
`;

const options: any = {
  fields: ["formatted_address", "address_components"],
  componentRestrictions: { country: ["de", "at"] },
};

const AddressControl = (props: any) => {
  const moduleProperties = useSelector<AppState, ModuleProps | undefined>(
    (state) => state.preferences.moduleProperties
  );

  const { label, data, handleChange, path, required } = props;

  console.log(props);

  const initGoogleAutocomplete = () => {
    const apiKey = moduleProperties?.gapiKey || "no";
    const loader = new Loader({
      apiKey,
      libraries: ["places"],
    });

    loader.load().then((google) => {
      const input = document.getElementById(path);
      const autocomplete = new google.maps.places.Autocomplete(input as any, options);
      autocomplete.addListener("place_changed", () => {
        const { formatted_address } = autocomplete.getPlace();

        handleChange(path, formatted_address?.replace(", Deutschland", ""));
      });
    });
  };

  React.useEffect(initGoogleAutocomplete, [moduleProperties, path, handleChange]);

  return (
    <Root>
      <TextField
        required={required}
        onChange={(ev) => {
          handleChange(path, ev.target.value);
        }}
        value={data}
        id={path}
        label={label}
        autoComplete="off"
        variant="standard"
      />
    </Root>
  );
};

export default withJsonFormsControlProps(AddressControl);
