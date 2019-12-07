# Hoove

*******


1. [O Problema](#problem)  
2. [O que é o Hoove?](#whatgoHealthy)  
3. [Protótipo](#prototype)  
4. [Objetivos](#statement)  
5. [Requisitos](#Requirements)  
6. [Diagrama de Caso de Uso](#uscd)  
7. [Especificações de Casos de Uso](#duscd)
8. [Diagrama de Classes](#cd)  
9. [Diagrama de Sequência](#sd)  
10. [Diagrama de Estado](#std)
11. [Tecnologias](#tec)  
12. [Core Team](#team)  


*******

<div id="problem" />

### O Problema
> De acordo com [Yorks DM, Frothingham CA, Schuenke MD. Effects of Group Fitness Classes on Stress and Quality of Life of Medical Students. J Am Osteopath Assoc 2017](https://www.ncbi.nlm.nih.gov/pubmed/29084328):

*Participar em um grupo de atividades físicas  provou-se reduzir signiﬁcantemente os níveis de stress e
aumentou signiﬁcantemente a saúde mental e  emocional QOL(Quality of Life) comparado com  pessoas que realizam atividades regulares sozinhas.*

<div id="whatgoHealthy" />

### O que é o Hoove?
   Hoove é uma iniciativa que se baseia em resultados de estudos científicos sobre a melhora saúde através da prática de atividades físicas e o “poder do coletivo” baseado nesses dois pilares a aplicação visa incentivar a prática de atividade física com foco na melhoria da qualidade de vida e saúde.
        	Os usuários podem se cadastrar no aplicativo e assim criar eventos relacionados à prática de atividades físicas onde quaisquer pessoas podem se cadastrar e participar do evento que foi criado se envolvendo cada vez mais com as atividades através das estratégias de gamificação e sistema de incentivo.
        	A ferramenta também provê a criação de um perfil atlético dos usuários baseado em características fisiológicas inseridas no app o que é utilizado para prover recomendações de novos eventos bem como os melhores locais para a prática de exercícios.


<div id="prototype" />

### Protótipo

![prototypeDanilo](https://user-images.githubusercontent.com/31120411/70357694-4d382280-1856-11ea-9ce4-70d4f287ad67.png)


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

- [RF001] CADASTRO NO SISTEMA - O sistema deve permitir cadastro do aspirante (nome, email e senha);

- [RF002] LOGIN NO SISTEMA - O sistema deve permitir login para usuários cadastrados (nome e email);

- [RF003] CRIAR EVENTO - O sistema deve permitir a criação de eventos para usuários cadastrados (nome do evento, descrição, local, idade média dos participantes, data, hora);

- [RF004] BUSCAR EVENTO - O sistema deve apresentar informações do evento alvo; 

- [RF005] PARTICIPAR EVENTO - O sistema deve permitir que o usuário participe em eventos;

- [RF006] CONSULTAR INFORMAÇÕES DE EVENTO - O sistema deve prover informações para os usuários ao entrar em um evento; 

- [RF007] AVALIAÇÃO DE EVENTO - O sistema deve permitir que os participantes de um evento o possam avaliar;

- [RF008] CONFIRMAR PRESENÇA - O sistema deverá permitir que o criador do evento confirme a participação dos aspirantes no evento por meio de um check-in.

- [RF009] DENUNCIAR PARTICIPANTE - O sistema deve permitir que participantes de um evento, com presença confirmada, possa denunciar quaisquer um dos participantes do evento;

- [RF010] MOSTRAR PERFIL DE USUÁRIO - O sistema deverá possuir uma página de perfil do usuário mostrando suas informações cadastradas (nome e email);

- [RF011] ADICIONAR USUÁRIO - O sistema deverá prover para participantes do evento a opção de adicionar um usuário em sua lista de amigos, participantes do mesmo evento;

- [RF012] FILTRAR BUSCA - O sistema deverá apresentar filtros de busca para algumas modalidades de evento, como corrida, futebol, entre outros;

- [RF013] CHAT COM OUTRO USUÁRIO- O sistema deve permitir ao usuário iniciar um chat com outro usuário que tenha participado do mesmo evento;


#### Requisitos não funcionais

- [RNF001] O sistema deve ser de fácil usabilidade;

- [RNF002] O sistema deve ter uma interface moderna;

- [RNF003] O sistema deverá possuir uma arquitetura escalável;

- [RNF004] O sistema deverá permitir expansão para diversos tipos de atividade física;

- [RNF005] O sistema deve impedir a participação de um usuário dois eventos que ocorrem simultâneamente;

- [RNF006] Os eventos, ao serem criados, devem prover informações apenas relacionadas ao evento;

- [RNF007] O sistema deve descartar os eventos em 24 horas após sua finalização;

- [RNF008] O sistema não deve descartar quaisquer dados e sim reaproveitar, isto é, transferir para BIG DATA (Cuidado com a LGPD);


<div id="uscd" />

### Diagrama de Caso de Uso

![diagrama_CU](https://user-images.githubusercontent.com/31120411/70357731-6640d380-1856-11ea-901d-ea15835db0bc.png)

<div id="duscd" />

### Especificações de Caso de Uso
*******
1. [UC001 Criar Evento](#UC001)
2. [UC002 Participar Evento](#UC002)
3. [UC003 Cadastrar Aspirante](#UC003)
*******

<div id="UC001" />

**Nome de caso de uso:** [UC001] Criar Evento

- **Objetivo:** Possibilitar ao aspirante à criar um evento.

- **Pré-condições:** Aspirante precisa estar logado no sistema.

- **Fluxo Principal:** 
   1. O sistema requisita o nome do evento.
   2. O apirante seleciona o local do evento.
   3. O sistema requisita a categoria do evento desejada.
   4. O Aspirante seleciona uma imagem para o evento.
   5. Aspirante fornece as informações de hora e data.
   6. O sistema apresenta mensagem de sucesso referente a criação do evento.

- **Fluxo Alternativo:** 
   1. O aspirante seleciona a opção de voltar.
   2. O sistema retorna para o menu de eventos da aplicação.

- **Pós-Condições:**
Evento criado.

<div id="UC002" />

**Nome de caso de uso:** [UC002] Participar Evento

- **Objetivo:** Possibilitar ao aspirante a participação em evento.
- **Pré-condições:** Aspirante autenticado no sistema, evento buscado ou apresentado para o aspirante no menu principal.
- **Fluxo Principal:** 
   1. Aspirante seleciona evento.
   2. O sistema apresenta as informações do evento.
   3. Aspirante clica em Entrar.
   4. Uma mensagem é apresentada confirmando a participação do Evento.

- **Fluxo Alternativo:** 
   1. O aspirante pode denunciar o evento.
   2. O sistema redireciona o aspirante para o menu principal.

- **Fluxo Alternativo 2:**
   1. Aspirante seleciona algum participante do evento.
   2. Sistema apresenta as informações do respectivo participante.


- **Pós-Condições:**
Aspirante se torna um participante do evento.

<div id="UC003" />

**Nome de caso de uso:** [UC003] Cadastrar Aspirante

- **Objetivo:** Possibilitar a um aspirante acesso a craição e inscrição em eventos.

- **Pré-condições:** Não há.

- **Fluxo Principal:** 
	1. Aspirante acesssa a opçao "cadastre-se aqui".
	2. A aplicação fornece um tela de cadastro.
	3. Aspirante fornece nome, email e senha .
	4. O aspirante selecionar o botão "cadastrar".
	5. O sistema verifica que as informações estão em um formato válido.
	6. O sistema Asmazena informaçoes do Apirante.
	7. Aspirante é direcionado para a tela principal.

- **Fluxo Alternativo:** 
	1. O sistema verifica que as informações não estão em um formato válido.
	2. O sistema exibe uma mensagem de erro e rediceriona o usuario para a tela de cadastro.
	3. O sistema verifica que as informações estão em um formato válido
	4. O sistema Asmazena informaçoes do Apirante.
	5. Aspirante é direcionado para a tela principal.

- **Pós-Condições:**
Aspirante Cadastrado


<div id="cd" />

### Diagrama de Classes

![Diagrama de Classe](https://user-images.githubusercontent.com/44952113/67606004-7a24f000-f756-11e9-8e38-3642a50501ef.png)

<div id="sd" />

### Diagramas de Sequência

#### Buscar evento
![Sequence1 (1)](https://user-images.githubusercontent.com/54459438/67322163-fdd8a580-f4e6-11e9-8f0d-0379a367cb13.jpg)


#### Busar aspitante
![Sequence3 (1)](https://user-images.githubusercontent.com/54459438/67322362-48f2b880-f4e7-11e9-88dc-690ef54979ef.jpg)


#### Criar aspirante
![WhatsApp Image 2019-10-09 at 23 56 28](https://user-images.githubusercontent.com/54459438/67322684-c28aa680-f4e7-11e9-9b8f-6c384009a2c6.jpeg)



<div id="std" />

### Diagrama de Estado

#### Apirante

![Diagrama de estados aspirante](https://user-images.githubusercontent.com/54459438/67324121-b30c5d00-f4e9-11e9-804e-dc6b12e6d6f7.png)

#### Apirante

![Diagrama de estados evento](https://user-images.githubusercontent.com/54459438/67323841-61fc6900-f4e9-11e9-9ceb-d33f53898386.png)

#### Chat

![Diagrama de estados chat](https://user-images.githubusercontent.com/54459438/67324046-97a15200-f4e9-11e9-9738-1594693a6f1b.png)

<div id="tec" />

### Tecnologias
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" weigth="50" width="50"> <img src="https://user-images.githubusercontent.com/54459438/67327465-59f2f800-f4ee-11e9-8aeb-9e346223df08.png" weigth="50" width="50"> <img src="https://www.mediapreset.com/wp-content/uploads/2017/02/MediaPreset.com-Node.js-Application-Development-Service.jpg" weigth="50" width="50"><img src="https://user-images.githubusercontent.com/54459438/67327760-d1c12280-f4ee-11e9-88e8-b3fc77416ec6.png" weigth="50" width="50"><img src="https://user-images.githubusercontent.com/54459438/67327832-f3220e80-f4ee-11e9-98d7-a2d2aa75774f.jpg" weigth="50" width="50">


<div id="team" />

### Core Team

![TeamGoHealthyV3](https://user-images.githubusercontent.com/44952113/67019700-7698c580-f0d3-11e9-85ab-ad9c7c361b90.jpg)
