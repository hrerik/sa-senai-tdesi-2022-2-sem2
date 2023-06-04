const botaoCompra = document.getElementById("precoP");

function obterIDProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function exibirValoresProduto() {
    const idProduto = obterIDProduto();

    const produtos = [
        {
            id: '001',
            nome: 'As 48 Leis do Poder',
            autor: 'Autor: Robert Greene',
            valor: 'R$ 69,90',
            descricao: 'As "48 Leis do Poder" é um livro escrito por Robert Greene, que explora estratégias e táticas históricas para obter e manter o poder em diversas situações. O livro oferece uma visão das dinâmicas de poder e como elas podem ser aplicadas em diferentes contextos, seja na política, nos negócios ou em relacionamentos pessoais.',
            imagem: 'https://m.media-amazon.com/images/I/41hiqUcr4qL.jpg'
        },
        {
            id: '002',
            nome: 'O Poder do Hábito',
            autor: 'Autor: Charles Duhigg',
            valor: 'R$ 69,90',
            descricao: '"O Poder do Hábito" é um livro escrito por Charles Duhigg que explora o poder dos hábitos em nossa vida diária e como podemos moldá-los para alcançar mudanças positivas e alcançar nossos objetivos. Através de uma combinação de pesquisa científica e histórias reais, o autor apresenta uma estrutura para entender como os hábitos funcionam e como podemos modificá-los.',
            imagem: 'https://editoraufv.cdn.plataformaneo.com.br/produto/multifotos/hd/20210512115747_6597993403_DMZ.jpg'
        },
        {
            id: '003',
            nome: 'Inteligência_Emocional',
            autor: 'Autor: Daniel Goleman',
            valor: 'R$ 69,90',
            descricao: '"Inteligência Emocional" é um livro escrito por Daniel Goleman, que explora o papel das emoções em nossa vida e como desenvolver a habilidade de inteligência emocional pode trazer benefícios significativos tanto na esfera pessoal quanto profissional. Goleman argumenta que a inteligência emocional é uma habilidade essencial que pode ser aprendida e aprimorada, e que ela desempenha um papel crucial no sucesso e na satisfação em várias áreas da vida.',
            imagem: 'https://m.media-amazon.com/images/I/71f9R8hY23L._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: '004',
            nome: 'Por Lugares Incríveis',
            autor: 'Autora: Jennifer Niven',
            valor: 'R$ 69,90',
            descricao: '"Por Lugares Incríveis" é um romance escrito por Jennifer Niven que aborda questões importantes como saúde mental, perda, amizade e amor. A história é narrada a partir da perspectiva de dois protagonistas, Violet Markey e Theodore Finch, que se encontram no topo de uma torre do colégio, onde ambos pensaram em se suicidar.',
            imagem: 'https://images-americanas.b2w.io/produtos/121442551/imagens/livro-por-lugares-incriveis/121442551_1_large.jpg'
        },
        {
            id: '005',
            nome: 'Mindset a nova psicologia',
            autor: 'Autora: Carol',
            valor: 'R$ 69,90',
            descricao: 'Carol Dweck explora a ideia de que existem dois tipos de mindset: o mindset fixo e o mindset de crescimento. O mindset fixo acredita que as habilidades e a inteligência são características inatas e imutáveis, enquanto o mindset de crescimento acredita que as habilidades podem ser desenvolvidas e aprimoradas ao longo do tempo com esforço e dedicação. Dweck apresenta pesquisas e exemplos práticos para demonstrar como o mindset de crescimento pode levar a maior resiliência, motivação e sucesso em várias áreas da vida, desde o desempenho acadêmico até o mundo dos negócios e dos relacionamentos pessoais.',
            imagem: 'https://m.media-amazon.com/images/I/71Ils+Co9fL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: '006',
            nome: 'Harry Potter e a Predra Filosofal',
            autor: 'Autor: Rowling',
            valor: 'R$ 69,90',
            descricao: '"Harry Potter e a Pedra Filosofal" é o primeiro livro da série de sucesso escrita por J.K. Rowling. Ele introduz os leitores ao mundo mágico de Harry Potter, um jovem órfão que descobre que é um bruxo e é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts.',
            imagem: 'https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg'
        }, {
            id: '007',
            nome: 'Sherlock Holmes',
            autor: 'Autor: Arthur Conan',
            valor: 'R$ 69,90',
            descricao: 'Sherlock Holmes é um personagem icônico da literatura criado pelo escritor britânico Sir Arthur Conan Doyle. Holmes é um detetive consultor conhecido por sua habilidade de dedução, raciocínio lógico e observação aguçada. Juntamente com seu fiel amigo e narrador, Dr. John Watson, ele desvenda mistérios aparentemente insolúveis.',
            imagem: 'https://images.dlivros.org/Arthur-Conan-Doyle/sherlock-holmes-obra-completa-arthur-conan-doyle_large.webp'
        }, {
            id: '008',
            nome: 'Pokemon Red Green Blue ',
            autor: 'Autora: Wexdit',
            valor: 'R$ 69,90',
            descricao: '"Pokémon Red, Green e Blue" são os primeiros jogos da franquia Pokémon, desenvolvidos pela Game Freak e lançados pela Nintendo. Esses jogos foram lançados originalmente no Japão em 1996 e, posteriormente, foram lançados internacionalmente com algumas alterações. Eles foram lançados como "Pokémon Red" e "Pokémon Blue" na América do Norte e como "Pokémon Red" e "Pokémon Green" no Japão.',
            imagem: 'https://images-na.ssl-images-amazon.com/images/I/81U3yDkYrgL.jpg'
        }, {
            id: '009',
            nome: 'Dragon Ball ',
            autor: 'Autor: Akira Toriyama',
            valor: 'R$ 69,90',
            descricao: 'A história de "Dragon Ball" segue as aventuras de Goku, um guerreiro Saiyajin que possui poderes extraordinários. Ele embarca em uma jornada para reunir as místicas Esferas do Dragão, que, quando reunidas, podem conceder um desejo. Ao longo de sua jornada, Goku encontra vários aliados e inimigos poderosos, incluindo outros guerreiros Saiyajins, alienígenas, deuses e seres poderosos.',
            imagem: 'https://livropdf.net/wp-content/uploads/2023/02/capasdragon-ball-doragon-boru-de-akira-toriyama.jpg'
        },
        {
            id: '010',
            nome: 'O Último inimigo',
            autor: 'Autor: Alex Bitten',
            valor: 'R$ 69,90',
            descricao: 'Uma história sobre uma época em que jovens eram convocados para serem heróis durante a Segunda Guerra Mundial, quatro pilotos brasileiros em missão no patrulhamento do litoral brasileiro, recebem uma missão secreta: Transportar pesados bombardeiros para a base aérea localizada em Dakar. Após sobreviverem a missão, os pilotos descobrem que foram envolvidos em uma trama diabólica, arquitetada pelo ambicioso general Tiller, que precisa eliminá-los antes que seu plano sejam descoberto. Participando das batalhas aéreas do maior conflito da humanidade, os jovens pilotos precisam enfrentar a Luftwaffe e lutar contra o poderoso general, sabendo que o menor erro poderá ser fatal.',
            imagem: 'https://casadoescritor.com/wp-content/uploads/2021/01/capa-papel.png'
        },
        {
            id: '011',
            nome: 'O Gênese',
            autor: 'Autor: Allan Kardec',
            valor: 'R$ 69,90',
            descricao: 'Obra que compõe a Codificação Espírita, A Gênese, os milagres e as predições segundo o Espiritismo tem como base a imutabilidade das Leis divinas em dezoito capítulos, divididos em três partes distintas. A primeira parte analisa a origem da Terra e as gêneses orgânica, espiritual e mosaica, de forma lógica e racional, deixando de lado as interpretações misteriosas e as fantasias pueris sobre a criação do mundo. A segunda parte aborda a questão dos "milagres" de Jesus, explicando a natureza dos fluidos e os fatos extraordinários contidos no Evangelho. A terceira parte enfoca as predições do Evangelho, os sinais dos tempos e a geração nova, concitando os homens à prática da justiça, da paz e da fraternidade, abrindo assim uma Nova Era para a regeneração da humanidade.',
            imagem: 'https://candeia.vteximg.com.br/arquivos/ids/211260-1000-1000/22342.png?v=637541243981730000'
        },
        {
            id: '012',
            nome: 'Gravity Falls',
            autor: 'Autor: Alex Hirsch',
            valor: 'R$ 69,90',
            descricao: '"Gravity Falls: Lost Legends" é um livro baseado na série de animação "Gravity Falls". Foi lançado em 2018 e foi escrito por Alex Hirsch, criador da série, em colaboração com outros escritores. O livro apresenta quatro novas histórias que expandem o universo de "Gravity Falls" e aprofundam a mitologia e os mistérios da cidade.',
            imagem: 'https://m.media-amazon.com/images/I/91OvTwFvWKL.jpg'
        },
        {
            id: '013',
            nome: 'Naruto Gold 1',
            autor: 'Autor: Masashi Kishimoto',
            valor: 'R$ 69,90',
            descricao: '"Naruto Gold" é uma edição especial do mangá "Naruto", escrito e ilustrado por Masashi Kishimoto. O "Naruto Gold" é uma versão em formato tankobon do mangá original, que foi lançada em alguns países com capa dura e acabamento de alta qualidade.',
            imagem: 'https://m.media-amazon.com/images/I/91xUwI2UEVL.jpg'
        },
        {
            id: '014',
            nome: 'Crime e Castigo',
            autor: 'Autor: Dostoiévski',
            valor: 'R$ 21,00',
            descricao: 'A história gira em torno do personagem principal, Rodion Raskólnikov, um jovem estudante atormentado por suas circunstâncias e ideias filosóficas. Raskólnikov decide cometer um assassinato, acreditando que está agindo em prol de um bem maior. No entanto, ele passa a sofrer as consequências psicológicas e emocionais do seu ato, sendo atormentado pela culpa e pelo medo de ser descoberto.',
            imagem: 'https://m.media-amazon.com/images/I/916WkSH4cGL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: '015',
            nome: 'Moriarty o Patriota',
            autor: 'Autor: Arthur Conan',
            valor: 'R$ 69,90',
            descricao: '"Moriarty O Patriota" é uma série de mangá escrita por Ryosuke Takeuchi e ilustrada por Hikaru Miyoshi. É uma obra de ficção que serve como uma espécie de prequela da história de Sherlock Holmes, focando no personagem Professor James Moriarty, um dos antagonistas mais famosos dos romances de Arthur Conan Doyle.',
            imagem: 'https://a-static.mlcdn.com.br/1500x1500/livro-moriarty-o-patriota-vol-2/livrariauniversolumina/de83c64aa3d111ed84a24201ac185019/8ab24268d1df4f4a9ca8f1fa5d5cdc65.jpg'
        },
        {
            id: '016',
            nome: 'Fique ao Meu Lado',
            autor: 'Autora: Jaime Mendes',
            valor: 'R$ 69,90',
            descricao: 'saac nunca criou expectativas a respeito de muita coisa, pelo menos não desde que se mudou para São Paulo e teve que se virar sozinho, não podendo contar com ninguém além de si mesmo. Mas ele sempre teve sonhos, sonhos que empurrou para o fundo da mente desde que se entende por gente, por medo do que os outros iriam dizer, e por medo de fracassar. Agora, porém, esses sonhos envolvem outras pessoas, e mesmo que ainda esteja se recuperando de um coração partido, Isaac decide que não vai mais deixar o medo falar mais alto, não quando ele pode fazer a diferença na vida de seus alunos, e não quando tem amigos para apoiá-lo. Ele sempre achou que estivesse sozinho, sempre pensou que seria abandonado mais uma vez, mas muita coisa pode acontecer quando se abre a mente para novos lugares, novos sonhos e novas pessoas. Principalmente pessoas.',
            imagem: 'https://marketplace.canva.com/EAE6PL3o8gY/1/0/1003w/canva-capa-para-e-book-romance-p%C3%B4r-do-sol-casal-JYUePtOEvRw.jpg'
        },
        {
            id: '017',
            nome: 'Bíblia Sagrada ',
            autor: 'Autor: Deus',
            valor: 'R$ 69,90',
            descricao: 'A Bíblia é uma coleção de escritos sagrados que são considerados textos fundamentais para o Cristianismo. Ela é composta por dois grandes segmentos: o Antigo Testamento, que contém escritos religiosos e históricos anteriores ao nascimento de Jesus Cristo, e o Novo Testamento, que narra a vida, os ensinamentos e a morte de Jesus, além de apresentar os primeiros escritos dos seguidores de Cristo.',
            imagem: 'https://images.tcdn.com.br/img/img_prod/1076813/biblia_sagrada_capa_com_ziper_traducao_oficial_5a_edicao_97_1_0ceca97085d8efec51af2c9bb25bfef8.png'
        },
        {
            id: '018',
            nome: 'O Cemitério',
            autor: 'Autor: Stephen King',
            valor: 'R$ 69,90',
            descricao: 'A história gira em torno da família Creed, composta pelo Dr. Louis Creed, sua esposa Rachel e seus dois filhos, Ellie e Gage. Quando a família se muda para uma nova casa em uma área rural do Maine, eles descobrem um antigo cemitério de animais de estimação nos arredores, localizado em uma terra sagrada misteriosa. No entanto, eles logo descobrem que o cemitério tem poderes sobrenaturais e é capaz de trazer os mortos de volta à vida. Atraído por uma tragédia pessoal, Louis decide usar o cemitério para trazer de volta um ente querido, ignorando as consequências terríveis dessa ação.',
            imagem: 'https://m.media-amazon.com/images/I/41McBAhN-VL._SX346_BO1,204,203,200_.jpg'
        },
        {
            id: '019',
            nome: 'O senhor dos Aneis: As duas torres',
            autor: 'Autor: Tolkien',
            valor: 'R$ 69,90',
            descricao: ' Um ataque-surpresa pôs fim à jornada conjunta da Sociedade do Anel. De um lado, o trio formado pelo elfo Legolas, pelo anão Gimli e por Aragorn, herdeiro da realeza dos Homens, tenta resgatar os jovens hobbits Merry e Pippin, capturados por guerreiros-órquicos. A busca pelos companheiros perdidos levará os três a confrontar os cavaleiros do reino de Rohan e o mago renegado Saruman, que também deseja o Um Anel para si. Enquanto isso, do outro lado das montanhas, Frodo e Sam buscam uma maneira de entrar em Mordor e chegar até a montanha onde o Anel foi forjado, único lugar onde é possível destruí-lo. Para isso, acabam recebendo a ajuda de seu mais improvável aliado: Gollum, a criatura que chegou a ter o Anel sob seu poder durante centenas de anos e que ainda é devorada, em corpo e alma, pelo desejo de voltar a possuí-lo.  ',
            imagem: 'https://jamboeditora.com.br/wp-content/uploads/2020/09/jamboeditora-as-duas-torres.png'
        },
        {
            id: '020',
            nome: 'Desculpe o exagero, mas não sei sentir pouco',
            autor: 'Autor: Geffo Pinheiro',
            valor: 'R$ 69,90',
            descricao: 'O amor, não há espaço para o raso. Ele não existe na superfície ou mesmo na escassez. Amor é para quem tem coragem de se atirar na intensidade e se esbaldar na abundância. Então, nem perca tempo em ficar onde seus pés alcançam. É no profundo que ele acontece.',
            imagem: 'https://m.media-amazon.com/images/I/41FwV5F5vXL._SX327_BO1,204,203,200_.jpg'
        },

    ];

    const produtoSelecionado = produtos.find(produto => produto.id === idProduto);


    if (produtoSelecionado) {
        const nomeP = document.getElementById('titleP');
        const autor = document.getElementById('autorP');
        const descriP = document.getElementById('descricaoP');
        const valorP = document.getElementById('precoP');
        const imagemP = document.querySelector('.imagem-produto');
        const container = document.querySelector('.container-produto');

        nomeP.textContent = produtoSelecionado.nome;
        autor.textContent = produtoSelecionado.autor;
        valorP.textContent = produtoSelecionado.valor;
        descriP.textContent = produtoSelecionado.descricao;
        imagemP.style.backgroundImage = `url("${produtoSelecionado.imagem}")`;

        // Resto do código...
    } else {
        const nomeP = document.getElementById('titleP');
        const autor = document.getElementById('autorP');
        const descriP = document.getElementById('descricaoP');
        const valorP = document.getElementById('precoP');
        const imagemP = document.querySelector('.imagem-produto');
        const container = document.querySelector('.container-produto');
        function invalido() {
            window.location.href = 'invalido.html'
        }
        nomeP.textContent = 'Produto Inválido';
        autor.textContent = 'Erro 404';
        valorP.textContent = 'Home';
        valorP.onclick = invalido();

    }
} exibirValoresProduto();

