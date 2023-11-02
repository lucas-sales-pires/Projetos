const perguntasJavaScript = [
    {
      pergunta: "Qual é a função do JavaScript em uma página da web?",
      opcoes: [
        "Estilizar elementos HTML.",
        "Realizar cálculos matemáticos complexos.",
        "Adicionar interatividade e dinamismo à página.",
        "Exibir conteúdo de banco de dados."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript? mais moderno",
      opcoes: ["var", "int", "let", "const"],
      resposta_certa: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      opcoes: [
        "// Isso é um comentário",
        "# Isso é um comentário",
        "' Isso é um comentário",
        "/* Isso é um comentário */"
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console?",
      opcoes: ["console.log()", "print()", "display()", "console()"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade em JavaScript?",
      opcoes: ["==", "===", "=", "!="],
      resposta_certa: 0
    },
    {
      pergunta: "Como você declara uma function Declaration em JavaScript?",
      opcoes: [
        "function minhaFuncao() {}",
        "declare função minhaFuncao() {}",
        "function: minhaFuncao() {}",
        "function minhaFuncao = {};"
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\n`console.log(2 + '2');`",
      opcoes: ["4", "22", "Erro", "NaN"],
      resposta_certa: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      opcoes: ["pop()", "remove()", "splice()", "shift()"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual método é usado para adicionar elementos ao final de um array em JavaScript?",
      opcoes: ["append()", "push()", "concat()", "add()"],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é o resultado da expressão `10 / 0` em JavaScript?",
      opcoes: ["0", "10", "Infinity", "Erro"],
      resposta_certa: 2
    },
    {
      pergunta: "O que o método `querySelector` faz em JavaScript?",
      opcoes: [
        "Seleciona todos os elementos com uma classe específica.",
        "Seleciona o primeiro elemento com um seletor CSS específico.",
        "Seleciona todos os elementos com uma tag HTML específica.",
        "Seleciona um elemento aleatório da página."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função do operador 'ternário' em JavaScript?",
      opcoes: [
        "Executar uma operação ternária em números.",
        "Realizar uma operação de multiplicação ternária.",
        "Criar estruturas condicionais em uma única linha de código.",
        "Multiplicar três números."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      opcoes: [
        "Um tipo de loop.",
        "Uma função que retorna outra função com acesso a suas variáveis locais.",
        "Um operador lógico.",
        "Uma variável global."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual método é usado para remover um item específico de um array em JavaScript?",
      opcoes: ["remove()", "pop()", "splice()", "shift()"],
      resposta_certa: 2
    },
    {
      pergunta: "O que o método `map` faz em um array em JavaScript?",
      opcoes: [
        "Remove elementos duplicados.",
        "Mapeia todos os elementos para números inteiros.",
        "Aplica uma função a cada elemento e retorna um novo array com os resultados.",
        "Ordena o array em ordem alfabética."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é a diferença entre `let` e `const` para declarar variáveis em JavaScript?",
      opcoes: [
        "`let` é usado para variáveis globais, e `const` é usado para variáveis locais.",
        "`let` é usado para variáveis que podem ser reatribuídas, enquanto `const` é usado para variáveis de valor constante que não podem ser reatribuídas.",
        "`let` é usado para variáveis de valor constante, e `const` é usado para variáveis que podem ser reatribuídas.",
        "Não há diferença; eles são intercambiáveis."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que o método `JSON.stringify()` faz em JavaScript?",
      opcoes: [
        "Converte uma string JSON em um objeto JavaScript.",
        "Converte um objeto JavaScript em uma string JSON.",
        "Remove todos os números de um objeto JavaScript.",
        "Cria um novo objeto JavaScript a partir de um JSON."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\n`console.log(typeof NaN);`",
      opcoes: ["number", "NaN", "undefined", "string"],
      resposta_certa: 0
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      opcoes: [
        "Uma forma de criar loops.",
        "Um objeto que representa um valor que pode não estar disponível ainda, mas será no futuro.",
        "Um operador lógico.",
        "Uma função JavaScript."
      ],
      resposta_certa: 1
    },
  ];
  const DER = [
    {
      pergunta: "O que é um Diagrama de Entidade e Relacionamento (DER)?",
      opcoes: [
        "Uma linguagem de programação.",
        "Uma ferramenta de modelagem de dados.",
        "Um sistema operacional.",
        "Uma forma de desenho artístico."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que representa uma entidade em um DER?",
      opcoes: [
        "Uma ação a ser executada.",
        "Um objeto do mundo real.",
        "Um algoritmo de ordenação.",
        "Um resultado de consulta SQL."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a finalidade principal de um DER?",
      opcoes: [
        "Criar páginas da web.",
        "Desenhar diagramas bonitos.",
        "Modelar a estrutura de um banco de dados.",
        "Programar aplicativos móveis."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que representa um relacionamento 'Um para Muitos' em um DER?",
      opcoes: [
        "Cada entidade está relacionada a várias outras entidades.",
        "Cada entidade está relacionada a uma única outra entidade.",
        "Cada entidade está relacionada a nenhuma outra entidade.",
        "Cada entidade está relacionada a todas as outras entidades."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Em um DER, como você representa um relacionamento 'Muitos para Muitos'?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um DER."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que são atributos em um DER?",
      opcoes: [
        "Itens em uma lista.",
        "Propriedades ou características de uma entidade.",
        "Conexões entre entidades.",
        "Comentários adicionados ao diagrama."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função de um diagrama de entidade em um DER?",
      opcoes: [
        "Exibir dados em formato tabular.",
        "Representar a lógica de programação.",
        "Mostrar a estrutura de um banco de dados.",
        "Desenhar gráficos e imagens."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Como você descreveria um relacionamento 'Um para Um' em um DER?",
      opcoes: [
        "Cada entidade está relacionada a várias outras entidades.",
        "Cada entidade está relacionada a uma única outra entidade.",
        "Cada entidade está relacionada a nenhuma outra entidade.",
        "Cada entidade está relacionada a todas as outras entidades."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que é cardinalidade em um DER?",
      opcoes: [
        "O número máximo de entidades.",
        "O número mínimo de entidades.",
        "A quantidade de atributos em uma entidade.",
        "O tipo de relacionamento entre entidades."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Em um DER, como você representa um relacionamento 'Muitos para Um'?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um DER."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é um 'atributo composto' em um DER?",
      opcoes: [
        "Um atributo que contém vários valores separados por vírgulas.",
        "Um atributo que é calculado com base em outros atributos.",
        "Um atributo que é uma chave primária.",
        "Um atributo que não pode ser nulo."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é o propósito de um relacionamento 'Um para Um' em um DER?",
      opcoes: [
        "Relacionar várias entidades a uma única entidade.",
        "Relacionar uma entidade a várias outras entidades.",
        "Representar um relacionamento opcional.",
        "Nenhum, pois 'Um para Um' não é possível em DER."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é uma 'chave estrangeira' em um DER?",
      opcoes: [
        "Uma chave que abre uma porta.",
        "Um atributo que não pode ser duplicado.",
        "Um atributo que identifica exclusivamente uma entidade.",
        "Um atributo que faz referência a uma chave primária de outra entidade."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Qual é a finalidade de uma 'entidade fraca' em um DER?",
      opcoes: [
        "Representar uma entidade que não possui atributos.",
        "Representar uma entidade que não pode ter relacionamentos.",
        "Representar uma entidade que depende de outra entidade para sua identificação.",
        "Representar uma entidade que é sempre uma chave primária."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é um 'atributo derivado' em um DER?",
      opcoes: [
        "Um atributo que é calculado com base em outros atributos.",
        "Um atributo que é opcional.",
        "Um atributo que é uma chave primária.",
        "Um atributo que não pode ser nulo."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a finalidade de uma 'entidade associativa' em um DER?",
      opcoes: [
        "Representar uma entidade que não possui atributos.",
        "Representar uma entidade que não pode ter relacionamentos.",
        "Representar uma entidade que é usada para conectar outras entidades em um relacionamento 'Muitos para Muitos'.",
        "Representar uma entidade que não tem chaves."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é 'normalização' em um DER?",
      opcoes: [
        "Um processo de otimização de consultas SQL.",
        "Um processo de organizar os atributos de uma entidade de forma eficiente.",
        "Um processo de eliminação de dados duplicados em um banco de dados.",
        "Um processo de estruturar um DER de acordo com regras específicas."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Em um DER, como você representa um relacionamento 'Um para Zero ou Um'?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um DER."
      ],
      resposta_certa: 3
    }
  ];
  
  
    

  const perguntasPython = [
    {
      pergunta: "Qual é a principal característica do Python?",
      opcoes: [
        "Ser uma linguagem compilada.",
        "Ser uma linguagem de tipagem estática.",
        "Ser uma linguagem de alto desempenho.",
        "Ser uma linguagem de fácil leitura e escrita."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Qual é a função da declaração `if` em Python?",
      opcoes: [
        "Definir funções personalizadas.",
        "Executar um bloco de código se uma condição for verdadeira.",
        "Realizar operações de loop.",
        "Declarar variáveis."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Como você declara uma lista vazia em Python?",
      opcoes: ["lista = []", "lista = {}", "lista = ()", "lista = ''"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\n`print('Olá, ' + 'mundo!')`",
      opcoes: ["Olá", "mundo!", "Olá, mundo!", "Erro"],
      resposta_certa: 2
    },
    {
      pergunta: "O que é uma função em Python?",
      opcoes: [
        "Um operador matemático.",
        "Um bloco de código que realiza uma tarefa específica e pode ser reutilizado.",
        "Uma variável.",
        "Uma classe de objetos."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a forma correta de definir uma função em Python?",
      opcoes: [
        "funcao minha_funcao():",
        "define minha_funcao():",
        "def minha_funcao():",
        "function minha_funcao():"
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é a estrutura de dados em Python que armazena elementos de forma ordenada e indexada?",
      opcoes: ["Dicionário", "Conjunto", "Lista", "Tupla"],
      resposta_certa: 2
    },
    {
      pergunta: "Como você imprime o comprimento de uma lista em Python?",
      opcoes: ["print(len(lista))", "print(length(lista))", "print(count(lista))", "print(size(lista))"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para criar uma classe em Python?",
      opcoes: ["class", "create", "define", "new"],
      resposta_certa: 0
    },
    {
      pergunta: "O que é herança em Python?",
      opcoes: [
        "Um método para criar novos objetos em Python.",
        "Um processo de criar cópias exatas de objetos.",
        "Um mecanismo que permite que uma classe herde as propriedades e métodos de outra classe.",
        "Um tipo de erro em Python."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\n`print(10 % 3)`",
      opcoes: ["0", "1", "2", "3"],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função da declaração `for` em Python?",
      opcoes: [
        "Declarar variáveis.",
        "Executar um bloco de código várias vezes.",
        "Definir funções personalizadas.",
        "Realizar operações matemáticas."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Como você lê uma entrada do usuário em Python?",
      opcoes: [
        "read(user_input)",
        "input()",
        "readline()",
        "get_input()"
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que é um módulo em Python?",
      opcoes: [
        "Um tipo de variável.",
        "Uma estrutura de dados.",
        "Um arquivo que contém definições e declarações Python.",
        "Um tipo de função."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é a diferença entre `==` e `=` em Python?",
      opcoes: [
        "`==` é usado para atribuição de variáveis, e `=` é usado para comparação de igualdade.",
        "`==` é usado para comparação de igualdade, e `=` é usado para atribuição de variáveis.",
        "`==` e `=` são usados de forma intercambiável em Python.",
        "Não há diferença; eles são usados da mesma forma."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que é uma exceção em Python?",
      opcoes: [
        "Um tipo de loop.",
        "Um tipo de erro que ocorre durante a execução do programa.",
        "Um tipo de função.",
        "Um tipo de variável."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é o operador usado para combinar duas listas em Python?",
      opcoes: ["*", "+", "-", "/", "++"],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\n`print('Python'.upper())`",
      opcoes: ["python", "PYTHON", "Python", "pyThon"],
      resposta_certa: 1
    },
    {
      pergunta: "O que é uma variável global em Python?",
      opcoes: [
        "Uma variável que pode ser acessada apenas dentro de uma função.",
        "Uma variável que pode ser acessada em qualquer lugar do programa.",
        "Uma variável que armazena números globais.",
        "Uma variável que não pode ser reatribuída."
      ],
      resposta_certa: 1
    },
  ];
    

  const perguntasPHP = [
    {
      pergunta: "O que significa PHP?",
      opcoes: [
        "PHP: Hypertext Preprocessor",
        "Personal Home Page",
        "PHP Hyperlink Processor",
        "Programming Hypertext Page"
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é o símbolo usado para iniciar um bloco de código PHP?",
      opcoes: ["@", "$", "%", "<?php"],
      resposta_certa: 3
    },
    {
      pergunta: "Como você imprime algo na tela em PHP?",
      opcoes: [
        "print('Texto a ser impresso');",
        "echo 'Texto a ser impresso';",
        "write('Texto a ser impresso');",
        "printf('Texto a ser impresso');"
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a variável superglobal usada para obter dados de um formulário HTML em PHP?",
      opcoes: ["$_POST", "$_GET", "$_REQUEST", "$_SERVER"],
      resposta_certa: 0
    },
    {
      pergunta: "O que é uma constante em PHP?",
      opcoes: [
        "Uma variável que pode ser alterada durante a execução do programa.",
        "Um valor que não pode ser alterado durante a execução do programa.",
        "Um tipo de função em PHP.",
        "Uma variável especial que não precisa ser declarada."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função usada para incluir um arquivo externo em PHP?",
      opcoes: ["import()", "include()", "require()", "load()"],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em PHP?",
      opcoes: [".", ",", ":", "+", "&"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código em PHP?\n\n`$x = 5; $y = 10; echo $x + $y;`",
      opcoes: ["10", "15", "$x + $y", "Erro"],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é o loop usado para iterar por uma lista de valores em PHP?",
      opcoes: ["for", "while", "do-while", "foreach"],
      resposta_certa: 3
    },
    {
      pergunta: "Como você define uma função em PHP?",
      opcoes: [
        "funcao minha_funcao() {}",
        "define function minha_funcao() {}",
        "function: minha_funcao() {}",
        "function minha_funcao() {}"
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Qual é a função usada para obter o comprimento de uma string em PHP?",
      opcoes: ["strlen()", "length()", "str_length()", "string_length()"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a variável superglobal usada para obter informações sobre a sessão em PHP?",
      opcoes: ["$_SESSION", "$_COOKIES", "$_SERVER", "$_GET"],
      resposta_certa: 0
    },
    {
      pergunta: "O que é uma sessão em PHP?",
      opcoes: [
        "Um tipo de variável.",
        "Um arquivo de código PHP.",
        "Um conjunto de dados temporários associados a um usuário durante sua visita a um site.",
        "Uma função em PHP."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Como você verifica se uma variável está vazia em PHP?",
      opcoes: [
        "empty(variavel)",
        "is_empty(variavel)",
        "isset(variavel)",
        "is_null(variavel)"
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a função usada para redirecionar um usuário para outra página em PHP?",
      opcoes: ["redirect()", "move()", "header()", "location()"],
      resposta_certa: 2
    },
    {
      pergunta: "Qual é a diferença entre `==` e `===` em PHP?",
      opcoes: [
        "`==` compara apenas o valor, enquanto `===` compara o valor e o tipo de dados.",
        "`==` compara o valor e o tipo de dados, enquanto `===` compara apenas o valor.",
        "`==` é usado para atribuição de variáveis, e `===` é usado para comparação de igualdade.",
        "`==` e `===` são usados de forma intercambiável em PHP."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "O que é o XAMPP em relação ao desenvolvimento web em PHP?",
      opcoes: [
        "Um editor de código.",
        "Um servidor web.",
        "Um framework PHP.",
        "Uma linguagem de programação."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função usada para realizar consultas em um banco de dados MySQL em PHP?",
      opcoes: ["query()", "execute()", "select()", "mysql_query()"],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código em PHP?\n\n`$frutas = array('maçã', 'banana', 'laranja'); echo count($frutas);`",
      opcoes: ["maçã, banana, laranja", "3", "count($frutas)", "Erro"],
      resposta_certa: 1
    },
  ];
  const MER = [
    {
      pergunta: "O que é um Modelo de Entidades e Relacionamentos (MER)?",
      opcoes: [
        "Uma linguagem de programação.",
        "Uma ferramenta de modelagem de dados.",
        "Um sistema operacional.",
        "Uma forma de desenho artístico."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que uma entidade representa em um Modelo de Entidades e Relacionamentos (MER)?",
      opcoes: [
        "Uma ação a ser executada.",
        "Um objeto do mundo real.",
        "Um algoritmo de ordenação.",
        "Um resultado de consulta SQL."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a principal finalidade de um Modelo de Entidades e Relacionamentos (MER)?",
      opcoes: [
        "Criar páginas da web.",
        "Desenhar diagramas bonitos.",
        "Modelar a estrutura de um banco de dados.",
        "Programar aplicativos móveis."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que representa um relacionamento 'Um para Muitos' em um MER?",
      opcoes: [
        "Cada entidade está relacionada a várias outras entidades.",
        "Cada entidade está relacionada a uma única outra entidade.",
        "Cada entidade está relacionada a nenhuma outra entidade.",
        "Cada entidade está relacionada a todas as outras entidades."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Como você representa um relacionamento 'Muitos para Muitos' em um MER?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um MER."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que são atributos em um MER?",
      opcoes: [
        "Itens em uma lista.",
        "Propriedades ou características de uma entidade.",
        "Conexões entre entidades.",
        "Comentários adicionados ao diagrama."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "Qual é a função de um diagrama de entidade em um MER?",
      opcoes: [
        "Exibir dados em formato tabular.",
        "Representar a lógica de programação.",
        "Mostrar a estrutura de um banco de dados.",
        "Desenhar gráficos e imagens."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "Como você descreveria um relacionamento 'Um para Um' em um MER?",
      opcoes: [
        "Cada entidade está relacionada a várias outras entidades.",
        "Cada entidade está relacionada a uma única outra entidade.",
        "Cada entidade está relacionada a nenhuma outra entidade.",
        "Cada entidade está relacionada a todas as outras entidades."
      ],
      resposta_certa: 1
    },
    {
      pergunta: "O que é cardinalidade em um MER?",
      opcoes: [
        "O número máximo de entidades.",
        "O número mínimo de entidades.",
        "A quantidade de atributos em uma entidade.",
        "O tipo de relacionamento entre entidades."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Como você representa um relacionamento 'Muitos para Um' em um MER?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um MER."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é um 'atributo composto' em um MER?",
      opcoes: [
        "Um atributo que contém vários valores separados por vírgulas.",
        "Um atributo que é calculado com base em outros atributos.",
        "Um atributo que é uma chave primária.",
        "Um atributo que não pode ser nulo."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é o propósito de um relacionamento 'Um para Zero ou Um' em um MER?",
      opcoes: [
        "Relacionar várias entidades a uma única entidade.",
        "Relacionar uma entidade a várias outras entidades.",
        "Representar um relacionamento opcional.",
        "Nenhum, pois 'Um para Zero ou Um' não é possível em MER."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é uma 'chave estrangeira' em um MER?",
      opcoes: [
        "Uma chave que abre uma porta.",
        "Um atributo que não pode ser duplicado.",
        "Um atributo que identifica exclusivamente uma entidade.",
        "Um atributo que faz referência a uma chave primária de outra entidade."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Qual é a finalidade de uma 'entidade fraca' em um MER?",
      opcoes: [
        "Representar uma entidade que não possui atributos.",
        "Representar uma entidade que não pode ter relacionamentos.",
        "Representar uma entidade que depende de outra entidade para sua identificação.",
        "Representar uma entidade que é sempre uma chave primária."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é um 'atributo derivado' em um MER?",
      opcoes: [
        "Um atributo que é calculado com base em outros atributos.",
        "Um atributo que é opcional.",
        "Um atributo que é uma chave primária.",
        "Um atributo que não pode ser nulo."
      ],
      resposta_certa: 0
    },
    {
      pergunta: "Qual é a finalidade de uma 'entidade associativa' em um MER?",
      opcoes: [
        "Representar uma entidade que não possui atributos.",
        "Representar uma entidade que não pode ter relacionamentos.",
        "Representar uma entidade que é usada para conectar outras entidades em um relacionamento 'Muitos para Muitos'.",
        "Representar uma entidade que não tem chaves."
      ],
      resposta_certa: 2
    },
    {
      pergunta: "O que é 'normalização' em um MER?",
      opcoes: [
        "Um processo de otimização de consultas SQL.",
        "Um processo de organizar os atributos de uma entidade de forma eficiente.",
        "Um processo de eliminação de dados duplicados em um banco de dados.",
        "Um processo de estruturar um MER de acordo com regras específicas."
      ],
      resposta_certa: 3
    },
    {
      pergunta: "Em um MER, como você representa um relacionamento 'Um para Zero ou Um'?",
      opcoes: [
        "Usando uma linha sólida entre as entidades.",
        "Usando uma linha pontilhada entre as entidades.",
        "Usando uma seta entre as entidades.",
        "Não é possível representar esse tipo de relacionamento em um MER."
      ],
      resposta_certa: 3
    }
  ];
    
  
  let linguagem_atual = document.getElementById('linguagem');
  let perguntaAtual = 0;
  let pontuacao = 0;

  const pergunta = document.getElementById("pergunta");
  const opcoesContainer = document.getElementById("opcoes-container");
  const resultado = document.getElementById("resultado");
  const proximoBotao = document.getElementById("next-button");
  const menu = document.getElementById("menu");
  const quizContainer = document.getElementById("quiz-container");

  function loadPergunta() {
    pergunta.textContent = perguntas[perguntaAtual].pergunta;

    opcoesContainer.innerHTML = "";
    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      const option = document.createElement("button");
      option.textContent = perguntas[perguntaAtual].opcoes[i];
      option.className = "option";
      option.setAttribute("onclick", "checkResposta(this)");
      opcoesContainer.appendChild(option);
    }

    proximoBotao.style.display = "none";
    resultado.textContent = "";
  }
let perguntas = [];
  function carregarPerguntas(linguagem) {
    if (linguagem === 'javascript') {
      perguntas = perguntasJavaScript;
      linguagem_atual.textContent = 'JavaScript';
    } else if (linguagem === 'python') {
      perguntas = perguntasPython;
      linguagem_atual.textContent = 'Python';

    } else if (linguagem === 'php') {
      perguntas = perguntasPHP;
      linguagem_atual.textContent = 'PHP';

    }else if(linguagem === "der"){
        perguntas = DER;
        linguagem_atual.textContent = 'DER'
    }else if (linguagem === "mer"){
        perguntas = MER;
        linguagem_atual.textContent = 'MER'
    }

    perguntaAtual = 0;
    pontuacao = 0;
    loadPergunta();
    menu.style.display = "none";
    quizContainer.style.display = "block";
  }

  function checkResposta(opcaoSelecionada) {
    const usuarioResposta = perguntas[perguntaAtual].opcoes.indexOf(opcaoSelecionada.textContent);
    const respostaCerta = perguntas[perguntaAtual].resposta_certa;

    if (usuarioResposta === respostaCerta) {
        pontuacao++;
        resultado.textContent = "Resposta correta!";
    } else {
        resultado.textContent = "Resposta incorreta. A resposta correta é: " + perguntas[perguntaAtual].opcoes[respostaCerta];
    }

    proximoBotao.style.display = "block";
    for (let i = 0; i < opcoesContainer.children.length; i++) {
        opcoesContainer.children[i].disabled = true;
    }
  }

  function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        loadPergunta();
    } else {
        mostrarResultado();
    }
  }

  function mostrarResultado() {
    pergunta.textContent = "Quiz Concluído!";
    opcoesContainer.innerHTML = "";
    resultado.textContent = "Pontuação: " + pontuacao + " de " + perguntas.length;
    proximoBotao.style.display = "none";
    var btn = document.createElement('button');
    var texto = document.createTextNode("Reiniciar");        
    btn.appendChild(texto);   
    btn.addEventListener('click',()=>{
                window.location.reload();
    })

    document.body.appendChild(btn);      
  }
