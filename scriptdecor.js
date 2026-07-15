/* ============================================
   DREAMCRAFT - scriptdecor.js (refatorado)
   ============================================ */

'use strict';

/* ---------- BASE DE DADOS ---------- */
const bancoDadosTemas = [
  { nome: "1ª Volta ao Sol",                        pasta: "1voltaaosol",                          categorias: "all animais desenhos"  , totalImgs: 1 },
  { nome: "101 Dálmatas",                           pasta: "101dalmatas",                          categorias: "all animais desenhos"  , totalImgs: 1 },
  { nome: "15 anos",                                pasta: "15anos",                               categorias: "all diversos"  , totalImgs: 3 },
  { nome: "1ª Eucaristia",                          pasta: "1eucaristia",                          categorias: "all religioso"  , totalImgs: 1 },
  { nome: "3 Palavrinhas Menina",                   pasta: "3palavrinhasmenina",                   categorias: "all religiosos"  , totalImgs: 2 },
  { nome: "3 Palavrinhas Menino",                   pasta: "3palavrinhasmenino",                   categorias: "all religiosos"  , totalImgs: 1 },
  { nome: "Abelhinha",                              pasta: "abelhinha",                            categorias: "all animais desenhos"  , totalImgs: 1 },
  { nome: "Alice no País das Maravilhas Cute",      pasta: "alicenopaisdasmaravilhascute",         categorias: "all princesas contodefadas filme disney"  , totalImgs: 1 },
  { nome: "Amo Meu Tetê Menino",                    pasta: "amomeutetemenino",                     categorias: "all baby cute"  , totalImgs: 2 },
  { nome: "Ana Castela",                            pasta: "anacastela",                           categorias: "all boiadeira musica"  , totalImgs: 3 },
  { nome: "Angel",                                  pasta: "angel",                                categorias: "all desenhos filme stitch angel"  , totalImgs: 3 },
  { nome: "Animatronics",                           pasta: "animatronics",                         categorias: "all jogos"  , totalImgs: 1 },
  { nome: "Ano Novo",                               pasta: "anonovo",                              categorias: "all anonovo fimdeano datacomemorativa"  , totalImgs: 7 },
  { nome: "Arco Vazado Desconstruído",              pasta: "arcovazado_desconstruido",             categorias: "all arcovazado"  , totalImgs: 10 },
  { nome: "Arco Vazado Simples",                    pasta: "arcovazado_simples",                   categorias: "all arcovazado"  , totalImgs: 21 },
  { nome: "Ariel",                                  pasta: "ariel",                                categorias: "all princesas disney"  , totalImgs: 1 },
  { nome: "Ariel 2",                                pasta: "ariel2",                               categorias: "all princesas disney"  , totalImgs: 1 },
  { nome: "Arraia Marrom",                          pasta: "arraiamarrom",                         categorias: "all arraia datacomemorativa"  , totalImgs: 1 },
  { nome: "Arraia Rosa",                            pasta: "arraiarosa",                           categorias: "all arraia datacomemorativa"  , totalImgs: 1 },
  { nome: "Asa Neon",                               pasta: "asaneon",                              categorias: "all diversos"  , totalImgs: 2 },
  { nome: "Astronauta",                             pasta: "astronauta",                           categorias: "all espaco desenhos"  , totalImgs: 1 },
  { nome: "BTS",                                   pasta: "bts",                                  categorias: "all k-pop musica"  , totalImgs: 1 },
  { nome: "Baby Shark Azul",                        pasta: "babysharkazul",                        categorias: "all fundodomar desenhos musica meninos"  , totalImgs: 2 },
  { nome: "Baby Shark Rosa",                        pasta: "babysharkrosa",                        categorias: "all fundodomar desenhos musica"  , totalImgs: 1 },
  { nome: "Bailarina",                              pasta: "bailarina",                            categorias: "all meninas bale"  , totalImgs: 1 },
  { nome: "Barbie",                                 pasta: "barbie",                               categorias: "all meninas desenhos filme boneca"  , totalImgs: 4 },
  { nome: "Batizado Anjinho",                       pasta: "batizadoanjinho",                      categorias: "all religiosos batizado"  , totalImgs: 7 },
  { nome: "Batizado Bege",                          pasta: "batizadobeje",                         categorias: "all religiosos batizado"  , totalImgs: 3 },
  { nome: "Batizado Divino Espírito Santo Arabesco",pasta: "batizadodivinoespiritosantoarabesco",  categorias: "all religiosos batizado"  , totalImgs: 1 },
  { nome: "Batizado Divino Espírito Santo",         pasta: "batizadodivinoespiritosanto",          categorias: "all religiosos batizado"  , totalImgs: 1 },
  { nome: "Batizado Lilás",                         pasta: "batizadolilas",                        categorias: "all religiosos batizado"  , totalImgs: 3 },
  { nome: "Batizado Rosa",                          pasta: "batizadorosa",                         categorias: "all religiosos batizado"  , totalImgs: 4 },
  { nome: "Batizado Verde",                         pasta: "batizadoverde",                        categorias: "all religiosos batizado"  , totalImgs: 2 },
  { nome: "Batizado Azul",                          pasta: "batizadoazul",                         categorias: "all religiosos batizado"  , totalImgs: 2 },
  /*{ nome: "Batizado",                               pasta: "batizado",                             categorias: "all religiosos batizado"  , totalImgs: 0 },*/
  { nome: "Batman",                                 pasta: "batman",                               categorias: "all herois filme desenhos meninos"  , totalImgs: 2 },
  { nome: "Bee Movie",                              pasta: "beemovie",                             categorias: "all filme animais meninos"  , totalImgs: 1 },
  { nome: "Bela Adormecida",                        pasta: "belaadormecida",                       categorias: "all princesas contodefadas filme disney"  , totalImgs: 2 },
  { nome: "Bela e a Fera",                          pasta: "belaeafera",                           categorias: "all princesas contodefadas filme disney"  , totalImgs: 2 },
  { nome: "Bento e Totó",                           pasta: "bentoetoto",                           categorias: "all desenhos meninos"  , totalImgs: 1 },
  { nome: "BeyBlade",                               pasta: "beyblade",                             categorias: "all desenhos meninos"  , totalImgs: 2 },
  { nome: "Blazze",                                 pasta: "blazze",                               categorias: "all corrida desenhos meninos"  , totalImgs: 1 },
  { nome: "Bluey e Bingo Aniversário",              pasta: "blueyebingoaniversario",               categorias: "all desenhos animais"  , totalImgs: 1 },
  { nome: "Bluey e Bingo",                          pasta: "blueyebingo",                          categorias: "all desenhos animais"  , totalImgs: 2 },
  { nome: "Bob Esponja",                            pasta: "bobesponja",                           categorias: "all desenhos fundodomar meninos"  , totalImgs: 1 },
  { nome: "Bobbie Goods",                           pasta: "bobbiegoods",                          categorias: "all diversos meninos"  , totalImgs: 5 },
  { nome: "Bolofofos",                              pasta: "bolofofos",                            categorias: "all desenhos musicas meninos"  , totalImgs: 1 },
  { nome: "Bombeiro",                               pasta: "bombeiro",                             categorias: "all bombeiro"  , totalImgs: 1 },
  { nome: "Borboleta Roxa",                         pasta: "borboletaroxa",                        categorias: "all borboletas animais"  , totalImgs: 4 },
  { nome: "Borboleta e Flor Lilás",                 pasta: "borboletaeflorlilas",                  categorias: "all borboletas animais"  , totalImgs: 1 },
  { nome: "Borboletas Azuis",                       pasta: "borboletasazuis",                      categorias: "all borboletas animais"  , totalImgs: 2 },
  { nome: "Bosque Encantado",                       pasta: "bosqueencantado",                      categorias: "all diversos cute animais"  , totalImgs: 1 },
  { nome: "Boteco Cerveja",                         pasta: "botecocerveja",                        categorias: "all boteco diversos"  , totalImgs: 1 },
  { nome: "Boteco",                                 pasta: "boteco",                               categorias: "all boteco diversos"  , totalImgs: 2 },
  { nome: "Branca de Neve Cute",                    pasta: "brancadenevecute",                     categorias: "all princesas contodefadas filme disney cute"  , totalImgs: 3 },
  { nome: "Brasilidades",                           pasta: "brasilidades",                         categorias: "all brasilidade diversos"  , totalImgs: 1 },
  { nome: "Brasilidades Laranja",                   pasta: "brasilidadeslaranja",                  categorias: "all brasilidade diversos"  , totalImgs: 1 },
  { nome: "CR7",                                    pasta: "cr7",                                  categorias: "all futebol jogador"  , totalImgs: 1 },
  { nome: "Caminhão Azul e Laranja",                pasta: "caminhao",                             categorias: "all diversos desenhos veiculos meninos"  , totalImgs: 1 },
  { nome: "Capitão América",                        pasta: "capitaoamerica",                       categorias: "all herois filme desenhos meninos"  , totalImgs: 1 },
  { nome: "Capivara",                               pasta: "capivara",                             categorias: "all animais diversos"  , totalImgs: 4 },
  { nome: "Capivara Arco-Íris",                     pasta: "capivaraarcoiris",                     categorias: "all animais diversos"  , totalImgs: 1 },
  { nome: "Carmed",                                 pasta: "carmed",                               categorias: "all doce labial"  , totalImgs: 1 },
  { nome: "Carnaval",                               pasta: "carnaval",                             categorias: "all datacomemorativa carnaval"  , totalImgs: 1 },
  { nome: "Casa Mágica da Gabby",                   pasta: "casamagicadagabby",                    categorias: "all desenhos magia"  , totalImgs: 6 },
  { nome: "Castelo Ra-tim-bum",                     pasta: "casteloratimbum",                      categorias: "all desenhos diversos"  , totalImgs: 1 },
  { nome: "Cavalo",                                 pasta: "cavalo",                               categorias: "all animais"  , totalImgs: 1 },
  { nome: "Cerejinha",                              pasta: "cerejinha",                            categorias: "all frutas"  , totalImgs: 10 },
  { nome: "Chá Revelação Menino Menina",            pasta: "charevelacaomeninomenina",             categorias: "all charevelacao"  , totalImgs: 5 },
  { nome: "Chá Revelação Urso Azul e Rosa",         pasta: "charevelacaoursoazulerosa",            categorias: "all charevelacao"  , totalImgs: 4 },
  { nome: "Chá Revelação Urso Roxo e Verde",        pasta: "charevelacaoursoroxoeverde",           categorias: "all charevelacao"  , totalImgs: 4 },
  { nome: "Chá Revelação",                          pasta: "charevelacao",                         categorias: "all charevelacao"  , totalImgs: 1 },
  { nome: "Chá de Casa Nova",                       pasta: "chadecasanova",                        categorias: "all chadecasanova"  , totalImgs: 2 },
  { nome: "Chá de Lingerie",                        pasta: "chadelingerie",                        categorias: "all chalingerie"  , totalImgs: 4 },
  { nome: "Chá de Panela",                          pasta: "chadepanela",                          categorias: "all chapanela"  , totalImgs: 1 },
  { nome: "Chá de Bebê Arraia Rosa",                pasta: "chadebebearraiarosa",                  categorias: "all chadebebe personalizada"  , totalImgs: 1 },
  { nome: "Chá de Bebê Azul",                       pasta: "chadebebeazul",                        categorias: "all chadebebe"  , totalImgs: 2 },
  { nome: "Chá de Bebê Lilás",                      pasta: "chadebebelilas",                       categorias: "all chadebebe"  , totalImgs: 2 },
  { nome: "Chá de Bebê Rosa",                       pasta: "chadebeberosa",                        categorias: "all chadebebe"  , totalImgs: 5 },
  { nome: "Chá de Bebê Verde",                      pasta: "chadebebeverde",                       categorias: "all chadebebe"  , totalImgs: 3 },
  { nome: "Chaves Baby",                            pasta: "chavesbaby",                           categorias: "all desenhos meninos"  , totalImgs: 2 },
  { nome: "Churrasco",                              pasta: "churrasco",                            categorias: "all churrasco"  , totalImgs: 1 },
  { nome: "Ciências",                               pasta: "ciencia",                              categorias: "all ciencia meninos"  , totalImgs: 1 },
  { nome: "Cinderela",                              pasta: "cinderela",                            categorias: "all princesas filme contodefadas disney"  , totalImgs: 1 },
  { nome: "Circo Digital",                          pasta: "circodigital",                         categorias: "all circo meninos"  , totalImgs: 1 },
  { nome: "Circo Rosa",                             pasta: "circorosa",                            categorias: "all circo meninos"  , totalImgs: 1 },
  { nome: "Copa Brasil",                            pasta: "copabrasil",                           categorias: "all times futebol copa meninos"  , totalImgs: 1 },
  { nome: "Corinthians",                            pasta: "corinthians",                          categorias: "all times futebol meninos"  , totalImgs: 3 },
  { nome: "Corinthians Laranja",                    pasta: "corinthianslaranja",                   categorias: "all times futebol meninos"  , totalImgs: 1 },
  { nome: "De Repente 30",                          pasta: "derepente30",                          categorias: "all diversos "  , totalImgs: 1 },
  { nome: "Demon Slayer",                           pasta: "demonslayer",                          categorias: "all anime meninos"  , totalImgs: 3 },
  { nome: "Desenho Boiadeirinha",                   pasta: "desenhoboiadeirinha",                  categorias: "all desenhos boiadeira"  , totalImgs: 1 },
  { nome: "Dia das Mães",                           pasta: "diadasmaes",                           categorias: "all datacomemorativa "  , totalImgs: 3 },
  { nome: "Dia das Mães Rosas Vermelhas",           pasta: "diadasmaesrosasvermelhas",             categorias: "all datacomemorativa "  , totalImgs: 1 },
  { nome: "Dia das Mães Bebê Menino no Colo",       pasta: "diadasmaesbebemeninocolo",             categorias: "all datacomemorativa "  , totalImgs: 1 },
  { nome: "Dia da Mulher",                          pasta: "diadamulher",                          categorias: "all datacomemorativa "  , totalImgs: 1 },
  { nome: "Dia dos Pais",                           pasta: "diadospais",                           categorias: "all datacomemorativa "  , totalImgs: 1 },
  { nome: "Dinossauro",                             pasta: "dinossauro",                           categorias: "all dinossauro animais meninos"  , totalImgs: 1 },
  { nome: "Dinossauro Jurassic Park",               pasta: "dinossaurojurassicpark",               categorias: "all dinossauro animais meninos"  , totalImgs: 1 },
  { nome: "Dinossauros Baby Menina",                pasta: "dinossaurobabyrosa",                   categorias: "all dinossauro animais meninas"  , totalImgs: 1 },
  { nome: "Dinossauros Baby Menino",                pasta: "dinossaurobabymenino",                categorias: "all dinossauro animais meninos"  , totalImgs: 1 },
  { nome: "Divertidamente",                         pasta: "divertidamente",                       categorias: "all filme contodefadas"  , totalImgs: 3 },
  { nome: "Doceria",                                pasta: "doceria",                              categorias: "all doces diversos"  , totalImgs: 1 },
  { nome: "Dragon Ball",                            pasta: "dragonball",                           categorias: "all desenhos meninos"  , totalImgs: 3 },
  { nome: "Empresarial",                            pasta: "empresarial",                          categorias: "all empresas"  , totalImgs: 2 },
  { nome: "Enaldinho",                              pasta: "enaldinho",                            categorias: "all youtuber meninos"  , totalImgs: 1 },
  { nome: "Enrolados",                              pasta: "enrolados",                            categorias: "all princesas contodefadas filme"  , totalImgs: 1 },
  { nome: "Encanto",                                pasta: "encanto",                              categorias: "all princesas contodefadas filme"  , totalImgs: 1 },
  { nome: "Eu Amo Tetê Menina",                     pasta: "euamotetemenina",                      categorias: "all cute diversos"  , totalImgs: 2 },
  { nome: "Eu Amo Tetê Menino",                     pasta: "euamotetemenino",                      categorias: "all cute diversos"  , totalImgs: 1 },
  { nome: "Fazendinha Azul",                        pasta: "fazendinhaazul",                       categorias: "all fazendinha"  , totalImgs: 1 },
  { nome: "Fazendinha Rosa",                        pasta: "fazendinharosa",                       categorias: "all fazendinha"  , totalImgs: 1 },
  { nome: "Fazendinha Vermelha",                    pasta: "fazendinhavermelha",                   categorias: "all fazendinha"  , totalImgs: 4 },
  { nome: "Festa Junina",                           pasta: "festajunina",                          categorias: "all arraia"  , totalImgs: 1 },
  { nome: "Fini Fundo Branco",                      pasta: "finifundobranco",                      categorias: "all doces diversos"  , totalImgs: 1 },
  { nome: "Fini Fundo Vermelho",                    pasta: "finifundovermelho",                    categorias: "all doces diversos"  , totalImgs: 2 },
  { nome: "Flamengo",                               pasta: "flamengo",                             categorias: "all times futebol"  , totalImgs: 3 },
  { nome: "Flamingo",                               pasta: "flamingo",                             categorias: "all animais"  , totalImgs: 2 },
  { nome: "Flor Lilás e Borboleta",                 pasta: "florlilaseborboleta",                  categorias: "all flores borboletas"  , totalImgs: 1 },
  { nome: "Flork Eu Te Amo",                        pasta: "florkeuteamo",                         categorias: "all diversos"  , totalImgs: 1 },
  { nome: "Free Fire",                              pasta: "freefire",                             categorias: "all jogos meninos"  , totalImgs: 2 },
  { nome: "Frozen",                                 pasta: "frozen",                               categorias: "all princesas filme contodefadas disney"  , totalImgs: 3 },
  { nome: "Frutas",                                 pasta: "frutas",                               categorias: "all frutas"  , totalImgs: 1 },
  { nome: "Fundo do Mar",                           pasta: "fundodomar",                           categorias: "all fundodomar meninos"  , totalImgs: 1 },
  { nome: "Futebol Menina",                         pasta: "futebolmenina",                        categorias: "all times futebol feminino"  , totalImgs: 1 },
  { nome: "Futebol",                                pasta: "futebol",                              categorias: "all times futebol"  , totalImgs: 3 },
  { nome: "Galinha Pintadinha",                     pasta: "galinhapintadinha",                    categorias: "all desenhos musica"  , totalImgs: 1 },
  { nome: "Galinha Pintadinha Cute",                pasta: "galinhapintadinhacute",                categorias: "all desenhos musica cute"  , totalImgs: 1 },
  { nome: "Gamer",                                  pasta: "gamer",                                categorias: "all game diversos meninos"  , totalImgs: 2 },
  { nome: "Gi Turma Luccas Neto",                   pasta: "giturmaluccasneto",                    categorias: "all youtuber desenhos"  , totalImgs: 1 },
  { nome: "Godzilla vs King Kong",                  pasta: "godzillavskingkong",                   categorias: "all filme contodefadas meninos"  , totalImgs: 3 },
  { nome: "Goku SSJ3",                              pasta: "gokussj3",                             categorias: "all diversos meninos"  , totalImgs: 1 },
  { nome: "Gratidão",                               pasta: "gratidao",                             categorias: "all diversos"  , totalImgs: 1 },
  { nome: "Grinch",                                 pasta: "grinch",                               categorias: "all filme desenho meninos", totalImgs: 1 },
  { nome: "Groot",                                  pasta: "groot",                                categorias: "all filme cute"  , totalImgs: 1 },
  { nome: "Guerreiras do K-Pop",                    pasta: "guerreirasdokpop",                     categorias: "all k-pop musica filme"  , totalImgs: 2 },
  { nome: "Halloween Abóbora",                      pasta: "halloweenabobora",                     categorias: "all datacomemorativa halloween"  , totalImgs: 1 },
  { nome: "Halloween Castelo Laranja",              pasta: "halloweencastelolaranja",              categorias: "all datacomemorativa halloween"  , totalImgs: 1 },
  { nome: "Halloween Castelo Roxo",                 pasta: "halloweencasteloroxo",                 categorias: "all datacomemorativa halloween"  , totalImgs: 1 },
  { nome: "Happy Birthday Azul e Dourado",          pasta: "happybirthdayazuledourado",            categorias: "all happybirthday"  , totalImgs: 3 },
  { nome: "Happy Birthday Glitter Pink",            pasta: "happybirthdayglitterpink",             categorias: "all happybirthday glitter"  , totalImgs: 4 },
  { nome: "Happy Birthday Laranja e Pink",          pasta: "happybirthdaylaranjaepink",            categorias: "all happybirthday"  , totalImgs: 1 },
  { nome: "Happy Birthday Marsala",                 pasta: "happybirthdaymarssala",                categorias: "all happybirthday"  , totalImgs: 1 },
  { nome: "Happy Birthday Azul Arabesco Dourado",   pasta: "happybirthdayazularabescodourado",     categorias: "all happybirthday glitter"  , totalImgs: 0 },
  { nome: "Happy Birthday Preto Rose Glitter",      pasta: "happybirthdayroseglitter",             categorias: "all happybirthday glitter"  , totalImgs: 2 },
  { nome: "Happy Birthday Azul e Prata",            pasta: "happybirthdayazuleprata",              categorias: "all happybirthday"  , totalImgs: 1 },
  { nome: "Happy Birthday Glitter Rose",            pasta: "happybirthdayglitterrose",             categorias: "all happybirthday glitter"  , totalImgs: 2 },
  { nome: "Happy Birthday Lantejoula Lilás",        pasta: "happybirthdaylantejoulalilas",         categorias: "all happybirthday"  , totalImgs: 1 },
  { nome: "Happy Birthday Lantejoula Rosa",         pasta: "happybirthdaylantejoularosa",          categorias: "all happybirthday"  , totalImgs: 1 },
  { nome: "Happy Birthday Preto e Dourado",         pasta: "happybirthdaypretoedourado",           categorias: "all happybirthday"  , totalImgs: 6 },
  { nome: "Happy Birthday Vermelho e Dourado",      pasta: "happybirthdayvermelhoedourado",        categorias: "all happybirthday"  , totalImgs: 4 },
  { nome: "Harry Potter",                           pasta: "harrypotter",                          categorias: "all filme contodefadas magia"  , totalImgs: 1 },
  { nome: "Hello Kitty",                            pasta: "hellokitty",                           categorias: "all desenhos"  , totalImgs: 4 },
  { nome: "Heróis",                                 pasta: "herois",                               categorias: "all herois filme cute"  , totalImgs: 0 },
  { nome: "Homem Aranha Cute",                      pasta: "homemaranhacute",                      categorias: "all herois filme cute meninos"  , totalImgs: 5 },
  { nome: "Homem Aranha",                           pasta: "homemaranha",                          categorias: "all herois filme meninos"  , totalImgs: 8 },
  { nome: "Homem de Ferro",                         pasta: "homemdeferro",                         categorias: "all herois filme meninos"  , totalImgs: 1 },
  { nome: "HotWheels",                              pasta: "hotwheels",                            categorias: "all corrida desenhos veiculos meninos"  , totalImgs: 4 },
  { nome: "Hulk",                                   pasta: "hulk",                                 categorias: "all herois meninos"  , totalImgs: 3 },
  { nome: "Ilhama",                                 pasta: "ilhama",                               categorias: "all animais"  , totalImgs: 1 },
  { nome: "Illit K-POP",                            pasta: "illit",                                categorias: "all k-pop musica"  , totalImgs: 1 },
  { nome: "Jardim de Borboletas",                   pasta: "jardimdeborboletas",                   categorias: "all jardim borboletas"  , totalImgs: 5 },
  { nome: "Jujutsu Kaisen",                         pasta: "jujutsokaisen",                        categorias: "all anime meninos"  , totalImgs: 1 },
  { nome: "Kuromi e Melody",                        pasta: "kuromiemelody",                        categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Labubu Menina",                          pasta: "labubumenina",                         categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Labubu Menino",                          pasta: "labubumenino",                         categorias: "all desenhos meninos"  , totalImgs: 1 },
  { nome: "Lady Budy",                              pasta: "ladybudy",                             categorias: "all desenhos filme"  , totalImgs: 1 },
  { nome: "Lantejoula Dourado",                     pasta: "lantejouladourado",                    categorias: "all lantejoula natal"  , totalImgs: 2 },
  { nome: "Lantejoula Prata",                       pasta: "lantejoulaprata",                      categorias: "all lantejoula natal"  , totalImgs: 1 },
  { nome: "Lantejoula Verde",                       pasta: "lantejoulaverde",                      categorias: "all lantejoula natal"  , totalImgs: 1 },
  { nome: "Lantejoula Vermelha",                    pasta: "lantejoulavermelha",                   categorias: "all lantejoula natal"  , totalImgs: 1 },
  { nome: "Lanterna Verde",                         pasta: "lanternaverde",                        categorias: "all herois filme"  , totalImgs: 4 },
  { nome: "Lavanda",                                pasta: "lavanda",                              categorias: "all flores"  , totalImgs: 4 },
  { nome: "Laço Preto Fundo Branco",                pasta: "lacopretofundobranco",                 categorias: "all lacos"  , totalImgs: 1 },
  { nome: "Laço Rosa Fundo Branco",                 pasta: "lacorosafundobranco",                  categorias: "all lacos"  , totalImgs: 1 },
  { nome: "Liga da Justiça Baby",                   pasta: "ligadajusticababy",                    categorias: "all herois cute"  , totalImgs: 1 },
  { nome: "Lilás Glitter",                          pasta: "lilasglitter",                         categorias: "all glitter"  , totalImgs: 4 },
  /*{ nome: "Liso Azul Royal",                        pasta: "lisoazulroyal",                        categorias: "all cores"  , totalImgs: 0 },*/
  { nome: "Liso Branco",                            pasta: "lisobranco",                           categorias: "all liso cores"  , totalImgs: 1 },
  { nome: "Liso Pirulito Azul Bebê",                pasta: "lisopirulitoazulbebe",                 categorias: "all cores"  , totalImgs: 1 },
  { nome: "Liso Rosa",                              pasta: "lisorosa",                             categorias: "all cores"  , totalImgs: 1 },
  { nome: "Magali",                                 pasta: "magali",                               categorias: "all desenhos"  , totalImgs: 2 },
  { nome: "Magali Fundo Amarelo",                   pasta: "magalifundoamarelo",                   categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Magali Rosa",                            pasta: "magalirosa",                           categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Margarida",                              pasta: "margarida",                            categorias: "all flores"  , totalImgs: 3 },
  { nome: "Maria Clara e JP",                       pasta: "mariaclaraejp",                        categorias: "all youtuber desenhos"  , totalImgs: 3 },
  { nome: "Masha e o Urso",                         pasta: "mashaeourso",                          categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Meninas Super Poderosas",                pasta: "meninassuperpoderosas",                 categorias: "all desenho meninas"  , totalImgs: 1 },
  { nome: "Meu Mundo Doce com Jesus",               pasta: "meumundodocecomjesus",                 categorias: "all religiosos"  , totalImgs: 1 },
  { nome: "Mickey",                                 pasta: "mickey",                               categorias: "all desenhos disney"  , totalImgs: 2 },
  { nome: "MineCraft",                              pasta: "minecraft",                            categorias: "all jogos meninos"  , totalImgs: 3 },
  { nome: "Minions 2",                              pasta: "minions2",                             categorias: "all filme desenhos meninos"  , totalImgs: 2 },
  { nome: "Minions",                                pasta: "minions",                              categorias: "all filme desenhos meninos"  , totalImgs: 1 },
  { nome: "Minnie Rosa",                            pasta: "minnierosa",                           categorias: "all desenhos disney"  , totalImgs: 2 },
  { nome: "Minnie Vermelha",                        pasta: "minnievermelha",                       categorias: "all desenhos disney"  , totalImgs: 2 },
  { nome: "Moana 2",                                pasta: "moana2",                               categorias: "all princesas filme contodefadas disney"  , totalImgs: 1 },
  { nome: "Moana Baby",                             pasta: "moanababy",                            categorias: "all princesas filme contodefadas cute disney"  , totalImgs: 1 },
  { nome: "Moana",                                  pasta: "moana",                                categorias: "all princesas filme contodefadas disney"  , totalImgs: 4 },
  { nome: "Monstros SA",                            pasta: "monstrossa",                           categorias: "all desenhos filme disney"  , totalImgs: 1 },
  { nome: "Mulher Maravilha Cute",                  pasta: "mulhermaravilhacute",                  categorias: "all herois filme cute"  , totalImgs: 1 },
  { nome: "Mundo Bita",                             pasta: "mundobita",                            categorias: "all desenhos musica"  , totalImgs: 2 },
  { nome: "Naruto",                                 pasta: "naruto",                               categorias: "all anime meninos"  , totalImgs: 2 },
  { nome: "Natal",                                  pasta: "natal",                                categorias: "all natal datacomemorativa"  , totalImgs: 4 },
  { nome: "Natal Papai e Mamãe Noel",               pasta: "natalpapaiemamaenoel",                 categorias: "all natal datacomemorativa"  , totalImgs: 2 },
  { nome: "Noivado",                                pasta: "noivado",                              categorias: "all noivado"  , totalImgs: 1 },
  { nome: "Nossa Senhora Aparecida",                pasta: "nossasenhoraaparecida",                categorias: "all religioso"  , totalImgs: 1 },
  { nome: "NumberBlocks",                           pasta: "numberblocks",                         categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "One Piece",                              pasta: "onepiece",                             categorias: "all anime desenho"  , totalImgs: 1 },
  { nome: "Os Rosas",                               pasta: "osrosas",                              categorias: "all youtuber"  , totalImgs: 2 },
  { nome: "Os Rosas Desenho",                       pasta: "osrosadesenho",                        categorias: "all youtuber"  , totalImgs: 1 },
  { nome: "Palmeiras",                              pasta: "palmeiras",                            categorias: "all times futebol meninos"  , totalImgs: 2 },
  { nome: "Pantera Negra",                          pasta: "panteranegra",                         categorias: "all herois filme meninos"  , totalImgs: 2 },
  { nome: "Páscoa Amarelo com Ovos Rosa e Azul",    pasta: "pascoaamarelocomovosrosaeazul",        categorias: "all pascoa"  , totalImgs: 1 },
  { nome: "Patati e Patata",                        pasta: "patatiepatata",                        categorias: "all desenhos musicas"  , totalImgs: 1 },
  { nome: "Patinho Colorido",                       pasta: "patinhocolorido",                      categorias: "all desenhos musica meninos"  , totalImgs: 1 },
  { nome: "Patrulha Canina",                        pasta: "patrulhacanina",                       categorias: "all animais desenhos"  , totalImgs: 3 },
  { nome: "Peppa Pig",                              pasta: "pepapig",                              categorias: "all desenhos animais"  , totalImgs: 1 },
  { nome: "Pequeno Príncipe",                       pasta: "pequenoprincipe",                      categorias: "all desenhos meninos"  , totalImgs: 1 },
  { nome: "Personalizado",                          pasta: "personalizado",                        categorias: "all personalizados"  , totalImgs: 3 },
  { nome: "PJ Mask",                                pasta: "pjmask",                               categorias: "all desenhos"  , totalImgs: 2 },
  { nome: "Pocoyo",                                 pasta: "pocoyo",                               categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Poderosa Chefinha",                      pasta: "poderosachefinha",                     categorias: "all filme desenhos"  , totalImgs: 1 },
  { nome: "Poderoso Chefinho",                      pasta: "poderosochefinho",                     categorias: "all filme desenhos meninos"  , totalImgs: 1 },
  { nome: "Pokémon",                                pasta: "pokemon",                              categorias: "all desenhos animais meninos"  , totalImgs: 2 },
  /*{ nome: "Pool Party Azul",                        pasta: "poolpartyazul",                        categorias: "all piscina"  , totalImgs: 0 },*/
  { nome: "Pool Party Rosa",                        pasta: "poolpartyrosa",                        categorias: "all piscina"  , totalImgs: 3 },
  { nome: "Power Rangers",                          pasta: "powerrangers",                         categorias: "all desenhos filme meninos"  , totalImgs: 1 },
  { nome: "Princesa Sofia",                         pasta: "princesasofia",                        categorias: "all disney filme desenhos"  , totalImgs: 1 },
  { nome: "Princesa Tiana",                         pasta: "princesatiana",                        categorias: "all princesas filme desenhos disney"  , totalImgs: 2 },
  { nome: "Princesas Disney",                       pasta: "princesasdisney",                      categorias: "all disney filme desenhos"  , totalImgs: 1 },
  { nome: "Raposinha",                              pasta: "raposinha",                            categorias: "all animais"  , totalImgs: 1 },
  { nome: "Real Madrid",                            pasta: "realmadri",                            categorias: "all time futebol meninos"  , totalImgs: 1 },
  { nome: "Rei Leão",                               pasta: "reileao",                              categorias: "all animais desenhos filme meninos"  , totalImgs: 3 },
  { nome: "Relâmpago McQueen",                      pasta: "relampagomcqueen",                     categorias: "all filme corrida veiculos meninos"  , totalImgs: 1 },
  { nome: "Roblox Menina",                          pasta: "robloxmenina",                         categorias: "all jogos"  , totalImgs: 1 },
  { nome: "Roblox Menino",                          pasta: "robloxmenino",                         categorias: "all jogos meninos"  , totalImgs: 3 },
  /*{ nome: "Romano Liso",                            pasta: "romanoliso",                           categorias: "all romano pirulito liso"  , totalImgs: 0 },*/
  { nome: "Romano Meia Lua",                        pasta: "romanomeialua",                        categorias: "all romano pirulito liso"  , totalImgs: 1 },
  { nome: "Romano Pirulito Laranja",                pasta: "romanopirulitolaranja",                categorias: "all romano pirulito liso"  , totalImgs: 1 },
  { nome: "Romano Pirulito Pink",                   pasta: "romanopirulitopink",                   categorias: "all romano pirulito liso"  , totalImgs: 2 },
  { nome: "Romano Retangular",                      pasta: "romanoretangular",                     categorias: "all romano pirulito liso"  , totalImgs: 1 },
  { nome: "Safari Menina",                          pasta: "safarimenina",                         categorias: "all safari"  , totalImgs: 1 },
  { nome: "Safari Menino",                          pasta: "safarimenino",                         categorias: "all safari meninos"  , totalImgs: 2 },
  { nome: "São Paulo",                              pasta: "saopaulo",                             categorias: "all times futebol"  , totalImgs: 4 },
  { nome: "Sereia Splash",                          pasta: "sereiasplash",                         categorias: "all filme menina"  , totalImgs: 1 },
  { nome: "Sky e Everest",                          pasta: "skyeeverest",                          categorias: "all animais desenhos meninos"  , totalImgs: 2 },
  { nome: "Sonic e Knuckles",                       pasta: "soniceknuckles",                       categorias: "all jogos desenhos filme meninos"  , totalImgs: 4 },
  { nome: "Sonic e Shadow",                         pasta: "soniceshadow",                         categorias: "all jogos desenhos filme meninos"  , totalImgs: 1 },
  { nome: "Sonic",                                  pasta: "sonic",                                categorias: "all jogos desenhos filme meninos"  , totalImgs: 1 },
  { nome: "Stitch Milk Shake",                      pasta: "stitchmilkshake",                      categorias: "all desenhos filme stitch"  , totalImgs: 3 },
  { nome: "Stitch Arco-Íris",                       pasta: "stitcharcoiris",                       categorias: "all desenhos filme stitch"  , totalImgs: 1 },
  { nome: "Stitch Chiclete",                        pasta: "stitchchiclete",                       categorias: "all desenhos filme stitch"  , totalImgs: 1 },
  { nome: "Stitch e Angel Coração",                 pasta: "stitcheangelcoracao",                  categorias: "all desenhos filme stitch"  , totalImgs: 2 },
  { nome: "Stitch e Angel",                         pasta: "stitcheangel",                         categorias: "all desenhos filme stitch"  , totalImgs: 2 },
  { nome: "Stitch Flor",                            pasta: "stitchflor",                           categorias: "all desenhos filme stitch"  , totalImgs: 5 },
  { nome: "Stitch",                                 pasta: "stitch",                               categorias: "all desenhos filme stitch"  , totalImgs: 4 },
  { nome: "Stray Kids",                             pasta: "straykids",                            categorias: "all k-pop musica"  , totalImgs: 1 },
  { nome: "Tardezinha",                             pasta: "tardezinha",                           categorias: "all diversos"  , totalImgs: 3 },
  { nome: "The Chosen",                             pasta: "thechosen",                            categorias: "all religiosos series"  , totalImgs: 1 },
  { nome: "Trolls",                                 pasta: "trolls",                               categorias: "all desenhos filme"  , totalImgs: 1 },
  { nome: "Turma Tube",                             pasta: "turmatube",                            categorias: "all desenhos youtube"  , totalImgs: 1 },
  { nome: "Turma da Mônica",                        pasta: "turmadamonica",                        categorias: "all desenhos"  , totalImgs: 1 },
  { nome: "Ursinho Marrom",                         pasta: "ursinhomarron",                        categorias: "all ursinho infantil"  , totalImgs: 1 },
  { nome: "Ursinho Pooh Baby",                      pasta: "ursinhopoohbaby",                      categorias: "all desenhos filme cute"  , totalImgs: 1 },
  { nome: "Ursinho Pooh",                           pasta: "ursinhopooh",                          categorias: "all desenhos filme"  , totalImgs: 1 },
  { nome: "Ursinhos Carinhosos",                    pasta: "ursinhoscarinhosos",                   categorias: "all desenhos"  , totalImgs: 3 },
  { nome: "Vai Brasil",                             pasta: "vaibrasil",                            categorias: "all copa futebol"  , totalImgs: 1 },
  { nome: "Valente",                                pasta: "valente",                              categorias: "all princesas filme disney"  , totalImgs: 1 },
  { nome: "Vera Arco-Íris",                         pasta: "veraarcoiris",                         categorias: "all desenhos"  , totalImgs: 2 },
  { nome: "Wandinha",                               pasta: "wandinha",                             categorias: "all filme"  , totalImgs: 1 },
  { nome: "Yoshi",                                  pasta: "yoshi",                                categorias: "all desenho jogo"  , totalImgs: 1 }
];

/* ---------- DESCRIÇÃO PADRÃO ---------- */
const DESCRICAO_PADRAO = [
  'Painel', 'Arco de balões', 'Boleira',
  'Bandeja sextavada', 'Bandeja lapidada', 'Bandeja Oval',
  'Vaso grego', 'Tudo como na imagem ou nas cores que desejas'
];

const DESCRICOES_ESPECIAIS = {
  arcovazado_simples: [
    '<strong>Arco Vazado Simples (Clássico)</strong>',
    'Painel', 'Arco de balões uniformes', 'Boleira',
    'Bandeja sextavada', 'Bandeja lapidada', 'Bandeja Oval',
    'Vaso grego', 'Tudo como na imagem ou nas cores que desejar'
  ],
  arcovazado_desconstruido: [
    '<strong>Arco Vazado Desconstruído (Orgânico)</strong>',
    'Painel', 'Arco de balões desconstruídos', 'Boleira',
    'Bandeja sextavada', 'Bandeja lapidada', 'Bandeja Oval',
    'Vaso grego', 'Tudo como na imagem ou nas cores que desejas'
  ]
};

function getDescricaoHTML(pasta) {
  const itens = DESCRICOES_ESPECIAIS[pasta] || DESCRICAO_PADRAO;
  return itens.map(function (item) { return '<li>' + item + '</li>'; }).join('');
}

/* ---------- ESTADO GLOBAL DO MODAL ---------- */
let modalAtual  = null;
let imagensModal = [];
let indiceModal  = 0;

/* ---------- GERAÇÃO DO CATÁLOGO ---------- */
/*
 * Estratégia sem requests extras (evita 403):
 * 1. Cada card é criado com as 25 <img> já no DOM, mas todas
 *    com loading="lazy" — o browser só faz o request quando
 *    o elemento está perto da viewport.
 * 2. Cada <img> tem um onerror que a marca com data-falhou="1"
 *    e a esconde. Nenhum request "de teste" extra é feito.
 * 3. O IntersectionObserver espera o card entrar na tela e,
 *    depois que as imagens tiveram tempo de responder (onload/onerror),
 *    inicia o slideshow apenas com as que carregaram.
 * 4. O slideshow pula automaticamente imagens que falharam.
 */
function gerarCatalogo() {
  var container = document.getElementById('catalogo-festas');
  if (!container) return;

  var fragment = document.createDocumentFragment();
  bancoDadosTemas.forEach(function (tema) {
    fragment.appendChild(criarCard(tema));
  });

  container.innerHTML = '';
  container.appendChild(fragment);
  iniciarCarrosseis();
}

function criarCard(tema) {
  var nome       = tema.nome;
  var pasta      = tema.pasta;
  var categorias = tema.categorias;
  var wppNome    = encodeURIComponent(nome);
  
  // Pega o total real de imagens injetado pelo Node. Se não existir, assume 1 por segurança.
  var qtdImagens = tema.totalImgs || 1; 

  var card = document.createElement('div');
  card.className = 'festa';
  card.setAttribute('data-categoria', categorias);
  card.setAttribute('data-pasta', pasta);

  // O loop agora só roda até o número REAL de imagens que existem na pasta!
  var htmlImgs = '';
  for (var i = 1; i <= qtdImagens; i++) {
    htmlImgs +=
      '<img src="./Imagem/' + pasta + '/' + i + '.webp"' +
      ' loading="lazy"' +
      ' data-indice="' + i + '"' +
      ' onerror="if(!this.dataset.tentouMaiusculo){this.dataset.tentouMaiusculo=\'1\'; this.src=\'./Imagem/' + pasta + '/' + i + '.WEBP\';}else{this.dataset.falhou=\'1\';this.style.display=\'none\';}"' +
      (i === 1 ? ' class="imagem-ativa"' : '') +
      '>';
  }

  card.innerHTML =
    '<div class="carrossel">' +
      '<div class="imagens-carrossel">' + htmlImgs + '</div>' +
      '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
    '</div>' +
    '<div class="conteudo">' +
      '<div class="titulo">' + nome + '</div>' +
      '<ul class="descricao">' + getDescricaoHTML(pasta) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/5519993723106?text=Ol%C3%A1%2C+quero+or%C3%A7amento+para+' + wppNome + '"' +
        ' target="_blank" rel="noopener">' +
        '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
      '</a>' +
    '</div>';

  // Delega o clique para abrir o modal
  card.querySelector('.imagens-carrossel').addEventListener('click', function (e) {
    if (e.target.tagName !== 'IMG') return;
    var imgs    = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
    var clicada = imgs.indexOf(e.target);
    if (clicada === -1) clicada = 0;
    abrirModalComLista(imgs.map(function (im) { return im.src; }), clicada);
  });

  return card;
}

/* ---------- CARROSSEIS COM IntersectionObserver ---------- */
function iniciarCarrosseis() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      iniciarSlideshow(entry.target);
    });
  }, { rootMargin: '300px 0px' }); // antecipa para as imgs lazy carregarem

  document.querySelectorAll('.festa').forEach(function (card) {
    observer.observe(card);
  });
}

