# Relatório de auditoria — DreamCraft Festas

## Escopo e método

Foi auditado o conteúdo integral do arquivo `sitedreamcraftfestas.zip`, composto por 10 páginas HTML, 12 folhas de estilo e 8 arquivos JavaScript. Foram executadas verificações de sintaxe JavaScript com Node.js, análise das estruturas HTML, validação de referências locais, inspeção de inicialização dos componentes, parsing das folhas CSS e teste HTTP local de todas as páginas.

## Resumo executivo

O código JavaScript está sintaticamente válido e todas as páginas HTML existentes respondem com HTTP 200 quando servidas localmente. Foram identificados e corrigidos dois problemas de código: a página `em-breve.html` estava estruturalmente corrompida e o zoom do `script.js` não era protegido contra elementos ausentes. Também foi corrigida a codificação da mensagem enviada ao WhatsApp.

O bloqueio funcional mais importante não está nos scripts: o ZIP original não contém os diretórios de imagens e logotipos referenciados pelo site. A verificação encontrou **48 ocorrências de referências locais ausentes**. Portanto, mesmo com o código corrigido, o site exibirá imagens quebradas, logos ausentes e catálogos vazios até que os assets originais sejam reinseridos ou os caminhos sejam ajustados para o local correto.

## Correções aplicadas

| Prioridade | Arquivo | Problema | Solução aplicada |
|---|---|---|---|
| Alta | `em-breve.html` | A linha 6 continha `</html>head`; não havia fechamento correto de `head`, nem `body`, `doctype` funcional ou título da página. | Reescrita da estrutura como documento HTML válido, com `title`, `body`, `main`, imagem de aviso e botão de retorno para `index.html`. |
| Alta | `script.js` | O bloco de zoom chamava `modal.classList`, `imgFull.src` e `btnFechar.addEventListener` sem conferir se os elementos existiam. Isso poderia gerar `TypeError` em qualquer página que carregasse o script sem o modal completo. | Todo o bloco foi condicionado à existência de `modal`, `imgFull` e `btnFechar`; a imagem também é validada antes do uso. |
| Média | `script.js` | A mensagem do WhatsApp misturava `%0A` manual com texto não codificado. Nomes, e-mails ou mensagens com espaços, acentos e caracteres reservados poderiam gerar URL incorreta. | A mensagem passou a usar quebras de linha normais e `encodeURIComponent(texto)` antes de montar a URL. A nova janela também usa `noopener,noreferrer`. |

## Pendências que exigem os arquivos originais

O ZIP não possui nenhum dos diretórios abaixo, embora eles sejam referenciados pelo HTML, CSS ou JavaScript:

- `Logo/`
- `Portifolio/`
- `Quem-somos/`
- `Imagem/`
- `bolofake/`
- `projetos/`
- `festa-pegmonte/` ou `Festa-Pegmonte/`

Entre os arquivos esperados estão `Logo/logo-decoracoes.png`, `Logo/logo-festas.png`, `Logo/emconstrução.jpg`, as imagens do portfólio, `Quem-somos/Quem-somos.png`, `bolofake/capa.webp` e as imagens dos projetos. Os scripts de catálogo também montam dinamicamente caminhos como `./Imagem/<tema>/<numero>.webp` e `./festa-pegmonte/<tema>/<numero>.webp`; sem essas pastas, os cards não terão imagens para exibir.

### Como concluir essa correção

1. Recolocar no projeto as pastas de assets que foram omitidas do ZIP, preservando exatamente maiúsculas, minúsculas, acentos e extensão dos nomes.
2. Conferir se o servidor de hospedagem diferencia maiúsculas de minúsculas. Linux diferencia `Portifolio` de `Portfolio` e `Festa-Pegmonte` de `festa-pegmonte`.
3. Depois de copiar os assets, executar novamente a verificação de referências locais. O resultado esperado é `TOTAL_MISSING=0`.
4. Abrir os catálogos e testar carregamento, filtros, busca, carrossel, lightbox e botões de orçamento.

## Achados de qualidade não bloqueantes

Foram observadas duplicidades de opção `Conto de Fadas` em alguns selects e pequenos erros de texto, como `Grerreiras do K-POP` e `personalizasa`. Esses itens não impedem a execução, mas devem ser corrigidos para evitar filtros duplicados ou inconsistentes. A auditoria também confirmou que as folhas CSS não apresentam erros de parsing.

A página `catalogo-pegmonte.html` usa cabeçalho próprio em vez de `header.js` e `footer.js`. Isso não gera erro de sintaxe, mas cria duas implementações de navegação no projeto; recomenda-se padronizar o componente quando houver oportunidade de manutenção.

## Validações executadas

- `node --check` em todos os 8 arquivos JavaScript: ** aprovado**.
- Estrutura básica (`DOCTYPE`, `html`, `head`, `body` e fechamentos) nas 10 páginas: **aprovada após a correção**.
- Parser CSS `tinycss2` em todas as 12 folhas: **zero erros de parsing**.
- Servidor HTTP local: **10/10 páginas retornaram HTTP 200**.
- Referências de arquivos locais: **48 ocorrências ausentes**, pendência causada pelos assets não incluídos no ZIP.

## Estado final

As correções de código foram aplicadas no projeto de trabalho e o relatório foi gerado. A entrega não pode ser considerada visualmente completa até que os diretórios de imagens/logotipos sejam recuperados, pois esses arquivos não estavam presentes no material recebido.
