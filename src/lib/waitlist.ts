const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const PLACEHOLDER_ENDPOINT = 'PLACEHOLDER';

export function isValidEmail(s: string): boolean {
  return EMAIL_RE.test((s ?? '').trim());
}

export async function submitWaitlist(
  email: string,
  opts: { endpoint: string; fetchImpl?: typeof fetch },
): Promise<{ ok: boolean; message: string }> {
  if (!isValidEmail(email)) return { ok: false, message: 'Please enter a valid email.' };
  if (opts.endpoint === PLACEHOLDER_ENDPOINT) return { ok: true, message: "You're on the list." };
  const doFetch = opts.fetchImpl ?? fetch;
  try {
    const res = await doFetch(opts.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email }).toString(),
    });
    return res.ok
      ? { ok: true, message: "You're on the list." }
      : { ok: false, message: 'Something went wrong — try again.' };
  } catch {
    return { ok: false, message: 'Network error — try again.' };
  }
}