/*
 * Inicia o slideshow do card.
 * Aguarda um pequeno delay para as imagens lazy terem tempo de
 * disparar onload/onerror antes de filtrar as válidas.
 */
function iniciarSlideshow(card) {
  // 800 ms é suficiente para o browser processar onload/onerror
  // das imagens que já estavam na fila de download
  setTimeout(function () {
    var container = card.querySelector('.imagens-carrossel');
    if (!container) return;

    // Imagens válidas = carregaram sem erro (data-falhou ausente)
    var todas   = Array.from(container.querySelectorAll('img'));
    var validas = todas.filter(function (img) { return !img.dataset.falhou; });

    if (validas.length <= 1) return; // nada a rotacionar

    var atual = 0;
    // Garante que só a primeira está ativa
    validas.forEach(function (img, i) {
      img.classList.toggle('imagem-ativa', i === 0);
    });

    setInterval(function () {
      if (!document.body.contains(card)) return;
      validas[atual].classList.remove('imagem-ativa');
      // Avança apenas para imagens que não falharam depois do delay inicial
      do {
        atual = (atual + 1) % validas.length;
      } while (validas[atual].dataset.falhou && validas.some(function (v) { return !v.dataset.falhou; }));
      validas[atual].classList.add('imagem-ativa');
    }, 3000);
  }, 800);
}

