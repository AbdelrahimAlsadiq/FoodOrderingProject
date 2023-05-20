export function extractAuthError(errorMsg) {
  const regex = /auth\/(.*?)(?:\)).*?$/;
  const match = regex.exec(errorMsg);
  if (match && match.length > 1) {
    return match[1];
  }
  return null;
}
