import { Module } from "./Module";
import { ModuleProps } from "./Module";

function App() {
  const moduleProps: ModuleProps = {
    backendUrl: process.env.REACT_APP_BACKEND,
    gapiEnabled: process.env.REACT_APP_GAPI_PLACES,
    gapiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    awsImageUploadEnabled: process.env.REACT_APP_PICTURE_UPLOAD,
    awsPoolId: process.env.REACT_APP_AWS_POOL_ID,
    apiKey: process.env.REACT_APP_API_TOKEN!,
    tenant: "DEV",
  };

  return (
    <>
      <Module {...moduleProps} />
    </>
  );
}

export default App;
