import themeMdPaleGold from './md-pale-gold.json'
import themeMdLavender from './md-lavender.json'
import themeMdDarkGrey from './md-dark-gray.json'
import themeMdSkyBlue from './md-sky-blue.json'
import themeMdPowderBlue from './md-powder-blue.json'
import themeMdPaleSlate from './md-pale-slate.json'
import themeMdMintGreen from './md-mint-green.json'
import themeMdPaleLime from './md-pale-lime.json'
import themeMdPaleSilver from './md-pale-silver.json'
import themeMdLightGold from './md-light-gold.json'
import themeMdPaleSalmon from './md-pale-salmon.json'
import themeMdPalePink from './md-pale-pink.json'
import themeMdLightPink from './md-light-pink.json'
import themeMdPaleRose from './md-pale-rose.json'
import themeMdLightLavender from './md-light-lavender.json'
import themeMdLightPurple from './md-light-purple.json'
import { computed, readonly, ref, watchEffect } from 'vue'

type Scheme =
  | 'light'
  // | 'light-medium-contrast'
  // | 'light-high-contrast'
  | 'dark'
// | 'dark-medium-contrast'
// | 'dark-high-contrast'

const ThemeKey = {
  darkGrey: 'darkGrey',
  skyBlue: 'skyBlue',
  powderBlue: 'powderBlue',
  paleSlate: 'paleSlate',
  mintGreen: 'mintGreen',
  paleLime: 'paleLime',
  paleSilver: 'paleSilver',
  lightGold: 'lightGold',
  paleSalmon: 'paleSalmon',
  palePink: 'palePink',
  lightPink: 'lightPink',
  paleRose: 'paleRose',
  lightLavender: 'lightLavender',
  lightPurple: 'lightPurple',
  paleGold: 'paleGold',
  lavender: 'lavender',
} as const
type ThemeKey = (typeof ThemeKey)[keyof typeof ThemeKey]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isThemeKey = (v: any): v is ThemeKey => {
  return Object.values(ThemeKey).includes(v)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const themeData: Record<ThemeKey, any> = {
  [ThemeKey.darkGrey]: themeMdDarkGrey,
  [ThemeKey.skyBlue]: themeMdSkyBlue,
  [ThemeKey.powderBlue]: themeMdPowderBlue,
  [ThemeKey.paleSlate]: themeMdPaleSlate,
  [ThemeKey.mintGreen]: themeMdMintGreen,
  [ThemeKey.paleLime]: themeMdPaleLime,
  [ThemeKey.paleSilver]: themeMdPaleSilver,
  [ThemeKey.paleGold]: themeMdPaleGold,
  [ThemeKey.lightGold]: themeMdLightGold,
  [ThemeKey.paleSalmon]: themeMdPaleSalmon,
  [ThemeKey.palePink]: themeMdPalePink,
  [ThemeKey.lightPink]: themeMdLightPink,
  [ThemeKey.paleRose]: themeMdPaleRose,
  [ThemeKey.lightLavender]: themeMdLightLavender,
  [ThemeKey.lightPurple]: themeMdLightPurple,
  [ThemeKey.lavender]: themeMdLavender,
}

const getThemeName = (themeKey: ThemeKey, mode: Scheme) => `material-design3-${themeKey}-${mode}`

export const themes = Object.entries(themeData).flatMap(([themeKey, theme]) => {
  if (!isThemeKey(themeKey)) {
    throw Error(`themeKey: ${themeKey}が正しくありません`)
  }
  const modes: Scheme[] = ['light', 'dark']
  return modes.map((mode) => {
    const scheme = theme.schemes[mode]
    const themeName = getThemeName(themeKey, mode)
    return {
      [themeName]: {
        primary: scheme.primary,
        'primary-content': scheme.onPrimary,
        secondary: scheme.secondary,
        'secondary-content': scheme.onSecondary,
        accent: scheme.tertiary,
        'accent-content': scheme.onTertiary,
        neutral: scheme.surface,
        'neutral-content': scheme.onSurface,
        'base-100': scheme.background,
        // 'base-200': scheme.surface,
        // 'base-300': scheme.surfaceVariant,
        'base-content': scheme.onBackground,
        // info:"",
        // 'info-content':"",
        // success:"",
        // 'success-content':"",
        // warning:"",
        // 'warning-content':"",
        error: scheme.error,
        'error-content': scheme.onError,
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
        // Material Design3のテーマカラーをCSS変数とする
        ...Object.fromEntries(Object.entries(scheme).map(([colorName, color]) => [`--md-${colorName}`, color])),
        themeKey,
        mode,
        catalog: {
          container: scheme.primaryContainer,
          text: scheme.onPrimaryContainer,
        },
      },
    }
  })
})

export const useThemeChanger = () => {
  const themeKey = ref<ThemeKey>('paleGold')
  const mode = ref<Scheme>('dark')
  const changeThemeKey = (v: ThemeKey) => {
    themeKey.value = v
  }
  const changeMode = (v: Scheme) => {
    mode.value = v
  }
  watchEffect(() => {
    const themeName = getThemeName(themeKey.value, mode.value)
    document.documentElement.setAttribute('data-theme', themeName)
  })
  const themeCatalog = computed(() => {
    return themes
      .map((theme) => {
        const { themeKey, mode, catalog } = Object.values(theme)[0]
        return {
          themeKey,
          mode,
          catalog,
        }
      })
      .filter((catalog) => catalog.mode === mode.value)
  })
  return {
    themeKey: readonly(themeKey),
    mode: readonly(mode),
    changeThemeKey,
    changeMode,
    themeCatalog,
  }
}
