window.LB={pillars:['Posicionar','Atrair','Converter','Escalar']};
const single=(id,p,text,labels)=>({id,p,text,type:'single',options:labels.map((label,i)=>({label,value:i,score:Math.round(i*100/(labels.length-1))}))});
const slider=(id,p,text)=>({id,p,text,type:'slider'});
const multi=(id,p,text,labels)=>({id,p,text,type:'multi',options:labels.map((label,i)=>({label,value:i,score:i===labels.length-1?100:0})),exclusive:labels.length-1});
LB.questions=[
slider('p1',0,'Quão claro está por que um cliente deveria escolher sua empresa?'),
single('p2',0,'Sua empresa explica o que faz em uma frase simples?',['Ainda não','Mais ou menos','Sim, com clareza']),
single('p3',0,'Qual situação descreve melhor sua marca?',['Estamos construindo tudo','Nossa comunicação parece genérica','Temos identidade, mas falta posicionamento','Temos identidade e posicionamento claros']),
slider('p4',0,'Sua identidade visual representa o nível de empresa que vocês querem ser?'),
single('p5',0,'O visual é consistente no site, redes e propostas?',['Nada consistente','Pouco consistente','Na maioria das vezes','Sempre']),
multi('p6',0,'O que precisa melhorar na sua marca?',['Identidade visual','Posicionamento','Clareza da mensagem','Percepção de valor','Autoridade','Nenhum desses pontos']),
single('a1',1,'Com que frequência vocês publicam conteúdo relevante?',['Quase nunca','Sem regularidade','Semanalmente','Com frequência e planejamento']),
slider('a2',1,'Quão previsível é a chegada de novas oportunidades?'),
single('a3',1,'Como novos clientes chegam até vocês?',['Não temos uma fonte clara','Quase só por indicação','Por alguns canais, sem previsibilidade','Por canais diversos e acompanhados']),
single('a4',1,'Sua empresa tem um caminho para transformar visitantes em contatos?',['Não','Temos contato, sem acompanhamento','Temos captação parcialmente organizada','Sim, com captação e acompanhamento']),
single('a5',1,'Como vocês trabalham anúncios pagos?',['Sem estratégia ou resultados claros','Ainda não usamos','Testamos, mas não medimos bem','Com objetivos, mensuração e retorno acompanhado']),
multi('a6',1,'Quais dificuldades de atração estão presentes?',['Falta de constância no conteúdo','Poucas oportunidades','Visitantes não viram contatos','Anúncios sem retorno claro','Nenhuma dessas dificuldades']),
slider('c1',2,'Quão claro é seu processo do primeiro contato ao fechamento?'),
single('c2',2,'Vocês sabem quais contatos têm mais chance de comprar?',['Não qualificamos','Avaliamos por intuição','Temos alguns critérios','Usamos critérios definidos']),
single('c3',2,'Como terminam as reuniões comerciais?',['Raramente avançam','Há interesse, mas poucos próximos passos','Avançam, com algumas perdas','Têm próximos passos e boa conversão']),
single('c4',2,'Como vocês acompanham propostas em aberto?',['Não acompanhamos','De forma improvisada','Com rotina parcial','Com rotina e responsáveis definidos']),
single('c5',2,'Como seus clientes percebem o preço?',['O preço trava quase toda negociação','Pedem desconto com frequência','Entendem parte do valor','Entendem e reconhecem o valor']),
multi('c6',2,'O que mais dificulta suas vendas?',['Reuniões que não fecham','Propostas pouco claras','Falta de acompanhamento','Dificuldade de vender ofertas de maior valor','Nenhum desses pontos']),
slider('e1',3,'A operação funciona bem sem a presença constante do fundador?'),
single('e2',3,'Os processos essenciais estão documentados?',['Não','Poucos','A maioria','Sim, e são usados pela equipe']),
single('e3',3,'Como tarefas e responsáveis são organizados?',['Tudo fica na cabeça do fundador','Em mensagens dispersas','Em ferramentas, com algumas lacunas','Com prioridades e responsáveis claros']),
single('e4',3,'Vocês acompanham indicadores para decidir?',['Não acompanhamos','Só faturamento ou saldo','Alguns indicadores, sem rotina','Indicadores com rotina de análise']),
single('e5',3,'A empresa conseguiria atender mais clientes mantendo a qualidade?',['Não, já estamos sobrecarregados','Só com muito esforço','Com alguns ajustes','Sim, temos capacidade e processos']),
multi('e6',3,'O que limita o crescimento hoje?',['Dependência do fundador','Processos indefinidos','Organização interna','Falta de direção para crescer','Nenhum desses pontos'])];
