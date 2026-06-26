import { describe, it, expect } from 'vitest';
import { createDemoSequence } from '../src/lib/demoSequence';

describe('demoSequence', () => {
  it('runs inbound -> drafting -> draft -> send in order', () => {
    const { steps } = createDemoSequence();
    expect(steps.map(s => s.id)).toEqual(['inbound', 'drafting', 'draft', 'send']);
  });
  it('wraps around after the last step', () => {
    const { steps, next } = createDemoSequence();
    expect(next(steps.length - 1)).toBe(0);
    expect(next(0)).toBe(1);
  });
});
