import type { NavigationItem } from '@/types/Navigation'
import defaultNavigation from '@/data/navigation.json'

export const fetchNavigation = (navigation: Array<NavigationItem> = defaultNavigation) => {
  return navigation
}
