const headers: any = {
  "Content-Type": "application/json; charset=UTF-8",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

const tenantFilter = (tenant: string) => `?filters[tenant][$eq]=${tenant}`;

export const getRequest = <T>(url: string, tenant: string, populate?: string) => {
  const buildUrl = (populate?: string) => {
    let r = url.concat(tenantFilter(tenant));

    if (populate) {
      r = r.concat("&").concat(populate);
    }
    return r;
  };

  return fetch(buildUrl(populate), {
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
  return fetch(url, {
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
