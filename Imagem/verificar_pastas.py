import os

# Lista com a sintaxe do Python para todas as chaves e valores
bancoDadosTemas = [
    { "nome": "1ª Volta ao Sol", "pasta": "101dalmatas", "categorias": "all 1ano" },    
    { "nome": "3 Palavrinhas Fundo Verde", "pasta": "3palavrinhasfundoverde", "categorias": "all religiosos" },
    { "nome": "99 Noites", "pasta": "99noites", "categorias": "all jogos" },
    { "nome": "Ano Novo", "pasta": "anonovo", "categorias": "all anonovo" },
    { "nome": "Anos 60 Branco e Preto", "pasta": "anos60brancoepreto", "categorias": "all anos60" },
    { "nome": "Anos 80 Preto e Neon", "pasta": "anos80pretoteneon", "categorias": "all anos80" },
    { "nome": "Arca de Noé", "pasta": "arcadenoe", "categorias": "all religiosos" },
    { "nome": "Baby Monster", "pasta": "babymonster", "categorias": "all musica bandacoreana k-pop" },
    { "nome": "Barbie", "pasta": "barbie", "categorias": "all desenhos filme boneca meninas" },
    { "nome": "Batizado", "pasta": "batizado", "categorias": "all religiosos batizado" },
    { "nome": "Black Clover", "pasta": "blackclover", "categorias": "all anime" },
    { "nome": "Bluey e Bingo", "pasta": "blueyebingo", "categorias": "all desenhos animais" },
    { "nome": "Bolofofos Menina", "pasta": "bolofofosmenina", "categorias": "all desenhos musicas" },
    { "nome": "Bolofofos Menino", "pasta": "bolofofosmenino", "categorias": "all desenhos musicas" },
    { "nome": "Borboleta Lilas", "pasta": "borboletalilas", "categorias": "all borboletas animais" },
    { "nome": "Branca de Neve Azul Bebe", "pasta": "brancadeneveazulbebe", "categorias": "all princesas contodefadas filme disney" },
    { "nome": "Branca de Neve", "pasta": "brancadeneve", "categorias": "all princesas contodefadas filme disney" },
    { "nome": "Brasil Copa Sou Brasil até a Alma", "pasta": "brasilcopasoubrasilateaalma", "categorias": "all futebol times copa" },
    { "nome": "Brasil Copa Vai Brasil", "pasta": "brasilcopavaibrasil", "categorias": "all futebol times copa" },
    { "nome": "Brawl Star", "pasta": "brawlstar", "categorias": "all jogos" },
    { "nome": "Casa Magica da Gabby", "pasta": "casamagicadagabby", "categorias": "all desenhos magia" },
    { "nome": "Castelo Princesa Rosa", "pasta": "casteloprincesarosa", "categorias": "all princesas disney" },
    { "nome": "Churrasco Cilindro Wisky", "pasta": "churrascocilindrowisky", "categorias": "all churrasco boteco" },
    { "nome": "Chá de Bebe Azul Elefantinho Balão", "pasta": "chadebebeazulelefantinhobalao", "categorias": "all chadebebe" },
    { "nome": "Chá de Bebe Ursinho Rosa", "pasta": "chadebebeursinhorosa", "categorias": "all chadebebe" },
    { "nome": "Chá revelação Rosa/Azul – Ursinho", "pasta": "charevelacaorosaazulursinho", "categorias": "all charevelacao" },
    { "nome": "Corinthians", "pasta": "corinthians", "categorias": "all times futebol" },
    { "nome": "Crash Royale", "pasta": "crashroyale", "categorias": "all jogos" },
    { "nome": "Dia das Mães Rosas", "pasta": "diadasmaesrosas", "categorias": "all datacomemorativa" },
    { "nome": "Dino Baby", "pasta": "dinobaby", "categorias": "all dinossauro animais" },
    { "nome": "Divertidamente 2", "pasta": "divertidamente2", "categorias": "all filme" },
    { "nome": "Dourado e Branco Romano", "pasta": "douradoebrancoromano", "categorias": "all diversos" },
    { "nome": "Dourado", "pasta": "dourado", "categorias": "all diversos" },
    { "nome": "Fazendinha Azul", "pasta": "fazendinhaazul", "categorias": "all fazendinha" },
    { "nome": "Fazendinha Vermelha / Rosa", "pasta": "fazendinhavermelharosa", "categorias": "all fazendinha" },
    { "nome": "Feijoada", "pasta": "feijoada", "categorias": "all boteco diversos" },
    { "nome": "Festa Junina / Julina", "pasta": "festajuninajulina", "categorias": "all arraia datacomemorativa" },
    { "nome": "Festa Junina Arraia Aquarela", "pasta": "festajuninaarraiaaquarela", "categorias": "all arraia datacomemorativa" },
    { "nome": "Festa Junina Arraia Cilindro Girassol", "pasta": "festajuninaarraiacilindrogirassol", "categorias": "all arraia datacomemorativa" },
    { "nome": "Festa Junina Arraia em Casa", "pasta": "festajuninaarraiaemcasa", "categorias": "all arraia datacomemorativa" },
    { "nome": "Flamengo", "pasta": "flamengo", "categorias": "all times futebol" },
    { "nome": "Frozen", "pasta": "frozen", "categorias": "all princesas filme contodefadas disney" },
    { "nome": "Fundo do Mar Aquarela", "pasta": "fundodomaraquarela", "categorias": "all fundodomar" },
    { "nome": "Fundo do Mar Menina", "pasta": "fundodomarmenina", "categorias": "all fundodomar" },
    { "nome": "Futebol Barcelona", "pasta": "futebolbarcelona", "categorias": "all times futebol" },
    { "nome": "Futebol", "pasta": "futebol", "categorias": "all times futebol" },
    { "nome": "Glitter Lilás", "pasta": "glitterlilas", "categorias": "all diversos" },
    { "nome": "Guerreiras do K-POP Neon", "pasta": "guerreirasdokpopneon", "categorias": "all k-pop musica bandacoreana" },
    { "nome": "Guerreiro K-POP Gato", "pasta": "guerreirokpopgato", "categorias": "all k-pop musica" },
    { "nome": "Homem Aranha Cute", "pasta": "homemaranhacute", "categorias": "all herois filme desenhos cute" },
    { "nome": "Jardim Borboleta", "pasta": "jardimborboleta", "categorias": "all borboletas animais flores" },
    { "nome": "Joãozinho Praia", "pasta": "joaozinhopraia", "categorias": "all desenhos praia" },
    { "nome": "Liga da Justiça c/ Painel Lateral", "pasta": "ligadajusticacpainellateral", "categorias": "all herois filme desenhos" },
    { "nome": "Lucas Neto", "pasta": "lucasneto", "categorias": "all youtuber diversos" },
    { "nome": "Magali Baby", "pasta": "magalibaby", "categorias": "all desenhos cute" },
    { "nome": "Maria Clara e JP", "pasta": "mariaclaraejp", "categorias": "all youtuber diversos" },
    { "nome": "Mario Brós", "pasta": "mariobros", "categorias": "all jogos desenhos" },
    { "nome": "Meninas Superpoderosas", "pasta": "meninassuperpoderosas", "categorias": "all desenhos" },
    { "nome": "Mickey Baby Azul", "pasta": "mickeybabyazul", "categorias": "all disney desenhos cute" },
    { "nome": "Mickey Safari", "pasta": "mickeysafari", "categorias": "all disney desenhos animais" },
    { "nome": "Mickey Tradicional", "pasta": "mickeytradicional", "categorias": "all disney desenhos" },
    { "nome": "MineCraft TNT", "pasta": "minecrafttnt", "categorias": "all jogos" },
    { "nome": "MineCraft", "pasta": "minecraft", "categorias": "all jogos" },
    { "nome": "Minnie Vermelha", "pasta": "minnievermelha", "categorias": "all disney desenhos" },
    { "nome": "Moana", "pasta": "moana", "categorias": "all princesas filme disney fundodomar" },
    { "nome": "Monstros S.A – Boo", "pasta": "monstrossaboo", "categorias": "all filme desenhos" },
    { "nome": "Moranguinho x", "pasta": "moranguinhox", "categorias": "all desenhos frutas" },
    { "nome": "Mulher Maravilha", "pasta": "mulhermaravilha", "categorias": "all herois filme desenhos" },
    { "nome": "My Litle Poney", "pasta": "mylitleponey", "categorias": "all desenhos animais" },
    { "nome": "Naruto", "pasta": "naruto", "categorias": "all anime desenhos" },
    { "nome": "One Piece", "pasta": "onepiece", "categorias": "all anime" },
    { "nome": "Os Rosas", "pasta": "osrosas", "categorias": "all youtuber diversos" },
    { "nome": "Ovelha Rosinha", "pasta": "ovelharosinha", "categorias": "all animais cute" },
    { "nome": "Painel Pallet – Meus 20 anos Depois dos 20", "pasta": "painelpalletmeus20anosdepoisdos20", "categorias": "all diversos 20anos" },
    { "nome": "Pantera Negra", "pasta": "panteranegra", "categorias": "all herois filme" },
    { "nome": "Patrulha Canina", "pasta": "patrulhacanina", "categorias": "all desenhos animais" },
    { "nome": "Playstation", "pasta": "playstation", "categorias": "all jogos" },
    { "nome": "Pool Party Menino", "pasta": "poolpartymenino", "categorias": "all diversos fundodomar" },
    { "nome": "Prata", "pasta": "prata", "categorias": "all diversos" },
    { "nome": "Preto Com Glitter Rosa", "pasta": "pretocomglitterrosa", "categorias": "all diversos" },
    { "nome": "Princesa Tiana", "pasta": "princesatiana", "categorias": "all princesas filme disney" },
    { "nome": "Princesas Disney", "pasta": "princesasdisney", "categorias": "all princesas contodefadas filme disney" },
    { "nome": "Rapunzel Castelo", "pasta": "rapunzelcastelo", "categorias": "all princesas contodefadas filme" },
    { "nome": "Roblox", "pasta": "roblox", "categorias": "all jogos" },
    { "nome": "Rosas Azuis", "pasta": "rosasazuis", "categorias": "all jogos" },
    { "nome": "Sereia Splash", "pasta": "sereiasplash", "categorias": "all fundodomar desenhos" },
    { "nome": "Shimmer Wall Holográfico/Frutacor", "pasta": "shimmerwallholograficofrutacor", "categorias": "all diversos" },
    { "nome": "Shimmer Wall", "pasta": "shimmerwall", "categorias": "all diversos" },
    { "nome": "Sititch Milk Shake", "pasta": "sititchmilkshake", "categorias": "all disney filme desenhos" },
    { "nome": "Sky – Patrulha Canina", "pasta": "skypatrulhacanina", "categorias": "all desenhos animais" },
    { "nome": "Spider Man Miles Morales", "pasta": "spidermanmilesmorales", "categorias": "all herois filme desenhos jogos" },
    { "nome": "Spirit", "pasta": "spirit", "categorias": "all desenhos animais" },
    { "nome": "Stitch Angel", "pasta": "stitchangel", "categorias": "all disney filme desenhos" },
    { "nome": "Stitch Chiclete", "pasta": "stitchchiclete", "categorias": "all disney filme desenhos" },
    { "nome": "Stitch MilkShake", "pasta": "stitchmilkshake", "categorias": "all disney filme desenhos" },
    { "nome": "Super Book", "pasta": "superbook", "categorias": "all religiosos" },
    { "nome": "São Paulo", "pasta": "saopaulo", "categorias": "all times futebol" },
    { "nome": "Tardezinha", "pasta": "tardezinha", "categorias": "all diversos boteco" },
    { "nome": "Toy Story", "pasta": "toystory", "categorias": "all filme desenhos" },
    { "nome": "Turma da Mônica", "pasta": "turmadamonica", "categorias": "all desenhos" },
    { "nome": "Unicórnio", "pasta": "unicornio", "categorias": "all diversos cute" },
    { "nome": "Ursinho Azul Chá de Bebe", "pasta": "ursinhoazulchadebebe", "categorias": "all chadebebe" }
]

