import os

def encontrar_pastas_vazias(caminho_raiz):
    print(f"Analisando pastas em: {caminho_raiz}\n")
    pastas_vazias = []

    # os.walk percorre a pasta raiz, subpastas e arquivos
    for pasta_atual, subpastas, arquivos in os.walk(caminho_raiz):
        
        # Se não há arquivos E não há subpastas, a pasta está 100% vazia
        if not arquivos and not subpastas:
            pastas_vazias.append(pasta_atual)
            print(f"[VAZIA] -> {pasta_atual}")

    # Resumo final
    print("\n" + "="*40)
    print(f"Análise concluída!")
    print(f"Total de pastas vazias encontradas: {len(pastas_vazias)}")
    print("="*40)
    
    return pastas_vazias

# Execução do aplicativo
if __name__ == "__main__":
    # Pede o caminho para o usuário
    caminho = input("Digite o caminho completo da pasta que deseja analisar: ").strip()
    
    # Verifica se o caminho digitado realmente existe
    if os.path.exists(caminho) and os.path.isdir(caminho):
        encontrar_pastas_vazias(caminho)
    else:
        print("Erro: O caminho digitado não existe ou não é uma pasta válida.")