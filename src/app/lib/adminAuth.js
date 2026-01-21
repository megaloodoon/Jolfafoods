// Admin auth functionality removed. Provide stubs to avoid imports failing.

export async function hashPassword(password) {
  return String(password || "");
}

export async function tokenFor() {
  return "";
}

export async function readAdmins() {
  return [];
}

export async function writeAdmins() {
  return;
}
