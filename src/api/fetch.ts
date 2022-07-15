const prefix = "https://ummei.dev1--server.de/wp-json/um-configurator/v1/";

const headers = () => {
  const headers: any = {
    "Content-Type": "application/json; charset=UTF-8",
  };
  //@ts-ignore
  if (window.UMCONFUrls?.nonce) {
    //@ts-ignore

    headers["X-WP-NONCE"] = window.UMCONFUrls.nonce;
  }

  return headers;
};

export const getRequest = <T>(url: string) => {
  return fetch(prefix.concat(url), {
    method: "GET",
    headers: headers(),
  }).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as T;
    } else {
      throw { status: response.status, url: response.url };
    }
  });
};

export const postRequest = <T>(url: string, body: any) => {
  return fetch(prefix.concat(url), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  }).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as T;
    } else {
      throw { status: response.status, url: response.url };
    }
  });
};
