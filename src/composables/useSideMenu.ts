import { ref, readonly } from 'vue'
import { useProvider } from '~/utils/useProvider'

type Config = object

const use = () => {
  const SideMenuId = {
    search: 'search',
    bookmark: 'bookmark',
    tabManagement: 'tabManagement',
    displayEnv: 'displayEnv',
    script: 'script',
    setting: 'setting',
  } as const
  type SideMenuId = (typeof SideMenuId)[keyof typeof SideMenuId]

  type SideMenuItem = {
    id: SideMenuId
    label: string
    icon: string
    tooltip: string
  }

  const sideMenu: SideMenuItem[] = [
    {
      id: SideMenuId.search,
      label: 'Search',
      icon: 'search',
      tooltip: '検索',
    },
    {
      id: SideMenuId.bookmark,
      label: 'Bookmark',
      icon: 'bookmark',
      tooltip: 'ブックマーク',
    },
    {
      id: SideMenuId.tabManagement,
      label: 'Tab',
      icon: 'tab_group',
      tooltip: 'タブ管理',
    },
    {
      id: SideMenuId.displayEnv,
      label: 'Display Env',
      icon: 'label',
      tooltip: '環境表示',
    },
    {
      id: SideMenuId.script,
      label: 'Terminal',
      icon: 'terminal',
      tooltip: 'スクリプト実行',
    },
    {
      id: SideMenuId.setting,
      label: 'Setting',
      icon: 'settings',
      tooltip: '設定',
    },
  ]
  const selectedMenuId = ref<SideMenuId>(sideMenu[0].id)
  const selectMenu = (id: SideMenuId) => {
    selectedMenuId.value = id
  }

  return {
    SideMenuId,
    sideMenu,
    selectedMenuId: readonly(selectedMenuId),
    selectMenu,
  }
}

export const useSideMenu = useProvider<ReturnType<typeof use>, Config>(use)
