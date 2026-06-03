// ============================================
// DREAMCRAFT - CATÁLOGO CORRIGIDO
// ============================================

const bancoDadosTemas = [
    { nome: "101 Dálmatas", pasta: "101dalmatas", categorias: "all animais desenhos" },
    { nome: "15 anos", pasta: "15anos", categorias: "all diversos" },
    { nome: "3 Palavrinhas Menina", pasta: "3palavrinhasmenina", categorias: "all religiosos" },
    { nome: "3 Palavrinhas Menino", pasta: "3palavrinhasmenino", categorias: "all religiosos" },
    { nome: "Abelhinha", pasta: "abelhinha", categorias: "all animais desenhos" },
    { nome: "Alice no pais das maravilhas cute", pasta: "alicenopaisdasmaravilhascute", categorias: "all princesas contodefadas filme disney" },
    { nome: "Amo Meu Tete Menino", pasta: "amomeutetemenino", categorias: "all baby cute" },
    { nome: "Ana Castela", pasta: "anacastela", categorias: "all boiadeira musica" },
    { nome: "Angel", pasta: "angel", categorias: "all desenhos filme stitch angel" },
    { nome: "Animatronics", pasta: "animatronics", categorias: "all jogos" },
    { nome: "Ano novo", pasta: "anonovo", categorias: "all anonovo fimdeano datacomemorativa" },
    { nome: "Arco Vazado Desconstruído", pasta: "arcovazado_desconstruido", categorias: "all arcovazado" },
    { nome: "Arco Vazado Simples", pasta: "arcovazado_simples", categorias: "all arcovazado" },
    { nome: "Ariel", pasta: "ariel", categorias: "all princesas disney" },
    { nome: "Arraia marron", pasta: "arraiamarrom", categorias: "all arraia datacomemorativa" },
    { nome: "Arraia rosa", pasta: "arraiarosa", categorias: "all arraia datacomemorativa" },
    { nome: "Asa neon", pasta: "asaneon", categorias: "all diversos" },
    { nome: "Astronauta", pasta: "astronauta", categorias: "all espaco desenhos" },
    { nome: "BTS", pasta: "bts", categorias: "all k-pop musica" },
    { nome: "Baby Shark Azul", pasta: "babysharkazul", categorias: "all fundodomar desenhos musica" },
    { nome: "Baby Shark Rosa", pasta: "babysharkrosa", categorias: "all fundodomar desenhos musica" },
    { nome: "Bailarina", pasta: "bailarina", categorias: "all meninas bale" },
    { nome: "Barbie", pasta: "barbie", categorias: "all meninos desenhos filme boneca" },
    { nome: "Batizado Anjinho", pasta: "batizadoanjinho", categorias: "all religiosos batizado" },
    { nome: "Batizado Beje", pasta: "batizadobeje", categorias: "all religiosos batizado" },
    { nome: "Batizado Divino Espirito Santo Arabesco", pasta: "batizadodivinoespiritosantoarabesco", categorias: "all religiosos batizado" },
    { nome: "Batizado Divino Espirito Santo", pasta: "batizadodivinoespiritosanto", categorias: "all religiosos batizado" },
    { nome: "Batizado Lilas", pasta: "batizadolilas", categorias: "all religiosos batizado" },
    { nome: "Batizado Rosa", pasta: "batizadorosa", categorias: "all religiosos batizado" },
    { nome: "Batizado Verde", pasta: "batizadoverde", categorias: "all religiosos batizado" },
    { nome: "Batizado azul", pasta: "batizadoazul", categorias: "all religiosos batizado" },
    { nome: "Batizado", pasta: "batizado", categorias: "all religiosos batizado" },
    { nome: "Batman", pasta: "batman", categorias: "all herois filme desenhos" },
    { nome: "Bee movie", pasta: "beemovie", categorias: "all filme animais" },
    { nome: "Bela adormecida", pasta: "belaadormecida", categorias: "all princesas contodefadas filme disney" },
    { nome: "Bela e a Fera", pasta: "belaeafera", categorias: "all princesas contodefadas filme disney" },
    { nome: "Bento e Toto", pasta: "bentoetoto", categorias: "all desenhos meninos" },
    { nome: "Bento e Totó", pasta: "bentoetoto", categorias: "all princesas contodefadas filme disney" },
    { nome: "BeyBlade", pasta: "beyblade", categorias: "all desenhos" },
    { nome: "Blazze", pasta: "blazze", categorias: "all corrida desenhos" },
    { nome: "Bluey e bingo aniversario", pasta: "blueyebingoaniversario", categorias: "all desenhos animais" },
    { nome: "Bluey e bingo", pasta: "blueyebingo", categorias: "all desenhos animais" },
    { nome: "Bob Esponja", pasta: "bobesponja", categorias: "all desenhos fundodomar" },
    { nome: "Bobbie Goods", pasta: "bobbiegoods", categorias: "all diversos" },
    { nome: "Boiadeira", pasta: "boiadeira", categorias: "all boiadeira" },
    { nome: "Bolofofos", pasta: "bolofofos", categorias: "all desenhos musicas" },
    { nome: "Bombeiro", pasta: "bombeiro", categorias: "all bombeiro" },
    { nome: "Borboleta Roxa", pasta: "borboletaroxa", categorias: "all borboletas animais" },
    { nome: "Borboletas Azuis", pasta: "borboletasazuis", categorias: "all borboletas animais" },
    { nome: "Bosque Encantado", pasta: "bosqueencantado", categorias: "all diversos cute animais" },
    { nome: "Boteco cerveja", pasta: "botecocerveja", categorias: "all boteco diversos" },
    { nome: "Boteco", pasta: "boteco", categorias: "all boteco diversos" },
    { nome: "Branca de neve cute", pasta: "brancadenevecute", categorias: "all princesas contodefadas filme disney cute" },
    { nome: "CR7", pasta: "cr7", categorias: "all futebol jogador" },
    { nome: "Caminhao", pasta: "caminhao", categorias: "all diversos desenhos veiculos" },
    { nome: "Capitao America", pasta: "capitaoamerica", categorias: "all herois filme desenhos" },
    { nome: "Capivara", pasta: "capivara", categorias: "all animais diversos" },
    { nome: "Carnaval", pasta: "carnaval", categorias: "all datacomemorativa carnaval" },
    { nome: "Casa magica da gabby", pasta: "casamagicadagabby", categorias: "all desenhos magia" },
    { nome: "Castelo Ra-tim-bum", pasta: "casteloratimbum", categorias: "all desenhos diversos" },
    { nome: "Cavalo", pasta: "cavalo", categorias: "all animais" },
    { nome: "Cerejinha", pasta: "cerejinha", categorias: "all frutas" },
    { nome: "Cha Revelacao menino menina", pasta: "charevelacaomeninomenina", categorias: "all charevelacao" },
    { nome: "Cha Revelacao urso azul e rosa", pasta: "charevelacaoursoazulerosa", categorias: "all charevelacao" },
    { nome: "Cha Revelacao urso roxo e verde", pasta: "charevelacaoursoroxoeverde", categorias: "all charevelacao" },
    { nome: "Cha Revelacao", pasta: "charevelacao", categorias: "all charevelacao" },
    { nome: "Cha de Casa Nova", pasta: "chadecasanova", categorias: "all chadecasanova" },
    { nome: "Cha de Lingerie", pasta: "chadelingerie", categorias: "all chalingerie" },
    { nome: "Cha de Panela", pasta: "chadepanela", categorias: "all chapanela" },
    { nome: "Cha de bebe arraia rosa", pasta: "chadebebearraiarosa", categorias: "all chadebebe personalizada" },
    { nome: "Cha de bebe azul", pasta: "chadebebeazul", categorias: "all chadebebe" },
    { nome: "Cha de bebe lilas", pasta: "chadebebelilas", categorias: "all chadebebe" },
    { nome: "Cha de bebe rosa", pasta: "chadebeberosa", categorias: "all chadebebe" },
    { nome: "Cha de bebe verde", pasta: "chadebebeverde", categorias: "all chadebebe" },
    { nome: "Chaves baby", pasta: "chavesbaby", categorias: "all desenhos" },
    { nome: "Churrasco", pasta: "churrasco", categorias: "all churrasco" },
    { nome: "Cinderela", pasta: "cinderela", categorias: "all princesas filme contodefadas disney" },
    { nome: "Circo Rosa", pasta: "circorosa", categorias: "all circo" },
    { nome: "Corinthians", pasta: "corinthians", categorias: "all times futebol" },
    { nome: "De repente 30", pasta: "derepente30", categorias: "all diversos" },
    { nome: "Demon Slayer", pasta: "demonslayer", categorias: "all anime" },
    { nome: "Desenho Boiadeirinha", pasta: "desenhoboiadeirinha", categorias: "all desenhos boiadeira" },
    { nome: "Dia das Maes", pasta: "diadasmaes", categorias: "all datacomemorativa" },
    { nome: "Dia dos Pais", pasta: "diadospais", categorias: "all datacomemorativa" },
    { nome: "Dinossauro", pasta: "dinossauro", categorias: "all dinossauro animais" },
    { nome: "Dinossauros Baby Rosa", pasta: "dinossaurosbabyrosa", categorias: "all dinossauro animais meninas" },
    { nome: "Dinossauros Baby", pasta: "dinossaurosbaby", categorias: "all dinossauro animais" },
    { nome: "Divertidamente", pasta: "divertidamente", categorias: "all filme contodefadas" },
    { nome: "Doceria", pasta: "doceria", categorias: "all doces diversos" },
    { nome: "Dragon Ball", pasta: "dragonball", categorias: "all desenhos" },
    { nome: "Epresarial", pasta: "empresarial", categorias: "all empresas" },
    { nome: "Enaldinho", pasta: "enaldinho", categorias: "all youtuber" },
    { nome: "Enrolados", pasta: "enrolados", categorias: "all princesas contodefadas filme" },
    { nome: "Eu amo tete menina", pasta: "euamotetemenina", categorias: "all cute diversos" },
    { nome: "Eu amo tete menino", pasta: "euamotetemenino", categorias: "all cute diversos" },
    { nome: "Fazendinha azul", pasta: "fazendinhaazul", categorias: "all fazendinha" },
    { nome: "Fazendinha rosa", pasta: "fazendinharosa", categorias: "all fazendinha" },
    { nome: "Fazendinha vermelha", pasta: "fazendinhavermelha", categorias: "all fazendinha" },
    { nome: "Festa Junina", pasta: "festajunina", categorias: "all arraia" },
    { nome: "Fini fundo branco", pasta: "finifundobranco", categorias: "all doces diversos" },
    { nome: "Fini fundo vermelho", pasta: "finifundovermelho", categorias: "all doces diversos" },
    { nome: "Flamengo", pasta: "flamengo", categorias: "all times futebol" },
    { nome: "Flamingo", pasta: "flamingo", categorias: "all animais" },
    { nome: "Flor Lilas e borboleta", pasta: "florlilaseborboleta", categorias: "all flores borboletas" },
    { nome: "Flork eu te amo", pasta: "florkeuteamo", categorias: "all diversos" },
    { nome: "Free Fire", pasta: "freefire", categorias: "all jogos" },
    { nome: "Frozen", pasta: "frozen", categorias: "all princesas filme contodefadas disney" },
    { nome: "Frutas", pasta: "frutas", categorias: "all frutas" },
    { nome: "Fundo do mar", pasta: "fundodomar", categorias: "all fundodomar" },
    { nome: "Futebol menina", pasta: "futebolmenina", categorias: "all times futebol feminino" },
    { nome: "Futebol", pasta: "futebol", categorias: "all times futebol" },
    { nome: "Galinha Pintadinha", pasta: "galinhapintadinha", categorias: "all desenhos musica" },
    { nome: "Gamer", pasta: "gamer", categorias: "all game diversos" },
    { nome: "Gi Turma Luccas Neto", pasta: "giturmaluccasneto", categorias: "all youtuber desenhos" },
    { nome: "Godzilla vs King Kong", pasta: "godzillavskingkong", categorias: "all filme contodefadas" },
    { nome: "Gratidao", pasta: "gratidao", categorias: "all diversos" },
    { nome: "Grinch", pasta: "grinch", categorias: "all filme desenho menino" },
    { nome: "Grinch", pasta: "grinch", categorias: "all filme" },
    { nome: "Guerreiras do K-pop", pasta: "guerreirasdokpop", categorias: "all k-pop musica filme" },
    { nome: "Halloween abobora", pasta: "halloweenabobora", categorias: "all datacomemorativa halloween" },
    { nome: "Halloween castelo laranja", pasta: "halloweencastelolaranja", categorias: "all datacomemorativa halloween" },
    { nome: "Halloween castelo roxo", pasta: "halloweencasteloroxo", categorias: "all datacomemorativa halloween" },
    { nome: "Happy Birthday Azul e Dourado", pasta: "happybirthdayazuledourado", categorias: "all happybirthday" },
    { nome: "Happy Birthday Glitter Pink", pasta: "happybirthdayglitterpink", categorias: "all happybirthday glitter" },
    { nome: "Happy Birthday Laranja e pink", pasta: "happybirthdaylaranjaepink", categorias: "all happybirthday" },
    { nome: "Happy Birthday Marssala", pasta: "happybirthdaymarssala", categorias: "all happybirthday" },
    { nome: "Happy Birthday azul arabesco dourado", pasta: "happybirthdayazularabescodourado", categorias: "all happybirthday glitter" },
    { nome: "Happy Birthday azul e Prata", pasta: "happybirthdayazuleprata", categorias: "all happybirthday" },
    { nome: "Happy Birthday glitter Rose", pasta: "happybirthdayglitterrose", categorias: "all happybirthday glitter" },
    { nome: "Happy Birthday lantejoula lilas", pasta: "happybirthdaylantejoulalilas", categorias: "all happybirthday" },
    { nome: "Happy Birthday lantejoula rosa", pasta: "happybirthdaylantejoularosa", categorias: "all happybirthday" },
    { nome: "Happy Birthday preto e Dourado", pasta: "happybirthdaypretoedourado", categorias: "all happybirthday" },
    { nome: "Happy Birthday rosa", pasta: "happybirthdayrosa", categorias: "all happybirthday" },
    { nome: "Happy Birthday vermelho e dourado", pasta: "happybirthdayvermelhoedourado", categorias: "all happybirthday" },
    { nome: "Harry Potter", pasta: "harrypotter", categorias: "all filme contodefadas magia" },
    { nome: "Hello Kitty", pasta: "hellokitty", categorias: "all desenhos" },
    { nome: "Homem Aranha Cute", pasta: "homemaranhacute", categorias: "all herois filme cute" },
    { nome: "Homem Aranha", pasta: "homemaranha", categorias: "all herois filme" },
    { nome: "Homem de Ferro", pasta: "homemdeferro", categorias: "all herois filme" },
    { nome: "Homem de ferro", pasta: "homemdeferro", categorias: "all herois meninos" },
    { nome: "HotWheels", pasta: "hotwheels", categorias: "all corrida desenhos veiculos" },
    { nome: "Hulk", pasta: "hulk", categorias: "all herois meninos" },
    { nome: "Ilhama", pasta: "ilhama", categorias: "all animais" },
    { nome: "Illit", pasta: "illit", categorias: "all k-pop musica" },
    { nome: "Jardim de Borboletas", pasta: "jardimdeborboletas", categorias: "all jardim borboletas" },
    { nome: "Kuromi e Melody", pasta: "kuromiemelody", categorias: "all desenhos" },
    { nome: "Labubu menina", pasta: "labubumenina", categorias: "all desenhos" },
    { nome: "Labubu menino", pasta: "labubumenino", categorias: "all desenhos" },
    { nome: "Lady Budy", pasta: "ladybudy", categorias: "all desenhos filme" },
    { nome: "Lantejoula", pasta: "lantejoula", categorias: "all lantejoula natal" },
    { nome: "Lanterna Verde", pasta: "lanternaverde", categorias: "all herois filme" },
    { nome: "Lavanda", pasta: "lavanda", categorias: "all flores" },
    { nome: "Laços", pasta: "lacos", categorias: "all lacos" },
    { nome: "Liga da Justica baby", pasta: "ligadajusticababy", categorias: "all herois cute" },
    /*{ nome: "Liso Azul e Prata", pasta: "lisoazuleprata", categorias: "all cores" },
    { nome: "Liso amarelo", pasta: "lisoamarelo", categorias: "all cores" },
    { nome: "Liso azul claro", pasta: "lisoazulclaro", categorias: "all cores" },*/
    { nome: "Liso azul royal", pasta: "lisoazulroyal", categorias: "all cores" },
    { nome: "Liso branco", pasta: "lisobranco", categorias: "all liso cores" },
    /*{ nome: "Liso laranja", pasta: "lisolaranja", categorias: "all cores" },
    { nome: "Liso lilas", pasta: "lisolilas", categorias: "all cores" },
    { nome: "Liso pink", pasta: "lisopink", categorias: "all cores" },*/
    { nome: "Liso pirulito azul bebe", pasta: "lisopirulitoazulbebe", categorias: "all cores" },
    /*{ nome: "Liso pirulito azul royal", pasta: "lisopirulitoazulroyal", categorias: "all cores" },
    { nome: "Liso pirulito branco", pasta: "lisopirulitobranco", categorias: "all cores" },
    { nome: "Liso pirulito lilas com borboletas", pasta: "lisopirulitolilascomborboletas", categorias: "all cores personalizadas" },
    { nome: "Liso pirulito lilas", pasta: "lisopirulitolilas", categorias: "all cores" },
    { nome: "Liso pirulito rosa", pasta: "lisopirulitorosa", categorias: "all cores" },
    { nome: "Liso pirulito rose", pasta: "lisopirulitorose", categorias: "all cores" },
    { nome: "Liso pirulito verde exercito", pasta: "lisopirulitoverdeexercito", categorias: "all cores" },
    { nome: "Liso preto", pasta: "lisopreto", categorias: "all cores" },*/
    { nome: "Liso rosa", pasta: "lisorosa", categorias: "all cores" },
    { nome: "Magali", pasta: "magali", categorias: "all desenhos" },
    { nome: "Margarida", pasta: "margarida", categorias: "all flores" },
    { nome: "Maria Clara e JP", pasta: "mariaclaraejp", categorias: "all youtuber desenhos" },
    { nome: "Masha e o Urso", pasta: "mashaeourso", categorias: "all desenhos" },
    { nome: "Meu mundo doce com Jesus", pasta: "meumundodocecomjesus", categorias: "all religiosos" },
    { nome: "Mickey", pasta: "mickey", categorias: "all desenhos disney" },
    { nome: "MineCraft", pasta: "minecraft", categorias: "all jogos" },
    { nome: "Minha primeira volta ao sol", pasta: "minhaprimeiravoltaaosol", categorias: "all diversos" },
    { nome: "Minions 2", pasta: "minions2", categorias: "all filme desenhos" },
    { nome: "Minions", pasta: "minions", categorias: "all filme desenhos" },
    { nome: "Minnie rosa", pasta: "minnierosa", categorias: "all desenhos disney" },
    { nome: "Minnie vermelha", pasta: "minnievermelha", categorias: "all desenhos disney" },
    { nome: "Moana 2", pasta: "moana2", categorias: "all princesas filme contodefadas disney" },
    { nome: "Moana baby", pasta: "moanababy", categorias: "all princesas filme contodefadas cute disney" },
    { nome: "Moana", pasta: "moana", categorias: "all princesas filme contodefadas disney" },
    { nome: "Monstros SA", pasta: "monstrossa", categorias: "all desenhos filme disney" },
    { nome: "Mulher Maravilha Cute", pasta: "mulhermaravilhacute", categorias: "all herois filme cute" },
    { nome: "Mundo Bita", pasta: "mundobita", categorias: "all desenhos musica" },
    { nome: "Naruto", pasta: "naruto", categorias: "all anime" },
    { nome: "Natal", pasta: "natal", categorias: "all natal datacomemorativa" },
    { nome: "Noivado", pasta: "noivado", categorias: "all noivado" },
    { nome: "Nossa Senhora", pasta: "nossasenhora", categorias: "all religioso" },
    { nome: "NumberBlocks", pasta: "numberblocks", categorias: "all desenhos" },
    { nome: "One Piece", pasta: "onepiece", categorias: "all anime desenho" },
    { nome: "Os Rosa", pasta: "osrosa", categorias: "all youtuber" },
    { nome: "Palmeiras", pasta: "palmeiras", categorias: "all times futebol" },
    { nome: "Pantera Negra", pasta: "panteranegra", categorias: "all herois filme" },
    { nome: "Patati e Patata", pasta: "patatiepatata", categorias: "all desenhos musicas" },
    { nome: "Patinho Colorido", pasta: "patinhocolorido", categorias: "all desenhos musica" },
    { nome: "Patrulha Canina", pasta: "patrulhacanina", categorias: "all animais desenhos" },
    { nome: "Pepa pig", pasta: "pepapig", categorias: "all desenhos animais" },
    { nome: "Pequeno Principe", pasta: "pequenoprincipe", categorias: "all desenhos" },
    { nome: "Personalizado", pasta: "personalizado", categorias: "all personalizados" },
    { nome: "PjMask", pasta: "pjmask", categorias: "all desenhos" },
    { nome: "Pocoyo", pasta: "pocoyo", categorias: "all desenhos" },
    { nome: "Poderosa Chefinha", pasta: "poderosachefinha", categorias: "all filme desenhos" },
    { nome: "Poderoso Chefinho", pasta: "poderosochefinho", categorias: "all filme desenhos" },
    { nome: "Pokemon", pasta: "pokemon", categorias: "all desenhos animais" },
    { nome: "Pool Party Azul", pasta: "poolpartyazul", categorias: "all piscina" },
    { nome: "Pool Party Rosa", pasta: "poolpartyrosa", categorias: "all piscina" },
    { nome: "Power Rangers", pasta: "powerrangers", categorias: "all desenhos filme" },
    { nome: "Princesa Sofia", pasta: "princesasofia", categorias: "all disney filme desenhos" },
    { nome: "Princesa Tiana", pasta: "princesatiana", categorias: "all disney filme desenhos" },
    { nome: "Princesa Tiana", pasta: "princesatiana", categorias: "all princesas filme desenhos disney" },
    { nome: "Princesas Disney", pasta: "princesasdisney", categorias: "all disney filme desenhos" },
    { nome: "Real Madri", pasta: "realmadri", categorias: "all time futebol" },
    { nome: "Rei Leao", pasta: "reileao", categorias: "all animais desenhos filme" },
    { nome: "Relampago Mcqueen", pasta: "relampagomcqueen", categorias: "all filme corrida veiculos" },
    { nome: "Roblocks Menina", pasta: "roblocksmenina", categorias: "all jogos" },
    { nome: "Roblocks Minino", pasta: "roblocksmenino", categorias: "all jogos" },
    /*{ nome: "Romano Branco", pasta: "romanobranco", categorias: "all romano pirulito liso" },*/
    { nome: "Romano Liso", pasta: "romanoliso", categorias: "all romano pirulito liso" },
    /*{ nome: "Romano Marrom", pasta: "romanomarrom", categorias: "all romano pirulito liso" },*/
    { nome: "Romano Meia Lua", pasta: "romanomeialua", categorias: "all romano pirulito liso" },
    { nome: "Romano Pirulito Laranja", pasta: "romanopirulitolaranja", categorias: "all romano pirulito liso" },
    { nome: "Romano Pirulito Pink", pasta: "romanopirulitopink", categorias: "all romano pirulito liso" },
    { nome: "Romano Retangular", pasta: "romanoretangular", categorias: "all romano pirulito liso" },
    /*{ nome: "Romano Rose", pasta: "romanorose", categorias: "all romano pirulito liso" },*/
    { nome: "Safari Menina", pasta: "safarimenina", categorias: "all safari" },
    { nome: "Safari Menino", pasta: "safarimenino", categorias: "all safari" },
    { nome: "Sao Paulo", pasta: "saopaulo", categorias: "all times futebol" },
    { nome: "Sereia Splash", pasta: "sereiasplash", categorias: "all filme menina" },
    { nome: "Sky e Everest", pasta: "skyeeverest", categorias: "all animais desenhos" },
    { nome: "Sonic e Knuckles", pasta: "soniceknuckles", categorias: "all jogos desenhos filme" },
    { nome: "Sonic e Shadow", pasta: "soniceshadow", categorias: "all jogos desenhos filme" },
    { nome: "Sonic", pasta: "sonic", categorias: "all jogos desenhos filme" },
    { nome: "Stitch Milk Shake", pasta: "stitchmilkshake", categorias: "all desenhos filme stitch" },
    { nome: "Stitch arco iris", pasta: "stitcharcoiris", categorias: "all desenhos filme stitch" },
    { nome: "Stitch bolha chiclete", pasta: "stitchbolhachiclete", categorias: "all desenhos filme stitch" },
    { nome: "Stitch e Angel fundo coracao", pasta: "stitcheangelfundocoracao", categorias: "all desenhos filme stitch" },
    { nome: "Stitch e Angel", pasta: "stitcheangel", categorias: "all desenhos filme stitch" },
    { nome: "Stitch flor", pasta: "stitchflor", categorias: "all desenhos filme stitch" },
    { nome: "Stitch", pasta: "stitch", categorias: "all desenhos filme stitch" },
    { nome: "Stray Kids", pasta: "straykids", categorias: "all k-pop musica" },
    { nome: "Tardezinha", pasta: "tardezinha", categorias: "all diversos" },
    { nome: "The Chosen", pasta: "thechosen", categorias: "all religiosos series" },
    { nome: "The Chosen", pasta: "thechosen", categorias: "all serie religioso" },
    { nome: "Tres palavrinhas Menina", pasta: "trespalavrinhasmenina", categorias: "all religiosos meninas" },
    { nome: "Tres palavrinhas Menino", pasta: "trespalavrinhasmenino", categorias: "all religiosos meninos" },
    { nome: "Trolls", pasta: "trolls", categorias: "all desenhos filme" },
    { nome: "Turma Tube", pasta: "turmatube", categorias: "all desenhos youtube" },
    { nome: "Turma da Monica", pasta: "turmadamonica", categorias: "all desenhos" },
    { nome: "Ursinho Marron", pasta: "ursinhomarron", categorias: "all ursinho infantil" },
    { nome: "Ursinho Pooh Baby", pasta: "ursinhopoohbaby", categorias: "all desenhos filme cute" },
    { nome: "Ursinho Pooh", pasta: "ursinhopooh", categorias: "all desenhos filme" },
    { nome: "Ursinhos carinhosos", pasta: "ursinhoscarinhosos", categorias: "all desenhos" },
    { nome: "Urso Marrom", pasta: "ursomarrom", categorias: "all desenhos urso" },
    { nome: "Valente", pasta: "valente", categorias: "all princesas filme disney" },
    { nome: "Vera Arco-Iris", pasta: "veraarcoiris", categorias: "all desenhos" },
    { nome: "Wandinha", pasta: "wandinha", categorias: "all filme" },
    { nome: "lacinho rosa preto e branco", pasta: "lacinhosapretaebranco", categorias: "all festapersonalizada laco" },
    { nome: "lacinho rosa preto e prata", pasta: "lacinhosapretaeprata", categorias: "all festapersonalizada laco" },
    { nome: "lilas Glitter", pasta: "lilasglitter", categorias: "all glitter" },
    { nome: "raposinha", pasta: "raposinha", categorias: "all animais" },
	{ nome: "1ª Volta ao Sol", pasta: "1voltaaosol", categorias: "all animais desenhos" },
];

