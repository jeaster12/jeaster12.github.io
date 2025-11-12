interface GalleryImage {
  label: string
  href: string
  size: {
    width: number
    height: number
  }
}

const galleryImages: GalleryImage[] = [
  {
    label: 'Mountain View',
    href: 'https://picsum.photos/id/1018/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Beach Sunset',
    href: 'https://picsum.photos/id/100/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'City Lights',
    href: 'https://picsum.photos/id/1019/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Forest Trail',
    href: 'https://picsum.photos/id/1016/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Ocean Waves',
    href: 'https://picsum.photos/id/1002/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Mountain Peak',
    href: 'https://picsum.photos/id/1015/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Desert Dunes',
    href: 'https://picsum.photos/id/1013/1200/800',
    size: { width: 1200, height: 800 }
  },
  {
    label: 'Autumn Forest',
    href: 'https://picsum.photos/id/1011/1200/800',
    size: { width: 1200, height: 800 }
  }
]

export default galleryImages
