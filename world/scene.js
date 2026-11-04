// AGIF WORLD scene — genomic.agifuturefoundation.org
// genomic-go-platform — the sequencing floor: sequencer banks and a double-helix monument.
window.AGIF_SCENE = {
  id: "genomic",
  name: "genomic Sequencing Floor",
  accent: "#4ade80",
  sky: 0x071106, fog: [0x071106, 16, 80],
  ground: { color: 0x0d1a0e, grid: true },
  sun: { pos: [30, 60, -25], color: 0xd9f7dd },

  spawn: [0, 18],

  props: [
    { type: "box", pos: [-5, 1.0, -3], size: [1.6, 2, 3], color: 0x123524, flat: true,
      label: "SEQUENCER BANK", onClick: { action: "toast", text: "🧬 SEQUENCER BANK — genomics in, letters out. The swarms read so you don't have to." } },
    { type: "box", pos: [-5, 1.0, 1], size: [1.6, 2, 3], color: 0x123524, flat: true,
      label: "SEQUENCER BANK II", onClick: { action: "pulse" } },
    { type: "cyl", pos: [5.5, 1.3, -2], size: [1.1, 2.6], color: 0x1a4030, flat: true,
      label: "PROTEOMICS CONSOLE", onClick: { action: "toast", text: "PROTEOMICS CONSOLE — proteins are just sequences with consequences." } },
    { type: "box", pos: [6, 0.8, 4], size: [2.2, 1.6, 1.2], color: 0x16382a, flat: true,
      label: "CANDIDATE RACK", onClick: { action: "toast", text: "DRUG CANDIDATE RACK — candidates interview; not all of them are hired." } },
    { type: "sphere", pos: [0, 1.2, 6], size: [1.2], color: 0x4ade80, flat: true,
      label: "SWARM NEST", onClick: { action: "bounce" } },
    { type: "box", pos: [9, 0.8, 6], size: [1.6, 1.6, 1.2], color: 0x4ade80, flat: true,
      label: "PLATFORM REPO", onClick: { action: "link", url: "https://github.com/AGIFutureFoundation/genomic-go-platform" } },
  ],

  agents: [
    { name: "HELIX WARDEN", role: "sequencing floor", pos: [-2.5, -2], color: 0x4ade80, accentColor: "#4ade80", lines: [
      "Agent-based scientific research: genomics, proteomics, drug development. The swarms pipette; I pace.",
      "The helix is the monument. The sequencer banks are the muscle. The coffee is theoretical.",
    ] },
    { name: "SWARM-ALPHA", role: "research swarm", pos: [4, 0.5], color: 0x86efac, accentColor: "#4ade80", lines: [
      "We are many, we are coordinated, and we are extremely polite about sharing the sequencer.",
      "Proteomics is genomics with consequences. We keep both volumes down after dark.",
      "No invented numbers on this floor. The helix counts; we don't.",
    ] },
    { name: "PROTEOME", role: "proteomics analyst", pos: [-6, 5], color: 0x94a3b8, accentColor: "#4ade80", lines: [
      "I fold, I annotate, I move on. The candidate rack is an interview process, not a promise.",
      "Drug development is a long game. Luckily, agents don't sleep.",
    ] },
  ],

  decor: [
    { type: "pillars", count: 18, radius: 26, color: 0x0f2a1a, h: 4.5 },
    { type: "crystals", count: 10, radius: 14, color: 0x15803d, h: 1.4 },
  ],

  eggs: {
    duck: true, duckPos: [-14, 0, -11],
    konami: "🎮 EXPRESSED — dormant sequences activate and the helix does a little twist. Peer review pending. (easter egg 2/2)",
  },

  // bespoke hero: the DNA double helix — two strands of spheres, rungs between
  build: (THREE, world, api) => {
    const helix = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const b = i * 0.55, y = 1 + i * 0.5;
      const a1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), api.mat(0x4ade80, true));
      a1.position.set(Math.cos(b) * 1.1, y, Math.sin(b) * 1.1);
      const a2 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), api.mat(0xa7f3d0, true));
      a2.position.set(-Math.cos(b) * 1.1, y, -Math.sin(b) * 1.1);
      const rung = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.09, 0.09), api.mat(0x2f6f4e, true));
      rung.position.y = y;
      rung.rotation.y = -b;
      helix.add(a1, a2, rung);
    }
    helix.add(api.blobShadow(1.8));
    helix.position.set(0, 0, -7);
    helix.userData.label = "THE HELIX";
    helix.userData.onClick = { action: "toast", text: "🧬 THE HELIX — genomics, proteomics, drug development. Agent swarms do the reading; the helix does the existing." };
    api.clickables.push(helix);
    world.add(helix);
  },
};