// Variavel global para controlar o modal
let modalAtual = null;
let imagensModal = [];
let indiceModal = 0;

function gerarCatalogo() {
    const container = document.getElementById('catalogo-festas');
    if (!container) return;

    container.innerHTML = "";

    bancoDadosTemas.forEach(function(tema) {
        const nome = tema.nome;
        const categorias = tema.categorias;
        const nomePasta = tema.pasta;

        // --- DEFINE A DESCRIÇÃO COM BASE NO TIPO ---
        let descricaoHTML = "";
        
        if (nomePasta === "arcovazado_simples") {
            descricaoHTML = 
                '<li><strong>Arco Vazado Simples (Clássico)</strong></li>' +
                '<li>Painel</li>' +
                '<li>Arco de balões uniformes</li>' +
                '<li>Boleira</li>' +
                '<li>Bandeja sextavada</li>' +
                '<li>Bandeja lapidada</li>' +
                '<li>Bandeja Oval</li>' +
                '<li>Vaso grego</li>' +
                '<li>Tudo como na imagem ou nas cores que desejar</li>';
        } else if (nomePasta === "arcovazado_desconstruido") {
            descricaoHTML = 
                '<li><strong>Arco Vazado Desconstruído (Orgânico)</strong></li>' +
                '<li>Painel</li>' +
                '<li>Arco de balões desconstruídos</li>' +
                '<li>Boleira</li>' +
                '<li>Bandeja sextavada</li>' +
                '<li>Bandeja lapidada</li>' +
                '<li>Bandeja Oval</li>' +
                '<li>Vaso grego</li>' +
                '<li>Tudo como na imagem ou nas cores que desejas</li>';
        } else {
            // Descrição padrão para todos os outros temas do catálogo
            descricaoHTML = 
                '<li>Painel</li>' +
                '<li>Arco de balões</li>' +
                '<li>Boleira</li>' +
                '<li>Bandeja sextavada</li>' +
                '<li>Bandeja lapidada</li>' +
                '<li>Bandeja Oval</li>' +
                '<li>Vaso grego</li>' +
                '<li>Tudo como na imagem ou nas cores que desejas</li>';
        }

        // --- GERA AS IMAGENS ---
        let htmlImagens = '';
        for (let i = 1; i <= 25; i++) {
            const caminho = './Imagem/' + nomePasta + '/' + i + '.webp';
            htmlImagens += '<img src="' + caminho + '" ' +
                'class="' + (i === 1 ? 'imagem-ativa' : '') + '" ' +
                'onerror="this.style.display=\'none\'" ' +
                'onclick="abrirModal(\'' + nomePasta + '\', ' + i + ')">';
        }

        const card = document.createElement('div');
        card.className = 'festa';
        card.setAttribute('data-categoria', categorias);

        card.innerHTML = 
            '<div class="carrossel">' +
                '<div class="imagens-carrossel" data-pasta="' + nomePasta + '">' + htmlImagens + '</div>' +
                '<div class="contador-imagens"></div>' +
                '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
            '</div>' +
            '<div class="conteudo">' +
                '<div class="titulo">' + nome + '</div>' +
                '<ul class="descricao">' +
                    descricaoHTML +
                '</ul>' +
                '<a class="whatsapp-btn" href="https://wa.me/5519993723106?text=Olá, quero orçamento para ' + encodeURIComponent(nome) + '" target="_blank">' +
                    '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
                '</a>' +
            '</div>';

        container.appendChild(card);

        setTimeout(function() {
            setupCarrossel(card);
        }, 100);
    });
}

