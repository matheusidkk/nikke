const body = document.querySelector('body');
const cabeca = document.querySelector('.cabeca');
const searchbox = document.querySelector('.searchbox');
const bonecas = document.querySelectorAll('.bonecas');
const titulo = document.querySelector('.titulor');
const frase = document.querySelector('.frase');
const imagemSelecionado = document.querySelector('.imagem');
const scroBar = document.querySelector('::-webkit-scrollbar-thumb');

const filtrocb = document.querySelectorAll('.elementocb');
const filtrolb = document.querySelectorAll('.filtrolabels1');

const filtrocb2 = document.querySelectorAll('.rankingcb');
const filtrolb2 = document.querySelectorAll('.filtrolabels2');

const filtrocb3 = document.querySelectorAll('.tiercb');
const filtrolb3 = document.querySelectorAll('.filtrolabels3');

const filtrocb4 = document.querySelectorAll('.estilocb');
const filtrolb4 = document.querySelectorAll('.filtrolabels4');

const capitulos = document.querySelectorAll('.caps');

//COLOCANDO CONFIGURAÇÕES INICIAIS ---------------------------------------------------------------------------------
let frasetit1 = '';
let frasetit2 = '';
let frasetit3 = '';
let frasetit4 = '';
let frasetit5 = '';
let frasecap1 = '';
let frasecap2 = '';
let frasecap3 = '';
let frasecap4 = '';
let frasecap5 = '';

let cor = 'white';

filtrocb[0].checked = true;
filtrolb[0].style.background = '#33343a';
let elemento = 'todos';

filtrocb2[0].checked = true;
filtrolb2[0].style.background = '#33343a';
let ranker = 'todos';

filtrocb3[0].checked = true;
filtrolb3[0].style.background = '#33343a';
let tier = 'todos';

filtrocb4[0].checked = true;
filtrolb4[0].style.background = '#33343a';
let estilo = 'todos';

let selecionada = 0;


//FAZENDO AS FUNÇÕES DOS FILTROS -----------------------------------------------------------------------------------
function label1() {
    filtrolb.forEach(filtro => {
        filtro.style.background = '#23242a'
    })
}

function label2() {
    filtrolb2.forEach(filtro => {
        filtro.style.background = '#23242a'
    })
}

function label3() {
    filtrolb3.forEach(filtro => {
        filtro.style.background = '#23242a'
    })
}

function label4() {
    filtrolb4.forEach(filtro => {
        filtro.style.background = '#23242a'
    })
}

//SELECIONANDO AS OPÇÕES DE FILTRO ---------------------------------------------------------------------------------
body.addEventListener('click', function() {
    if (filtrocb[0].checked) {
        label1()
        elemento = 'todos'
        filtrolb[0].style.background = '#33343a'
    }

    if (filtrocb[1].checked) {
        label1()
        elemento = 'eletrico'
        filtrolb[1].style.background = '#33343a'
    }

    if (filtrocb[2].checked) {
        label1()
        elemento = 'fogo'
        filtrolb[2].style.background = '#33343a'
    }

    if (filtrocb[3].checked) {
        label1()
        elemento = 'ferro'
        filtrolb[3].style.background = '#33343a'
    }

    if (filtrocb[4].checked) {
        label1()
        elemento = 'agua'
        filtrolb[4].style.background = '#33343a'
    }

    if (filtrocb[5].checked) {
        label1()
        elemento = 'vento'
        filtrolb[5].style.background = '#33343a'
    }


    if (filtrocb2[0].checked) {
        label2()
        ranker = 'todos'
        filtrolb2[0].style.background = '#33343a'
    }

    if (filtrocb2[1].checked) {
        label2()
        ranker = 'r'
        filtrolb2[1].style.background = '#33343a'
    }

    if (filtrocb2[2].checked) {
        label2()
        ranker = 'sr'
        filtrolb2[2].style.background = '#33343a'
    }

    if (filtrocb2[3].checked) {
        label2()
        ranker = 'ssr'
        filtrolb2[3].style.background = '#33343a'
    }


    if (filtrocb3[0].checked) {
        label3()
        tier = 'todos'
        filtrolb3[0].style.background = '#33343a'
    }

    if (filtrocb3[1].checked) {
        label3()
        tier = '1'
        filtrolb3[1].style.background = '#33343a'
    }

    if (filtrocb3[2].checked) {
        label3()
        tier = '2'
        filtrolb3[2].style.background = '#33343a'
    }

    if (filtrocb3[3].checked) {
        label3()
        tier = '3'
        filtrolb3[3].style.background = '#33343a'
    }


    if (filtrocb4[0].checked) {
        label4()
        estilo = 'todos'
        filtrolb4[0].style.background = '#33343a'
    }

    if (filtrocb4[1].checked) {
        label4()
        estilo = 'atacante'
        filtrolb4[1].style.background = '#33343a'
    }

    if (filtrocb4[2].checked) {
        label4()
        estilo = 'defensor'
        filtrolb4[2].style.background = '#33343a'
    }

    if (filtrocb4[3].checked) {
        label4()
        estilo = 'suporte'
        filtrolb4[3].style.background = '#33343a'
    }
    
    //FILTRANDO SE A PERSONAGEM DEVE APARECER DEPENDENDO DAS OPÇÕES MARCADAS ---------------------------------------
    for (i = 0; i < bonecas.length; i++) {
        let bonecaAparecer = true;

        if (elemento !== 'todos' && bonecas[i].dataset.elemento !== elemento) {
            bonecaAparecer = false;
        }

        if (ranker !== 'todos' && bonecas[i].dataset.rank !== ranker) {
            bonecaAparecer = false;
        }

        if (tier !== 'todos' && bonecas[i].dataset.tier !== tier) {
            bonecaAparecer = false;
        }

        if (estilo !== 'todos' && bonecas[i].dataset.estilo !== estilo) {
            bonecaAparecer = false;
        }

        if (bonecaAparecer) {
            bonecas[i].style.display = 'block';
        } else {
            bonecas[i].style.display = 'none';
        }
    }
});


//FILTRANDO AS PERSONAGENS QUE APARECEM ENQUANTO ESCREVE O NOME DELA -----------------------------------------------
searchbox.addEventListener('input', function () {
    if (searchbox.value !== '') {
        bonecas.forEach(boneca => {
            if (boneca.dataset.nome.includes(searchbox.value.toLowerCase())) {
                boneca.style.display = 'block'
            } else {
                boneca.style.display = 'none'
            }
        })
    } else {
        bonecas.forEach(boneca => {
            boneca.style.display = 'block'
        })
    }
});


//SELECIONANDO O CAPITULO ------------------------------------------------------------------------------------------
capitulos[0].addEventListener('click', function () {
    titulo.innerHTML = frasetit1;
    frase.innerHTML = frasecap1;
    frase.scrollTop = 0;
    capitulos.forEach(capitulo => {
        capitulo.style.background = '#1c1d21'
    })
    capitulos[0].style.background = '#33343a'
})

capitulos[1].addEventListener('click', function () {
    titulo.innerHTML = frasetit2;
    frase.innerHTML = frasecap2;
    frase.scrollTop = 0;
    capitulos.forEach(capitulo => {
        capitulo.style.background = '#1c1d21'
    })
    capitulos[1].style.background = '#33343a'
})

capitulos[2].addEventListener('click', function () {
    titulo.innerHTML = frasetit3;
    frase.innerHTML = frasecap3;
    frase.scrollTop = 0;
    capitulos.forEach(capitulo => {
        capitulo.style.background = '#1c1d21'
    })
    capitulos[2].style.background = '#33343a'
})

capitulos[3].addEventListener('click', function () {
    titulo.innerHTML = frasetit4;
    frase.innerHTML = frasecap4;
    frase.scrollTop = 0;
    capitulos.forEach(capitulo => {
        capitulo.style.background = '#1c1d21'
    })
    capitulos[3].style.background = '#33343a'
})

capitulos[4].addEventListener('click', function () {
    titulo.innerHTML = frasetit5;
    frase.innerHTML = frasecap5;
    frase.scrollTop = 0;
    capitulos.forEach(capitulo => {
        capitulo.style.background = '#1c1d21'
    })
    capitulos[4].style.background = '#33343a'
})


