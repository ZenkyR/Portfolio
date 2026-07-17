export const easeOut = [0.16, 1, 0.3, 1] as const;

export const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: easeOut },
};

export const revealDelayed = (index: number, step = 0.1) => ({
  ...reveal,
  transition: { ...reveal.transition, delay: index * step },
});