function setupCarrossel(card) {
    const container = card.querySelector('.imagens-carrossel');
    const todasImagens = container.querySelectorAll('img');
    const contador = card.querySelector('.contador-imagens');

    setTimeout(function() {
        const imagensValidas = Array.from(todasImagens).filter(function(img) {
            return img.style.display !== 'none' && img.complete && img.naturalWidth > 0;
        });

        const totalImagens = imagensValidas.length;

        if (contador && totalImagens > 0) {
            contador.textContent = totalImagens + ' foto' + (totalImagens > 1 ? 's' : '');
        }

        if (totalImagens <= 1) {
            if (totalImagens === 1) {
                imagensValidas[0].classList.add('imagem-ativa');
            }
            return;
        }

        let atual = 0;

        imagensValidas.forEach(function(img, index) {
            if (index === 0) {
                img.classList.add('imagem-ativa');
            } else {
                img.classList.remove('imagem-ativa');
            }
        });

        const intervalo = setInterval(function() {
            if (!document.body.contains(card)) {
                clearInterval(intervalo);
                return;
            }
            imagensValidas[atual].classList.remove('imagem-ativa');
            atual = (atual + 1) % totalImagens;
            imagensValidas[atual].classList.add('imagem-ativa');
        }, 3000);

    }, 500);
}

