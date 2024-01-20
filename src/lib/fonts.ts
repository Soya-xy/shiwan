// import { Barlow, Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'

const sansFont = localFont({
  src: '../../public/fonts/BoxedLight.woff2',
})

const serifFont = localFont({
  src: '../../public/fonts/BoxedLight.woff2',
})

export { sansFont, serifFont }
