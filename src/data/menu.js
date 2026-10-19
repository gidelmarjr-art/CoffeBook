// =====================================================================
// CARDÁPIO FICTÍCIO do CoffeBook (portfólio). Nomes, descrições e preços são exemplos.
// Texto com *asteriscos* vira negrito em itálico. Fotos: src/assets/menu (nome sem .webp).
// As imagens atuais são ilustrações; troque por fotos livres mantendo o nome do arquivo.
//
// Blocos (t = tipo):
//  head     { title, aside, items:[{name,desc,price,note}] }
//  title    { text, size:'md'|'lg', note, right, badges, line }
//  cards    { cols, ratio:'wide'|'tall'|'sq'|'none', layout:'side', items }
//           item: { img, name, desc, prices:[[rótulo, valor]], price, bullets, badges:['lactose'|'gluten'|'vegan'], natural }
//  gallery  { cols, ratio, items:[{img, alt}] }      image { img, ratio, alt }
//  list     { title, sub, cols, layout:'stack'|'inline', items:[{name,desc,price,badges}] }
//  split    { cols:'1fr 1fr', children:[[blocos],[blocos]] }      note { text, align }      rule {}
// =====================================================================

export const menuPages = [
  {
    id: "cafes",
    tab: "Cafés e brunch",
    blocks: [
      {
        t: "head",
        title: "Um *café* para começar.",
        aside:
          "Todos os nossos cafés usam grãos *especiais* de pequenos produtores.",
      },
      {
        t: "cards",
        cols: 4,
        ratio: "tall",
        items: [
          {
            img: "espresso",
            name: "Espresso",
            prices: [
              ["Grão especial:", "R$8 / 50ml"],
              ["Descafeinado:", "R$9 / 50ml"],
            ],
          },
          {
            img: "coado",
            name: "Coador de Pano",
            prices: [["Grão especial:", "R$7 / 80ml"]],
          },
          {
            img: "prensa",
            name: "Prensa Francesa",
            prices: [
              ["Grão especial:", "R$13 / 150ml"],
              ["", "R$17 / 300ml"],
            ],
          },
          {
            img: "v60",
            name: "Hario V60",
            prices: [
              ["Grão especial:", "R$14 / 150ml"],
              ["", "R$18 / 300ml"],
            ],
          },
        ],
      },
      {
        t: "split",
        cols: "1fr 2.2fr",
        children: [
          [
            {
              t: "cards",
              cols: 1,
              ratio: "none",
              items: [
                {
                  name: "Macchiato",
                  prices: [["Espresso com uma nuvem de leite:", "R$9 / 60ml"]],
                },
              ],
            },
          ],
          [
            {
              t: "note",
              align: "right",
              text: "Adicional de chantilly: *R$4*",
            },
            { t: "rule" },
            {
              t: "note",
              align: "right",
              text: "*Grãos* de torra média e clara",
            },
          ],
        ],
      },
      {
        t: "cards",
        cols: 3,
        ratio: "brunch",
        items: [
          {
            img: "brunch-1",
            name: "Brunch Capítulo 1",
            price: "R$52",
            bullets: [
              "2 mini panquecas americanas",
              "2 mini waffles",
              "Ovos mexidos com bacon",
              "Mini parfait de frutas",
              "1 suco de laranja ou cappuccino",
            ],
          },
          {
            img: "brunch-2",
            name: "Brunch Entrelinhas",
            price: "R$52",
            bullets: [
              "Mini waffle caprese",
              "Mini sanduíche de frango com cream cheese",
              "Mini sanduíche de peru e queijo",
              "Frutas da estação",
              "Suco de laranja ou cappuccino",
            ],
          },
          {
            img: "brunch-3",
            name: "Brunch Epílogo",
            price: "R$52",
            bullets: [
              "Croissant (acompanha manteiga)",
              "French toast com mel e frutas",
              "Iogurte natural com geleia de frutas vermelhas",
              "Cappuccino ou V60 de 150ml ou suco de laranja",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "quentes",
    tab: "Bebidas quentes",
    blocks: [
      {
        t: "split",
        cols: "1fr 1fr",
        children: [
          [
            {
              t: "image",
              img: "cappuccino",
              ratio: "portrait",
              alt: "Cappuccino",
            },
          ],
          [
            { t: "title", size: "lg", text: "Para *aquecer* a leitura." },
            {
              t: "note",
              text: "Um conforto para o *corpo* e a *alma*.",
              big: true,
            },
            {
              t: "list",
              items: [
                {
                  name: "Cappuccino Clássico",
                  desc: "Espresso com leite vaporizado e espuma",
                  price: "R$14 / 250ml",
                },
                {
                  name: "Cappuccino da Casa",
                  desc: "Leite, chocolate 50%, canela e um toque de baunilha",
                  price: "R$15 / 220ml",
                },
                {
                  name: "Caramel Latte",
                  desc: "Leite, espresso e calda de caramelo salgado",
                  price: "R$16 / 220ml",
                },
                {
                  name: "Mocha",
                  desc: "Leite, espresso e calda artesanal de chocolate",
                  price: "R$16 / 220ml",
                },
                {
                  name: "Café Doce de Leite",
                  desc: "Espresso com doce de leite e canela",
                  price: "R$13 / 100ml",
                },
              ],
            },
          ],
        ],
      },
      { t: "rule" },
      {
        t: "gallery",
        cols: 3,
        ratio: "wide",
        items: [
          { img: "cha", alt: "Chá" },
          { img: "matcha-latte", alt: "Matcha latte" },
          { img: "chocolate-quente", alt: "Chocolate quente" },
        ],
      },
      {
        t: "split",
        cols: "1fr 1fr",
        children: [
          [
            {
              t: "list",
              items: [
                {
                  name: "Chá da Casa",
                  desc: "Frutas vermelhas, laranja, canela e cravo",
                  price: "R$13 / 200ml",
                },
                {
                  name: "Chá Artesanal",
                  desc: "Consulte os blends disponíveis",
                  price: "R$10 / 200ml",
                },
                {
                  name: "Chá Mate Gelado com Limão",
                  desc: "Refrescante e delicioso",
                  price: "R$13 / 300ml",
                },
              ],
            },
          ],
          [
            {
              t: "list",
              items: [
                { name: "Chai Latte", price: "R$17 / 220ml" },
                { name: "Matcha Latte", price: "R$18 / 220ml" },
                {
                  name: "Chocolate Quente",
                  desc: "Chocolate meio amargo e raspas de chocolate ao leite",
                  price: "R$22 / 180ml",
                },
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    id: "refrescantes",
    tab: "Refrescantes",
    blocks: [
      {
        t: "head",
        title: "*Refrescante* & único.",
        aside: "Para os dias *quentes*.",
      },
      {
        t: "cards",
        cols: 4,
        ratio: "wide",
        items: [
          {
            img: "iced-coffee",
            name: "Iced Coffee",
            desc: "Café gelado com leite e caramelo",
            price: "R$15 / 250ml",
          },
          {
            img: "frappe",
            name: "Frappé",
            desc: "Café batido com gelo e chantilly",
            price: "R$21 / 300ml",
          },
          {
            img: "affogato",
            name: "Affogato",
            desc: "Sorvete de creme, espresso e biscoito crocante",
            price: "R$18 / 200ml",
          },
          {
            img: "matcha-gelado",
            name: "Matcha Gelado",
            desc: "Servido com geleia de frutas vermelhas",
            price: "R$22 / 300ml",
          },
        ],
      },
      { t: "rule" },
      {
        t: "title",
        size: "md",
        text: "*Milkshakes*",
        note: "Preparados com sorvete artesanal",
        right: "R$26 / 300ml",
      },
      {
        t: "gallery",
        cols: 4,
        ratio: "tall",
        items: [
          { img: "shake-1", alt: "Milkshake de maracujá" },
          { img: "shake-2", alt: "Milkshake de morango" },
          { img: "shake-3", alt: "Milkshake de chocolate" },
          { img: "shake-4", alt: "Milkshake de matcha" },
        ],
      },
      { t: "rule" },
      {
        t: "split",
        cols: "1fr 1.2fr",
        children: [
          [
            { t: "title", size: "md", text: "*Sucos*" },
            {
              t: "list",
              cols: 2,
              layout: "stack",
              items: [
                { name: "Uva Integral", price: "R$8 / 200ml" },
                {
                  name: "Mix",
                  desc: "Morango com laranja ou maracujá com manga",
                  price: "R$15 / 300ml",
                },
                {
                  name: "Naturais",
                  desc: "Consulte os sabores",
                  price: "R$12 / 300ml",
                },
                {
                  name: "Detox",
                  desc: "Abacaxi, couve, maçã, hortelã e gengibre",
                  price: "R$16 / 300ml",
                },
              ],
            },
          ],
          [
            { t: "title", size: "md", text: "*Bebidas*" },
            {
              t: "list",
              cols: 2,
              layout: "stack",
              items: [
                { name: "Água", desc: "Com ou sem gás", price: "R$6 / 300ml" },
                {
                  name: "Vitaminas",
                  desc: "Consulte os sabores",
                  price: "R$14 / 300ml",
                },
                {
                  name: "Refrigerante",
                  desc: "Tradicional ou zero",
                  price: "R$7 / 290ml",
                },
                {
                  name: "Smoothie de Morango",
                  desc: "Iogurte natural, morango, mel e hortelã",
                  price: "R$16 / 300ml",
                },
                { name: "Água de Coco", price: "R$9 / 300ml" },
              ],
            },
          ],
        ],
      },
      { t: "rule" },
      {
        t: "cards",
        cols: 4,
        ratio: "sq",
        items: [
          {
            img: "drinks",
            name: "Drinks da casa",
            desc: "Caipirinha de café, café com licor e outras criações. Pergunte ao balcão.",
            price: "a partir de R$18",
          },
          {
            img: "limonada",
            name: "Limonada Rosa",
            desc: "Limão siciliano com xarope de frutas vermelhas",
            price: "R$14 / 300ml",
          },
          {
            img: "mocktail",
            name: "Mocktail de Romã",
            desc: "Sem álcool, de romã com cereja",
            price: "R$18",
          },
          {
            img: "drink-especial",
            name: "Sangria de Frutas",
            desc: "Vinho rosé e frutas vermelhas",
            price: "R$26",
          },
        ],
      },
    ],
  },
  {
    id: "infancia",
    tab: "Lanches e leves",
    blocks: [
      {
        t: "head",
        title: "Lanches da *tarde*.",
        aside: "Feitos para acompanhar uma *boa história*.",
      },
      {
        t: "cards",
        cols: 3,
        ratio: "wide",
        items: [
          {
            img: "paes",
            name: "Pão de queijo",
            desc: "4 unidades",
            price: "R$11",
          },
          {
            img: "biscoitos",
            name: "Biscoito de polvilho",
            desc: "4 unidades",
            price: "R$9",
          },
          {
            img: "bolinhos",
            name: "Bolinho de chuva",
            desc: "Acompanha doce de leite",
            price: "6 unidades / R$14",
          },
        ],
      },
      { t: "rule" },
      {
        t: "split",
        cols: "1.1fr 1fr 1fr",
        children: [
          [
            { t: "title", size: "md", text: "Toasts." },
            {
              t: "list",
              items: [
                { name: "Toast de banana", price: "R$14" },
                { name: "Queijo com requeijão", price: "R$14" },
                { name: "Peito de peru e queijo", price: "R$14" },
              ],
            },
          ],
          [{ t: "image", img: "toast", ratio: "sq", alt: "Toast" }],
          [
            { t: "title", size: "md", text: "Empadas" },
            { t: "note", text: "Consulte os sabores" },
            { t: "note", text: "*R$9*" },
          ],
        ],
      },
      { t: "title", size: "lg", text: "Leves e *nutritivos*." },
      {
        t: "cards",
        cols: 3,
        ratio: "wide",
        items: [
          {
            img: "parfait",
            name: "Parfait de frutas",
            desc: "Iogurte grego, granola, frutas e mel",
            price: "R$16",
          },
          {
            img: "bowl-pitaya",
            name: "Bowl de Pitaya",
            desc: "Pitaya com banana, finalizado com frutas e granola",
            price: "R$19",
          },
          {
            img: "sanduiche",
            name: "Sanduíche Natural",
            desc: "Patê de frango com cream cheese, tomate e alface",
            price: "R$21",
          },
        ],
      },
      { t: "rule" },
      {
        t: "cards",
        cols: 4,
        ratio: "none",
        items: [
          {
            name: "Panqueca funcional",
            badges: ["lactose", "gluten"],
            desc: "Banana, ovos, aveia, canela e mel",
            price: "R$17",
          },
          {
            name: "Salgado de batata doce",
            badges: ["lactose", "gluten"],
            desc: "Recheio de frango com cenoura",
            price: "R$12",
          },
          { name: "Bolo vegano de banana", badges: ["vegan"], price: "R$11" },
          {
            name: "Bolo de maçã",
            badges: ["lactose", "gluten"],
            desc: "Acompanha compota de maçã",
            price: "R$12",
          },
        ],
      },
    ],
  },
  {
    id: "ovos-waffles",
    tab: "Ovos e waffles",
    blocks: [
      {
        t: "head",
        title: "*Ovos*\n& omelete.",
        items: [
          {
            name: "Mexidos com bacon",
            price: "R$16",
            note: "Adicional de torradas: *R$10*",
          },
          {
            name: "Omelete Italiano",
            desc: "Presunto, queijo, tomate e orégano",
            price: "R$17",
            note: "Adicional de torradas: *R$10*",
          },
        ],
      },
      {
        t: "gallery",
        cols: "1.5fr 1fr",
        ratio: "wide",
        items: [
          { img: "croissant", alt: "Croissant" },
          { img: "panquecas", alt: "Panquecas americanas" },
        ],
      },
      {
        t: "split",
        cols: "1.5fr 1fr",
        children: [
          [
            { t: "title", size: "lg", text: "Croissants" },
            {
              t: "list",
              cols: 2,
              layout: "inline",
              items: [
                {
                  name: "Caprese",
                  desc: "Ricota, pesto, tomate confit e rúcula",
                  price: "R$30",
                },
                { name: "Morango com chocolate", price: "R$24" },
                { name: "Peito de peru e queijo", price: "R$24" },
                { name: "Banana, doce de leite e canela", price: "R$22" },
              ],
            },
          ],
          [
            {
              t: "title",
              size: "lg",
              text: "Panquecas americanas",
              badges: ["lactose", "gluten"],
            },
            {
              t: "note",
              text: "Com frutas e calda de chocolate OU com ovos, bacon e manteiga",
            },
            { t: "note", text: "*R$28*" },
          ],
        ],
      },
      { t: "rule" },
      {
        t: "title",
        size: "lg",
        text: "Waffles.",
        note: "Peça a massa especial *sem glúten* e *sem lactose*",
      },
      {
        t: "gallery",
        cols: 2,
        ratio: "wide",
        items: [
          { img: "waffle-1", alt: "Waffle salgado" },
          { img: "waffle-2", alt: "Waffle doce" },
        ],
      },
      {
        t: "split",
        cols: "1fr 1fr",
        children: [
          [
            {
              t: "list",
              items: [
                {
                  name: "Waffle Italiano",
                  desc: "presunto, queijo, tomate e orégano",
                  price: "R$24",
                },
                {
                  name: "Waffle com ovos e bacon",
                  desc: "acompanha cream cheese",
                  price: "R$28",
                },
                {
                  name: "Waffle Crispy",
                  desc: "presunto, queijo, ovo, bacon e crispy de cebola",
                  price: "R$31",
                },
                {
                  name: "Waffle Caprese",
                  desc: "ricota, pesto, tomate confit e rúcula",
                  price: "R$36",
                },
              ],
            },
          ],
          [
            {
              t: "list",
              items: [
                { name: "Waffle com manteiga e mel", price: "R$16" },
                { name: "Waffle com banana e mel", price: "R$22" },
                { name: "Waffle de morango com chocolate", price: "R$28" },
                {
                  name: "Waffle Sundae",
                  desc: "morango, sorvete e calda quente de chocolate",
                  price: "R$28",
                },
              ],
            },
          ],
        ],
      },
      { t: "rule" },
      {
        t: "split",
        cols: "1fr 1.2fr",
        children: [
          [
            {
              t: "cards",
              cols: 1,
              layout: "side",
              items: [
                {
                  img: "croque",
                  name: "Croque Madame",
                  desc: "Presunto, queijo, molho bechamel e ovo. Escolha entre pão artesanal ou waffle.",
                  price: "R$24",
                },
              ],
            },
          ],
          [
            { t: "title", size: "lg", text: "Sanduíches da Casa." },
            {
              t: "list",
              items: [
                {
                  name: "Pão francês com carne de panela e queijo",
                  price: "R$24",
                },
                {
                  name: "Baguete com frango grelhado, cream cheese, bacon e tomate",
                  price: "R$24",
                },
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    id: "cuscuz-doces",
    tab: "Cuscuz e doces",
    blocks: [
      {
        t: "split",
        cols: "1fr 1fr",
        children: [
          [
            { t: "title", size: "lg", text: "Cuscuz." },
            {
              t: "gallery",
              cols: 2,
              ratio: "tall",
              items: [
                { img: "cuscuz-1", alt: "Cuscuz com carne" },
                { img: "cuscuz-2", alt: "Cuscuz completo" },
              ],
            },
            {
              t: "list",
              items: [
                { name: "Manteiga e queijo", price: "R$12" },
                {
                  name: "Cuscuz Doce",
                  desc: "Melaço de cana, banana e queijo",
                  price: "R$16",
                },
                { name: "Ovos mexidos e queijo", price: "R$17" },
                { name: "Carne de panela e queijo", price: "R$26" },
                {
                  name: "Cuscuz Completo",
                  desc: "carne desfiada, saladinha de feijão e queijo coalho",
                  price: "R$31",
                },
              ],
            },
          ],
          [
            { t: "title", size: "lg", text: "Tapiocas." },
            { t: "image", img: "tapioca", ratio: "wide", alt: "Tapioca" },
            {
              t: "list",
              items: [
                { name: "Carne de panela e banana da terra", price: "R$26" },
                { name: "Manteiga e queijo", price: "R$13" },
                { name: "Ovos mexidos e queijo", price: "R$17" },
                { name: "Peito de peru e queijo", price: "R$17" },
                { name: "Tomate seco, queijo e manjericão", price: "R$18" },
              ],
            },
          ],
        ],
      },
      { t: "title", size: "lg", text: "Para *adoçar* o dia!", line: true },
      {
        t: "cards",
        cols: 2,
        ratio: "wide",
        items: [
          {
            img: "torta",
            name: "Torta de Chocolate com Café",
            price: "Fatia / R$18",
          },
          {
            img: "bolo",
            name: "Bolo de Chocolate com calda quente",
            price: "Fatia / R$12",
          },
          {
            img: "french-toast",
            name: "French Toast",
            desc: "Acompanha frutas e mel",
            price: "R$22",
          },
          {
            img: "sobremesa",
            name: "Sobremesa Tropical",
            desc: "Sorvete, banana e abacaxi flambados com raspas de limão",
            price: "R$18",
          },
        ],
      },
    ],
  },
  {
    id: "da-casa",
    tab: "Pratos da casa",
    blocks: [
      {
        t: "head",
        title: "Sabores\nda *casa*.",
        aside: "Todo *frescor* e *leveza* que o seu dia merece.",
        extraNote: "Adicional de frango grelhado (150g): R$12",
      },
      {
        t: "gallery",
        cols: 2,
        ratio: "wide",
        items: [
          { img: "salada", alt: "Salada" },
          { img: "massa-1", alt: "Massa gratinada" },
        ],
      },
      {
        t: "cards",
        cols: 4,
        ratio: "none",
        items: [
          {
            name: "Salada Caesar",
            desc: "Acompanha tiras de frango",
            price: "R$34",
          },
          {
            name: "Salada da Casa",
            desc: "Acompanha molho especial",
            price: "R$24",
          },
          { name: "Massa Gratinada", price: "R$34" },
          { name: "Nhoque ao sugo", price: "R$32" },
        ],
      },
      { t: "rule" },
      {
        t: "split",
        cols: "1fr 1fr",
        children: [
          [
            { t: "title", size: "md", text: "Espaguete de legumes" },
            {
              t: "image",
              img: "massa-2",
              ratio: "wide",
              alt: "Espaguete de legumes",
            },
            {
              t: "list",
              items: [{ name: "Espaguete de legumes", price: "R$20" }],
            },
          ],
          [
            { t: "title", size: "md", text: "Talharim" },
            { t: "image", img: "massa-3", ratio: "wide", alt: "Talharim" },
            {
              t: "list",
              items: [
                {
                  name: "Acompanha molho pomodoro, bolonhesa ou pesto",
                  price: "R$34",
                },
              ],
            },
          ],
        ],
      },
      { t: "rule" },
      { t: "title", size: "md", text: "Bruschettas" },
      {
        t: "cards",
        cols: 2,
        ratio: "wide",
        items: [
          {
            img: "bruschetta-1",
            name: "Bruschettas com tomate seco, queijo e manjericão",
            price: "6 unidades / R$24",
          },
          {
            img: "bruschetta-2",
            name: "Bruschettas de banana da terra com tomate seco e queijo",
            badges: ["gluten"],
            price: "6 unidades / R$24",
          },
        ],
      },
    ],
  },
];
