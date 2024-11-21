// api/videos.js
export default function handler(req, res) {
  const videos = [
    {
      "titulo": "Vídeo 1",
      "url": "https://www.youtube.com/embed/xyz123",
      "imagem": "https://example.com/video1.jpg",
      "descricao": "Descrição do vídeo 1",
      "categoria": "Categoria 1"
    },
    {
      "titulo": "Vídeo 2",
      "url": "https://www.youtube.com/embed/abc456",
      "imagem": "https://example.com/video2.jpg",
      "descricao": "Descrição do vídeo 2",
      "categoria": "Categoria 2"
    }
    // Adicione mais vídeos aqui
  ];

  res.status(200).json(videos);
}