bonecas.forEach(boneca => {
    //MUDANDO A COR DO FUNDO DEPENDENDO DO RANK DA PERSONAGEM ------------------------------------------------------
    switch (boneca.dataset.rank) {
        case 'ssr':
            boneca.style.background = 'linear-gradient(to top, #714200, #c17814)';
            break
        case 'sr':
            boneca.style.background = 'linear-gradient(to top, #530071, #9914c1)';
            break
        case 'r':
            boneca.style.background = 'linear-gradient(to top, #002a71, #1457c1)';
            break
    }

    //COLOCANDO A IMAGEM DA PERSONAGEM NA IMAGEM DO MEIO ------------------------------------------------------------
    boneca.addEventListener('click', function () {
        selecionada = boneca.dataset.nome;
        let bonecasImg = boneca.querySelector('img');
        imagemSelecionado.src = bonecasImg.src;
        
        //COLOCANDO A COR DA PERSONAGEM EM DETALHES -----------------------------------------------------------------
        switch (boneca.dataset.cor) {
            case 'vermelho':
                cor = '#ff0000'
                break
            case 'azul':
                cor = '#306bff'
                break
            case 'verde':
                cor = '#00ff0d'
                break
            case 'rosa':
                cor = '#ff38f2'
                break
            case 'roxo':
                cor = '#7b00ff'
                break
            case 'amarelo':
                cor = '#ffb300'
                break
            case 'branco':
                cor = '#fff'
                break
        }
        cabeca.style.borderLeft = '3px solid' + cor;
        imagemSelecionado.style.boxShadow = '0 0 0 3px' + cor;

        //MUDANDO A COR CASO O CAPITULO ESTEJA SELECIONADO ----------------------------------------------------------
        capitulos.forEach(capitulo => {
            capitulo.style.background = '#1c1d21'
        })
        capitulos[0].style.background = '#33343a'

        // TROCA DE FRASES DE PERSONAGEM ESCOLHIDA ------------------------------------------------------------------
        switch (selecionada) {
            case 'admi':
                frasetit1 = 'Criança Perdida';
                frasecap1 = `O protagonista terminou algum trabalho na Arca, mas agora seu estômago está vazio. Antes que ele possa pegar algo para comer, ele ouve trituração e miados vindos de um beco.<br><br>
                Ele segue os ruídos para encontrar Admi alimentando um gato de rua. A Triângulo Nikke fica afobada, mas se acalma e se explica. Ela encontrou o gato depois de completar uma missão e estava verificando seu pescoço enquanto ele comia. Normalmente, os animais de estimação registrados para os cidadãos da Arca têm uma coleira marcada com a identificação do dono, mas como a coleira desta gata não tem etiqueta, significa que ela foi abandonada pelo dono. O protagonista sugere que Admi adote o gato, mas isso não é uma opção devido ao status legal (ou falta dele) de Nikkes, além do trabalho extra que isso acumularia em Yulha .<br><br>
                Admi está prestes a denunciar o gato ao ACPU, mas o protagonista a convence a adiar, querendo ficar mais tempo com o gato. No momento em que Admi agradece ao protagonista, seu estômago ronca, para seu constrangimento. Admi entrega a ele um pouco de Splendamin que ela tinha em mãos, e ele come, seus sons de mastigação se misturando com os do gato.<br><br>
                Pouco depois, tanto o protagonista quanto o gato terminaram suas respectivas refeições, agradecendo a Admi. A gata tenta esbarrar na mão de Admi para mascotes, mas antes do momento do contato, Admi puxa a mão dela para trás. Quando perguntada por que ela se recusa a acariciar o gatinho, Admi explica que, para ela, o contato físico é um sinal de confiança e conexão. Ela não pode dar isso ao gatinho, pois não pode garantir que o gatinho não será abandonado depois de se apaixonar por ela. Ao explicar isso, Admi menciona brevemente ter experiência de abandono e que, se os laços estão destinados a serem quebrados, eles não devem ser feitos. Após um breve silêncio, os dois decidem denunciar o gatinho perdido à ACPU.<br><br>
                Algum tempo depois, Poli aparece para pegar o gatinho, reclamando da irresponsabilidade de quem abandona animais de estimação. Ela tenta pegar o gatinho, mas ele vai para Admi. Admi se despede da gatinha e vai embora, com o sorriso amargo na memória da protagonista.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Meteoro Feliz';
                frasecap2 = `De volta ao Outpost, o protagonista está pensando em comprar um gato para Admi. Rapi o lembra que ter um animal de estimação sem autorização é ilegal, quando passa na TV um comercial mencionando um gatinho. Para o reconhecimento de Neon (e exasperação de Anis ), é um anúncio de ninguém menos que o próprio Mustang , comercializando um restaurante chamado Cosmo Burger com uma promoção especial; cada conjunto Happy Meteor adquirido vem com um emblema STAR. Colete 10 deles e eles podem ser trocados por uma boneca de gato. Tendo uma epifania, o protagonista manda uma mensagem para Admi, pedindo para encontrá-lo em um Cosmo Burger naquela noite.<br><br>
                A noite chega e Admi fica confusa sobre o motivo do encontro em uma lanchonete. Quando o protagonista encomenda conjuntos Happy Meteor para eles e consegue os distintivos, Admi percebe que quer dar a ela a boneca gato que a rede está dando para as promoções. Ela se pergunta por que estão fazendo esse método indireto quando poderiam facilmente comprar uma boneca em uma loja, ao que a protagonista explica que a boneca se parece com o gatinho que conheceram no beco. Admi protesta fracamente contra essa decisão, mas o protagonista não aceita nada disso enquanto dá uma mordida em seus hambúrgueres. O sabor é surpreendentemente delicioso.<br><br>
                Enquanto comem e conversam, Admi se pergunta por que ele está indo tão longe a ponto de convidá-la para uma refeição, ao que ele responde que é uma retribuição pela refeição que ela lhe deu naquele dia. Inesperadamente, Admi acha essa relação, onde ele retribui a comida e ela vai junto com a boneca gato, agradável, e os dois decidem comer juntos até conseguirem a boneca.`

                frasetit3 = 'O Afeto Mais Profundo';
                frasecap3 = `Admi pensa no motivo de estar acompanhando o protagonista ao Cosmo Burger; para pegar a boneca que se parece com o gatinho do beco. Esse dar e receber, onde o protagonista paga sua dívida com ela e ela consegue a boneca que deseja, é um relacionamento aceitável, onde suas agendas cruzadas são a única coisa que os conecta.<br><br>
                Enquanto os dois continuam a visitar o Cosmo Burger, eles decidem experimentar vários restaurantes em toda a Arca para ver o que há de diferente em cada filial. Eles até decidem pedir comida para viagem e fazer um piquenique no parque.<br><br>
                No parque, Admi se sente um pouco incomodada com todos os olhares que as duas estão recebendo, desconforto que se transforma em afobação quando a protagonista enxuga um pouco de molho do rosto. Os dois decidem continuar comendo dentro de casa.<br><br>
                Algum tempo depois, eles estão em seu 8º distintivo STAR, tão perto de seu objetivo da boneca gato agora. Admi se pergunta se o protagonista quer tentar outra coisa. Enquanto ela diz que é para ele não enjoar de hambúrguer, no fundo ela sabe que quer continuar saindo com o protagonista.<br><br>
                Ela pensa no passado, imaginando quando exatamente esse sentimento de apego começou. Não era do piquenique, nem da visita à Royal Road. Não, esse afeto surgiu desde o momento em que os dois passaram um tempo com um gato em um beco. Admi ignora as preocupações do protagonista, comendo seu hambúrguer.<br><br>
                Assim termina a história do último dia, antes que Admi rompa todos os laços com o protagonista.`

                frasetit4 = 'Maneiras de evitar se machucar';
                frasecap4 = `No Governo Central. Privaty percebe Admi olhando para fora e pergunta o que está acontecendo. Admi foge do assunto, fazendo com que a vizinha Yulha comente sobre ela comer fora com "aquele cara", também conhecido como protagonista. Admi desvia ainda mais, prometendo se concentrar em seu trabalho. Yulha avisa ao menor membro do Triângulo que se ela não conseguir se livrar desse vínculo, tudo bem se ela quiser ir até o fim. Enquanto Admit se despede, Privaty fica sem saber o que está acontecendo.<br><br>
                De volta ao Posto Avançado, o protagonista se preocupa, já que não tem contato com Admi há algum tempo. Nesse momento, ele recebe uma mensagem de Admi, pedindo para se encontrarem naquela noite. Com o compromisso marcado, o tempo passa.<br><br>
                No parque, Admi se assusta com a protagonista, sem prestar atenção ao que está ao seu redor. As duas partem para o Cosmo Burger, conversando sobre como vão conseguir a boneca gato hoje, quando Admi parar. Ela diz ao protagonista que não pode mais comer hambúrgueres, não quer mais colecionar insígnias e pegar a boneca.<br><br>
                Com lágrimas escorrendo, Admi confessa suas preocupações; assim que eles pegarem a boneca, essa relação que ela construiu com o protagonista perderá sua base e desmoronará. Ela não terá nada além da boneca como consolo, pois o protagonista, boa pessoa que é, sai para confortar algum outro Nikke solitário. Além disso, as coisas que ela vê na boneca gato? Não é o gatinho no beco. É cada momento e emoção que ela compartilhou com o protagonista. É por isso que antes que eles alcancem seu último objetivo, antes que ele se torne mais precioso para ela, ela quer cortar esse relacionamento. Ainda com os olhos marejados, Admi se despede, a protagonista silenciosamente observando-a partir.`

                frasetit5 = 'Qualificação para o Amor';
                frasecap5 = `Algum tempo depois, o protagonista está perguntando a Yulha onde Admi pode estar. O líder do Triangle está inicialmente apreensivo, avisando-o de que os problemas de abandono de Admi significam que se ele vai largar Admi depois de se cansar dela, ele não deveria estar tentando se conectar com ela para começar. Ela finalmente cede, dizendo a ele que Admi não vagueia por muitos lugares. Ela está no trabalho, no prédio do Governo Central, ou deprimida em um beco sozinha. Com essas informações em mãos, o protagonista visita o beco em Royal Road, onde conheceu Admi.<br><br>
                No beco, Admi ainda não apareceu e o protagonista está cada vez mais faminto. Nesse momento, ela aparece, e a primeira resposta do protagonista é... miau, que aparentemente significa "Você pode me acariciar". Admi se pergunta se isso significa que ele está dando a ela a escolha de seu coração ser dele ou não, ao que ele garante que ela tem o direito de começar e terminar esse relacionamento quando ela assim o desejar. Admi acha a ideia ridícula, visto que a hierarquia de Nikke e comandante significa que o protagonista poderia simplesmente forçar seu caminho e ela não teria escolha, mas ele retruca que humano ou Nikke, o fim, especialmente o fim de um relacionamento, é algo terrível para ambas as partes. Ele dá um tapinha na cabeça dela e lágrimas brotam dos olhos de Admi quando ela tem um flashback.<br><br>
                Como humana, Admi era filha de um comandante. Ao sacrificar-se para salvá-lo, ela se tornou uma Nikke. No começo, tudo estava bem. Quando cumpria com perfeição suas tarefas, era amada e tratada com carinho pelo comandante. Mas em algum momento essa afeição mudou e ele começou a vê-la como nada mais do que uma máquina que imitava sua filha. Ele a abandonou, e as cicatrizes infeccionaram até hoje. Querendo saber se as coisas serão diferentes desta vez, Admi se lembra das palavras do protagonista; "Você tem o direito de decidir quando começar e terminar nosso relacionamento."<br><br>
                De volta ao beco, Admi decide retomar o que tem com o protagonista, apesar de seus medos e sabendo que o calor dele não é algo que ela sozinha possa possuir. Ela manda que ele abaixe a cabeça, dá tapinhas e o abraça. Suas mãos trêmulas ficam assim por algum tempo até que ela se acalme.<br><br>
                A lacuna entre seus corações foi superada, mas o estômago do protagonista ainda ronca em seus protestos. Admi convida o protagonista para comerem hambúrgueres juntos. Ela pode comê-los novamente, sabendo que tanto ela quanto ele têm medo do fim.`
                break

            case 'alice':
                frasetit1 = 'Um Livro para Elysium';
                frasecap1 = `Não muito tempo atrás, nas terras nevadas onde Alice viveu toda a sua vida ao lado da Rainha da Neve, lutando contra os lacaios da malvada Rainha de Copas para trazer de volta a paz e a felicidade ao mundo.<br><br>
                Um dia, Alice encontrou um livro sobre um lugar chamado "a Arca ", que foi apresentado como um verdadeiro Elysium. Curiosa sobre Elysium, Alice procurou no dicionário e descobriu que Elysium era um paraíso onde todos eram felizes e nunca sofriam.<br><br>
                Querendo ver este paraíso para o Elyisum, Alice foi até Ludmilla para perguntar sobre a Arca e se era realmente um Elysium. Acontece que os livros que Alice encontrou eram de uma remessa enviada a eles por engano. Ludmilla pondera sobre a pergunta de Alice e responde que a Arca é, de certa forma, um Elísio. Mas o que exatamente as pessoas desejam em um Elysium varia de pessoa para pessoa.<br><br>
                O resto da resposta está perdido para Alice, cuja mente está um turbilhão. Se já existisse um paraíso neste mundo, talvez ela pudesse encontrar um mundo feliz sem ter que lutar contra a Rainha de Copas. Com esse pensamento se infiltrando em sua mente, Alice perguntou a seu companheiro Rabbity se ele considerava a Arca um Elísio.<br><br>
                Rabbity ponderou sobre esta questão antes de responder a ela; a Arca não é um Elísio, mas não há garantia de que a Arca seria um paraíso para Alice. Essas respostas contraditórias confundem Alice, levando Ludmilla a sugerir que ela vá até a Arca com Rabbity e veja por si mesma. Alice está disposta a isso, mas se preocupa em deixar Ludmilla sozinha, sabendo muito bem que ela não consegue operar o maquinário e às vezes nem lembra onde está guardado seu chá preferido.<br><br>
                Enquanto a Rainha da Neve tagarela sobre seus desastrados, Rabbity decide empurrar um pouco o assunto, insistindo que os dois vão para a Arca. Dada a bênção da Rainha da Neve para partir, Alice segue Rabbity até a Arca, esperando encontrar Elysium lá.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Vista de Elysium'
                frasecap2 = `Seguindo os passos de Rabbity, Alice chega à Arca e encontra todos os cantos reluzentes cheios de pessoas sorridentes. Inegavelmente, este é Elysium, o paraíso que ela procurava. Rabbity a faz esperar um momento antes de trazer para ela um feixe de nuvens em uma vara que ele chama de algodão doce. Alice fica chocada com a ideia de fazer balas de algodão, mas Rabbity diz a ela que é feito de nuvens! Observando as imagens e os sons da Arca, Alice dá uma mordida em seu algodão-doce e seu sorriso se alarga de alegria. Alice já está convencida de que este é o Elysium, mas Rabbity a leva para outro lugar, alegando que há muito mais para ver.<br><br>
                Os dois vão a um café, onde Rabbity compra um café para Alice com um monte de creme por cima. A visão a lembra da neve, fazendo-a virar a cabeça e se perguntar se a Rainha da Neve está escondida em algum lugar próximo. Rabbity diz a ela que esta é uma criação da Cream Queen, e Alice se maravilha com quantas pessoas incríveis existem em Elysium.<br><br>
                Terminado o café, os dois vão para um local onde as paredes são forradas de livros. Entre as prateleiras estão alguns títulos que Alice adora, fascinada pelos mundos felizes contidos nas páginas. Vendo tantos livros, muitos dos quais ela gosta, a cabeça da pobre Alice gira tentando decidir qual deles ela mais gosta. Rabbity puxa um certo título, "Alice no País das Maravilhas", e Alice congela por um momento. Preocupado, Rabbity pergunta se há algo errado, mas acontece que Alice realmente amava este livro e costumava lê-lo todos os dias. Rabbity declara que está comprando este livro para presentear Alice, uma jogada que a enche de alegria. Isso apenas reforça sua crença de que este é o Elysium.<br><br>
                O tempo voa e, eventualmente, o céu escurece. Os dois decidem fazer uma pausa antes de voltarem para a residência de Rabbity , e falam sobre como Elysium foi divertido. Enquanto eles conversam, um assobio estridente perfura o ar...<br><br>
                Uma garota de azul está perseguindo outra pessoa, parecendo um jogo de esconde-esconde para Alice. Rabbity reconhece a garota como Poli , que tropeça em uma pedra perseguindo a pessoa. Percebendo isso, Rabbity diz a Alice para esperar enquanto ele continua a perseguição. Deixada sozinha, Alice espera por Rabbity, até que alguém fale com ela. O homem afirma que é vendedor de doces e quer levá-la à sua loja, onde vende doces saborosos que fazem as pessoas felizes. Alice está em conflito por dentro, querendo ouvir Rabbity e esperar, mas também querendo dar a Rabbity um presente por ter comprado um livro para ela. Decidindo que não vai demorar muito, Alice segue o doceiro até sua loja...`

                frasetit3 = 'Doce que traz Felicidade'
                frasecap3 = `Alice segue o doceiro por um beco sombrio, algumas outras garotas se juntaram à dupla. Por fim, o doceiro diz que eles chegaram e faz as meninas se alinharem enquanto distribui os doces. Eventualmente, é a vez de Alice comer doces, e o homem entrega a ela uma amostra grátis, dizendo-lhe para simplesmente comer.<br><br>
                Enquanto o bombeiro continua distribuindo seus produtos, Alice olha para o pedaço em sua mão. A Rainha da Neve disse a ela para não comer nada que um estranho lhe desse, enquanto o homem diz às meninas para comerem o doce contando até três. Todas as garotas, exceto Alice, comem o doce e adormecem. Enquanto o doceiro insiste que Alice coma seu pedaço, a própria Alice está tendo um flashback.<br><br>
                De volta ao café, o barista acrescentou um biscoito grátis ao pedido e saiu. Alice não tinha certeza sobre comer comida que estranhos lhe davam, mas Rabbity disse a ela que você não deveria comer comida de estranhos, a cortesia deveria ser retribuída com gratidão. Alice decide não comer o doce, e um amargor azedo se espalha por sua boca. Não é gostoso e ela não se sente nem um pouco feliz. O doceiro se pergunta por que ela não come se não está com sono e bate na cabeça dela com um pedaço de pau perguntando se ela quer tirar uma soneca. Enquanto Alice cai de golpes repetidos na cabeçatira uma soneca, ela se lembra das palavras de Rabbity, perguntando se ela gostava de Elysium. Estranhamente, a Arca não parece mais o paraíso para Alice...`

                frasetit4 = 'O Quarto Branco'
                frasecap4 = `Dentro de um quarto de hospital, médicos e enfermeiras acabam de ressuscitar um paciente, enquanto dizem algo sobre a necessidade de manter o cérebro intacto e questionam quem levaria uma criança cotidiana. A paciente, uma garotinha de camisola, pergunta a um dos médicos sobre o mundo exterior. Esta cirurgia que ela está prestes a fazer é como renascer, então se o mundo lá fora é um lugar feliz, com certeza ela também poderia ser feliz? O médico diz a ela que ela será feliz lá fora, e isso é tudo que o paciente precisa ouvir. O médico tem uma última pergunta, perguntando ao paciente como ele gostaria de renascer. A paciente examina os livros ao redor de sua cama e decide que quer renascer como Alice.<br><br>
                As sirenes da polícia soam no beco enquanto Miranda e Poli da ACPU prendem os suspeitos e as crianças. O protagonista está em cena com ACPU, tendo notado que o sinal de Alice estava neste beco. Os três olham para Alice, que embora inconsciente, não sofreu nada pior do que uma perna quebrada. Miranda se oferece para ajudar o protagonista a carregar Alice, mas ele já contatou Mustang para obter ajuda.<br><br>
                Alice começa a acordar, levando Miranda e Poli a se despedirem. Rabbity olha para Alice, perguntando se ela teve um sonho bom. Alice admite que não consegue se lembrar do que sonhou, apenas que pode ter sido feliz, triste ou ambos. Rabbity garante que ela não precisa se lembrar. Ela então se lembra das outras princesas adormecidas, mas Rabbity diz a ela que a polícia já cuidou disso.<br><br>
                Alice fica maravilhada com a forma como Rabbity agiu como um herói dos contos de fadas. Então seu rosto fica abatido, pois ela admite que não quer que Rabbity seja heróico. Ela quer que ele permaneça como o Coelho que fica ao seu lado e a anima sempre que ela está infeliz. É quando ela percebe algo. O Elysium que ela procurava não era a Arca. Para Alice, o Elysium é simplesmente onde ela pode estar com Rabbity. Os dois se abraçam fortemente e decidem ir para casa.`

                frasetit5 = "Alice's Elysium"
                frasecap5 = `Alice visita o hospital perto de onde Rabbity mora para consertar sua perna, enquanto o chefe Mustang está dando a ela a maior bronca de sua vida. Enquanto o CEO da Tetra Line acha sua inocência cativante, ele insiste que ela deve cuidar de si mesma, senão ele terá que proibi-la de ver Rabbity novamente. A castigada Alice concorda, porque nunca poder conhecer Rabbity seria terrível.<br><br>
                Ao telefone, a Rainha da Neve está absolutamente furiosa, ordenando que Alice escreva uma carta de desculpas quando chegar em casa. Então a expressão da Rainha se suaviza quando ela pede a Alice que volte para casa em segurança. Alice está muito feliz em obedecer. Apesar de todos os altos e baixos do dia, Alice fica feliz por a Rainha estar tão preocupada com ela e por ela ter passado tanto tempo com Rabbity...<br><br>
                Ao cair da noite, Alice está deitada na cama, segurando o livro que lhe foi dado. Rabbity está com ela, e os dois falam sobre como foi divertido o dia, mesmo quando o Candyman a mandou para o hospital. À medida que a noite avança, Alice implora baixinho para Rabbity segurar sua mão. Embora ela não consiga se lembrar exatamente, Alice se lembra de ter ficado presa em um hospital por um longo tempo e, como resultado, ela não gosta muito deles. Rabbity pega Alice pela mão, e qualquer medo que ela sentiu se esvai em uma onda de sonolência relaxada. Quando os olhos de Alice começam a fechar, ela pede a Rabbity que segure sua mão até que ela adormeça, para que ela tenha bons sonhos. Ele o faz, e Alice cai no sono...<br><br>
                Em um sonho, Alice está presa em uma prisão branca. A luz verde em seu coração dita o tempo, e as pessoas de branco continuam dizendo coisas que a machucam. Mas, pela primeira vez, Alice não está triste ou assustada. Rabbity está lá, chamando-a para voltar para casa com ele.<br><br>
                De mãos dadas com Rabbity, Alice sai do quarto branco em direção a um mundo feliz. Um Elysium para os dois.`
                break

            case 'anis':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = 'Sem história até o momento.';
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'aria':
                frasetit1 = 'Noite sem dormir para a princesa';
                frasecap1 = `Em uma sala de espera na Royal Road Opera House, um funcionário está obstruindo os contadores , recusando-lhes a entrada, apesar de sua insistência de que Aria os chamou aqui. Eles pedem para ver os comprovantes de identidade e que Aria realmente os solicitou, mas como eles não têm, o balconista insiste para que saiam, ameaçando até chamar a segurança. Naquele momento, Aria intervém, dizendo ao balconista que o esquadrão está aqui a pedido dela. Ela os recebe na ópera, principalmente seu "Maestro", o protagonista.<br><br>
                Um momento depois, o esquadrão está no camarim de Aria. Anis está enlouquecida com os adereços, roupas e cosméticos, e Aria a convida para pegar qualquer um que lhe agrade. Enquanto Anis e Neon decidem fazer uma reforma em Rapi usando os cosméticos da sala, Aria puxa o protagonista de lado para pedir sua ajuda. O protagonista está mais do que disposto a ouvir, pois Aria confessa que esta questão pesa tanto sobre ela que ela sente que a única maneira segura de lidar com isso seria falar com ele. Ela explica que desde sua estreia, tem sido a protagonista de ópera após ópera. Héstia, Castelo de Parma, O Cavaleiro Lírio. Nomeie uma ópera na Arca, Aria foi escalada para o papel principal em algum momento ou outro.<br><br>
                Apesar de cada produção ser um grande sucesso, e Aria ser impulsionada para as alturas do estrelato, ela descobre que tudo o que ela canta são recitativos. De repente, ela começa a cantar um número, um lamento de um personagem que foi abandonado pelo deus da música, que teme não poder retribuir seu guardião. O protagonista acha o canto de Aria impecável, mas também fica nervoso com a letra. Ela continua explicando que o último número é de um de seus papéis mais recentes, onde ela interpreta a infame cantora sem talento Sophia. O ponto principal é que a música exala o desespero e a solidão de Sophia, de alcançar as alturas de um abismo que ela sabe que nenhum esforço superará.<br><br>
                O problema aí é que a capacidade de cantar de Aria é muito boa , tanto que faz Sophia parecer uma personagem impecável. Assim, o público para de sentir empatia pela situação de Sophia, e toda a história simplesmente se degrada em um jogo de espera para que o mundo ao redor de Sophia reconheça seu talento. Simplificando, Aria é tão talentosa e afortunada em suas habilidades e carreira que ela literalmente não tem experiência com as lutas de Sophia.<br><br>
                Ela não sabe como não ser perfeita, por isso não consegue simpatizar com a personagem e incorporá-la de acordo com a intenção do roteiro. Ela pondera brevemente se deve dizer ao diretor para encontrar um cantor menos talentoso para o papel e, quando o protagonista pergunta, admite que aceitou o trabalho tanto por interesse pessoal para uma nova abordagem revigorante quanto por orgulho profissional, tendo até agora era capaz de desempenhar perfeitamente qualquer papel que lhe fosse dado. Portanto, ela está pedindo ao protagonista para ajudá-la a se tornar Sophia.<br><br>
                Anis aproveita aquele momento para entrar na conversa, resumindo como Aria precisando de alguém para acompanhá-la no treinamento e dando a ela uma perspectiva alternativa. A própria Aria pode dizer que Anis não está muito familiarizada com a ideia e, embora ela ache a ideia de receber tomadas de alguém com pouca ou nenhuma experiência com a indústria sem sentido, ela vê mérito nisso. Neon diz ao protagonista que Counters continuará reformando Rapi enquanto ele ajuda Aria, para desespero do líder de Counters.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = ' Tearjerker';
                frasecap2 = `No dia seguinte, na Royal Road Opera House. Aria está ensaiando seu papel como Sophia, lamentando sua falta de talento enquanto pede a seu guardião que a peça em casamento e termine como cantora, apenas para ela rejeitar o protagonista (agindo como guardião) oferecendo-lhe um anel, desejando encontrar sua morte na casa de ópera.<br><br>
                Aria corta a música e declara que não é isso. Ela simplesmente não consegue entender como cantar mal sem realmente cantar mal o suficiente para arruinar a música. Ela pede sugestões ao protagonista sobre como tornar seu canto "pior", mas descobre que não consegue conciliar a caracterização e a qualidade do canto. Pensando nas palavras de Anis sobre como alguém completamente desligado da indústria poderia lidar melhor com isso, Aria pede à protagonista que tente cantar os versos que ela acabou de cantar. Sua tentativa é completamente horrível, e nem mesmo o tipo de "ruim" que Aria está procurando. Felizmente, ela obteve alguns insights dessa "performance", acreditando que tornar sua voz mais nasal pode ser um passo à frente.<br><br>
                Aria começa a cantar novamente, mas acha essa tentativa não mais "bem-sucedida" do que as anteriores. Apesar da protagonista garantir que seu progresso é progresso, Aria insiste que não é o suficiente, não com Sophia marcada para estrear em dois dias. Ela tenta dispensar o protagonista enquanto ela fica para praticar, mas ele insiste em ficar. Suas palavras dedicadas atraem a gratidão de Aria, comparando-o ao guardião de Sophia.<br><br>
                No dia da estréia de Sophia, Aria está nervosa por subir no palco pela primeira vez em sua vida. Apesar da crença do protagonista nela, que ele atribui ao seu comprometimento e resiliência, ela comenta que tentar alcançar a grandeza apenas com esses atributos só faria de uma pessoa outra Sophia. Ela se pergunta se ele ainda acreditaria nela, mesmo que ela se tornasse um rato de sarjeta sem nome e sem talento como Sophia, e ele dá a ela um aceno silencioso. Aria observa como isso se parece muito com a conexão entre Sophia e seu guardião, e reservou para o protagonista um camarote no segundo andar, que de acordo com o roteiro é onde o guardião vigia Sophia.<br><br>
                Pedindo ao protagonista que a observe até o fim, Aria sobe ao palco quando a abertura termina...`

                frasetit3 = 'Estrelas Brilhantes';
                frasecap3 = `Um novo repórter está entrevistando membros da audiência após a conclusão de Sophia. Embora estejam todos apaixonados pelo canto de Aria, eles pessoalmente acham chocante que o roteiro peça que ela interprete uma cantora sem talento e acredita que a casa de ópera cometeu um erro ao seguir o roteiro que eles fizeram. Aria observa silenciosamente as notícias sobre como seu canto era a única coisa que as pessoas concordavam ser boa na apresentação.<br><br>
                Aria agradece ao protagonista enquanto ele desliga a TV. Tendo ouvido as reações, Aria está pensando em se afastar de Sophia, mesmo que isso comprometa seu profissionalismo. Suas superqualificações a tornam a pior combinação para a história pretendida para a ópera, e ela considera isso um desserviço tanto para os roteiristas quanto para o público. A protagonista se pergunta se ela realmente vai deixar seu orgulho de lado assim, mesmo sabendo que sua presença é apenas uma benção para a casa de ópera.<br><br>
                Aria diz a ele para deixá-la para que ela possa organizar seus pensamentos. Antes que ele o faça, ela pergunta se ele realmente acha que ela já fez o suficiente, considerando que ela não acha. Sophia não era para ser uma história sobre a personagem superando suas dificuldades. Ela aceitou a peça porque gostou do toque irônico da singularidade, sobre como todos, mesmo as pessoas comuns ou sem talento, têm seu próprio brilho. Era uma mensagem que Aria queria tanto transmitir com sua própria música. Mas mesmo com o grande sucesso da peça, alguém pode realmente dizer que Aria fez justiça a Sophia?<br><br>
                Mais tarde naquela noite, Counters e o protagonista se amontoam em seu quarto, ruminando sobre maneiras de ajudar Aria. Enquanto eles pensam em maneiras de tornar o canto de Aria "pior", Anis de repente tem um momento de iluminação e traz à tona o gaslighting. Diga a alguém as mesmas críticas repetidamente por tempo suficiente e, mesmo que seja uma mentira completa, eles acreditarão. Por mais mesquinho que pareça, Anis teve a ideia de quebrar a confiança habitual de Aria, o que por sua vez poderia comprometer sua capacidade de cantar. Ela detalha um plano para levar Aria a um barzinho em algum beco, onde os clientes são todos exuberantes que não sabem ou não se importam com a ópera ou quem ela é. O protagonista tem algumas preocupações sobre isso, e até mesmo Anis reconhece que tudo depende de Aria estar disposta a arriscar tal coisa.<br><br>
                Como se fosse uma deixa, Aria corta do lado, expressando sua concordância com este plano. Ela está disposta a fazer o que for preciso para se tornar Sophia adequadamente, mesmo que isso signifique correr riscos. No mínimo, cantar em um bar será uma experiência nova e, no mínimo, isso é um risco menor do que o que ela planejava fazer originalmente. Assim, com um plano em mente, o protagonista sai com Aria.`

                frasetit4 = 'Um dia particular';
                frasecap4 = `Em um bar sombrio em um beco, o proprietário nota que seus dois novos hóspedes são rostos desconhecidos. Aria pede que ele a contrate para cantar por um dia e, embora inicialmente não esteja interessado, ele finalmente concorda, alegando que não precisa pagá-la. O proprietário aponta a configuração para tocar o acompanhamento e diz aos dois para pararem de incomodá-lo.<br><br>
                Algum tempo depois, Aria está observando seu suposto público, uma multidão de bêbados tão barulhentos e absortos em seus próprios mundinhos que nem sequer olham para ela, e é duvidoso que sua música possa ser ouvida em meio ao barulho. Pouco antes de subir ao palco, ela pede ao protagonista que repita o que ele disse antes. Sua promessa de manter a fé nela é como um feitiço e, com os medos dissipados, Aria sobe ao palco.<br><br>
                O protagonista inicia a música e Aria começa a cantar. Os bêbados começam a importuná-la, exigindo que ela comece a dançar ou a andar. Aria os ignora e continua, e os bêbados, embora não exigissem mais que ela fosse embora, começaram a resmungar que o único tipo que pensaria em cantar em um lugar como este seria algum desconhecido que não conseguiria fazer isso em nenhum outro lugar. Eventualmente, eles parecem mudar de ideia, até mesmo achando que ela canta decentemente. Na deixa de Aria, o protagonista começa a cantar a resposta do guardião...<br><br>
                Um pouco depois do show, o proprietário acha uma pena que Aria não planeje voltar, mesmo que ele pague pelo privilégio. Acontece que um monte de clientela, apesar de a apedrejar verbalmente, gostou muito dela cantando e pediu a ele que ela voltasse e cantasse novamente. Ele continua sobre como ela lutou tanto na letra quanto no tom, resistindo às zombarias dos bêbados e engasgando com a fumaça do cigarro, porque ela estava desesperada para soltar a voz e ser ouvida por qualquer pessoa disposta a ouvir.<br><br>
                Aria tem uma epifania e agradece profusamente ao protagonista e ao dono. A chave para entender o personagem de Sophia, desde o início, não era algo que pudesse ser encontrado ensaiando sem parar em uma esplendorosa casa de ópera.`

                frasetit5 = 'Canção do brinde';
                frasecap5 = `Algum tempo depois, a cortina sobe para a segunda apresentação de Sophia. Counters fala brevemente sobre o que foi a epifania de Aria, e se ela realmente vai acertar a intenção de Sophia desta vez, ou se afastará completamente dela. As luzes começam a diminuir e o silêncio que se espalha enche a sala com uma energia nervosa. Apesar da preocupação de Counters com a melhora de Aria, o protagonista mantém sua crença.<br><br>
                Aria sobe ao palco e sua voz toca o público. Diferente da estréia, mas um acorde do mesmo jeito. Sua voz, oscilando à beira do colapso, mas ainda forte, fazendo-os acreditar que ela está interpretando uma cantora sem talento.<br><br>
                Mais tarde, na sala do protagonista, um repórter da TV entrevista o público da ópera. Eles ainda precisam de tempo para analisar o que acabaram de ouvir, mas a reação geral é positiva. Aria se fundiu completamente no papel de Sophia, retratando todos os pobres que ressoaram na platéia.<br><br>
                Aria está ouvindo a mesma entrevista, satisfeita com o resultado. Ela agradece ao protagonista por ajudá-la a entender que todos têm seus objetivos na vida, e o sofrimento que marca o caminho para esse objetivo é algo familiar a todos, gênios ou tolos. Extraindo aquele sentimento e colocando-o em sua voz, Aria nem precisou agir. A dor e o desespero de Sophia ressoaram com ela do mesmo jeito.<br><br>
                Os dois continuam assistindo a entrevista, onde um dos entrevistados é regular da performance de Aria. Ela gostou da qualidade do canto, sim, mas sempre achou Aria perfeita demais , quase desumana em como cantava bem. Desta vez, porém, sua atuação como Sophia foi muito mais crível e a fez parecer uma pessoa real. O público e o protagonista concordam particularmente que uma das partes de destaque da performance foi o vínculo de Sophia com seu guardião, que Aria explica porque ela tinha alguém que se assemelhava ao guardião.<br><br>
                Vendo sua falta de compreensão, Aria pergunta ao protagonista se ele se lembra do número final da apresentação, "Mesmo que a música me abandone". Uma música onde Sophia derrama seu amor por seu guardião. Até agora, Aria nunca entendeu o amor, mesmo quando as pessoas proclamavam que a amavam cantando, e a elogiavam mesmo quando seu talento ameaçava arruinar Sophia. Mas não o protagonista, pois ela acredita que ele entendeu. Os artistas sempre precisam de alguém para ficar ao lado deles e ver o reino das artes criativas como eles veem, e o protagonista preencheu esse papel maravilhosamente. Como um pequeno sinal de agradecimento, Aria se oferece para cantar o final para ele, como um bis privado.<br><br>
                O protagonista acena com a cabeça silenciosamente e Aria começa a cantar;<br><br>
                Você esteve lá do começo ao fim,<br><br>
                Você me completa.<br><br>
                Portanto, minha música é sua.<br><br>
                E mesmo que minha música me abandone,<br><br>
                Se meus ouvidos ficarem surdos e minha voz se perder,<br><br>
                Eu sempre estarei com você...`
                break

            case 'belorta':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = 'Sem história até o momento.';
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'biscuit':
                frasetit1 = 'Biscuit, o Pet Sitter!';
                frasecap1 = `No Posto Avançado , Biscuit está perguntando ao protagonista se ele já cuidou de animais de estimação antes ( cuidados de animais de estimação de verdade , Nikkes que se comportam como animais não contam). Quando ele diz que não, ela o convida para ajudá-la com um trabalho de babá em Royal Road. O protagonista se pergunta quem tem um animal de estimação considerando as proibições da Arca em relação a animais de estimação, mas como sempre, aqueles com dinheiro e conexões podem burlar um pouco a lei. Ele também se pergunta se há algum detalhe especial para este trabalho, mas até onde Biscuit sabe, é apenas uma babá de animais de estimação regular. Isso significa alimentar o animal de estimação, mantê-lo entretido com brincadeiras e levá-lo para passear para se exercitar. Com o trabalho parecendo tão simples, os dois estão confiantes de que será muito fácil.<br><br>
                Um momento depois, na Royal Road. A energia de Biscuit diminui quando ela é atingida por um episódio de nervosismo. Acontece que, apesar da vasta experiência em cuidar de cães, este é o primeiro emprego que ela aceita para alguém que mora em Royal Road. Biscuit não consegue deixar de ficar nervosa, mesmo quando a protagonista garante que o cachorro será igual a qualquer outro.<br><br>
                Outro momento depois, os dois estão em frente à casa do cliente. É uma vasta mansão com quintal e piscina onde, segundo a estimativa de Biscuit, mais de 100 cachorros poderiam viver confortavelmente. A protagonista ajuda a controlar sua energia, e os dois sinalizam ao morador que chegaram para o trabalho.<br><br>
                Dentro da propriedade, a cliente (uma senhora bem-vestida) apresenta as duas à sua cachorra Beatrice, de quem ela quer que cuidem enquanto ela está a trabalho. Tudo o que Beatrice pode precisar está dentro da casa para eles usarem, e o cliente não está muito preocupado, dada a boa reputação de Biscuit como babá de cães. Percebendo a hora, o cliente sai apressado.<br><br>
                Após a saída do cliente, Biscuit e o protagonista se apresentam a Beatrice, que os observa e depois mantém distância. Biscuit tenta estender a mão para Beatrice cheirar, mas o cachorro se afasta depois de algumas cheiradas. O protagonista se pergunta se o cachorro não gosta deles, mas Biscuit afirma que Beatrice está apenas sendo tímida. O cachorro em questão se afasta, Biscuit andando atrás dela pedindo qualquer coisa que ela possa precisar. O protagonista só pode assistir, pensando consigo mesmo sobre como ele e Biscuit não gostam.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Biscuit, Alimente o Cachorro!';
                frasecap2 = `Tarefa nº 1 do Pet Sitter: Alimente Beatrice.

                No questionamento do protagonista, Biscuit explica que está remexendo em sua bagagem em busca de comida de cachorro, pois trouxe sua própria ração para alimentação. Ela afirma que todos os cachorros da cidade adoram a coisa, e até tem sua aprovação pessoal depois que ela experimentou uma vez, uma revelação que apenas um pouco inquieta o protagonista, levando-o a recusar o convite de Biscuit para experimentar.<br><br>
                Biscoito derrama uma tigela para Beatrice, mas o cachorro apenas fareja a tigela sem dar uma mordida. Então ela faz um gesto que faz com que o rabo de Biscuit caia. O protagonista pergunta o que há de errado e Biscuit traduz que Beatrice acha que a comida cheira a barato, então ela se recusa a comer. Enquanto Biscuit pondera o que há de errado com a ração, Beatrice hesitante dá um passo à frente e pega um pedaço da comida, apenas para cuspi-la imediatamente.<br><br>
                A protagonista afirma que esta comida não é do agrado de Beatrice, então Biscuit pergunta ao cachorro onde fica sua comida habitual. Após um breve momento de confusão, Beatrice sai e volta correndo para a sala com um saco de comida. A sacola em questão pega o Biscuit de surpresa, pois é Royal Kibble, a ração mais cara do mercado. Biscoito se maravilha com o gosto que deve ter quando a protagonista percebe que ela está babando. O Happy Zoo Nikke pede a Beatrice um pedaço da ração, e o cachorro concorda, aparentemente se sentindo mal por Biscuit.<br><br>
                Biscoito dá uma mordida e congela por um momento. O protagonista se pergunta se algo está errado antes de Biscuit praticamente mergulhar de volta na tigela com gosto, tão absorto em devorar o protagonista tem que ordenar que ela fique para fazê-la parar. Biscuit pede desculpas por ter se empolgado, mas o sabor não era nada parecido com o que ela havia comido antes, então, uma vez que ela começou, parar parecia impossível. As surpresas não param por aí, pois Beatrice afirma que tem uma comida diferente para cada dia da semana, trazendo até mais saquinhos de ração para se exibir. Biscuit não para de babar com a ideia do sabor de cada ração. Beatrice parece ignorar o pedido de Biscuit para experimentar os outros sabores antes de se sentar no sofá para tirar uma soneca, dizendo a Biscuit para fazer o que quiser. A protagonista recusa o convite de Biscuit para comer ração com ela.<br><br>
                Um momento depois, Biscuit está quase explodindo de tanto que comeu. Ela então lembra que precisa alimentar Beatrice, mas o cachorro em questão diz que ela não está com fome. Biscuit então pergunta a Beatrice se ela quer brincar, tendo trazido um monte de brinquedos para isso. Beatrice parece incrédula, mas Biscuit a leva para a sala, ansiosa para mostrar os brinquedos.`

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
                
            case 'blanc':
                frasetit1 = 'Ai do Protagonista';
                frasecap1 = `O protagonista decide passar no Outpost Maid Cafe para começar o dia, pedindo um brunch à Soda . A empregada traz o pedido, apenas para a primeira mordida do protagonista estar cheia de tempero forte. Acontece que Soda e Cocoa acidentalmente colocam salsa na comida em vez de ketchup, mas quando a empregada volta correndo para refazer o pedido, ela tropeça e derrama a comida nas roupas do protagonista. O protagonista decide que hoje simplesmente não é seu dia no café e se despede da empregada ao sair.<br><br>
                Algum tempo depois, o protagonista se encontra com uma terrível dor de estômago, provavelmente a salsa de antes. Voltando para seu quarto, ele se serve de um copo de leite ... apenas para Laplace entrar em seu quarto, esmagá-lo e jogar seu copo no chão. Enquanto Laplace está ocupado repreendendo o protagonista por beber leite parado na porta, o próprio homem está mais preocupado com o motivo que justificaria o líder de Matis invadindo assim. A razão é que não há razão, e ela simplesmente sentiu vontade de vê-lo. Quase tão repentinamente quanto ela entra, Laplace ouve um grito de socorro e sai pulando pela janela, jogando mais vidro no chão.<br><br>
                Enquanto o protagonista ainda está analisando isso, Rapi chega como o presságio de ainda mais más notícias. Havia um relatório de operação para hoje, e escapou completamente da mente do comandante. Depois de prometer fazer o possível sobre a prorrogação do prazo e lembrar o protagonista de sua próxima palestra, Rapi se despede. Lamentando mentalmente como hoje é apenas nuvem de chuva após nuvem de chuva para ele, o protagonista decide sair para uma caminhada.<br><br>
                Um passeio no parque depois, e o protagonista se sente muito melhor... até que um cachorro faz xixi em seu sapato. Biscuit of Happy Zoo vem saltando, o carinha aparentemente um estagiário fugitivo dela. Ela se desculpa profusamente e promete trazer um novo par de sapatos para o homem assim que eles se encontrarem, antes de sair correndo atrás do cachorrinho que fugiu enquanto eles conversavam.<br><br>
                Como o protagonista pensa em ficar dentro de casa pelo resto do dia, quando Blanc o percebe e liga. Enquanto ela está um pouco animada por esbarrar nele do nada, ela rapidamente percebe a carranca no rosto do homem. O protagonista leva um momento para recitar a lista de todas as maneiras pelas quais este dia deu errado, recebendo uma careta de simpatia do coelho branco. Enquanto os dois estão conversando sobre como ele está tentando aproveitar ao máximo um dia ruim, uma bola de beisebol sai do lado e acerta o protagonista na cabeça.<br><br>
                Depois de se certificar de que ele não está muito abalado, Blanc tem a ideia genial (?) De sair com ele pelo resto do dia. Não é nenhum segredo que os coelhinhos do 777 são amplamente amados como amuletos de boa sorte, e ela vê compartilhar a sorte não é diferente de compartilhar emoções como felicidade e tristeza com os outros. Embora disposta a seguir em frente com isso, a protagonista não tem certeza de como exatamente "compartilhar a sorte" deve funcionar, para a qual ela oferece a mão para espalhar sua sorte pelo toque, assim como a mão de uma pessoa se aquece quando outra a segura de acordo a ela.<br><br>
                Os dois ficam de mãos dadas um pouco enquanto Blanc explica como se faz para "testar" a sorte. Ela propõe que ele simplesmente vagueie sem destino definido e pense em como ele é sortudo e em como as coisas correram bem para ele. Pelas palavras dela, tanto a vida quanto a sorte são uma questão de perspectiva e ação. Nada de ruim acontecerá se tudo o que você fizer for ficar parado, mas nada de bom também. Seu discurso terminou, Blanc pergunta ao protagonista se ele se sente com sorte agora. Ele ainda tem algumas reservas, mas está confiante de que Blanc funcionará como um amuleto de boa sorte, então os dois partiram para testar a sorte.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Primeira Fortuna';
                frasecap2 = `Os dois caminham pela Arca de mãos dadas, com Blanc comentando o quanto isso parece um encontro. Enquanto os dois conversam sobre como a mentalidade é importante para a sorte, o estômago do protagonista ronca, um lembrete de que ele não comeu nem bebeu desde aquele fiasco matinal. Blanc vê isso como uma oportunidade de testar sua fortuna; se eles conseguirem uma mesa em um restaurante popular regularmente lotado entrando, saberão que sua sorte mudou para melhor. O protagonista concorda e os dois partem.<br><br>
                Eles chegam ao restaurante mais famoso de toda a Arca. A fila de pessoas na fila para uma mesa se estende por quarteirões, não favorecendo a confiança do protagonista. Blanc pega uma passagem e descobre que o número é "777". A implicação de esperar atrás de literalmente centenas de pessoas é um balde de água fria, e o protagonista está prestes a desistir. Blanc considera que o homem pode ter razão e propõe ir para outro lugar. Enquanto ela está olhando para o bilhete "777", no entanto, fogos de artifício explodiram de repente.<br><br>
                Confuso, o protagonista olha em volta e encontra um funcionário do restaurante parabenizando-o. Acontece que o estabelecimento está realizando um evento especial em que o 777º cliente evita a fila. Enquanto o balconista entra para guiar o casal até a mesa, o protagonista só pode comentar que talvez a sorte de Blanc esteja começando a passar. O coelho em questão modestamente diz a ele que sua mentalidade também desempenhou um papel importante em sua sorte inesperada.<br><br>
                Os dois entram no restaurante e fazem o pedido, o garçom trazendo um verdadeiro smorgasbord para a mesa. Blanc oferece um pedaço de macarrão ao protagonista, com a intenção de alimentá-lo. Ele abre a boca e é recompensado com a massa mais bem cozida que já comeu. Blanc continua como este lugar era bom quando ela veio pela última vez com Noir, levando o protagonista a se perguntar por que o coelho preto do 777 não está acompanhando hoje. Acontece que Noir está ocupada aprimorando suas habilidades de dança. O entusiasmo é apreciado, mas Blanc está preocupada que sua irmã talvez esteja trabalhando demais nisso. A conversa se volta para o vínculo compartilhado entre os coelhos gêmeos do 777, e Blanc promete trazer Noir na próxima vez que visitarem este restaurante.<br><br>
                Algum tempo depois, a refeição está terminada. A protagonista percebe um pouco de molho no lábio de Blanc e enxuga com um guardanapo. Enquanto os olhos do coelho branco brilham com a demonstração de cuidado, uma funcionária se aproxima para saber a opinião do casal sobre o serviço. Ele também está lá para oferecer a sobremesa mais decadente do estabelecimento, algo que eles fazem apenas 10 por dia, totalmente grátis para seus 777º clientes. O protagonista só pode se maravilhar com esse total de oitenta de suas fortunas, levando Blanc a gabar-se de que ela estava certa. Mantenha a mentalidade de um vencedor e a boa sorte o atingirá nos momentos em que você menos espera. Ela está ansiosa para terminar a sobremesa e ir para outro lugar para testar a sorte do protagonista.`

                frasetit3 = 'Fortuna Vezes Dois';
                frasecap3 = `Blanc estende a mão para o protagonista novamente, comentando como sua sorte recaiu sobre ele muito bem. Os dois caminham de mãos dadas novamente e descobrem que todos os tipos de pequenas bênçãos os seguem. Um arco-íris brilhando no céu, uma raridade para a Arca. Um trevo de quatro folhas encontrado bem aos pés do protagonista (um trevo de quatro folhas feito pelo homem, mas ainda assim um trevo de quatro folhas). O protagonista só pode se maravilhar com o fato de que apenas coisas boas aconteceram desde que Blanc começou a acompanhá-lo, um sentimento que Blanc ecoa em relação a seus sentimentos sobre seguir o protagonista. Enquanto os dois passam um dia abençoado, Blanc percebe um sinal de sorteio e eles decidem participar.<br><br>
                O site do sorteio está totalmente lotado de pessoas. O protagonista segura Blanc perto dele pela parte de trás da cintura para garantir que ela não esbarre nas pessoas e, embora ele se desculpe por estar um pouco perto, Blanc é bastante ... grato pela proximidade íntima. Um momento depois, o MC do sorteio aparece e explica as regras. Ele chamará o público para o palco e fará com que puxem uma bola numerada de um recipiente com 100 bolas. Quanto menor o número, maior e melhor o prêmio. O MC examina a multidão e espia Blanc e o protagonista, chamando-os para o palco.<br><br>
                Blanc se apresenta como funcionária da Coin Rush, recebendo um olhar de reconhecimento animado do MC. O protagonista se apresenta, respondendo à pergunta do MC sobre os dois serem um casal, chamando Blanc de namorada noiva . O rosto de Blanc se ilumina de alegria enquanto o MC comenta sobre a rapidez com que o homem respondeu. Com o quebra-gelo fora do caminho, o MC reitera as regras. Os dois podem tirar três bolas do recipiente, portanto, três prêmios (potencialmente) fabulosos serão deles. Blanc se afasta para deixar o protagonista empatar, confiante em sua recente sequência de sorte.<br><br>
                A primeira bola é a número 80, premiando... um pacote jumbo de cotonetes. É um começo nada assombroso, mas o MC lembra ao protagonista que ele ainda tem duas chances. Blanc puxa o homem de lado para abraçá-lo e dar-lhe um pouco mais de sorte. Ela promete que a próxima bola será definitivamente inferior a 80.<br><br>
                A segunda bola é a número 32, que é... uma barra de Splendamin. É certamente um prêmio melhor do que antes, e o MC convida Blanc para torcer por seu "namorado" uma última vez antes do sorteio final. O MC, brincando (?) sugere que Blanc beije o protagonista na bochecha, e o homem em questão mostra o rosto ansiosamente. Superando suas reservas, Blanc beija o protagonista na bochecha e ele tira a última bola.<br><br>
                O sorteio final é... o número 2, o 2º prêmio. Blanc comemora o sucesso deste teste de sorte, enquanto o MC os conduz ao estande de prêmios.<br><br>
                Após o sorteio, Blanc ainda está nas nuvens com sua grande vitória em uma loteria aleatória. O protagonista é menos exuberante, refletindo sobre sua reviravolta irreal na sorte. Quanto mais contato físico ele tinha com Blanc, maiores e maiores eram seus golpes de sorte. Se for esse o caso, então...`

                frasetit4 = 'Uma Experiência Baseada na Sorte';
                frasecap4 = `O protagonista compartilha sua hipótese com Blanc, que admite que até ela achou a sorte de hoje estar fora deste mundo, e é ela quem tem fama de amuleto da sorte. Ela propõe colocar essa hipótese à prova com um teste final de sorte. O protagonista decide experimentar uma máquina de gacha ou algumas, e Blanc conhece um centro de jogos com muitos deles.<br><br>
                No game center, a dupla fica diante das máquinas de gacha. O protagonista explica que esta máquina específica pode produzir uma cápsula vazia, uma estatueta "normal", uma "especial" e uma "lendária". Cada máquina contém três estatuetas "especiais" e apenas uma estatueta "lendária". A ideia é aumentar os níveis de intimidade física até que eles consigam puxar o lendário. Os dois dão as mãos enquanto acionam a manivela e...<br><br>
                É a figura lendária na primeira tentativa! ...Ou não, uma inspeção mais detalhada revela que é normal. Os dois se consolam porque evitaram um fracasso apenas de mãos dadas e, embora o protagonista esteja preocupado em escalar muito rapidamente, ele concorda com a proposta de Blanc de aumentar a intimidade. Beijar tão cedo seria um pouco demais, então o protagonista abraça Blanc pela cintura e a puxa para perto. O casal formado por um homem e um coelhinho tímido gira a manivela novamente e...<br><br>
                A segunda cápsula revela... uma figura especial! Até agora eles estão dois a dois na teoria da proporcionalidade intimidade-sorte, mas decidem fazer mais alguns testes apenas para ver até onde essa "coincidência" irá. O próximo "abraço-sorteio" rende outra figura especial, e os dois ruminam o quão astronomicamente baixas são as chances de conseguir dois especiais seguidos , considerando que uma máquina com dezenas a centenas de cápsulas tem apenas três especiais. Eles consideram que talvez tudo isso não seja uma coincidência e que, se aumentarem a intimidade a partir daqui, o resultado mudará para igualar.<br><br>
                O próximo passo de um abraço é obviamente um beijo, mas o protagonista tem algumas... ideias. Ele faz beicinho e estica o rosto para fora, oferecendo um toque labial. Blanc fica com o rosto vermelho com a ideia, principalmente porque é seu primeiro beijo, mas ela vai all-in porque também é o primeiro beijo do protagonista . Depois de um momento de silêncio acalorado e constrangedor, os dois dão outra chance ao gacha.<br><br>
                Os dois demoram um pouco para acalmar os nervos antes de abrir a cápsula. Inacreditavelmente, é... a figura lendária. Blanc acredita que o homem está com ela, mas aponta para a máquina de gacha. Suas luzes que antes piscavam se apagaram, um sinal de que foi dispensado de seu lendário.<br><br>
                Depois de um momento para perceber que sua teoria estava correta, os dois passam o resto do tempo juntos "testando a sorte" e descobrindo que suas fortunas estão ficando tão quentes e pesadas quanto eles.`

                frasetit5 = 'Um cara de sorte';
                frasecap5 = `A noite cai quando o casal termina de testar a sorte. Blanc considera isso uma prova sólida de sua teoria de sorte e intimidade e acredita que a protagonista desempenhou um papel maior nisso do que seu status de amuleto de boa sorte. Afinal, são necessárias duas pessoas para ter intimidade física. Além disso, mesmo com um pouco de cansaço, Blanc ainda quer manter os bons momentos e passar o máximo de tempo possível com o protagonista.<br><br>
                Os dois passam a noite em uma maré de sorte aparentemente interminável. Experimentar novos itens de menu gratuitamente de uma confeitaria famosa, obter uma grande vitória na última raspadinha vendida, as bênçãos parecem nunca parar de chegar.<br><br>
                Algum tempo depois, Blanc parece completamente esgotado e pede para se sentar um pouco. Ela tenta dizer algo ao protagonista, mas fica inconsciente antes de conseguir falar...<br><br>
                O protagonista leva Blanc às pressas para o hospital, onde Mary está dando uma olhada nela. Ela ignora as preocupações do protagonista de que o coelho nunca acordará, garantindo que não haja doença física. Ela notou , no entanto, que a resistência de Blanc é bastante baixa, o suficiente para totalizar apenas metade da de um humano padrão. A notícia alarma brevemente o protagonista antes de Mary garantir a ele que não é tão ruim quanto parece. Blanc só precisa descansar e ela ficará bem como a chuva. A médica sai para atender seus outros pacientes, pedindo à protagonista que ligue para ela caso o estado de Blanc mude.<br><br>
                Sozinho no quarto do hospital, o protagonista pondera como isso aconteceu. Claro, eles correram a maior parte do dia fazendo todo tipo de coisa, mas como é que um Nikke como Blanc pode ficar completamente exausto enquanto um humano comum como ele está perfeitamente bem? A única coisa que realmente explicaria isso seria a sorte que Blanc tem dado a ele o dia todo...<br><br>
                Uma agitação de Blanc traz o protagonista de volta à realidade, e ele cuida da condição do coelho branco. Ele explica o diagnóstico de Mary e sua teoria de por que a energia dela de repente zerou. Blanc admite que, neste momento, é a única explicação razoável. A protagonista tenta aconselhar Blanc a ter mais cuidado ao compartilhar sua sorte, mas o coelho em questão não vê isso como um problema, visto que ela não será tão sensível com os clientes da Coin Rush. Além disso, ela nunca teve problemas em compartilhar sua sorte com os clientes do cassino, mas ela percebe que talvez isso tenha sido resultado de Noir estar com ela. Os dois são gêmeos, duas metades do mesmo todo, então isso provavelmente desempenha um fator.<br><br>
                O protagonista ainda tem suas preocupações, mas ver Blanc encolher o cansaço e prometer ser mais cuidadoso o acalma por enquanto. Ele então se lembra de Blanc tentando lhe dizer algo antes de desmaiar, e o coelho branco praticamente pula com a lembrança. Ela olha intensamente nos olhos do homem, e o clima na sala muda completamente.<br><br>
                O protagonista pergunta se Blanc se apaixonou por ele, o que o coelho admite ser verdade. Ao longo desse dia, e todo o tempo e contato físico que passaram juntos, isso fez com que os sentimentos dela ficassem mais fortes. Ela valoriza o tempo que eles passaram juntos, assim como os dias que ela passa com Noir, e ela queria que ele soubesse disso, quer ele sentisse o mesmo ou não. O protagonista admite que também gosta dela, e Blanc fica radiante com a notícia. Embora ela admita que quer refazer essa confissão mais tarde, quando puder deixar Noir entrar no circuito. O protagonista decide atender a esse estranho pedido.<br><br>
                Blanc salta da cama para os braços do protagonista, prometendo ser um exclusivo amuleto de boa sorte para ele. O próprio homem está preocupado em drenar a resistência de Blanc novamente, mas o coelho se sente seguro de que ele tem os melhores interesses no coração. Assim, a cortina cai sobre este encontro estranho e maravilhosamente feliz entre o protagonista e Blanc.`
                break

            case 'brid':
                frasetit1 = 'Uma Workaholic';
                frasecap1 = `Soline implora freneticamente ao protagonista para fazer algo sobre Brid antes que ela morra. Aparentemente, o maquinista começou a trabalhar o dia inteiro sem uma única pausa, muito menos um dia de folga. O protagonista não vê problema em Brid trabalhar tanto, mas para Soline é um desastre. Se as pessoas virem Brid trabalhando até os ossos assim, pensarão que Soline é uma preguiçosa completa em comparação com quantas pausas e férias ela tira!<br><br>
                Após uma breve tangente sobre quantas férias Soline tira, o menor Infinity Rail explica que, em teoria, o esquadrão deveria fazer uma pausa após uma longa viagem, mas Brid vai direto ao planejamento da próxima viagem sem parar. Assim, a mando de Soline, o protagonista vai ver Brid e tentar convencê-la a tirar férias.<br><br>
                A reunião vai... nada bem, para dizer o mínimo. Ainda digitando em seu tablet, Brid se recusa categoricamente a sequer considerar tirar uma folga do trabalho, insistindo que ela pode lidar com sua carga de trabalho e não ter que fazer pausas ou comprometer outras tarefas, como missões de combate. Ela deduz facilmente que alguém colocou o protagonista nisso, e ele admite que Soline estava por trás disso. Brid interrompe a reunião quando um de seus alarmes dispara, e ela diz ao protagonista para apenas enviar uma mensagem para ela na próxima vez para pequenas coisas como esta.<br><br>
                Depois que Brid sai, Diesel intervém e comenta como Brid pode ser teimosa. Ela só pegou o final da conversa, mas pode dizer que era algo sobre a agenda de Brid. Ela confirma ao protagonista que também quer que Brid faça uma pausa, vendo a recusa de seu subordinado em fazer uma pausa como uma falha em cuidar dela como líder. Enquanto Diesel considera possivelmente ordenar que Brid use suas horas de férias como líder do Infinity Rail, o protagonista insiste em fazer isso sozinho.<br><br>
                Diesel comemora isso e dá ao protagonista alguns doces de morango e conselhos. Brid sempre passa pela sala de espera do 2º andar se tiver que escrever um relatório após uma viagem, e sempre para em uma máquina de venda automática naquele andar para tomar um café, por mais apertada que seja sua agenda. Agradecendo ao líder do Infinity Rail, o protagonista segue para a sala de espera do 2º andar para esperar por Brid.<br><br>
                A sala de espera do 2º andar é o local perfeito para esperar alguém, observa o protagonista. Assim como Diesel disse, a sala está confortavelmente quente e não há robôs de limpeza para incomodá-lo. Depois de uma hora, ele come os doces que Diesel lhe deu para aumentar a energia.<br><br>
                Após três horas de vigilância, suas costas começam a doer, mas ele não quer se deitar com medo de cair no sono neste quarto quente.<br><br>
                Após cinco horas de vigilância, o protagonista decide simplesmente deitar-se, com as dores nas costas a tornarem-se insuportáveis.<br><br>
                Após sete horas de vigilância, o protagonista está sem doces.<br><br>
                Nove horas após o início da vigilância, um robô de limpeza está verificando se o protagonista é um lixo.<br><br>
                12 horas de vigilância. O protagonista está cansado e com fome, mas pelo menos a sala está quente. Quando ele está prestes a desmaiar, uma voz o chama, que ele reconhece como Brid. O maquinista fica surpreso ao vê-lo aqui a esta hora, já que os trens nem estão circulando. Enquanto os dois conversam por algum tempo, o estômago roncando do protagonista corta a conversa para um final estranho. Brid decide que eles devem ir buscar comida.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Tour do Café';
                frasecap2 = `No escritório da Ark Express, Brid entrega alguns Splendamin para encher o estômago do protagonista.`

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

                case 'centi':
                    frasetit1 = 'Sem história até o momento.';
                    frasecap1 = ``
                    frase.innerHTML = frasecap1;
                    titulo.innerHTML = frasetit1;
    
                    frasetit2 = '';
                    frasecap2 = ``
    
                    frasetit3 = '';
                    frasecap3 = ``
    
                    frasetit4 = '';
                    frasecap4 = ``
    
                    frasetit5 = '';
                    frasecap5 = ``
                    break
                    
            case 'cocoa':
                frasetit1 = 'Qualidade de Empregada Profissional';
                frasecap1 = `Counters faz uma visita ao Outpost Maid Café para parabenizar o Maid For You em seu novo local. Cocoa corre animadamente para o protagonista, cantando sobre sua nova garrafa de ketchup fechada que ela planeja espremer em todo o omurice. Ade lembra Cocoa de primeiro anotar os pedidos dos clientes, que a última empregada atende prontamente. Neon e o protagonista não têm problemas para pedir, mas Anis acha os nomes no cardápio ... difíceis ... de dizer em voz alta, de "omurice de banana hurly-burly" a "arroz frito em forma de coração coochie woochie". rapitenta o velho "Nikkes realmente não precisa comer" para fugir do pedido, mas o olhar expectante de Cocoa a faz dobrar ao som de "arroz frito em forma de coração coochie woochie". Cacau se alegra, pois o prato aparentemente é sua especialidade, e ela promete colocar ketchup extra. Anis zomba da fixação da empregada em ketchup, enquanto Neon elogia a ética de trabalho da empregada.<br><br>
                Enquanto Neon diz isso, Cocoa está esguichando uma quantidade gratuita de ketchup no pedido de outro cliente (supostamente) na forma de um besouro. Testemunhando isso, Anis pondera se eles deveriam pedir a Cocoa para desenhar algo em sua comida também. Neon está prestes a sugerir um canhão de 120 mm, mas o protagonista descarta a ideia.<br><br>
                Enquanto Counters conversa, uma voz murmura todas as formas de negação. Neon inicialmente interpreta mal a voz como a do protagonista antes de Anis apontar a mesa ao lado da deles, onde um homem solitário parece estar em pânico por alguém o seguir. Nesse momento, um bandido de terno entra no café e manda calar o cliente, a quem chama de Doutor Mason. O bandido ameaça Mason com um alfinete venenoso e o "acompanha" porta afora. Counters não tem ideia do que acabou de acontecer, mas Anis e Neon acham que foi um streamer fazendo uma pegadinha. O protagonista leva o desenvolvimento um pouco mais a sério e sinaliza para um funcionário.<br><br>
                A funcionária acaba sendo Cacau, que ao saber do sequestro de um cliente passa a... oferecer os especiais de hoje para o plantel? Anis imediatamente retoma a conversa, ao que Cocoa observa que o café recentemente viu uma série de figuras obscuras para a clientela, tirando fotos vestidas como soldados ou espiões.<br><br>
                Cocoa declara sua intenção de chegar ao fundo disso e salvar o cliente, descartando as preocupações do protagonista e sugestões para entrar em contato com a polícia. Para uma empregada com as habilidades e ferramentas certas, lidar com o sequestro de um cliente é um dia de trabalho. Ou então ela diz.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Pegando o Peixe Grande';
                frasecap2 = `Cocoa rastreou o suspeito até um beco e está notificando o protagonista disso, embora o protagonista a tenha seguido o tempo todo por seu guarda-chuva visível. A empregada nota que o suspeito entrou em um prédio suspeito, que o protagonista supõe ser um bar. Cocoa entra em uma tangente sobre roteiros de TV e como os heróis parecem ter sorte em um bar. Decidindo não seguir essa tangente, o protagonista sugere que entrem no bar.<br><br>
                Lá dentro, Cocoa observa a clientela incrivelmente decadente do estabelecimento. O protagonista se pergunta onde o cliente e o sequestrador podem estar, ao que Cocoa responde pressionando um botão em Cocorella. O feedback de uma varredura infravermelha é exibido dentro do guarda-chuva, mostrando 12 pessoas no corredor, 2 no banheiro e 1 presença posicionada de maneira incomum perto da parede. Assim que os dois estão prestes a se mover, eles são parados pelo mesmo homem sombrio de antes. O homem insiste em verificar a identidade, tendo notado suas caudas e o fato de um deles (o protagonista) ser soldado do Governo Central. Cocoa explica as circunstâncias do sequestro do cliente, levando o homem a tentar silenciar os dois que testemunharam seu ato, embora relute em atirar em uma criança como Cocoa.<br><br>
                Um fora da lei próximo identifica o homem como Satou e observa o status de Cocoa como um Nikke, o que imediatamente reprime os escrúpulos de Satou em matá-la e vender o protagonista como peças sobressalentes para os Coletores. Desnecessário dizer que Cocoa fica irritada com a ideia e se move para trancar a porta. Só que ela é muito baixa para alcançar a trava e pede ajuda ao protagonista.<br><br>
                No ritmo de "Boas maneiras. Faça. Empregadas domésticas.", Cacau tranca a porta e se oferece para demonstrar aos bandidos o que ela quer dizer com isso.`

                frasetit3 = 'Uma lição de etiqueta';
                frasecap3 = `Cocoa joga algo de seu guarda-chuva que faz o Outlaw sangrar. O que se pensa serem adagas são na verdade aviões de papel, dobrados tão profissionalmente que (nas palavras de Cocoa), as asas são "mais retas que uma régua" e a cabeça é "mais pontiaguda que uma bússola". O ataque do avião de papel frustra os bandidos a ponto de eles sacarem suas armas, mas Cocoa joga algo direto no Outlaw e acerta seu rosto. O objeto em si é um canudo de plástico... contendo uma agulha cheia de tranqüilizante suficiente para derrubar instantaneamente um homem.<br><br>
                Satou fica pasmo com esse desenvolvimento e se pergunta quem acabou de invadir. Cocoa e o protagonista se apresentam e acertam Satou na nuca, nocauteando-o. Com uma lição de etiqueta totalmente dispensada, os dois se movem para salvar o cliente.<br><br>
                Em uma área secreta atrás da parede, a Dra. Mason reconhece Cocoa e agradece por salvá-lo. Enquanto Cocoa aceita os elogios, o protagonista pergunta o que está acontecendo. O Doutor Mason aparentemente se lembra de algo e entra em pânico, se debatendo sobre como o Elysion HQ precisa ser contatado. Acontece que MAson costumava ser um pesquisador Elysion, e Satou roubou algumas informações sobre códigos de controle, o que poderia permitir ao usuário fazer cada Elysion Nikke explodir. O protagonista fica chocado com a ideia, enquanto Cocoa descobre que é... pior do que quando um cliente come tanta comida que fica triste e diz que vai explodir. Com um novo objetivo definido, o trio se muda para o Elysion HQ.`

                frasetit4 = 'Empregadas: Protetoras do Universo';
                frasecap4 = `O trio explica a situação para Ingrid , CEO da Elysion. Em resposta à situação, ela envia D of Perilous Siege ao bar onde o Doutor Mason era mantido.<br><br>
                Um momento depois, D encontra e relata que os bandidos fazem parte do Seimeikai, um grupo yakuza na Orla Exterior. Uma transmissão é corrigida, que acaba sendo a líder de Seimeikai, Sakura .. Enquanto Ingrid não está muito feliz com a yakuza agindo assim, Sakura também não está satisfeita. Satou costumava ser um dos executivos de Seimeikai, mas foi rebaixado depois de agredir o líder de outra gangue pelas costas de Sakura. Parece que ele acha que transformar os Nikkes das outras gangues em bombas o colocaria de volta nas boas graças de Seimeikai, mas Sakura está mais disposta a simplesmente se livrar dele. Como um pedido de desculpas por não conseguir manter seus homens sob controle, Sakura tem um pouco de informação para dar. Satou enviou um aviso aos outros membros da gangue de que agirá às 8h. A hora atual é 3:00, o que significa que há apenas 5 horas para impedir Satou de enviar os códigos. Sakura fecha a transmissão para cuidar de seus bonsais, deixando Cocoa comentando o quanto Satou está se tornando um incômodo. Infelizmente,<br><br>
                Um momento depois, Ingrid está na linha com Exia , hacker e agente de inteligência extraordinário. O protagonista explica a situação, enquanto Exia lamenta estar envolvida em mais uma crise em que a paz e a estabilidade da Arca estão em jogo. Os olhos de Cocoa brilham com Exia sendo um hacker, vendo isso como um daqueles programas de TV onde um hacker aperta um monte de teclas e botões e bum, mundo salvo. Enquanto Exia está preocupada, Cocoa tem algumas ideias erradas sobre como os hackers funcionam, os elogios da empregada funcionam para incentivá-la e ela promete ter algo pronto em 5 minutos.<br><br>
                5 minutos depois, Exia terminou de analisar os códigos de autodestruição. Más notícias, não há como impedir Satou de transmiti-las. Boas notícias, acessar o PC enviando os pedidos deve permitir que alguém reescreva os dados nos códigos. Infelizmente, Exia não pode fazer isso remotamente porque o PC em questão é restrito, mas ela sabe onde ele está localizado. Pilhas de cacau elogiam após elogiar Exia, e o hacker deseja boa sorte a todos antes de encerrar.`

                frasetit5 = 'Um Conto de Donzelas e Heroísmo';
                frasecap5 = `Cocoa e o protagonista chegaram ao local do PC, onde a porta é guardada por vários bandidos. Um deles reconhece os dois como os que abriram o plano de Satou e se move para interceptar. O protagonista tranca a porta enquanto Cocoa proclama "Boas maneiras. Faça. Empregadas domésticas". e institui outra lição de etiqueta.<br><br>
                Uma aula de etiqueta depois e todos os bandidos estão incapacitados. A dupla localiza o PC enviando os códigos de autodestruição, mas a única maneira de acessar e reescrever os códigos é conectar o PC a um Nikke. Cocoa não está muito confiante de que pode fazer isso, mas o encorajamento da protagonista (e a ideia de que ela ficará legal fazendo isso) serve como motivação.<br><br>
                Mais tarde, Ingrid pede ao protagonista uma atualização dos códigos. Ela fez tudo o que pôde para colocar em quarentena todos os Elysion Nikkes do seu lado, mas ainda há alguns que não conseguem, então, se eles explodirem, a Arca sem dúvida ficará caótica. O PC toca com uma confirmação dos códigos enviados para iniciar a detonação e Cocoa pede desculpas. Ela ficou confusa sobre quais partes precisava reescrever e não conseguiu impedir a explosão. Do outro lado da linha, Satou se intromete e se vangloria de seu triunfo, mas o protagonista observa que ainda não acabou. Ele pergunta a Cocoa quais informações ela mudou exatamente, o que acabou sendo como o código definia "explosão". Cacau estranhou a definição, então mudou para o "significado real", em suas palavras.<br><br>
                De volta ao café da empregada, Soda e Ade são pegos de surpresa por uma verdadeira multidão de Nikkes, todos exigindo quantidades excessivamente grandes de comida. A porta toca novamente para sinalizar o retorno de Cocoa, onde ela se vangloria de salvar o mundo ao mesmo tempo em que se desculpa por criar mais trabalho para o café, que terá um aumento de clientes Nikke por algum tempo. Soda e Ade levam tudo com calma, proclamando que ninguém pode salvar o mundo eenviar negócios disparados para o seu estabelecimento ao mesmo tempo. Na verdade, as criadas chamam a este momento de festa com o protagonista a acompanhá-las, perspectiva que enche Cacau de euforia e de apreensão o homem em questão. Ele quer acompanhar o acúmulo de trabalho construído a partir de todo esse desastre, mas o olhar expectante de Cocoa e os cânticos por uma festa o fazem concordar.<br><br>
                Enquanto Ade vai buscar um bolo na cozinha, Cocoa lembra que ainda tem que fazer uma comida para o protagonista com um desenho de ketchup e propõe que ela desenhe o que ele quiser no bolo. Sua resposta é começar com um canhão de 120 mm.`
                break

            case 'crow':
                frasetit1 = 'D-3';
                frasecap1 = `Centro de Reabilitação Ark, Sala de Interrogatório. O protagonista está em uma reunião com Crow, que foi preso e detido lá. Os dois conversam, o protagonista ouvindo rumores de Crow sofrendo Mind Switch, apenas para o líder exótico zombar dos superiores tentando rotular suas ações como "incompreensíveis". Acontece que ontem, Crow foi e se entregou à ACPU, alegando que estava envolvida no ataque terrorista ao The Daily Ark, uma redação de jornal. A protagonista fica chocada, mas Crow não vê razão para isso, visto que ela é uma fora da lei e considerada a ex-chefe da Ascensão Celestial. Não é nenhuma surpresa que eles a colocariam a ferros sem pensar se ela afirmasse estar envolvida em uma operação terrorista. Ela oferece a ele um enigma para tentar resolver antes que a IA da Arca julgue seu caso,<br><br>
                O jornal relata um ataque terrorista ao The Daily Ark por um Nikke Irregular, provocando protestos no prédio do Governo Central, onde os manifestantes quebraram efígies de Nikkes. A própria Crow está moderadamente furiosa, vendo o papel escrever como se ela fosse a única atacando aquele escritório quando ela nem estava usando uma arma de fogo lá. Ela pede a opinião do protagonista sobre o incidente, então enigmaticamente diz a ele que o vídeo lhe dará mais informações.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'D-2';
                frasecap2 = `Mais tarde, na mesma noite, o protagonista verifica o vídeo que Crow disse a ele. No vídeo, bandidos da Orla Exterior estão atirando em pessoas e causando estragos. O vídeo mostra Crow parado ao lado sem fazer nada, mesmo quando os cidadãos da Arca gritam para ela fazer alguma coisa.<br><br>
                No dia seguinte, o protagonista visita Crow novamente. As duas questões comerciais, o protagonista perguntando por que Crow não fez nada, ao qual Crow pergunta quem é o atirador e por que o povo da Arca trata os bandidos como menos que humanos. O protagonista afirma o primeiro e nega o segundo, levando Crow a falar sobre como os bandidos são fisiologicamente e geneticamente iguais a qualquer cidadão da Arca, mas essas mesmas pessoas se contentam em deixar bandidos apodrecer na Orla Exterior, sem nem mesmo um resto de comida.<br><br>
                O protagonista tenta explicar que é apenas política do Governo Central, levando Crow a esclarecer que não é dele .opinião que ela está procurando atualmente. São os outros cidadãos como os do vídeo, aos quais o protagonista tenta explicar as limitações de recursos da Arca. Crow em resposta declara que, uma vez que viver com segurança e felicidade na Arca depende de circunstâncias além do controle de um indivíduo, está tudo bem para ela simplesmente ignorasse qualquer bandido cometendo crimes, já que eles eram forçados a sobreviver pelo crime. Ela então pergunta ao protagonista o que ele faria se estivesse lá no lugar dele, ele mataria o bandido para poupar os cidadãos? Ele responde que não mataria por dizer, mas impediria que os tiroteios tirassem mais vidas. Ela questiona quem consertaria os erros que os bandidos sofreram então, para os quais as respostas dele são menos do que satisfatórias para ela.<br><br>
                Afinal, os bandidos são vistos como parasitas sugando a Arca, então ninguém na Arca estaria cobrando em sua defesa. Quanto a qualquer um que defendesse os bandidos, seriam apenas outros bandidos, nenhum dos quais tem direitos civis para começar. O fato é que Enikkdeclarou que apenas os cidadãos têm o direito de se reunir e se manifestar. Se bandidos tentassem protestar na frente do Governo Central, mesmo sem violência, ninguém na Arca iria tolerar isso. Então, no final, os bandidos não têm outra maneira de expressar seu descontentamento além da violência, e é por isso que Crow não fez nada no ataque terrorista. O protagonista então questiona se a mentalidade de Crow deriva de sua vida anterior como fora da lei, o que pega Crow de surpresa, mas ele elabora que ela sempre foi o foco de suas visitas, já que ele é obrigado como seu comandante a supervisionar a saúde mental. Crow reluta em falar sobre si mesma, mas admite que sim, sua mentalidade vem de sua vida anterior como fora da lei.<br><br>
                Crow nasceu literalmente nos depósitos de esgoto da Arca e viu o que a sujeira, literal e metafórica, fazia com as pessoas. Ela admite que talvez o fora-da-lei que atacou a Arca Diária não seja nenhum santo, mas questiona se realmente se pode ou não dizer que o homem era mau, ou se ele era apenas um produto da opressão perpetuada pela disparidade de classes da qual o próprio protagonista faz parte. de. O protagonista não tem resposta quando a visita termina.<br><br>
                Mais tarde naquela noite, o protagonista está refletindo sobre sua conversa com Crow. Depois de chegar a uma conclusão ou outra, ele recebe uma mensagem de Poli da ACPU sobre suas conversas com Crow. A polícia fez algumas investigações e descobriu que o bandido responsável pelo ataque esteve em contato com Crow por mais de um ano, embora ele se recuse a dar mais detalhes. Prevalece a suspeita de que talvez Crow tenha incitado o homem a atacar o Daily Ark, mas aqueles que investigam o caso não o veem como seu modo de agir usual, então Poli achou por bem manter o protagonista atualizado sobre a situação.`

                frasetit3 = 'D-1';
                frasecap3 = `Mais tarde, na Sala de Interrogatório do Centro de Reabilitação. Crow comenta sobre quanto tempo ela está gastando com o protagonista, vendo-o novamente nem 24 horas após sua última conversa. Enquanto Crow pondera sobre por que o protagonista está aqui, o homem pergunta se ela realmente teve contato com o atirador antes do ataque. Enquanto Crow está irritado com o protagonista interrogando-a assim, ela também questiona qual seria o sentido de sua resposta. Enikk vai compilar todas as declarações e testemunhos para fazer um julgamento arbitrário que manterá o status quo, então por que o homem deveria se preocupar com o contexto real desse desastre quando ele pode apenas sentar e esperar que o Supervisor lhe diga o que pendência?<br><br>
                O protagonista rejeita tal noção, alegando que ele é obrigado a ficar ao lado de Crow como seu comandante. Crow fica perplexo, mas depois de incitar o protagonista sobre suas motivações, ela finalmente cede.<br><br>
                Um ano antes, Crow foi abordado por um Outlaw chamado "Jack". Jack queria que sua filha obtivesse a cidadania para que ela pudesse viver uma vida confortável na Arca. Para esse fim, o homem abordou Exotic, que são conhecidos na Orla Exterior por serem solucionadores de problemas. Crow tentou espantar o homem pedindo a ela para forjar identidades de cidadão, mas descobriu que ele queria uma cidadania legítima para sua filha. Crow enxotou ainda mais o homem enquanto ele continuava.<br><br>
                De acordo com Crow, o homem falou sobre como queria que sua filha tivesse um teto de verdade sobre a cabeça, comida de verdade na mesa, um trabalho de verdade em vez de vasculhar lixeiras. Em resposta, Crow decidiu dar a Jack uma verificação da realidade física, lembrando-o do lixo que a vida deu a todos eles. Mas ela tem uma sugestão; se ele está disposto a jogar, talvez um cidadão da Arca esteja disposto a adotar uma pobre criança da Orla Exterior...<br><br>
                Durante um período de tempo depois disso, Jack continuou voltando para Crow, falando sobre coisas como encontrar um orfanato disposto a levar sua filha, embora todos os que ele tentou o rejeitassem. Então, um dia, enquanto Exotic estava bebendo, Jack disse a Crow que encontrou um casal disposto a adotar sua filha, alguns idosos pobres. Jack anonimamente enviou-lhes algum dinheiro como agradecimento por adotar sua filha e dar-lhe esperança de uma vida melhor.<br><br>
                A esperança de Crow era que a filha fosse capaz de deixar sua vida fora da lei para trás e se tornar feliz, apenas para o protagonista entender que esse não era o caso. Um repórter xenófobo que mantinha o controle da família para seu último artigo de fofoca notou as condições de vida melhores do que o esperado, rastreando suas doações para a Orla Exterior e explodindo tudo fora de proporção. Jack foi descoberto e espancado pela polícia, a filha foi levada para lugares desconhecidos e o casal de idosos sofreu um colapso nervoso com o choque de perder a filha adotiva. Enquanto isso, o Daily Ark estava ganhando muito dinheiro graças ao repórter que lhes dava cobertura exclusiva.<br><br>
                Observando esse carma, Crow pergunta ao protagonista quem ele acha que é o pecador aqui. Jack, por atacar o Daily Ark? O repórter, por ser um paparazzi xenófobo? Ou a filha, por ter nascido de fora da lei? O protagonista fica em silêncio, então se levanta para sair. Crow fica confuso por que ele está saindo sem responder, quando ele responde que vai procurar a filha de Jack.`

                frasetit4 = 'D-Day';
                frasecap4 = `A visão do protagonista está embaçada de fadiga, tão cansado que ele esquece que está na Sala de Interrogatório até que Crows o tire de sua fuga. Acontece que o homem tem virado os registros de cabeça para baixo para tentar encontrar a filha de Jack, uma façanha que Crow vê como inútil quando há apenas um lugar onde a garota poderia ter ido. No esquecimento do protagonista, Crow deixa a implicação muito clara; depois de ser pega em um incidente como o que a expôs, a filha de Jack provavelmente se transformou em uma Nikke.<br><br>
                O protagonista fica incrédulo, levando Crow a incitá-lo a entrar em contato com os Três Grandes CEOs. Certamente, um deles teria um registro sobre colocar uma fora da lei em uma cirurgia de transplante de Nikke. O protagonista o faz e, infelizmente, consegue um resultado de Ingrid of Elysion . A presunção de Crow é muito palpável, proclamando que a Arca sempre fez esse tipo de coisa para impedir que os pobres sujassem a imagem completamente limpa que apresentam aos cidadãos.<br><br>
                Enquanto eles estão no assunto, Crow tem uma última pergunta para o protagonista. Nikkes, as deusas da vitória, a primeira e última esperança da humanidade de derrotar os Arrebatamentos para recuperar a superfície. Essas palavras bonitas, mas todos, desde os escalões superiores do governo central até o quotidiano de renda mais baixa, insistem que os nikkes estão apenas ligeiramente acima dos bandidos. O protagonista supõe que isso decorre da necessidade dos militares de controlar Nikkes, uma resposta parcialmente correta pelos cálculos de Crow.<br><br>
                Em uma era há muito esquecida, esse não era o caso. Os nikkes de primeira geração , como os peregrinos, eram reverenciados como deusas, a única esperança com a qual a humanidade podia contar. Eles quase poderiam ter se tornado os símbolos de uma nova religião na Arca. Mas com o passar do tempo e a guerra tomando conta das mentes das pessoas, os militares criaram novas maneiras de controlar e algemar arbitrariamente os Nikkes, retirando direitos e proteções até que as coisas se tornaram como estão agora, com Nikkes sendo, na melhor das hipóteses, temidos como monstros e, na pior, derrotados por medo de uma revolta.<br><br>
                O protagonista se pergunta se nenhum Nikke tentou resistir a essas mudanças, o que Crow afirma que houve. Mas os militares na época eram uma entidade muito grande para se fraturar facilmente, a menos que os próprios cidadãos se reunissem para fazê-lo. E, no entanto, as pessoas daquela época ficaram paradas e não fizeram nada enquanto suas deusas eram degradadas e derrubadas, como se tivessem esquecido completamente a bravura e os sacrifícios dos Nikkes na Primeira Invasão. Como se eles tivessem escolhido esquecer aqueles sacrifícios, mesmo enquanto eles continuavam acontecendo...<br><br>
                Assim, Crow tem uma última pergunta para o protagonista. Os cidadãos que ficaram como Nikkes foram convertidos de deusas em ferramentas, eles podem realmente ser chamados de inocentes? A resposta do protagonista é um firme "Não", sob o argumento de que aquelas pessoas tinham o poder de fazer algo sobre a situação, mas optaram por não fazer nada e assistir do lado de fora. Crow concorda com tal sentimento, que foi a motivação para se entregar. Se ela também ficasse ociosa quando a tragédia acontecesse e tentasse fugir de sua culpa, ela nunca seria capaz de olhar nos olhos de seu companheiro Nikke.<br><br>
                A protagonista pensa em Crow confessando enquanto se entregava à ACPU, o vídeo em que ela não fez nada enquanto bandidos atiravam em civis no Daily Ark e suas palavras sobre como as pessoas se levantaram e não fizeram nada. À medida que o protagonista compreende e analisa isso, o interfone emite um bipe com uma notificação. Enikk logo dará seu julgamento sobre o caso de Crow. Crow observa como o papel de Enikk como superintendente da Arca significa que suas decisões refletem os pensamentos e a vontade da sociedade, e quer ver exatamente o que a Arca faz com sua inação.`

                frasetit5 = 'Liberação';
                frasecap5 = `No tribunal, Enikk repassa os detalhes do caso de Crow. Apesar de Crow ter desobedecido à sua diretiva de proteger os humanos, foi considerado que sua inação resultou do conflito entre humanos e que qualquer decisão que ela pudesse ter feito naquele conflito não poderia ser considerada por sua própria vontade. Como este caso não tem precedentes, um novo caso será feito e uma nova diretriz será adicionada ao NIMPH de Crow e todos os outros Nikkes. No caso de vidas de cidadãos e não cidadãos estarem em risco, as vidas de cidadãos terão prioridade. Com esta declaração, Enikk suspende o julgamento.<br><br>
                De volta à Sala de Interrogatório, Crow e o protagonista brincam antes que o primeiro observe a insatisfação do último com o veredicto de Enikk, a IA decidindo arbitrariamente cuja vida é mais valiosa do que a do outro. Enquanto Crow não está surpreso que Enikk tenha escolhido tratar os Outlaws assim, o protagonista tem mais problemas com a decisão.<br><br>
                De volta ao tribunal, Enikk declarou que Crow não teria sido capaz de tomar uma decisão sobre o incidente, basicamente dizendo que ela não tinha livre arbítrio. Crow também não está surpreso com este desenvolvimento, comentando que se Outlaws que são fisiologicamente iguais aos cidadãos estão sendo reprimidos tão mal, é natural que um pedaço de metal ambulante como um Nikke seja ainda menos reconhecido. No mínimo, de pé no tribunal, observando Enikk dar as cartas enquanto ninguém tenta contradizê-la. É apenas reafirmado para Crow o quanto a Arca realmente é uma pilha de esterco podre.<br><br>
                Notando a atmosfera pesada, Crow decide mudar de faixa. Ela será libertada hoje, e o protagonista está escalado para acompanhá-la de volta à Orla Exterior. Ela o convida para dar um passeio e ficar no portão.<br><br>
                Mais tarde, no portão da Orla Exterior. O retorno do líder do Exotic é uma visão bem-vinda para Jackal e Viper, embora o último observe que seu chefe queria descansar dentro do Centro de Reabilitação. O protagonista percebe esse comentário e se volta para Crow em busca de respostas. Acontece que a líder exótica fez uma aposta com sua vida, assim como Jack e sua filha, e embora o resultado não tenha correspondido às suas expectativas, ela encontrou algum mérito nisso. Acontece que isso foi, de certa forma, uma manobra para ter uma conversa cara-a-cara com o protagonista, que viria imediatamente bater à porta se um Nikke sob seu comando fosse trancado no Centro de Reabilitação.<br><br>
                O portão para a Orla Exterior se abre e Crow se despede enquanto Exotic caminha em direção a ele. O protagonista interrompe Crow para dizer que ela pode contar com ele se quiser se encontrar novamente para qualquer coisa. A expressão confusa do líder exótico é a última coisa que o protagonista vê quando os portões se fecham, separando a Arca da Orla Exterior mais uma vez. O protagonista pondera consigo mesmo; se o povo da Arca vir o fim da guerra, eles serão capazes de superar o ódio que se formou entre os cidadãos e os bandidos? Embora pensando que Crow provavelmente diria a ele para parar de sonhar, o protagonista acredita que alguém deve tentar seguir o caminho mais elevado, apenas para lançar mais um raio de esperança neste mundo.`
                break

            case 'd':
                frasetit1 = 'D';
                frasecap1 = `D examina as ordens que recebeu. É uma missão de assassinato, e o alvo é o protagonista. As alegações para sua execução estão listadas a seguir:<br><br>
                • Mantém uma atitude passiva face ao dever de reclamar a superfície<br>
                • Usa um site ilegal para traficar drogas e chips<br>
                • Incita Nikkes com retórica inflamatória<br>
                • Visitas regulares à Orla Exterior, possivelmente como parte dos planos para um ataque terrorista<br><br>
                Assim, o protagonista foi considerado um risco à segurança da Arca e os juízes ordenaram sua execução. Enquanto examina isso, o tablet de D toca.<br><br>
                É uma mensagem de "X", que explica que os Juízes votaram unanimemente a favor do golpe. "IV", aquele que trouxe o assunto à mesa, explicou que o protagonista supostamente vai à superfície além do escopo de seu dever de comandante, e tem contrabandeado objetos da superfície para vender em negócios ilícitos, alguns dos quais têm ido para a Orla Exterior. Com base no fato de que o protagonista é, nas palavras de IV, "uma bomba-relógio", os juízes emitiram esta ordem de assassinato. X é a favor desse julgamento, acreditando que o protagonista ultrapassou os limites de sua autoridade e deixa D para lidar com a tarefa.<br><br>
                Desligando o tablet, D afia o machado enquanto planeja uma visita para ver se há algum fundamento para as acusações. Apesar de como ela pensou que o protagonista seria diferente, se ele realmente for culpado, ele morrerá, pura e simplesmente. Mas se ele for inocente, então...<br><br>
                Enquanto isso, o protagonista está sentado em seu quarto no Outpost, decidindo sair para tomar um pouco de ar. D está do lado de fora de sua porta e diz sem rodeios que ela está aqui para matá-lo. A líder do Perilous Siege elabora a ordem de execução dos juízes e deixa claro que ela estará observando de perto para ver se ele merece viver ou morrer.<br><br>
                Esse tipo de abordagem pela porta da frente é incomum para o que deveria ser uma missão furtiva, e o protagonista comenta sobre isso. D explica que ela iria investigá-lo secretamente, mas descobriu que ele passa muito tempo cercado por Nikkes, e muitos deles são perspicazes o suficiente para notá-la. Assim, sua melhor aposta era dar o primeiro passo e chegar até ele antes de qualquer outra pessoa, para que os dois pudessem lidar com esse assunto sozinhos. Ela está confiante de que quaisquer enganos do protagonista serão eventualmente descobertos, pois, por sua experiência, nenhum humano consegue manter um disfarce perfeito por muito tempo.<br><br>
                O protagonista insiste que ele não pode ser tão ruim quanto os juízes o fazem parecer, mas D está determinado a ver isso até o fim. Em suas palavras, ninguém acredita que é uma pessoa ruim, mesmo que as pessoas ao seu redor não compartilhem do mesmo sentimento. Então ela fará como Perilous Siege sempre fez, observando o que ele faz e decidindo se ele é ou não hediondo o suficiente para matar. Desejando-lhe boa sorte, D entra no quarto do protagonista para ser sua investigação.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'A Primeira Viagem';
                frasecap2 = `D não perde tempo vasculhando os pertences do protagonista, enquanto afirma que não o matará antes de fazer uma investigação completa, apenas agindo de acordo com suas ordens e descobertas, em vez de motivações pessoais. Para isso, ela interroga o protagonista sobre seus planos, que eram passear e fazer alguns trabalhos na superfície. D ordena que o protagonista entre em contato com qualquer Nikke que ele planejava fazer uma surtida e diga a eles para aguardar, querendo o mínimo possível de influências externas em sua investigação e seus resultados. O protagonista, brincando, pergunta se ele terá que tomar banho e dormir com D também nos próximos dias, apenas para recuar contra o argumento inatacável de um possível machado na cara.<br><br>
                Pegando seu telefone, o protagonista contata os membros do Counters e os PMs para que não venham e o contexto do porquê. Apesar das compreensíveis preocupações e agitação de sua parte, o esquadrão concorda em deixar a protagonista em paz até que D termine sua investigação. O protagonista notifica D de sua mensagem concluída, e os dois seguem para a superfície sozinhos.<br><br>
                Na superfície, D pede detalhes sobre as atribuições do protagonista, mas ele se recusa a contar a ela. Depois que sua tentativa de piada sai pela culatra, o protagonista cede e admite que está investigando sinais anormais em um conjunto de coordenadas. D repreende o homem por ser tão irreverente sobre isso, já que suas palavras e ações serão sua única base para decidir seu destino. No caminho, os dois conversam sobre seus respectivos empregos. Ambos estão decididos de que o que eles fazem será benéfico para o mundo, e D deseja que outras pessoas possam compartilhar a determinação do protagonista de deixar um legado que leve à recuperação da superfície.<br><br>
                Eventualmente, os dois encontram um rádio antigo nas coordenadas designadas. Desligando o aparelho, D olha para todos os objetos espalhados, deixados para trás por seus donos fugindo dos Arrebatamentos. O protagonista comenta como às vezes leva alguns artigos menores de volta de sua viagem, o que D observa ser ilegal sem a devida autorização. Percebendo que acabou de cavar um buraco para si mesmo, o protagonista explica que esses itens foram levados para atendimento de pedidos feitos por cidadãos à aprovação do Governo Central. D repreende o protagonista por não ser claro com suas palavras, reiterando que ela o julgará pelo que ele disser. Com a missão concluída, os dois voltam para o Posto Avançado.`

                frasetit3 = 'A Segunda Viagem';
                frasecap3 = `A missão do dia seguinte é em... um shopping na Arca? D fica perplexo com o tipo de missão que exigiria ir até lá, para a qual o protagonista afirma que eles vão a um encontro lá. D não se diverte com isso, dizendo ao homem para ir sozinho enquanto ela fica de olho nele. Observando como uma conversa casual é particularmente difícil com o líder do Perilous Siege, o protagonista esclarece que está fazendo uma viagem para reabastecer.<br><br>
                Olhando ao redor do shopping, D observa como ela passa mais tempo aqui para missões do que para fazer compras, supondo que seus alvos adoravam exibir sua riqueza fazendo compras. Após um breve momento em que o protagonista protesta contra a insinuação de que ostenta riqueza, os dois seguem para o primeiro destino.<br><br>
                Em uma loja, o protagonista examina sua lista de compras. A amplitude disso faz D ponderar se ele está ou não exibindo sua riqueza, mas o protagonista esclarece que esses são suprimentos a serem compartilhados com todos os outros no Posto Avançado. Esta revelação fez D se desculpar, pois ela presumiu que ele era como seus outros alvos e só comprava coisas para si mesmo. É quando algum estranho se aproxima e começa a conversar familiarmente com o protagonista. D se apega às palavras do homem sobre o desenvolvimento de um novo "chip de drogas" e interroga o protagonista em busca de informações, presumindo que ele esteja trabalhando com pessoas que fabricam meios de consumo de narcóticos. Vendo como isso se empolgou, o protagonista explica que o homem estava falando sobre batatas fritas .<br><br>
                Enquanto D tenta analisar do que se trata, o homem volta correndo e explica que seu mais novo produto viciante se chama "Banana Chips" e convida o protagonista a passar por eles algum dia. D ainda acha que se trata de drogas e assume que é uma banana injetada com narcóticos, quando na verdade são apenas batatas fritas tão saborosas e viciantes que o protagonista as chama de "drogas".<br><br>
                Demora um pouco explicando para finalmente convencer D de que não, ele não é aquele tipo de "traficante". Após aconselhá-lo a pensar em outras palavras para descrever os lanches além de "chips" e "droga" para evitar mal-entendidos, D decide que a dupla deve sair do shopping.`

                frasetit4 = 'A Terceira Viagem';
                frasecap4 = `D pondera sobre quantos já se passaram três dias em sua coabitação, e o protagonista brinca sobre se tornar excessivamente apegado a D. O líder do Perilous Siege comenta como o homem é propenso a piadas, mas admite que é provavelmente uma das muitas razões pelas quais ele está cercado por tantos Nikkes.<br><br>
                Enquanto conversam, o protagonista prepara uma sacola com algum conteúdo desconhecido. O fato de ele estar levando uma bolsa dessas para o Outer Rim, de todos os lugares, e se recusar a elaborar não ajuda em nada a amenizar as suspeitas de D. Ela reitera suas palavras anteriores sobre como as pessoas eventualmente escorregam e revelam suas verdadeiras cores, e apenas espera que o que quer que ele faça na Orla Exterior não seja algo que justifique a execução...<br><br>
                The Outer Rim está tão escuro, sujo e fedorento como sempre, enquanto o protagonista vira sua bolsa em um beco. D percebe a comida, eletrônicos e sucata misturados no conteúdo e se pergunta por que o protagonista veio até aqui para deixar isso. Os protagonistas insistem que isso é descartar itens desnecessários, mas D não aceita nada disso e o questiona sobre seus verdadeiros motivos para ser tão generoso com os não-cidadãos.<br><br>
                O protagonista reitera que é simplesmente ele agindo sobre o que quer fazer, ideia que D zomba. Em um lugar tão abandonado quanto a Orla Exterior, coisas como as que ele acabou de despejar provavelmente serão canalizadas para empresas ilegais, mas ele parece despreocupado. O protagonista afirma acreditar que esta é uma ação ética que vai ajudar alguém que está por aí e decide voltar. D está confuso sobre como ele veio até aqui para um dead-drop anônimo, mas aceita a ideia de sair.<br><br>
                Antes que eles o façam, um bandido bêbado entra e tenta roubar a dupla. D não se diverte com esse desenvolvimento e balança seu machado quando o homem se aproxima demais. O protagonista grita com D para não matar o Outlaw, e o machado bate na parede a centímetros da cabeça do ladrão. D avisa o Outlaw contra tentar isso de novo, e o choroso e exuberante luta para fugir.<br><br>
                Com o assunto resolvido, o protagonista pergunta a D se ela está bem. Ela retruca que deveria ser ela a perguntar se ele está bem e esclarece que o golpe anterior foi uma demonstração de intimidação. Não valeria a pena matar algum bêbado tentando roubá-la. Após um momento de silêncio, D declara que seus passeios diários estão chegando ao fim. Infelizmente para o protagonista, ele não está totalmente fora de perigo no que diz respeito à ordem de assassinato. D planeja reconfirmar a missão com seus superiores, já que o indivíduo que ela observou e aquele que ela foi designada para matar são incrivelmente diferentes. As saídas diárias estão suspensas e o protagonista recebeu... uma suspensão de execução, no mínimo.`

                frasetit5 = 'Aposentadoria Antecipada';
                frasecap5 = `Em um quarto de hotel, D relata suas descobertas a X, pois suas observações renderam um indivíduo que não se parece em nada com as alegações. X examinou os relatórios e aceita o adiamento da ordem de assassinato enquanto os juízes conduzem uma investigação interna sobre como essa ordem ocorreu. Eles pretendem realizar uma nova votação sobre se o fundamento da ordem era válido e, dependendo dos resultados, IV ou D serão executados por tentativa de enganar os juízes. Notando que IV foi quem propôs o protagonista ser um alvo, D decide ver como o homem está lidando com isso.<br><br>
                Na porta do quarto de IV, D ouve o homem em uma ligação discutindo como o protagonista é "astuto" por conseguir "enganar" D. Depois de enviar o que ele chama de "evidências concretas" para o outro interlocutor, IV bate sua mesa e quase confirma que ele inventou as acusações. Enquanto D delibera sobre por que ele iria tão longe para matar o protagonista, ela recebe outra mensagem de X.<br><br>
                Os Juízes consideraram os argumentos de IV inválidos devido a várias inconsistências em suas declarações, o que teria passado despercebido se D não tivesse pedido uma reavaliação. Enquanto X reclama que nem mesmo os novos contratados são confiáveis ​​para não jogar rápido e solto com as regras, a maior preocupação de D é como lidar com o pedido daqui para frente. X simplesmente diz a ela que ela tem a palavra final sobre como o pedido será executado.<br><br>
                Decidida, D abre a porta do escritório de IV, que fica bastante surpreso ao ver uma Perilous Siege Nikke aqui. Ao explicar que o alvo da execução mudou, D interroga IV sobre por que ele queria o protagonista morto. Adivinhando o passado do homem como um comandante sem renome, D postula que ele estava com ciúmes de toda a fama e atenção que o protagonista recebeu e queria incriminá-lo para saciar sua inveja mesquinha. O desrespeito de IV por potencialmente matar um inocente simplesmente sela o acordo, e D brande seu machado para dar a ele uma "aposentadoria antecipada".<br><br>
                Enquanto isso, o protagonista está em seu quarto, sentindo-se estranhamente liberado do frio da morte iminente. Uma batida em sua porta revela D, que pergunta o que ele faria se fosse o alvo novamente. Depois que o homem implora um pouco por sua vida, D simplesmente pergunta se eles podem tomar chá juntos.<br><br>
                Sentado e com o chá na mão, D dá uma palestra para o protagonista, alertando-o para tomar cuidado com suas palavras e ações e manter-se no caminho certo, visto que ele é um indivíduo de alguma fama para a Arca. Ela explica que os dois seguem um caminho para criar um mundo melhor, mas onde ela só pode fazer um matando o mal, ele pode fazer um espalhando o bem. Assim, ela implora para que ele não sucumba ao lado negro, ou perca sua convicção.<br><br>
                Após um momento de silêncio, D se pergunta o quanto o mundo poderia ser melhor se mais pessoas como o protagonista estivessem nele. Os dois concordam em trabalhar juntos para tornar o mundo um lugar melhor e conversam bastante durante o chá.`
                break

            case 'delta':
                frasetit1 = 'Sem história até o momento.';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'diesel':
                frasetit1 = 'Sem história até o momento.';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'dolla':
                frasetit1 = 'Empreendedor Misterioso';
                frasecap1 = `O protagonista recebe uma mensagem urgente de Mustang , CEO da Tetra Line. Durante uma varredura de rotina na memória de Dolla, Mustang encontrou algumas informações preocupantes que conectam Dolla à Dark Net, um site do mercado negro para todos os tipos de negócios ilegais. Comércio de órgãos, prostituição, drogas. Se a Arca o ilegalizou, está na Dark Net. Entre a mentalidade de "fazer qualquer coisa para obter lucro" de Dolla e o fato de que qualquer associação com a Dark Net seria uma marca negra na Tetra Line, Mustang implora ao protagonista para convencer Dolla a cessar todas as atividades com a Dark Net. Ele concorda e manda uma mensagem para Dolla pedindo um encontro. Após três horas sem resposta, a protagonista decide visitar Dolla diretamente em sua empresa.<br><br>
                Na empresa de Dolla, o protagonista envia uma mensagem para ela novamente, desta vez obtendo uma resposta para se encontrar na filial Moonbucks da empresa. Dentro do café, os dois conversam um pouco. O protagonista é de particular interesse para Dolla, visto que ele é um comandante que realmente se importa com Nikkes e suas emoções. Quando a protagonista tenta pressionar Dolla sobre seus negócios com a Dark Net, ela desvia anunciando o novo tablet de sua empresa. Com a conversa significativamente descarrilada, Dolla parte para seu próximo compromisso de negócios. O protagonista resolve aprender mais sobre a Dark Net em um local seguro.`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Comércio ilegal';
                frasecap2 = `Em seu quarto, o protagonista está acessando a Dark Net por meio de um link que Mustang lhe forneceu. astutoentra em contato com ele, preocupado com a natureza do histórico de seu navegador, mas ele neutraliza a situação com sucesso. A questão mais preocupante é um usuário chamado "Royal Dolla" que está vendendo um chip de identificação registrado para um cidadão da Arca. Se Dolla realmente estava negociando contrabando ilegalmente na Dark Net, a punição pela lei Ark poderia ir tão longe quanto o apagamento da memória. Para verificar a identidade do comerciante, o protagonista opta por comprar o chip de identificação, onde a opção de pagamento consta como “transação direta”, sendo necessário um encontro presencial com o vendedor para o negócio. Royal Dolla é contatado, mas sua voz soa como a de um adolescente. O protagonista ainda está preocupado, então ele decide ir para as coordenadas que Royal Dolla deu para o negócio.<br><br>
                No local designado, o protagonista contata Royal Dolla, que diz estar logo atrás dele. Ele se vira e eis que "Royal Dolla" era literalmente apenas Dolla o tempo todo. Embora Dolla se surpreenda com o fato de o protagonista ser o comprador ilegal do chip, ela ainda aparece com o produto. Ela se pergunta se o protagonista está planejando usar o chip para falsificar sua identidade e começar uma nova vida em outro lugar, o que ela acha uma pena, já que comandantes que realmente respeitam Nikkes são uma raridade. O protagonista, claro, nega isso e admite que está preocupado com Dolla. A empresária fica lisonjeada, mas acaba se recusando a interromper seus negócios na Dark Net, proclamando que a Arca é um lugar onde qualquer um pode fazer qualquer coisa, desde que tenha dinheiro. Mas ela acha comovente a preocupação do protagonista, então ela dá o chip de graça, junto com um presente especial, antes de partir. O protagonista decide voltar para casa e ver o que Dolla lhe deu.`

                frasetit3 = 'Mal Necessário';
                frasecap3 = `De volta ao Outpost, o protagonista olha para o presente de Dolla, apenas para descobrir que seu presente era um conjunto de lingerie incrivelmente ousado. Resolvendo manter isso em segredo dos outros Nikkes, ele o guarda enquanto seu telefone toca. Dolla está em gargalhadas, achando a agitação do protagonista muito divertida. Ela também promete que ele pode visitá-la sempre que quiser, desde que acalme a irritação. Parece que Dolla se abriu um pouco, mesmo mantendo o comércio ilegal.<br><br>
                Pouco depois, a protagonista visita a empresa de Dolla para revê-la, mas ela precisa fazer um telefonema. Logo depois, Dolla aparece, mas ela ainda está ao telefone com uma expressão séria. Espionando, o protagonista ouve boatos perturbadores da boca de Dolla, sugerindo fortemente que ela está envolvida com algum tipo de comércio de cadáveres. O protagonista a pressiona após a ligação, à qual ela admite a verdade depois que ele lhe garante sua discrição. Acontece que Dolla está em contato com os Coletores, necrófagos que coletam cadáveres da Orla Exterior ou ataques terroristas. Dolla justifica isso como um "mal necessário", dizendo que as partes do corpo que seriam jogadas no lixo poderiam ser usadas para transplantes hospitalares, e o dinheiro que ganhar negociando com os Coletores será usado para expandir a tecnologia da Arca.<br><br>
                Em um restaurante, Dolla e o protagonista compartilham uma refeição. Acontece que Dolla está satisfeita com o andamento de sua saída e leva a protagonista para casa em seu carro caríssimo.`

                frasetit4 = 'Dolla está em crise';
                frasecap4 = `O protagonista está assistindo a um noticiário detalhando como o comércio de órgãos ficou tão ruim que os ataques terroristas estão aumentando e os bandidos estão até sequestrando cidadãos. Shifty o contata brevemente, preocupado com Dolla quando o aplicativo de mensagens dispara. A mensagem de Dolla é um único "." sem mais mensagens depois. Preocupado, o protagonista tenta ligar para Dolla, mas não consegue. Os únicos lugares onde as comunicações da Arca não podem se conectar facilmente são a superfície ou a Orla Exterior. Shifty rastreia a mensagem para a Orla Exterior, especificamente o território do grupo terrorista Ascensão Celestial. A polícia não pode ser chamada para isso desde A; a Orla Exterior é uma zona sem lei que o Governo Central anulou, e B; se as autoridades pegarem Dolla, uma Nikke que dizem ter negócios desagradáveis, na Orla Exterior, é provável que ela seja apagada da memória em um piscar de olhos. Assim, o protagonista sai correndo sozinho, com Shifty fornecendo navegação.<br><br>
                Na Orla Exterior, as comunicações com Shifty falham quando o protagonista se aproxima das coordenadas de Dolla. Ele ouve dois gangsters discutindo, aparentemente eles explodiram uma troca e surpreenderam alguém que acabou por ser um Tetra Nikke. Eles ficam apavorados, pois se Mustang descobrisse que um de seus Nikkes foi ferido na Orla Exterior, não custaria nada transformar a Orla Exterior em um cemitério. Os bandidos fogem, deixando o protagonista ver Dolla caída no chão. A própria Dolla fica chocada ao ver o protagonista em um lugar inseguro como este, mas ele ignora suas perguntas para verificar se há ferimentos. Encontrando vários ferimentos, ele administra os primeiros socorros, apesar dos protestos dela. Dolla se pergunta o que o protagonista está fazendo, entrando em uma zona sem lei e tratando um Nikke quando ele poderia ser como os outros comandantes, usando Nikkes para serem promovidos por seu trabalho na superfície. O protagonista afirma que Dolla é sua amiga e por quem ele sofreria muito, chegando a carregá-la até chegarem a um local onde possam chamar um carro para levá-los de volta à Arca.`

                frasetit5 = 'Encontro no Bar';
                frasecap5 = `Dolla manda uma mensagem para o protagonista, convidando-o para um encontro para comemorar sua recuperação no bar Agit. Shifty está curioso sobre seu encontro, mas seus lábios estão selados.<br><br>
                No bar Agit, Dolla está em uma ligação. Ela está discutindo um ataque de retaliação contra os bandidos que interferiram em seu negócio e a feriram antes. Ela logo encerra a ligação, convidando o protagonista a se sentar ao seu lado. Eles pedem suas bebidas, brindam e bebem enquanto conversam.<br><br>
                Acontece que o acordo de Dolla fazia parte de um acordo comercial com o pessoal da Missilis . Em troca dos cadáveres, Missilis concordou em fazer uso da tecnologia de sua empresa, que pagaria dividendos apenas no marketing. Dolla declara sua intenção de aumentar gradativamente seus lucros, até que um dia, ela é lembrada não por ser uma Nikke, mas por ser a maior empresária da Arca. Dolla e o protagonista pedem mais uma rodada de drinques e se beijam brevemente no bar.`
                break

            case 'dorothy':
                frasetit1 = 'O Jardim Onde Habita a Solidão';
                frasecap1 = `Depois de passar no teste de Inherit, o protagonista voltou ao Éden e lá permaneceu por alguns dias. Os campos abertos e o ar fresco, cheios de produtos naturais, são tudo o que a Arca pode sonhar em se tornar. A área mais impressionante é um pátio que funciona como o centro do Éden, e bem no meio dele está Dorothy.<br><br>
                O protagonista compila o que sabe sobre Dorothy; ela é uma Nikke que mora aqui no Éden e, por mais que sua aparência a faça parecer um anjo, ela pode mudar de comportamento em um piscar de olhos e deixar alguém para morrer. Por alguma razão, ela passa a maior parte do tempo neste mesmo pátio, olhando para longe enquanto o sol brilha sobre ela. Do ponto de vista dele, ela parece tão...<br><br>
                Dorothy chama o protagonista, tirando-o de sua reflexão. A conversa fiada que se segue termina tão rapidamente quanto começa e Dorothy decide ir embora. Observando o líder Herdeiro partir, o protagonista volta seu olhar para o local iluminado pelo sol onde ela estava. Inexplicavelmente, a beleza da paisagem não lhe dá nenhuma alegria. Na verdade, uma profunda tristeza está permeando seus pensamentos.<br><br>
                Querendo saber mais, o protagonista pergunta a Noah sobre o hábito de Dorothy de ficar no pátio. Para seu conhecimento, o líder Inherit sempre foi assim desde que eles se conheceram. A admissão da protagonista de que Dorothy parece solitária surpreende Noah, e ela comenta sarcasticamente sobre sua nova profissão como terapeuta.<br><br>
                A conversa continua enquanto Noah explica que, apesar de todos os Nikkes of Inherit aceitarem Dorothy como uma delas, no final do dia ela ainda é um ex-membro da Deusa. Pelo depoimento dela, nenhum dos membros do Inherit pode realmente se conectar com alguém que tem idade suficiente para ter visto as paredes da Arca serem erguidas. Esta revelação pega o protagonista de surpresa, levando Noah a explicar como o esquadrão da Deusa ficou nos portões da Arca depois que ela foi concluída, protegendo-a por tempo suficiente para a evacuação da humanidade. As batalhas contra os Raptures tentando invadir foram brutais, e o número de mortos foi incontável. O fato de Dorothy ter sido uma das poucas a sair de lá inteira é algo inspirador e inquietante.<br><br>
                Enquanto o protagonista analisa silenciosamente essas informações, Noah explica que parte da aparente intocabilidade de Dorothy vem do fato de ela ter sido a fundadora do Éden. Esse tipo de status elevado em cima de seu passado como uma ex-Deusa significa que a maior parte do Éden se curvará para cumprir suas ordens. Esse fato lembra Noah de algo que ela descobriu antes e que se arrepende de ter relatado a Dorothy. Aparentemente, enquanto Inherit estava em uma missão no deserto, Noah encontrou "algo" que Dorothy estava procurando há algum tempo, e o líder Inherit a repreendeu por não recuperá-lo. Mas pela opinião de Noah, o esquadrão foi cercado por Raptures no momento em que ela encontrou a coisa, então não houve tempo ou espaço para respirar para pegá-la.<br><br>
                Quanto a voltar para pegar a coisa, Noah infelizmente não se lembra onde ela a encontrou. Tendo dito sua peça, Noah sugere que o protagonista tente interagir diretamente com Dorothy, em vez de se esconder em busca de informações, e vai embora. Refletindo sobre esse conselho, o protagonista decide falar com Dorothy.<br><br>
                No dia seguinte, a protagonista volta ao pátio, onde Dorothy a espera ao sol. Ele pergunta o que ela está olhando, mas na verdade ela não está olhando para nada em particular...<br><br>
                No dia seguinte, a protagonista pede a Dorothy uma maçã perto dela, e ela permite.<br><br>
                Uma semana se passa dessa maneira e, eventualmente, Dorothy atinge seu limite, e ela questiona o protagonista sobre sua persistência em estar aqui. Ao ouvir seu raciocínio, a resposta de Dorothy contém uma zombaria implícita, mas facilmente audível. Ela decide convidar o protagonista para um passeio, que ele aceita. O consentimento quase imediato do homem é uma surpresa para Dorothy, que observa que talvez sua boa vontade seja genuína...`
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = 'Um Passeio Sufocante';
                frasecap2 = `A dupla de Dorothy e o protagonista entram no deserto fora do Éden, local de seu "passeio". Dorothy comenta de forma passivo-agressiva que como a protagonista disse que ela parecia "fria", ela decidiu caminhar no lugar mais quente que pudesse encontrar. Aparentemente, o protagonista a lembrou de uma flor que ela queria ver, e o passeio terminará assim que for encontrada. Acontece que esta flor é o que Noah notificou a Dorothy antes, então, aos olhos dela, mataria dois coelhos com uma cajadada só. Ela garante ao protagonista que encontrar essa flor é a chave para resolver sua solidão.<br><br>
                Quanto ao local exato dessa flor, é aí que as coisas se complicam. Mas pelo relatório de Noah, deve estar a apenas 5 horas de distância de sua localização atual. Diante da descrença do protagonista, Dorothy aproveita a oportunidade para depreciá-lo. Um ser humano frágil, egoísta como os outros, que não consegue nem dar um passeio de 5 horas no deserto por uma Nikke que escolheu estender a mão, ela o chama. Enquanto o protagonista afirma sua escolha de acompanhá-la, o sorriso de Dorothy não alcança seus olhos enquanto ela caminha a passos largos em direção ao seu destino.<br><br>
                A dupla não parou nenhuma vez para descansar durante a viagem, e o calor definitivamente está pegando no protagonista. Ver Dorothy não lançar um único olhar para trás faz o protagonista pensar em como até mesmo os Nikkes mais distantes que ele acompanhou pelo menos registraram sua existência e tentaram se certificar de que ele vivia. No auge da desidratação, o protagonista chama Dorothy, dizendo que ela está indo rápido demais e que sua resistência está chegando ao limite. Depois de repreender o homem por sua relativa fragilidade, Dorothy admite que talvez tenha se acostumado demais a andar com pessoas feitas de material mais duro. Ela declara que eles vão fazer uma pausa aqui, e o protagonista cai no chão.<br><br>
                Dorothy encara o protagonista abatido, pensando em como ele não está chateado. Normalmente, a maioria dos humanos ficaria absolutamente furiosa por uma "simples Nikke" como ela fazê-los sofrer assim, caminhando no calor do deserto sem uma gota d'água ou uma pausa. Enquanto ela se pergunta como ele pode ser tão calmo em comparação, o protagonista diz ao líder Inherit que os dois estão cansados. Dorothy zomba dessa ideia, lembrando ao comandante como os nikkes são literalmente construídos de maneira diferente, um lembrete que o leva a invejar a constituição de um Nikke. Esta observação pega Dorothy de surpresa, já que tal comentário quase a lembra de "ele", embora ela se recuse a elaborar quem é "ele". Declarando o fim do intervalo, Dorothy segue em frente, o protagonista lutando para acompanhá-la.<br><br>
                Segue-se uma caminhada aparentemente interminável, mas nenhum sinal da torre de rádio que Noah relatou nem das flores que cresceram perto dela. Olhando para as ruínas ao redor, Dorothy comenta que está um pouco ressecada. O protagonista oferece a ela sua garrafa de água, recusando sua recusa em beber. Os dois bebem da garrafa e se sentem revigorados por isso.<br><br>
                Olhando para os destroços, Dorothy se pergunta se talvez os olhos de Noah foram enganados quando ela disse que as flores estavam aqui. O protagonista sugere pedir a Cecil as coordenadas da missão de Noah, mas Dorothy faz questão de não incomodar o operador com "frivolidades" como esta. O que ela acaba focando é no comentário do protagonista sobre Cecil ser um "companheiro de esquadrão". Aos olhos de Dorothy, Cecil nunca será nada além de humano, mesmo que ela seja do Éden. Como um Nikke e um humano poderiam estar em pé de igualdade?<br><br>
                Nesse comentário, a protagonista comenta o quanto Dorothy não gosta de humanos, o que ela acaba admitindo. Exceto que a protagonista comenta como é ótimo que ela odeie os humanos, desde que ela não o odeie . Dorothy ri desse raciocínio distorcido, depois tenta negar ter rido tanto na frente de um humano, depois fica em silêncio. Por fim, Dorothy decide que esse passeio de caça às flores é um fracasso e se levanta para voltar ao Éden.<br><br>
                Então o protagonista se lembra das palavras exatas de Noah; as flores estavam perto de uma torre de rádio vermelha e, no momento em que as viu, Raptures apareceu e ela foi forçada a reservá-lo. Olhando ao redor do metal vermelho destruído e das antenas, o protagonista diz a Dorothy que eles chegaram ao seu destino. Ele se dirige aos escombros para investigar, uma confusa Dorothy atrás dele.`

                frasetit3 = 'Amor não correspondido';
                frasecap3 = `O protagonista explica seu raciocínio e começa a vasculhar o metal. Com certeza, um canteiro de flores está sob os escombros e, felizmente, algumas delas ainda estão intactas. O protagonista o encontra fora de seu alcance, então ele começa a mover pedaços de metal para fora do caminho.<br><br>
                Ao fazer isso, Dorothy questiona por que ele está indo tão longe para comprar algumas flores. Ele devia saber que tudo isso era mais um trote da parte dela, o que ele sabe, considerando como a incomodou todos os dias durante uma semana inteira. Mas Dorothy disse que essas flores curariam sua solidão, então ele as está recebendo, faça chuva ou faça sol. Observando o protagonista mover a sucata, Dorothy declara sua intenção de não levantar um dedo para ajudá-lo, mesmo que Raptures seja atraído pelo barulho que ele está fazendo. O protagonista persiste, acreditando que Dorothy irá protegê-lo, uma noção que ela zomba sem entusiasmo.<br><br>
                Eventualmente, a sucata está fora do caminho, permitindo que o protagonista colha uma flor e a ofereça a Dorothy. Infelizmente, ela declara que não é a flor que procura. Esta flor silvestre indefinida não é nada como a liliweiss que Dorothy procura, e ela zomba zombeteiramente ao zombar do protagonista que trabalha tanto para um empreendimento fútil. A aceitação indiferente da situação pelo protagonista apenas a irrita ainda mais, insistindo que ele aja como os outros humanos e faça algum discurso carregado de palavrões sobre ela ser uma ingrata. Ela não está engolindo sua rotina de cara legal por um milissegundo e pede a ele para parar de incomodá-la daqui em diante. Em vez de se machucar, o protagonista só consegue ver a expressão no rosto de Dorothy enquanto ela tenta repeli-lo. Ela tem que se convencer ativamente de que odeia humanos,<br><br>
                Dorothy exige que o protagonista cale a boca, disparando um tiro de advertência no processo. Ela faz um discurso retórico negando cada um de seus pontos, então aponta a arma para a cabeça dele. Ela pergunta se ele acha que ela não pode matá-lo, antes de explicar que Eden Nikkes não tem os mesmos limitadores que Ark Nikkes. Ao contrário de suas irmãs algemadas, os Nikkes do Éden lutaram e lutaram por cada dia de sobrevivência depois que a Arca se selou, e isso os tornou não apenas capazes, mas dispostos a matar humanos. Satisfeita com o silêncio do protagonista, Dorothy adverte o homem contra tentar enfiar o nariz onde não deve, embora ela o "garanta" que ainda pode usá-lo e, portanto, está disposta a mantê-lo vivo ... por enquanto .<br><br>
                Dorothy envia uma mensagem a Isabel para transportar o protagonista de volta ao Éden e declara seu desgosto por sua companhia, deixando cair a flor ao sair. A protagonista fica olhando a flor caída até a chegada de Isabel.`

                frasetit4 = 'Coisas que precisam ser ditas';
                frasecap4 = `Rapi verifica como está o protagonista, a notícia se espalhou por Eden sobre seu pequeno passeio com Dorothy, e como Isabel foi quem o trouxe de volta sozinho. Pensando nos eventos anteriores, a protagonista pergunta a Rapi o que ela sabe sobre o destino da Deusa depois que a Arca foi concluída. O ponto principal que ela lembra é a Operação Ark Guardian, sobre a qual ela elabora.<br><br>
                A Operação Ark Guardian foi uma missão em que Nikkes formou uma linha defensiva em torno dos portões da Arca e ordenou protegê-los até que o último dos humanos estivesse abrigado na Arca. Naturalmente, a Deusa fazia parte disso, e eles supostamente se espalharam e se esconderam após a conclusão da operação, sem que ninguém soubesse sequer se estavam vivos ou mortos. A conclusão do protagonista da explicação é que ninguém expressou um pingo de gratidão pelos esforços da Deusa, um sentimento ecoado por Rapi, dado que a Arca simplesmente escreveu a Deusa como MIA.<br><br>
                O protagonista relembra o discurso de Dorothy no deserto, sua impressão de alguém chamando-a de ingrata fazendo-o acreditar que ela achava que ele tinha o direito de ficar chateado. Afinal, ele havia trabalhado e sofrido apenas por devoção a ela, e ela o retribuiu com menosprezo e insultos. Ele se lembra do olhar de dor em seu rosto quando ela zombou de seus comentários sobre ela querer amar os humanos e ser amada por sua vez. Mas, acima de tudo, ele se lembra de seu olhar vazio enquanto ela permanecia sob a luz do sol brilhando no pátio.<br><br>
                As observações de Rapi sobre como não restaram registros de Ark Guardian despertam o protagonista de seus pensamentos, e ele educadamente recusa sua oferta de buscar mais informações. Ele já sabe as palavras que precisa dizer a Dorothy...<br><br>
                A protagonista encontra Dorothy no mesmo pátio, no mesmo local onde o sol brilha. Dorothy sarcasticamente pergunta se o homem gosta dela dando-lhe o ombro frio, ou se ele recebe seus chutes alfinetando-a. Mas as próximas palavras da protagonista não foram nada do que ela esperava;<br><br>
                "Obrigado. Por tudo que você fez pela Arca. Foi o seu sacrifício que nos permitiu sobreviver em primeiro lugar. Então, do fundo do meu coração, obrigado."<br><br>
                Dorothy se pergunta de onde isso está vindo, o que a protagonista responde é uma expressão de gratidão pelo que ela fez durante Ark Guardian, por mais atrasado que seja. Ela zomba em resposta, zombando da audácia desse humano diante dela, se não tentando substituir toda a Arca, tendo a ousadia de tentar e afirmar que pode entender suas décadas de ódio. Vendo o protagonista permanecer em silêncio, Dorothy muda de faixa, imaginando se talvez ele esteja tentando bajulá-la para se tornar um residente do Éden, ou comprar sua misericórdia para que ela não o mate. O protagonista simplesmente responde que está dizendo o que deveria ter sido dito a ela décadas atrás.<br><br>
                As rejeições de Dorothy tornam-se mais frenéticas quando ela questiona por que ele está dizendo essas coisas, se ele realmente não acredita que o que diz mudará o que já aconteceu. O protagonista admite que isso não muda nada, mas ainda precisava ser dito. Pensamentos sobre Marian e Counters passam por sua mente enquanto ele explica que os esforços, e até mesmo os sacrifícios, de Nikkes são o que lhe permitiu sobreviver até agora. Mesmo que sejam apenas algumas palavras, ele quer retribuir sua devoção de alguma forma. Para retribuir a devoção de Dorothy .<br><br>
                Dorothy se apega firmemente ao seu ódio pelos humanos, alegando que a covardia é o cerne da humanidade. Fear of Raptures é o motivo pelo qual eles criaram Nikkes. O medo de Nikkes é o motivo pelo qual eles criaram o NIMPH. A humanidade é um "bando de covardes chorões" aos olhos dela, e ela está ansiosa demais para expressar isso. A protagonista aceita essa acusação, e está disposta a aceitar qualquer outra crítica que ela tenha. Afinal, é apenas porque os Nikkes foram além de seu dever que uma raça tão covarde ainda poderia sobreviver diante de um inimigo tão implacável quanto os Arrebatamentos.<br><br>
                Dorothy finalmente atinge seu limite, e ela quase tapa os ouvidos e faz "lalala" enquanto chama o protagonista de mentiroso e sai furiosa. Ele silenciosamente a observa ir...`

                frasetit5 = 'Asas Incessantes';
                frasecap5 = `Dorothy está no pátio, um lugar que foi construído de acordo com sua visão e especificações exatas. Um lugar de tranquilidade, tão pacífico que você quase esqueceria que havia robôs alienígenas assassinos vagando pelas ruínas além. Aqui neste pátio ensolarado, Dorothy tem quase tudo o que sempre quis, longe dos horrores da guerra. A palavra-chave sendo quase.<br><br>
                Mesmo o sol e o controle ambiental do Éden não podem evitar o frio da solidão que permeia seu ser. Ela cantarola para si mesma que não era assim que seus passeios eram alguns dias atrás, pensando naquele humano que sempre a incomodava. Um comandante muito parecido com o anterior, aquele tempo com ele parece uma viagem ao passado. Um trabalhador educado que não tem medo de trabalhar. Um forasteiro que vem da Arca. Um parasita que se apega a quem quer que possa explorar sussurrando leite e mel em seus ouvidos. Um humano fraco e covarde .<br><br>
                A saudação do protagonista chama a atenção de Dorothy. Ele queria se despedir antes de voltar para a Arca, dada a improbabilidade de ele voltar ao Éden e vê-la novamente. Ele dá um último apelo consultivo, pedindo a ela que deixe os outros entrarem em seu coração e realmente entre na luz do sol. Sua única resposta é um sarcasmo desdenhoso, e ele se despede dela.<br><br>
                Dorothy dá um passo à frente no pátio, sem vontade de se virar e ver a expressão no rosto do humano que se afasta. Ela pensa nas palavras dele sobre como ela ainda queria amar os humanos e ser amada por eles em troca. Suas palavras honrando os sacrifícios dela e de suas irmãs. Palavras de gratidão do fundo do coração...<br><br>
                Cerrando os dentes, Dorothy tenta negar suas palavras, racionalizando que ele estava tentando cair nas boas graças dela para que ela o deixasse ficar no Éden, ou emprestar-lhe seu poder. Isso é o que os humanos covardes fazem. Exceto que o homem admitiu que os humanos eram covardes, programados para isso mesmo...<br><br>
                As memórias de Dorothy a levam de volta, quando ela experimentou a vitória pela primeira vez como Nikke. Uma criança se aproximou dela com um punhado de flores, e os espectadores aplaudiram enquanto as mãos trêmulas da criança seguravam as dela... e diziam "Obrigado". Sim, houve um tempo em que os humanos eram objeto de seu fascínio, sua adoração e seu afeto. Mesmo as partes ruins apenas afirmavam seu desejo de protegê-los e abrigá-los. Mas porque ela costumava amá-los, é também por isso que ela nunca pode esquecer suas transgressões, nem pode perdoá-los.<br><br>
                Lembrando-se das palavras de um homem que lutou por uma flor que ela nem queria, Dorothy se vira e pensa naquele humano. Outro daqueles desperdícios de carne que ela uma vez arriscou tudo para proteger, como os mesmos humanos que se encontraram no Éden, seu paraíso para proteger...<br><br>
                Sem dizer nada, Dorothy observa a figura do protagonista partindo e então silenciosamente admite que ele venceu. Em algum lugar em um canto enterrado de seu coração, Dorothy ainda guarda uma lasca de amor pelos humanos. O protagonista se vira e chama o nome dela, mas Dorothy simplesmente pede que ele continue enquanto ela avança. Assim como uma pedra rolando cairá até encontrar o buraco que se tornará seu lar, ela nunca parará de seguir em frente até encontrar o lugar ao qual pertence.<br><br>
                O protagonista se despede de Dorothy mais uma vez, e ela o observa partir. Não importa o quanto ela deseje o amor, ou o quão tentadora a pessoa seja, ela nunca vai parar. Pois essa é a promessa que ela fez com Pinne . Antes que suas asas o levem de volta à Arca, eles primeiro voarão para o paraíso.`
                break

            case 'drake':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'emma':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'epinel':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'ether':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'eunhwa':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'exia':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'folkwang':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'frima':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'guillotine':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'guilty':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'harran':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'helm':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'himeno':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'idoll flower':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'idoll ocean':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'idoll sun':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'isabel':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'jackal':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'julia':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'laplace':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'liter':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
                
            case 'ludmilla':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'maiden':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'makima':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'mary':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'maxwell':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'mica':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'mihara':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'milk':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'miracle fairy anne':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'miranda':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'modernia':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'n102':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'neon':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'neve':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'nihilister':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'noah':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'noir':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'noise':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'novel':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
                
            case 'pepper':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'poli':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
                
            case 'power':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'privaty':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'product 08':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'product 12':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'product 23':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'quency':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'rapi':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'rapunzel':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'rei':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'rosanna':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'rupee':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'sakura':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'scarlet':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'signal':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'sin':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'snow white':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'soda':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'soldier eg':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'soldier fa':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``

                break
            case 'soldier ow':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'soline':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'sugar':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'viper':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
                
            case 'volume':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'winter shopper rupee':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'yan':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'yulha':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break

            case 'yuni':
                frasetit1 = '';
                frasecap1 = ``
                frase.innerHTML = frasecap1;
                titulo.innerHTML = frasetit1;

                frasetit2 = '';
                frasecap2 = ``

                frasetit3 = '';
                frasecap3 = ``

                frasetit4 = '';
                frasecap4 = ``

                frasetit5 = '';
                frasecap5 = ``
                break
        }

        //CASO O CAPITULO NÃO EXISTA, NÃO APARECER ------------------------------------------------------------------
        frase.scrollTop = 0;

        if (frasetit2 == '') {
            capitulos[1].style.display = 'none';
        } else {
            capitulos[1].style.display = 'block';
        }

        if (frasetit3 == '') {
            capitulos[2].style.display = 'none';
        } else {
            capitulos[2].style.display = 'block';
        }
        
        if (frasetit4 == '') {
            capitulos[3].style.display = 'none';
        } else {
            capitulos[3].style.display = 'block';
        }
        
        if (frasetit5 == '') {
            capitulos[4].style.display = 'none';
        } else {
            capitulos[4].style.display = 'block';
        }
    })
});
