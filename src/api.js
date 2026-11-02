// Your live Modal backend URL
export const MODAL_API_URL = "https://saviwire--velalive-ai-fastapi-app.us-east.modal.run";

export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${MODAL_API_URL}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Backend connection failed:", error);
    return null;
  }
};