def verificar_e_criar_pastas(caminho_imagens):
    print("=" * 60)
    print(" PROCESSANDO E CRIANDO PASTAS EM FALTA NO SEU SITE")
    print("=" * 60)
    
    try:
        pastas_reais = os.listdir(caminho_imagens)
    except FileNotFoundError:
        print("Erro: O caminho especificado não foi encontrado!")
        return

    pastas_reais_minusculo = {p.lower(): p for p in pastas_reais}
    pastas_criadas = 0
    erros_letra = 0

    for tema in bancoDadosTemas:
        pasta_codigo = tema["pasta"]
        nome_tema = tema["nome"]
        
        caminho_esperado = os.path.join(caminho_imagens, pasta_codigo)
        
        # Se a pasta não existe no local
        if not os.path.exists(caminho_esperado):
            
            # Caso ela já exista mas com letras maiúsculas/minúsculas trocadas
            if pasta_codigo.lower() in pastas_reais_minusculo:
                erros_letra += 1
                nome_real = pastas_reais_minusculo[pasta_codigo.lower()]
                print(f"⚠️ AVISO DE CAIXA: O tema '{nome_tema}' existe no computador como '{nome_real}'")
                print(f"   mas o código procura por '{pasta_codigo}'. (O Windows ignora isto, mas pode dar erro em servidores Linux).\n")
            
            # Se a pasta realmente não existir de forma alguma
            else:
                print(f"📁 A criar pasta para o tema: '{nome_tema}'")
                try:
                    os.makedirs(caminho_esperado)
                    print(f"   --> ✨ Pasta '{pasta_codigo}' criada com sucesso!")
                    pastas_criadas += 1
                except Exception as e:
                    print(f"   --> ❌ Falha ao tentar criar a pasta: {e}")

    print("=" * 60)
    print(f"🎉 Processo concluído!")
    print(f"   --> Novas pastas criadas: {pastas_criadas}")
    print(f"   --> Avisos de letras (Maiúsculas/Minúsculas): {erros_letra}")
    print("=" * 60)

if __name__ == "__main__":
    caminho = input("Digite o caminho completo da pasta 'Imagem' do seu projeto: ").strip()
    verificar_e_criar_pastas(caminho)