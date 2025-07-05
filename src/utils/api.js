export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;

  const res = await fetch("https://ai-cv-builder-be.fly.dev/auth/refresh", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  });

  const data = await res.json();
  if (res.ok && data.access_token) {
    localStorage.setItem("token", data.access_token);
    return data.access_token;
  }
  return null;
}

export async function fetchWithAuth(url, options = {}) {
  let token = localStorage.getItem("token");

  let res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`
    }
  });

  if (res.status === 401 || res.status === 403) {
    token = await refreshAccessToken();
    if (!token) throw new Error("Login expired");

    res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`
      }
    });
  }

  return res;
}
