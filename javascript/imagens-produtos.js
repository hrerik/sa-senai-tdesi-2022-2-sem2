const imagens = {
    '0001': 'https://m.media-amazon.com/images/I/41hiqUcr4qL.jpg',
    '0002': 'https://m.media-amazon.com/images/I/81XTXQEVPlL._AC_UF1000,1000_QL80_.jpg',
    '0003': 'https://m.media-amazon.com/images/I/71f9R8hY23L._AC_UF1000,1000_QL80_.jpg',
    '0004': 'https://images-americanas.b2w.io/produtos/121442551/imagens/livro-por-lugares-incriveis/121442551_1_large.jpg',
    '0005': 'https://m.media-amazon.com/images/I/71Ils+Co9fL._AC_UF1000,1000_QL80_.jpg',
    '0006': 'https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg',
    '0007': 'https://images.dlivros.org/Arthur-Conan-Doyle/sherlock-holmes-obra-completa-arthur-conan-doyle_large.webp',
    '0008': 'https://images-na.ssl-images-amazon.com/images/I/81U3yDkYrgL.jpg',
    '0009': 'https://livropdf.net/wp-content/uploads/2023/02/capasdragon-ball-doragon-boru-de-akira-toriyama.jpg',
    '0010': 'https://m.media-amazon.com/images/I/41wG31gPvOL.jpg',
    '0011': 'https://images-na.ssl-images-amazon.com/images/I/714lq-hfBNL._AC_UL600_SR600,600_.jpg',
    '0012': 'https://m.media-amazon.com/images/I/91OvTwFvWKL.jpg',
    '0013': 'https://m.media-amazon.com/images/I/91xUwI2UEVL.jpg',
    '0014': 'https://m.media-amazon.com/images/I/916WkSH4cGL._AC_UF1000,1000_QL80_.jpg',
    '0015': 'https://a-static.mlcdn.com.br/1500x1500/livro-moriarty-o-patriota-vol-2/livrariauniversolumina/de83c64aa3d111ed84a24201ac185019/8ab24268d1df4f4a9ca8f1fa5d5cdc65.jpg',
    '0016': 'https://marketplace.canva.com/EAE6PL3o8gY/1/0/1003w/canva-capa-para-e-book-romance-p%C3%B4r-do-sol-casal-JYUePtOEvRw.jpg',
    '0017': 'https://d1b6q258gtjyuy.cloudfront.net/Custom/Content/Products/17/08/1708_biblia-sagrada_z1_638035170303821612.png',
    '0018': 'https://m.media-amazon.com/images/I/41McBAhN-VL._SX346_BO1,204,203,200_.jpg',
    '0019': 'https://jamboeditora.com.br/wp-content/uploads/2020/09/jamboeditora-as-duas-torres.png',
    '0020': 'https://m.media-amazon.com/images/I/41FwV5F5vXL._SX327_BO1,204,203,200_.jpg'
  };
  
  for (let i = 1; i <= 20; i++) {
    const id = i.toString().padStart(4, '0');
    const imagem = document.getElementById(id);
    imagem.style.backgroundImage = "url('" + imagens[id] + "')";
  }

  fundoinverso = document.querySelectorAll('.card-produto__tras');
  for (var i = 0; i < fundoinverso.length; i++) {
    fundoinverso[i].style.background = 'black';
  }
  
  
  
  