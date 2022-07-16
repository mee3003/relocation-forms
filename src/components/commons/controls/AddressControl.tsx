import * as React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { TextField } from "@mui/material";
import { Loader } from "@googlemaps/js-api-loader";
import styled from "@emotion/styled";

interface Props {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
  label: string;
}

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

const apiKey = "AIzaSyBqLiqt8OVntKCwcjqgmWtl5nj0y4_xs7A2";

const AddressControl = (props: Props) => {
  const { label, data, handleChange, path } = props;

  const initGoogleAutocomplete = () => {
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

  React.useEffect(initGoogleAutocomplete, [apiKey]);

  return (
    <Root>
      <TextField
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
