// api/videos.js
export default function handler(req, res) {
  const videos = [
  {
    "id": 1,
    "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
    "descricao": "3 mil visualizações",
    "url": "https://www.youtube.com/embed/y8FeZMv37WU",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Programação",
    "canal": "Alura"
  },
  {
    "id": 2,
    "titulo": "Desmistificando mobile - Linguagens e Frameworks",
    "descricao": "1,5 mil visualizações",
    "url": "https://www.youtube.com/embed/fmu1LQvZhms",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Mobile",
    "canal": "Alura"
  },
  {
    "id": 3,
    "titulo": "Orientação a objetos com Roberta Arcoverde | #Hipster...",
    "descricao": "30 mil visualizações",
    "url": "https://www.youtube.com/embed/jpuJ1qrluoU",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Programação",
    "canal": "Alura"
  },
  {
    "id": 4,
    "titulo": "Linguagens e ferramentas usadas em Ciência de Dados...",
    "descricao": "2,5 mil visualizações",
    "url": "https://www.youtube.com/embed/h83e1aAM5xQ",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Data Science",
    "canal": "Alura"
  },
  {
    "id": 5,
    "titulo": "Reencontrando a paixão por programar: Beatriz Ramerindo",
    "descricao": "1,2 mil visualizações",
    "url": "https://www.youtube.com/embed/CnB3eLTrkn4",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Podcasts",
    "canal": "Alura"
  },
  {
    "id": 6,
    "titulo": "Híbridos: Flutter e React Native | Desmistificando..",
    "descricao": "1,6 mil visualizações",
    "url": "https://www.youtube.com/embed/vf9P_PycgRw",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Mobile",
    "canal": "Alura"
  },
  {
    "id": 7,
    "titulo": "Data Science na prática- com Jéssika Ribeiro do Grupo...",
    "descricao": "3,2 mil visualizações",
    "url": "https://www.youtube.com/embed/Nts3P35mHzE",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Data Science",
    "canal": "Alura"
  },
  {
    "id": 8,
    "titulo": "baNaNa | Memes do JavaScript #2",
    "descricao": "1,2 mil visualizações",
    "url": "https://www.youtube.com/embed/HBVCsBtsmzA",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Programação",
    "canal": "Alura"
  },
  {
    "id": 9,
    "titulo": "[Casa do Código] Live de lançamento: Navegando no Universo da Programação",
    "descricao": "1 mil visualizações",
    "url": "https://www.youtube.com/embed/z43rcfjXOxU",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Ao Vivo",
    "canal": "Alura"
  },
  {
    "id": 10,
    "titulo": "Guia de carreira Front-end | #HipstersPontoTube",
    "descricao": "18 mil visualizações",
    "url": "https://www.youtube.com/embed/fpth65ts3cw",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Debates",
    "canal": "Alura"
  },
  {
    "id": 11,
    "titulo": "Educação coorporativa",
    "descricao": "4 mil visualizações",
    "url": "https://www.youtube.com/embed/IGFSiBJIXFQ",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Inovação",
    "canal": "Alura"
  },
  {
    "id": 12,
    "titulo": "Como deixar o Layout Responsivo no seu site | #AluraMais",
    "descricao": "7 mil visualizações",
    "url": "https://www.youtube.com/embed/kyFiT4ofMwk",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Front-end",
    "canal": "Alura"
  },
  {
    "id": 13,
    "titulo": "Será que a inteligência artificial será tão poderosa quanto os seres humanos? com Gui Silveira",
    "descricao": "12 mil visualizações",
    "url": "https://www.youtube.com/embed/Kk3vBRqKA2o",
    "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
    "categoria": "Inteligência Artificial",
    "canal": "Alura"
  }
];

  res.status(200).json(videos);
}