// ============================================
// MODAL / LIGHTBOX
// ============================================

function abrirModal(pasta, indiceInicial) {
    imagensModal = [];
    for (let i = 1; i <= 20; i++) {
        const caminho = './Imagem/' + pasta + '/' + i + '.webp';
        imagensModal.push(caminho);
    }

    indiceModal = indiceInicial - 1;

    const modalAntigo = document.querySelector('.modal-imagem');
    if (modalAntigo) modalAntigo.remove();

    modalAtual = document.createElement('div');
    modalAtual.className = 'modal-imagem';
    modalAtual.innerHTML = 
        '<div class="modal-overlay" onclick="fecharModal()"></div>' +
        '<div class="modal-conteudo">' +
            '<button class="modal-fechar" onclick="fecharModal()">&times;</button>' +
            '<button class="modal-nav modal-anterior" onclick="imagemAnterior()">&#10094;</button>' +
            '<img src="' + imagensModal[indiceModal] + '" class="modal-img" onerror="this.src=\'Logo/logo-festas.png\'">' +
            '<button class="modal-nav modal-proximo" onclick="imagemProxima()">&#10095;</button>' +
            '<div class="modal-contador">' + (indiceModal + 1) + ' / ' + imagensModal.length + '</div>' +
        '</div>';

    document.body.appendChild(modalAtual);
    document.body.style.overflow = 'hidden'; 

    validarImagensModal();
}

