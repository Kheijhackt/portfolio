export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method not allowed" });
  }

  try {
    // Call the Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzxaCIppAwoBO280Lv1HiZlwFJON8_3TfCKMuy_3nuKLul-D1b0yqwgLY1fohL_NvM/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      },
    );

    // Parse the response as JSON
    let data;
    try {
      data = await response.json(); // the Apps Script returns proper JSON
    } catch (err) {
      // If parsing fails, throw an error
      return res
        .status(500)
        .json({
          status: "error",
          message: "Invalid response from Google Script",
        });
    }

    // Forward the success/error from Google Script directly
    if (data.status === "success") {
      return res.status(200).json({ status: "success" });
    } else {
      return res
        .status(500)
        .json({ status: "error", message: data.message || "Unknown error" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "error", message: "Server error" });
  }
}
