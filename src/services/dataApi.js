import axios from 'axios'

const infoService = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/',
  headers: { 'Content-Type': 'application/json' }
})

export const getNavService = () => infoService.get('app.json').then(({ data: { menu } }) => menu)
export const getHomeService = () => infoService.get('page1.json').then(({ data: { slider } }) => slider)

export { infoService }