function validarImagensModal() {
    const imgModal = modalAtual.querySelector('.modal-img');
    imgModal.onerror = function() {
        if (imagensModal.length > 1) {
             imagensModal.splice(indiceModal, 1);
             if (indiceModal >= imagensModal.length) indiceModal = 0;
             atualizarModal();
        } else {
             fecharModal();
        }
    };
    atualizarBotoesModal();
}

function fecharModal() {
    if (modalAtual) {
        modalAtual.remove();
        modalAtual = null;
        document.body.style.overflow = '';
    }
}

function imagemProxima() {
    if (indiceModal < imagensModal.length - 1) {
        indiceModal++;
        atualizarModal();
    }
}

function imagemAnterior() {
    if (indiceModal > 0) {
        indiceModal--;
        atualizarModal();
    }
}

function atualizarModal() {
    if (!modalAtual) return;
    const img = modalAtual.querySelector('.modal-img');
    const contador = modalAtual.querySelector('.modal-contador');

    img.src = imagensModal[indiceModal];
    contador.textContent = (indiceModal + 1) + ' / ' + imagensModal.length;
    atualizarBotoesModal();
}

function atualizarBotoesModal() {
    if (!modalAtual) return;
    const btnAnterior = modalAtual.querySelector('.modal-anterior');
    const btnProximo = modalAtual.querySelector('.modal-proximo');
    btnAnterior.style.display = indiceModal === 0 ? 'none' : 'block';
    btnProximo.style.display = indiceModal === imagensModal.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function(e) {
    if (!modalAtual) return;
    if (e.key === 'Escape') fecharModal();
    if (e.key === 'ArrowLeft') imagemAnterior();
    if (e.key === 'ArrowRight') imagemProxima();
});

