export type DemoStep = { id: 'inbound' | 'drafting' | 'draft' | 'send'; label: string };

export function createDemoSequence() {
  const steps: DemoStep[] = [
    { id: 'inbound', label: 'Sarah (Brightwave) emails about the Q3 partnership' },
    { id: 'drafting', label: 'Nora reads it and drafts a reply…' },
    { id: 'draft', label: 'A clean draft — addressed to you, not sent' },
    { id: 'send', label: 'You send it. Nora never sends as you.' },
  ];
  const next = (i: number) => (i + 1) % steps.length;
  return { steps, next };
}