/* ---------- MODAL / LIGHTBOX ---------- */

/*
 * Recebe a lista exata de srcs válidos (já filtrados pelo carrossel)
 * e o índice da imagem clicada. Não faz requests extras.
 */
function abrirModalComLista(srcs, indiceInicial) {
  if (modalAtual) fecharModal();

  imagensModal = srcs.slice(); // cópia
  indiceModal  = indiceInicial || 0;

  modalAtual = document.createElement('div');
  modalAtual.className = 'modal-imagem';
  modalAtual.innerHTML =
    '<div class="modal-overlay"></div>' +
    '<div class="modal-conteudo">' +
      '<button class="modal-fechar" aria-label="Fechar">&times;</button>' +
      '<button class="modal-nav modal-anterior" aria-label="Anterior">&#10094;</button>' +
      '<img src="' + imagensModal[indiceModal] + '" class="modal-img" alt="Imagem do tema">' +
      '<button class="modal-nav modal-proximo" aria-label="Próximo">&#10095;</button>' +
      '<div class="modal-contador">' + (indiceModal + 1) + ' / ' + imagensModal.length + '</div>' +
    '</div>';

  document.body.appendChild(modalAtual);
  document.body.style.overflow = 'hidden';

  modalAtual.querySelector('.modal-overlay').addEventListener('click', fecharModal);
  modalAtual.querySelector('.modal-fechar').addEventListener('click', fecharModal);
  modalAtual.querySelector('.modal-anterior').addEventListener('click', imagemAnterior);
  modalAtual.querySelector('.modal-proximo').addEventListener('click', imagemProxima);

  atualizarBotoesModal();
}

