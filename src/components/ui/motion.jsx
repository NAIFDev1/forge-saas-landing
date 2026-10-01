import { motion, useReducedMotion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

const makeMotion = (namespace, variants) => {
  const Component = ({ children, className, delay = 0, ...rest }) => {
    const reduced = useReducedMotion()
    return (
      <motion.div
        className={className}
        initial={reduced ? undefined : 'hidden'}
        whileInView={reduced ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={variants}
        custom={delay}
        {...rest}
      >
        {children}
      </motion.div>
    )
  }
  Component.displayName = namespace
  return Component
}

export const FadeIn = makeMotion('FadeIn', {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: d } }),
})

export const FadeInScale = makeMotion('FadeInScale', {
  hidden: { opacity: 0, scale: 0.97, y: 14 },
  visible: (d = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: d },
  }),
})

export const Stagger = ({ children, className, stagger = 0.08, delayChildren = 0.1, ...rest }) => {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = makeMotion('StaggerItem', {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
})