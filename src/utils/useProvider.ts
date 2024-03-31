import { InjectionKey, inject, provide } from 'vue'

type Composable<Return, Config> = (config: Config) => Return

export const useProvider = <R, C>(composable: Composable<R, C>, injectionKey?: InjectionKey<R>) => {
  const key = injectionKey ?? Symbol()
  return (config?: C): R => {
    const injection = inject(key)
    if (injection != null) {
      return injection
    }
    // 初回のprovideの際はconfigが必須
    const c = composable(config!)
    provide(key, c)
    return c
  }
}
