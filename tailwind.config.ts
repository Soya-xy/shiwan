import { withTV } from 'tailwind-variants/transformer'
import { createPlugin } from 'windy-radix-palette'
import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { nextui } from '@nextui-org/theme'
import radxiColors from '@radix-ui/colors'
import typography from '@tailwindcss/typography'

const twConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: 'BoxedLight, var(--font-sans),system-ui,Poppins,-apple-system,PingFang SC,"Microsoft YaHei",Segoe UI,Roboto,Helvetica,noto sans sc,hiragino sans gb,"sans-serif",Apple Color Emoji,Segoe UI Emoji,Not Color Emoji',
        serif:
          '"Noto Serif CJK SC","Noto Serif SC",var(--font-serif),"Source Han Serif SC","Source Han Serif",source-han-serif-sc,SongTi SC,SimSum,"Hiragino Sans GB",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,"Microsoft YaHei","WenQuanYi Micro Hei",sans-serif',
        mono: `"OperatorMonoSSmLig Nerd Font","Cascadia Code PL","FantasqueSansMono Nerd Font","operator mono",JetBrainsMono,"Fira code Retina","Fira code","Consolas", Monaco, "Hannotate SC", monospace, -apple-system`,
      },
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },

        'w-screen': '100vw',
        'h-screen': '100vh',

        'max-2xl': { max: '1536px' },
        'max-xl': { max: '1280px' },
        'max-lg': { max: '1024px' },
        'max-md': { max: '768px' },
        'max-sm': { max: '640px' },

        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        screen: '100vw',
      },
      width: {
        screen: '100vw',
      },
      height: {
        screen: '100vh',
      },
      maxHeight: {
        screen: '100vh',
      },

      colors: {},
    },
  },

  plugins: [
    addDynamicIconSelectors(),
    addShortcutPlugin,

    typography,
    createPlugin({
      colors: radxiColors,
    }).plugin,
    nextui({
      prefix: 'next',
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#111827',

              foreground: '#000',
              '50': '#3f5a92',
              '100': '#364c7c',
              '200': '#2d3f67',
              '300': '#243252',
              '400': '#1a253c',
              '500': '#111827',
              '600': '#080b12',
              '700': '#000000',
              '800': '#000000',
              '900': '#000000',
            },
          },
        },
      },
      layout: {
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium (default)
          large: '2px', // border-large
        },
        radius: {
          small: '6px', // rounded-small
          medium: '6px', // rounded-medium
          large: '6px', // rounded-large
        },
      },
    }),
  ],
}

function addShortcutPlugin({ addUtilities }: PluginAPI) {
  const styles = {
    '.wh-full': {
      width: '100%',
      height: '100%',
    },
    '.d-center': {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
    '.content-auto': {
      'content-visibility': 'auto',
    },
    '.shadow-out-sm': {
      'box-shadow':
        '0 0 10px rgb(120 120 120 / 10%), 0 5px 20px rgb(120 120 120 / 20%)',
    },
    '.backface-hidden': {
      '-webkit-backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      '-moz-transform': 'translate3d(0, 0, 0)',
    },
    '.center': {
      'align-items': 'center',
      'justify-content': 'center',
    },
    '.fill-content': {
      'min-height': `calc(100vh - 17.5rem)`,
    },
    '.clip': {
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    '.border-text': {
      '-webkit-background-clip': 'text',
      color: 'transparent',
      '-webkit-text-fill-color':
        'transparent' /* 需要这个来支持某些旧版浏览器 */,
      '-webkit-text-stroke': '1px #fff' /* 文本边框 */,
    },
  }
  addUtilities(styles)
}

export default withTV(twConfig)
