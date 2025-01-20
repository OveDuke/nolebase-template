export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'|'yuque'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '絢香猫',
    avatar: '',
    username: 'nekomeowww',
    title: '后端开发者',
    desc: '开发者，专注于基础设施维护，数据分析，后端、DevOps 开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/nekomeowww' },
    ],
    nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: '絢香音',
    avatar: '',
    username: 'LittleSound',
    title: '前段开发者',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
    ],
    nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
  {
    name: '愤怒枇杷',
    avatar: '',
    username: 'OveDuke',
    title: '知识库构建者',
    desc: '分享网页中的知识库，负责数字花园的搭建',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/OveDuke' },
      { type: 'yuque', icon: 'yuque', link: 'https://www.yuque.com/ovexds' },
    ],
    nameAliases: ['Ove', '欧维', 'Ou Wei'],
    emailAliases: ['ovexds@163.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
