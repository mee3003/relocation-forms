const prefix = "https://umzug-meister.de/wp-json/um-configurator/v1/";

const headers: any = {
  "Content-Type": "application/json; charset=UTF-8",
};

export const getRequest = <T>(url: string) => {
  return fetch(prefix.concat(url), {
    method: "GET",
    headers,
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
    headers,
    body: JSON.stringify(body),
  }).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as T;
    } else {
      throw { status: response.status, url: response.url };
    }
  });
};