// ============================================
// FILTROS E BUSCA
// ============================================

function filtrarCategoria(categoria) {
    if (!categoria) {
        categoria = document.getElementById("filtro").value;
    }
    const festas = document.querySelectorAll(".festa");

    document.querySelectorAll('.filtro-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').indexOf("'" + categoria + "'") !== -1) {
            btn.classList.add('active');
        }
    });

    const select = document.getElementById("filtro");
    if (select) select.value = categoria;

    festas.forEach(function(festa) {
        const cats = (festa.getAttribute("data-categoria") || "").toLowerCase();
        if (categoria === "all" || cats.indexOf(categoria.toLowerCase()) !== -1) {
            festa.style.display = "flex";
        } else {
            festa.style.display = "none";
        }
    });
}

function buscarTema() {
    const termo = document.getElementById('busca-tema').value.toLowerCase();
    const festas = document.querySelectorAll('.festa');

    festas.forEach(function(festa) {
        const titulo = festa.querySelector('.titulo').textContent.toLowerCase();
        festa.style.display = titulo.indexOf(termo) !== -1 ? 'flex' : 'none';
    });
}

function alternarVisualizacao() {
    const catalogo = document.getElementById('catalogo-festas');
    if (!catalogo) return;

    if (catalogo.classList.contains('grid')) {
        catalogo.classList.remove('grid');
        catalogo.classList.add('lista');
        localStorage.setItem('visualizacao', 'lista');
    } else {
        catalogo.classList.remove('lista');
        catalogo.classList.add('grid');
        localStorage.setItem('visualizacao', 'grid');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    gerarCatalogo();

    const catalogo = document.getElementById('catalogo-festas');
    const preferencia = localStorage.getItem('visualizacao');

    if (preferencia === 'lista' && catalogo) {
        catalogo.classList.remove('grid');
        catalogo.classList.add('lista');
    }

    const btnAlternar = document.querySelector('.controlevisualizacao button');
    if (btnAlternar) {
        btnAlternar.addEventListener('click', alternarVisualizacao);
    }

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    filtrarCategoria('all');
});