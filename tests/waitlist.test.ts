import { describe, it, expect, vi } from 'vitest';
import { isValidEmail, submitWaitlist } from '../src/lib/waitlist';

describe('isValidEmail', () => {
  it('accepts a normal address', () => expect(isValidEmail('a@b.com')).toBe(true));
  it('rejects junk', () => { expect(isValidEmail('nope')).toBe(false); expect(isValidEmail('')).toBe(false); });
});

describe('submitWaitlist', () => {
  it('short-circuits on the placeholder endpoint with no network call', async () => {
    const fetchImpl = vi.fn();
    const r = await submitWaitlist('a@b.com', { endpoint: 'PLACEHOLDER', fetchImpl: fetchImpl as any });
    expect(r.ok).toBe(true);
    expect(fetchImpl).not.toHaveBeenCalled();
  });
  it('POSTs to a real endpoint and reports success', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    const r = await submitWaitlist('a@b.com', { endpoint: 'https://x/y', fetchImpl: fetchImpl as any });
    expect(fetchImpl).toHaveBeenCalledOnce();
    expect(r.ok).toBe(true);
  });
  it('rejects an invalid email before any network call', async () => {
    const fetchImpl = vi.fn();
    const r = await submitWaitlist('nope', { endpoint: 'https://x/y', fetchImpl: fetchImpl as any });
    expect(r.ok).toBe(false);
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
