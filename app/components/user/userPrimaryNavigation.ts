import { ChartNoAxesColumn, House, ShoppingBag, ShoppingCart, Smartphone, Trophy } from 'lucide-react'

export const userPrimaryNavigation = [
    { label: 'Home', icon: House, url: '/user/all-tournaments', end: true },
    { label: 'Winners', icon: Trophy, url: '/winners', end: false },
    { label: 'Results', icon: ChartNoAxesColumn, url: '/results', end: false },
    { label: 'Shop', icon: ShoppingBag, url: '/user/shop', end: true },
    { label: 'Cart', icon: ShoppingCart, url: '/user/cart', end: false },
    { label: 'VTU Service', icon: Smartphone, url: '/user/vtu', end: false },
] as const
