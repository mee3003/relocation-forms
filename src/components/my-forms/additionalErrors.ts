const errorBaseReq = {
  message: "Eingabe erforderlich",
  schemaPath: "",
  keyword: "required",
  params: {},
};

const errorBaseFormat = {
  message: "!",
  schemaPath: "",
  keyword: "format",
  params: {},
};

export default [
  { ...errorBaseReq, instancePath: "/lastName" },
  { ...errorBaseReq, instancePath: "/firstName" },
  { ...errorBaseReq, instancePath: "/email" },
  { ...errorBaseFormat, instancePath: "/email" },
  { ...errorBaseReq, instancePath: "/telNumber" },
];