function fecharModal() {
  if (!modalAtual) return;
  modalAtual.remove();
  modalAtual = null;
  document.body.style.overflow = '';
}

function imagemProxima() {
  if (indiceModal < imagensModal.length - 1) { indiceModal++; atualizarModal(); }
}

function imagemAnterior() {
  if (indiceModal > 0) { indiceModal--; atualizarModal(); }
}

function atualizarModal() {
  if (!modalAtual) return;
  modalAtual.querySelector('.modal-img').src = imagensModal[indiceModal];
  modalAtual.querySelector('.modal-contador').textContent =
    (indiceModal + 1) + ' / ' + imagensModal.length;
  atualizarBotoesModal();
}

function atualizarBotoesModal() {
  if (!modalAtual) return;
  const btnAnt = modalAtual.querySelector('.modal-anterior');
  const btnPro = modalAtual.querySelector('.modal-proximo');
  btnAnt.style.display = indiceModal === 0 ? 'none' : 'block';
  btnPro.style.display = indiceModal === imagensModal.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function (e) {
  if (!modalAtual) return;
  if (e.key === 'Escape')      fecharModal();
  if (e.key === 'ArrowLeft')   imagemAnterior();
  if (e.key === 'ArrowRight')  imagemProxima();
});

/* ---------- FILTROS E BUSCA ---------- */
function filtrarCategoria(categoria) {
  if (!categoria) categoria = document.getElementById('filtro').value;

  document.querySelectorAll('.filtro-btn').forEach(function (btn) {
    const onclick = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclick.indexOf("'" + categoria + "'") !== -1);
  });

  const select = document.getElementById('filtro');
  if (select) select.value = categoria;

  const catLower = categoria.toLowerCase();
  document.querySelectorAll('.festa').forEach(function (festa) {
    const cats = (festa.getAttribute('data-categoria') || '').toLowerCase();
    festa.style.display = (catLower === 'all' || cats.includes(catLower)) ? 'flex' : 'none';
  });
}

function buscarTema() {
  const termo = document.getElementById('busca-tema').value.toLowerCase();
  document.querySelectorAll('.festa').forEach(function (festa) {
    const titulo = festa.querySelector('.titulo').textContent.toLowerCase();
    festa.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

function alternarVisualizacao() {
  const catalogo = document.getElementById('catalogo-festas');
  if (!catalogo) return;
  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);
  try { localStorage.setItem('visualizacao', isLista ? 'lista' : 'grid'); } catch (_) {}
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogo();

  // Restaura preferência de visualização
  const catalogo = document.getElementById('catalogo-festas');
  try {
    if (localStorage.getItem('visualizacao') === 'lista' && catalogo) {
      catalogo.classList.replace('grid', 'lista');
    }
  } catch (_) {}

  // Botão alternar visualização
  const btnAlternar = document.querySelector('.controlevisualizacao button');
  if (btnAlternar) btnAlternar.addEventListener('click', alternarVisualizacao);

  // Menu mobile
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  filtrarCategoria('all');
});