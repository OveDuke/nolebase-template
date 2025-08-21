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
    name: '愤怒枇杷',
    avatar: '',
    username: 'OveDuke',
    title: '知识库构建者',
    desc: '分享网页中的知识库，负责数字花园的搭建',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/OveDuke' },
      { type: 'yuque', icon:'🦉', link: 'https://www.yuque.com/ovexds'},
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
