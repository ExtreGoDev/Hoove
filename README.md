# goHealthy

*******

1. [O Problema](#problem)  
2. [O que é o goHealthy?](#whatgoHealthy)  
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

- [RF001] O sistema deve prover o cadastro de usuários requisitando nome, email, data de nascimento, cidade e estado;
- [RF002] O sistema deve prover o login de usuários;
- [RF003] O sistema deve permitir que o usuário cadastre informações Fisiológicas;
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

<div id="uscd" />

### Diagrama de Caso de Uso

![diagrama_CU](https://user-images.githubusercontent.com/54459438/67315054-29a25e00-f4dc-11e9-869f-b02ceb1d748b.jpeg)

<div id="duscd" />

### Especificações de Caso de Uso
*******
1. [UC001 Criar Evento](#UC001)
2. [UC002 Participar Evento](#UC002)
*******

<div id="UC001" />

**Nome de caso de uso:** [UC001] Criar Evento

- **Objetivo:** Possibilitar ao aspirante à criar um evento.

- **Pré-condições:** Aspirante precisa estar logado no sistema.

- **Fluxo Principal:** 
   1. O sistema requisita a categoria do evento.
   2. Aspirante seleciona a categoria do evento desejada e acessa prosseguir.
   3. O sistema requisita as informações *gerais* do evento.
   4. Aspirante fornece as informações *gerais* e acessa prosseguir.
   5. O sistema apresenta os eventos semelhantes com base em local, horario e categoria e pergunta se o aspirante deseja realmente criar o evento fornecendo a opção de prosseguir ou não.
   6. O Aspirante seleciona a opção de prosseguir.
   7. O sistema requisita as informações *especificas* referente à categoria do evento.
   8. Aspirante fornece as informações *especificas* e acessa prosseguir.
   9. O sistema apresenta mensagem de sucesso referente a criação do evento.

- **Fluxo Alternativo:** 
   1. O sistema apresenta os eventos semelhantes com base em local, horario e categoria e pergunta se o aspirante deseja realmente criar o evento fornecendo a opção de prosseguir ou não.
   2. O aspirante seleciona a opção de não criar o evento.
   3. O sistema retorna para o menu principal da aplicação.

- **Pós-Condições:**
Evento criado.

<div id="UC002" />

**Nome de caso de uso:** [UC002] Participar Evento

- **Objetivo:** Possibilitar ao aspirante a participação em evento.
- **Pré-condições:** Aspirante autenticado no sistema, evento buscado ou apresentado para o aspirante no menu principal.
- **Fluxo Principal:** 
   1. Aspirante seleciona evento.
   2. O sistema apresenta as informações do evento.
   3. Aspirante acessa participar evento.
   4. O sistema pergunta se o aspirante deseja realmente participar do evento.
   5. Aspirante confirma a sua futura participação no evento.
   6. O sistema apresenta uma mensagem motivadora referente a categoria do evento em conjunto com mensagem de sucesso referente a confirmação de participação.

- **Fluxo Alternativo:** 
   1. O sistema pergunta se o aspirante deseja realmente participar do evento.
   2. Aspirante rejeita a participação no evento.
   3. O sistema redireciona o aspirante para o menu principal.

- **Fluxo Alternativo 2:**
   1. Aspirante seleciona algum participante do evento.
   2 . Sistema apresenta as informações do respectivo participante.


- **Pós-Condições:**
Aspirante se torna um participante do evento.



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
