export const sections = [
  {
    slug: 'quant',
    title: '量化',
    en: 'QUANTITATIVE RESEARCH',
    index: '01',
    description: '从数据、策略到回测，记录可复现的研究过程。',
  },
  {
    slug: 'ai',
    title: 'AI动手玩',
    en: 'AI EXPERIMENTS',
    index: '02',
    description: '把新工具接进真实工作流，记录每一次尝试。',
  },
  {
    slug: 'notes',
    title: '杂谈',
    en: 'NOTES & IDEAS',
    index: '03',
    description: '技术之外，也写一些值得留住的想法。',
  },
  {
    slug: 'work',
    title: '成果',
    en: 'SELECTED WORK',
    index: '04',
    description: '可以打开、试用、阅读源码的作品与工具。',
  },
] as const;

export const categoryForSlug = {
  quant: '量化',
  ai: 'AI动手玩',
  notes: '杂谈',
} as const;

export function postUrl(id: string) {
  return `/posts/${id}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
