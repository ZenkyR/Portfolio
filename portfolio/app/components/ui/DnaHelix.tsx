const RUNGS = 26;

const pairing = { A: "T", T: "A", G: "C", C: "G" } as const;
const bases = Object.keys(pairing) as (keyof typeof pairing)[];
const tokens = ["{", "}", ";", "0", "1", "=", ">", "/", "*", "<", "&", "|"];

const strands = Array.from({ length: RUNGS }, (_, index) => {
  const base = bases[(index * 3 + Math.floor(index / 4)) % bases.length];

  return {
    base,
    pair: pairing[base],
    token: tokens[(index * 5 + Math.floor(index / 3)) % tokens.length],
    phase: index * 0.26,
  };
});

const DnaHelix = () => (
  <div className="helix" aria-hidden="true">
    {strands.map(({ base, pair, token, phase }, index) => (
      <div
        key={index}
        className="helix-rung"
        style={{ "--phase": `${phase}s` } as React.CSSProperties}
      >
        <span className="helix-base helix-base-left">{base}</span>
        <span className="helix-bond" />
        <span className="helix-base helix-base-right">{pair}</span>
        <span className="helix-code">{token}</span>
      </div>
    ))}
  </div>
);

export default DnaHelix;
