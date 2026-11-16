# Diagnóstico LosBuenos V0.3

Área estática independente em /diagnostico-losbuenos/. Sem instalação ou build. Sirva via HTTP (por exemplo, GitHub Pages) para exportar o PDF com todos os recursos locais.

24 perguntas em quatro pilares; sliders, escolha única e múltipla escolha; scores 0–100; recomendações independentes dos scores. Identidade original com logo SVG, The National, Geomanist, fundo preto e ruído sutil.

Fluxo final: resultado → nome, telefone e e-mail → aceite de contato sobre o diagnóstico → Confirmar dados → POST para o receptor → confirmação contactSaved:true → Baixar PDF / Enviar pelo WhatsApp. A ausência de confirmação mantém os botões bloqueados. WhatsApp abre com os dados de contato e resumo; o usuário confirma o envio. Nenhum CSV. Contatos ficam apenas na memória da página antes do envio; respostas do questionário persistem no navegador para retomada.

A URL /exec do receptor está em assets/js/config.js. O receptor deve implementar o protocolo contact-v1, registrar contact e retornar {ok:true,submissionId:<id recebido>,contactSaved:true}. A versão anterior do receptor NÃO atende esse protocolo. É obrigatório atualizar a implantação do Apps Script antes de liberar esta versão ao público.

As requisições devem ser confirmadas no navegador, sem no-cors ou sucesso presumido. O mesmo ID é mantido para tentativas e correções de contato na mesma tela. O servidor atualiza os dados de contato sem duplicar a linha. Revisar respostas e voltar ao resultado inicia outro envio.

PDF: html2pdf.js 0.10.1 com dependências empacotadas localmente, integridade SHA-512 verificada na obtenção. Gera um PDF de página contínua com o resultado e os contatos; não envia o PDF a terceiros. A logo PNG usada no PDF é uma renderização do SVG original. Referência da biblioteca: https://ekoopmans.github.io/html2pdf.js/

Validação: fluxo completo em Edge; campos e aceite obrigatórios; falha e receptor antigo bloqueiam ações; confirmação libera ações; correção exige nova confirmação; download PDF real e inspeção visual; layout de 390px sem overflow. Receptor testado localmente com migração preservando linhas antigas, validação de contato e deduplicação. Teste real de contatos pendente da atualização do Apps Script.

Perguntas, produtos e pesos comerciais são preliminares, conforme a V0.1. Separação: questions.js, products.js, rules.js, scoring.js, recommendations.js, app.js, sharing.js, config.js e CSS próprio.
Abertura direta via file://: o botão PDF usa a impressão do navegador; escolha Salvar como PDF. Publicado via HTTP/HTTPS, gera download direto. Ambos os caminhos foram verificados.
