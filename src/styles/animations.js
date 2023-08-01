export const dropAndBounce = {
  initial: { y: '-5rem', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: 'spring', duration: 1, bounce: 0.5 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.75, ease: 'easeInOut' }
}

export const privacyScreenDuration = 0.75;