// CoffeBook: marca FICTÍCIA criada para portfólio. Todos os dados abaixo são exemplos.
export const brand = { name: 'CoffeBook', tagline: 'Um café, um livro, uma pausa.', handle: '@coffebook' }

export const links = {
  whatsapp: 'https://wa.me/',            // trocar pelo link real: https://wa.me/55DDDNUMERO
  instagram: 'https://www.instagram.com/',
  maps: 'https://www.google.com/maps',
  ifood: 'https://www.ifood.com.br/',
}

export const hours = [
  { label: 'Segunda a Sexta', time: '07h30 – 20h00' },
  { label: 'Sábado e Domingo', time: '09h00 – 18h00' },
]

export const units = [
  { title: 'CoffeBook Centro', address: 'Rua das Palmeiras, 123 · Centro · Cidade Exemplo – UF', map: links.maps },
]

export const stats = [
  { value: 6, suffix: '+', label: 'anos de história' },
  { value: 3, suffix: '', label: 'métodos de extração' },
  { value: 7, suffix: '', label: 'dias por semana' },
]

export const methods = [
  { name: 'Coador de pano', desc: 'O jeito tradicional: doce e de corpo leve.' },
  { name: 'Prensa francesa', desc: 'Infusão longa, corpo denso e aromático.' },
  { name: 'Hario V60', desc: 'Filtrado, limpo e de notas bem definidas.' },
]

export const events = [
  { name: 'Clube do livro', desc: 'Encontros quinzenais para ler, conversar e tomar café.' },
  { name: 'Degustação de cafés', desc: 'Prove grãos e métodos de extração.' },
  { name: 'Sarau e música ao vivo', desc: 'Poesia, violão e boas histórias nas noites de sexta.' },
  { name: 'Troca de livros', desc: 'Leve um livro, traga outro. A estante é de todo mundo.' },
]

export const contact = { phone: '(00) 90000-0000', email: 'contato@coffebook.example' }
