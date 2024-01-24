import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const DialogOverlay = forwardRef(
  (
    {
      onClick,
      zIndex,
      customClass,
    }: { onClick?: () => void; zIndex?: number; customClass?: string },
    ref,
  ) => {
    return (
      <Dialog.Overlay asChild>
        <motion.div
          onClick={onClick}
          className={clsx(
            'fixed inset-0 z-[11] bg-slate-50/80 dark:bg-neutral-900/80',
            customClass,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex }}
        />
      </Dialog.Overlay>
    )
  },
)

DialogOverlay.displayName = 'DialogOverlay'
