chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    const { responseHeaders } = details;

    console.log(details);

    responseHeaders.push({
      name: "Access-Control-Allow-Origin",
      value: "*",
    });
    responseHeaders.push({
      name: "CORS-Modified",
      value: "YES",
    });

    return {
      responseHeaders,
    };
  },
  { urls: ["https://*.googlevideo.com/*"] },
  ["blocking", "responseHeaders"]
);
