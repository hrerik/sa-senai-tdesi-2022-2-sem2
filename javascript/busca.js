function busca() {
    var busca_user = document.getElementById('busca').value.toLowerCase(); // Converte a entrada para letras minúsculas

    switch (busca_user) {
        case "as 48 leis do poder":
            url('001');
            break;
        case "o poder do hábito":
            url('002');
            break;
        case "inteligência emocional":
            url('003');
            break;
        case "por lugares incríveis":
            url('004');
            break;
        case "mindset":
            url('005');
            break;
        case "harry potter e a pedra filosofal":
            url('006');
            break;
        case "sherlock holmes":
            url('007');
            break;
        case "pokemon red green blue":
            url('008');
            break;
        case "dragon ball":
            url('009');
            break;
        case "o último inimigo":
            url('010');
            break;
        case "o gênese":
            url('011');
            break;
        case "gravity falls":
            url('012');
            break;
        case "naruto":
            url('013');
            break;
        case "crime e castigo":
            url('014');
            break;
        case "moriarty o patriota":
            url('015');
            break;
        case "fique ao meu lado":
            url('016');
            break;
        case "bíblia":
            url('017');
            break;
        case "o cemitério":
            url('018');
            break;
        case "o senhor dos aneis":
            url('019');
            break;
        case "desculpe o exagero, mas não sei sentir pouco":
            url('020');
            break;
        default:
            alert('Aparentemente não temos este livro no nosso site :(');
    }
}
