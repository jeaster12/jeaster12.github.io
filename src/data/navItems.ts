export interface NavItem {
  label: string
  icon?: string
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    icon: 'line-md:home-twotone'
  },
  {
    label: 'About',
    icon: 'line-md:account'
  },
  {
    label: 'Skills',
    icon: 'line-md:document-code-twotone'
  },
  {
    label: 'Experience',
    icon: 'line-md:file-document'
  },
  {
    label: 'Portfolio',
    icon: 'line-md:paint-drop-twotone'
  },
  // {
  //   label: 'Blog',
  //   icon: 'line-md:pencil-twotone'
  // },
  {
    label: 'Contact',
    icon: 'line-md:email-opened-twotone'
  }
]
