/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'

// material design 3 のカラー生成ライブラリを使ってテーマカラーを作る
const seedColor = '#e3b56c'
const md3Theme = themeFromSourceColor(argbFromHex(seedColor))
const toColorCode = (n) => `#${n.toString(16).slice(-6)}`
const themeDark = Object.fromEntries(
  Object.entries(md3Theme.schemes.dark.props).map(([colorName, color]) => [colorName, toColorCode(color)]),
)

export default {
  content: ['index.html', './src/**/*.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'material-design3-dark': {
          primary: themeDark.primary,
          'primary-content': themeDark.onPrimary,
          secondary: themeDark.secondary,
          'secondary-content': themeDark.onSecondary,
          accent: themeDark.tertiary,
          'accent-content': themeDark.onTertiary,
          neutral: themeDark.surfaceVariant,
          'neutral-content': themeDark.onBackground,
          'base-100': themeDark.background,
          'base-200': themeDark.surface,
          'base-300': themeDark.surfaceVariant,
          'base-content': themeDark.primaryContainer,
          // info:"",
          // 'info-content':"",
          // success:"",
          // 'success-content':"",
          // warning:"",
          // 'warning-content':"",
          error: themeDark.error,
          'error-content': themeDark.onError,
          // Daisy UIのTheme内のCSS変数
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
          // Material Design3のテーマカラーをCSS変数とする（利用できるカラー名は以下の通り）
          // primary, onPrimary, primaryContainer, onPrimaryContainer,
          // secondary, onSecondary, secondaryContainer, onSecondaryContainer,
          // tertiary, onTertiary, tertiaryContainer, onTertiaryContainer,
          // error, onError, errorContainer, onErrorContainer,
          // background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant,
          // outline, outlineVariant, shadow, scrim, inverseSurface, inverseOnSurface, inversePrimary
          ...Object.fromEntries(Object.entries(themeDark).map(([colorName, color]) => [`--md-${colorName}`, color])),
        },
      },
    ],
  },
}
