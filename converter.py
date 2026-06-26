import os
from PIL import Image

def converter_para_webp():
    # Caminho da pasta atual onde o script está
    diretorio_raiz = os.getcwd()
    
    print("Iniciando conversão... Aguarde.")

    # Percorre todas as pastas e subpastas
    for raiz, diretorios, arquivos in os.walk(diretorio_raiz):
        for arquivo in arquivos:
            # Verifica se o arquivo é uma imagem (jpg, jpeg ou png)
            if arquivo.lower().endswith((".jpg", ".jpeg", ".png")):
                caminho_completo = os.path.join(raiz, arquivo)
                
                # Define o novo nome com extensão .webp
                nome_sem_extensao = os.path.splitext(caminho_completo)[0]
                novo_caminho = nome_sem_extensao + ".webp"

                try:
                    # Abre a imagem e salva como webp
                    with Image.open(caminho_completo) as img:
                        img.save(novo_caminho, "webp", quality=80)
                    
                    # OPCIONAL: Remove o arquivo original após converter
                    # Se quiser manter os originais por segurança, comente a linha abaixo
                    os.remove(caminho_completo)
                    
                    print(f"Convertido: {arquivo} -> {os.path.basename(novo_caminho)}")
                except Exception as e:
                    print(f"Erro ao converter {arquivo}: {e}")

    print("\n--- Processo concluído! ---")

if __name__ == "__main__":
    converter_para_webp()