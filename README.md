# goHealthy

*******

Tabelas de conteúdo
1. [O Problema](#problem)
2. [O que é o goHealthy?](#whatgoHealthy)
3. [Protótipo](#prototype)
4. [Objetivos](#statement)
6. [Requisitos](#Requirements)
7. [Diagrama de Caso de Uso](#uscd)
8. [Diagrama de Classes](#cd)
9. [Diagrama de Sequência](#sd)
10.[Core Team](#team)

*******

<div id="problem" />

### O Problema
> De acordo com [Yorks DM, Frothingham CA, Schuenke MD. Effects of Group Fitness Classes on Stress and Quality of Life of Medical Students. J Am Osteopath Assoc 2017](https://www.ncbi.nlm.nih.gov/pubmed/29084328):

*Participar em um grupo de atividades físicas  provou-se reduzir signiﬁcantemente os níveis de stress e
aumentou signiﬁcantemente a saúde mental e  emocional QOL(Quality of Life) comparado com  pessoas que realizam atividades regulares sozinhas.*

<div id="whatgoHealthy" />

### O que é o goHealthy?
   Go Healthy é uma iniciativa que se baseia em resultados de estudos científicos sobre a melhora saúde através da prática de atividades físicas e o “poder do coletivo” baseado nesses dois pilares a aplicação visa incentivar a prática de atividade física com foco na melhoria da qualidade de vida e saúde.
        	Os usuários podem se cadastrar no aplicativo e assim criar eventos relacionados à prática de atividades físicas onde quaisquer pessoas podem se cadastrar e participar do evento que foi criado se envolvendo cada vez mais com as atividades através das estratégias de gamificação e sistema de incentivo.
        	A ferramenta também provê a criação de um perfil atlético dos usuários baseado em características fisiológicas inseridas no app o que é utilizado para prover recomendações de novos eventos bem como os melhores locais para a prática de exercícios.


<div id="prototype" />

### Protótipo

![prototypeDanilo](https://user-images.githubusercontent.com/44952113/67134054-44c45380-f1e6-11e9-9ba3-49a8abbb8517.jpg)


<div id="statement" />

### Objetivos
 1. Aumentar a frequência e a motivação dos usuários na  prática de atividade físicas;
 2. Aumentar a qualidade de vida dos usuários;
 3. Promover interação entre os praticantes e potenciais  praticantes de atividades físicas;
 4. Recomendar e avaliar os melhores lugares para a prática de  atividades físicas;
 5. Formar grupo de pessoas em prol de uma única causa, isto é,  criar hábitos saudáveis.



### Requisitos

<div id="Requirements" /> 

#### Requisitos funcionais

- [RF001] O sistema deve prover o cadastro de usuários;
- [RF002] O sistema deve prover o login de usuários;
- [RF003] O sistema deve permitir que o usuário cadastre informações Fisiológicas(peso, altura, etc);
- [RF004] O sistema deve permitir que o usuário cadastre eventos (titulo do evento,data e hora, local, público que o evento está direcionado);
- [RF005] O sistema deve permitir que o usuário busque eventos;
- [RF006] O sistema deve apresentar informações do evento alvo; 
- [RF007] O sistema deve permitir que o usuário entre em eventos;
- [RF008] O sistema deve prover informações dos usuários no evento alvo; 
- [RF009] O sistema deve permitir que os participantes de um evento o possam avaliar;
- [RF010] O sistema deve permitir que participantes de um evento com presença possa denunciar quaisquer dos participantes;
- [RF011] O sistema deve prover aos usuários criadores do evento a avaliação da presença dos participantes;
- [RF012] O sistema deve prover interação por mensagem (chat) entre os participantes do evento;
- [RF013] O sistema deve classificar a capacidade do usuário relativo a atividades físicas;
- [RF014] O sistema deverá permitir que o usuário cadastre seu perfil atlético (nível de exercícios que é capaz de executar);
- [RF015] O sistema deverá prover alguma forma de classificar a assiduidade dos usuários;
- [RF016] O sistema deverá permitir para participantes do evento, o check-in como meio de confirmar sua participação;
- [RF017] O sistema deverá fornecer um feed de evolução; 
- [RF018] O sistema deverá fornecer integrações com IOT;
- [RF019] O sistema deverá apresentar informações de progresso do aspirante;
- [RF020] O sistema deverá prover para participantes do evento a opção de adicionar em amigos participantes do mesmo evento;
- [RF021] O sistema deverá possuir uma página de perfil do usuário;
- [RF022] O sistema deverá recomendar eventos baseado na classificação do usuário;
- [RF023] O sistema deverá apresentar diversos filtros para busca de eventos;
- [RF024] O sistema deverá prover uma lista de amigos;
- [RF025] O sistema deverá apresentar um feed de evolução(atividades) ao usuário referente aos seus amigos;
- [RF026] O sistema deverá prover aos usuários informações referente a próxima atividade (Confirmação em evento) de seus amigos;
- [RF027] O sistema deverá prover chat para a comunicação do usuário com0 seus amigos;
- [RF028] O sistema deverá fornecer nos eventos a informação do nível médio de idade dos participantes;
- [RF029] O sistema deverá apresentar nos eventos a informações do nível de exercício mínimo imposto pelo criador do evento;
- [RF030] O sistema deverá apresentar informações do nível de exercício médio dos participantes do evento;
- [RF0031] O sistema deverá prover uma busca de usuários;

#### Requisitos não funcionais

- [RNF001] O sistema deve priorizar usabilidade;
- [RNF002] O sistema deverá prover classificação inteligente;
- [RNF003] O sistema deverá possuir uma arquitetura escalável;
- [RNF004] O sistema deverá permitir expansão para diversos tipos de atividade física;
- [RNF005] O sistema não deve permitir a participação de um usuário em eventos que possuem o mesmo intervalo de tempo;
- [RNF006] Os eventos a serem criados devem prover informações apenas relacionadas ao evento;
- [RNF007] O sistema deve possuir uma interface gráfica moderna;
- [RNF008] O sistema deve ser agradável;
- [RNF009] O sistema deve descartar os eventos em 24 horas após sua finalização;
- [RNF010] O sistema não deve descartar quaisquer dados e sim reaproveitar, isto é, transferir para BIG DATA (Cuidado com a LGPD);

<div id="uscd" />

### Diagrama de Caso de Uso

![diagrama_CU](https://user-images.githubusercontent.com/54459438/67315054-29a25e00-f4dc-11e9-869f-b02ceb1d748b.jpeg)


<div id="cd" />

### Diagrama de Classes

![Diagrama de Classe](https://user-images.githubusercontent.com/54459438/67316515-f3b2a900-f4de-11e9-9400-85a975ab3af0.jpg)

<div id="sd" />

### Diagrama de Sequência]

<div id="team" />

### Core Team

![TeamGoHealthyV3](https://user-images.githubusercontent.com/44952113/67019700-7698c580-f0d3-11e9-85ab-ad9c7c361b90.jpg)
