const fs = require('fs');
const path = require('path');

// CONFIGURAÇÕES DE CAMINHO (Ajuste se suas pastas estiverem em lugares diferentes)
const PASTA_IMAGENS = path.join(__dirname, 'festa-completa');
const ARQUIVO_SCRIPT = path.join(__dirname, 'scriptcompleta.js'); // ou o caminho correto até o seu JS

function atualizarBanco() {
  console.log('🔄 Iniciando contagem automatizada de imagens...');

  if (!fs.existsSync(PASTA_IMAGENS)) {
    console.error(`❌ Erro: A pasta de imagens não foi encontrada em: ${PASTA_IMAGENS}`);
    return;
  }

  // 1. Lê o conteúdo atual do seu scriptcompleta.js
  let conteudoScript = fs.readFileSync(ARQUIVO_SCRIPT, 'utf8');

  // 2. Mapeia a quantidade de imagens reais por pasta
  const mapaImagens = {};
  const itens = fs.readdirSync(PASTA_IMAGENS);

  itens.forEach(item => {
    const caminhoDaPasta = path.join(PASTA_IMAGENS, item);
    if (fs.statSync(caminhoDaPasta).isDirectory()) {
      const arquivos = fs.readdirSync(caminhoDaPasta);
      // Filtra apenas arquivos que terminam com .webp
      const qtdWebp = arquivos.filter(arq => arq.toLowerCase().endsWith('.webp')).length;
      mapaImagens[item] = qtdWebp;
    }
  });

  // 3. Expressão regular para encontrar e capturar o array bancoDadosTemas no seu arquivo
  const regexBanco = /(const bancoDadosTemas = \[\s*)([\s\S]*?)(\s*\];)/;

  if (!regexBanco.test(conteudoScript)) {
    console.error('❌ Erro: Não foi possível localizar "const bancoDadosTemas = [...];" no seu scriptcompleta.js');
    return;
  }

  // 4. Captura o miolo do array (as linhas com os objetos dos temas)
  const mioloDoArray = conteudoScript.match(regexBanco)[2];
  
  // Dividimos por linhas para processar tema por tema
  const linhas = mioloDoArray.split('\n');

  const linhasAtualizadas = linhas.map(linha => {
    // Procura pela propriedade pasta: "nome_da_pasta"
    const regexPasta = /pasta:\s*"([^"]+)"/;
    const matchPasta = linha.match(regexPasta);

    if (matchPasta) {
      const nomePasta = matchPasta[1];
      const totalImgsReais = mapaImagens[nomePasta] || 0;

      // Se a pasta não tiver imagens, avisa no console para você verificar
      if (totalImgsReais === 0) {
        console.warn(`⚠️ Aviso: Nenhuma imagem encontrada para a pasta "${nomePasta}"`);
      }

      // Se já existia a propriedade totalImgs, removemos para reinserir atualizada
      let linhaLimpa = linha.replace(/,\s*totalImgs:\s*\d+/, '');

      // Inserimos a propriedade totalImgs antes do fechamento do objeto '}'
      if (linhaLimpa.includes('}')) {
        return linhaLimpa.replace('}', `, totalImgs: ${totalImgsReais} }`);
      }
    }
    return linha;
  });

  // 5. Junta tudo de volta e sobrescreve o arquivo scriptcompleta.js
  const novoMiolo = linhasAtualizadas.join('\n');
  const novoConteudoScript = conteudoScript.replace(regexBanco, `$1${novoMiolo}$3`);

  fs.writeFileSync(ARQUIVO_SCRIPT, novoConteudoScript, 'utf8');
  console.log('✅ Sucesso! O arquivo scriptcompleta.js foi atualizado com a quantidade exata de imagens de cada pasta.');
}

// Executa a função
atualizarBanco();