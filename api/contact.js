export default async function handler(req, res) {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzxaCIppAwoBO280Lv1HiZlwFJON8_3TfCKMuy_3nuKLul-D1b0yqwgLY1fohL_NvM/exec";
  if (req.method !== "POST") return res.status(405).end();

  const response = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(200).json(data);
}
