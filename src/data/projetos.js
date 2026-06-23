import { FaMicrochip } from "react-icons/fa";

export const projetos = [
    {
        title: 'Software de Backups SQL',
        description: 'Sistema automatizado para backup de bases de dados com logs detalhados e verificação de integridade.',
        automation: 'Automatizar backups de bancos SQL, garantindo consistência dos dados e rastreabilidade por meio de logs. Facilitar a restauração de dados.',
        approach: 'A aplicação permite agendar backups automáticos de até 4 bases de dados ao mesmo tempo, configurar diretórios de cópia, ' +
            'importar(restaurar) as bases rapidamente, registrar logs detalhados e validar a integridade dos dados.A arquitetura em camadas facilita manutenção e escalabilidade, e foram implementados testes unitários para maior confiabilidade.',
        contribution: 'Desenvolvi toda a lógica de backup, integração com SQL Server e MySQL, além do sistema de logs e monitoramento de consistência.',
        technologies: ['.NET 4.8', 'Windows Desktop', 'SQL Server', 'MySQL'],
        github: null,
        live: null, // se houver versão online
        icon: "FaServer",

        images: [
            import.meta.env.BASE_URL + 'images/swbackup1.jpg',
            import.meta.env.BASE_URL + 'images/swbackup2.jpg',
            import.meta.env.BASE_URL + 'images/swbackup3.jpg',
            import.meta.env.BASE_URL + 'images/swbackup4.jpg',
            import.meta.env.BASE_URL + 'images/swbackup5.jpg',
            import.meta.env.BASE_URL + 'images/swbackup6.jpg'
        ],

        videos: [],

        level: 'Finalizado'
    },
    {
        title: 'Migração de Dados',
        description: 'Ferramenta para conversão/exportação e migração de dados entre sistemas de tickets.',
        automation: 'Migrar dados de forma segura e automatizada do Servicedesk para o Movidesk, evitando perda de informações e retrabalho manual.',
        approach: 'O software conecta-se a diferentes bases de dados SQL Server, realiza consultas customizadas e transfere os dados de forma estruturada, registrando logs de execução para auditoria.',
        contribution: 'Desenvolvi as classes para conexão com SQL Server, leitura e escrita de dados via queries, além do sistema de logs para acompanhamento e rastreabilidade das migrações.',
        technologies: ['.NET 4.8', 'Windows Desktop', 'SQL Server'],
        github: 'https://github.com/elivelton-almeida/Exportacao-dados-SQL',
        live: null,
        icon: "FaServer",
        images: [
            import.meta.env.BASE_URL + 'images/swmigracao1.jpg',
            import.meta.env.BASE_URL + 'images/swmigracao2.jpg',
            import.meta.env.BASE_URL + 'images/swmigracao3.jpg',
            import.meta.env.BASE_URL + 'images/swmigracao4.jpg',
            import.meta.env.BASE_URL + 'images/swmigracao5.jpg'
        ],
        videos: [],

        level: 'Finalizado'
    },
    {
        title: 'Software de Gestão da Produtividade Industrial (TCC)',
        description:
            'Sistema de automação industrial desenvolvido como Trabalho de Conclusão de Curso, integrando software em C# (.NET) com Arduino para monitoramento e controle da produtividade em tempo real.',

        automation:
            'Integração entre processos físicos de produção e sistemas de monitoramento para permitir o controle de produtividade industrial em tempo real e reduz a eficiência operacional.',

        approach:
            'O sistema foi desenvolvido para coletar dados de sensores conectados ao Arduino e enviá-los para uma aplicação desktop .NET, permitindo o monitoramento contínuo da produção. ' +
            'A solução simula uma esteira industrial, realiza contagem automática de peças, processa os dados e exibe informações em tempo real por meio de gráficos e indicadores de produtividade. ' +
            'Também foi implementada comunicação estruturada via JSON e integração com ambiente web utilizando API em ASP.NET e IIS local',

        contribution:
            'Desenvolvi toda a arquitetura do software, incluindo a integração entre Arduino e aplicação desktop, lógica de contagem de peças, lógica de sensores e motor, processamento de dados e implementação de gráficos de produtividade em tempo real.',

        technologies: [
            'C# (.NET Framework)',
            'Arduino (C++ - IDE Arduino)',
            'ASP.NET (ASPX)',
            'JSON',
            'IIS (Internet Information Services)'
        ],

        github: 'https://github.com/elivelton-almeida/Projeto-TCC-Engenharia-de-Software-UniCesumar',
        live: null,

        icon: "FaMicrochip",

        images: [
            import.meta.env.BASE_URL + 'images/tcc1.jpg',
            import.meta.env.BASE_URL + 'images/tcc2.jpg',
            import.meta.env.BASE_URL + 'images/tcc3.jpg',
            import.meta.env.BASE_URL + 'images/tcc4.jpg',
            import.meta.env.BASE_URL + 'images/tcc5.jpg',
            import.meta.env.BASE_URL + 'images/tcc6.jpg',
            import.meta.env.BASE_URL + 'images/tcc7.jpg',
            import.meta.env.BASE_URL + 'images/tcc8.jpg',
            import.meta.env.BASE_URL + 'images/tcc9.jpg',
            import.meta.env.BASE_URL + 'images/tcc10.jpg',
            import.meta.env.BASE_URL + 'images/tcc11.jpg',
            import.meta.env.BASE_URL + 'images/tcc12.jpg',
            import.meta.env.BASE_URL + 'images/tcc13.jpg',
            import.meta.env.BASE_URL + 'images/tcc14.jpg',
            import.meta.env.BASE_URL + 'images/tcc15.jpg',
            import.meta.env.BASE_URL + 'images/tcc16.jpg',
            import.meta.env.BASE_URL + 'images/tcc17.jpg',
            import.meta.env.BASE_URL + 'images/tcc18.jpg',
            import.meta.env.BASE_URL + 'images/tcc19.jpg',
            import.meta.env.BASE_URL + 'images/tcc20.jpg',
            import.meta.env.BASE_URL + 'images/tcc21.jpg',
            import.meta.env.BASE_URL + 'images/tcc22.jpg'
        ],

        videos: [
            import.meta.env.BASE_URL + 'videos/tcc1.mp4',
            import.meta.env.BASE_URL + 'videos/tcc2.mp4',
            import.meta.env.BASE_URL + 'videos/tcc3.mp4'
        ],

        level: 'Finalizado'
    },
    {
        title: 'Gestão de Restaurantes',
        description:
            'Aplicação Desktop e Web completa para gestão operacional de restaurantes, incluindo controle de mesas, lançamento de comandas/mesas, consultas, vendas, delivery, cadastros, impressão automática de ' +
            'ordens de produção por setor e finalização de conta.',
        automation:
            'Restaurantes enfrentam desafios como demora no atendimento, erros de lançamento, falhas de comunicação entre setores ' +
            'e dificuldade no controle das comandas/mesas simultaneamente dos clientes. O objetivo foi criar um sistema centralizado e confiável que reduzisse erros e acelerasse o fluxo de atendimento.',
        approach:
            'Desenvolvi uma aplicação organizada por setores, permitindo que cada pedido seja automaticamente direcionado para impressão conforme sua categoria ' +
            '(Cozinha, Bebidas / Bar ou Caixa). O sistema inclui gestão de mesas disponíveis, controle de consumo por cliente, reimpressões, status em tempo real e finalização ' +
            'da conta. Também foram implementadas rotinas de sincronização, regras de negócio para lançamentos, monitoramento das impressoras e interfaces responsivas.',
        contribution:
            'Fui responsável por toda a arquitetura do sistema, incluindo backend, lógica de negócios, controle das impressões automáticas por setor e interface de gestão de mesas. ' +
            'Implementei também o módulo de comandas, consumo do cliente, fechamento da conta e tratamento de falhas nas impressoras.',
        technologies: ['C#', 'ASP.NET Core', 'Windows Desktop / Web', 'EF Core', 'SQL Server', 'HTML', 'CSS'],
        github: null,
        live: null,
        icon: "FaProjectDiagram",
        images: [
            import.meta.env.BASE_URL + 'images/appmesas1.jpg',
            import.meta.env.BASE_URL + 'images/appmesas2.jpg',
            import.meta.env.BASE_URL + 'images/appmesas3.jpg',
            import.meta.env.BASE_URL + 'images/appmesas4.jpg',
            import.meta.env.BASE_URL + 'images/appmesas5.jpg',
            import.meta.env.BASE_URL + 'images/appmesas6.jpg',
            import.meta.env.BASE_URL + 'images/appmesas7.jpg',
            import.meta.env.BASE_URL + 'images/appmesas8.jpg',
            import.meta.env.BASE_URL + 'images/appmesas9.jpg',
            import.meta.env.BASE_URL + 'images/appmesas10.jpg',
            import.meta.env.BASE_URL + 'images/appmesas11.jpg'
        ],
        videos: [
            import.meta.env.BASE_URL + 'videos/appmesas.mp4'
        ],

        level: 'Finalizado'
    },
    {
        title: 'Booking',
        description: 'Sistema completo de Gestão de Reservas de mesas com notificações SMS, e-mail e integração mobile.',
        automation: 'Reduzir erros manuais na organização de reservas do Restaurante e centralizar notificações para clientes e equipe.',
        approach: 'O projeto contempla três frentes: Gestão de Reservas, Aplicativo Booking para clientes e API central. ' +
            'A aplicação web foi desenvolvida em C#, ASP.NET Core 8.0, Razor e Blazor Server, garantindo uma interface responsiva com HTML e CSS. ' +
            'O backend MVC gerencia reservas, regras de negócio e integração com notificações SMS, Push e e-mail automático.',
        contribution: 'Desenvolvi toda a arquitetura backend da API REST, incluindo Controllers, Services e Models, além do frontend responsivo da plataforma de Gestão e do aplicativo Booking.',
        technologies: ['ASP.NET Core 8.0 MVC', 'ASP.NET Core Razor', 'Blazor Server', 'WebAPI', 'EF Core', 'SQL Server', 'HTML', 'CSS'],
        github: null,
        live: null,
        icon: "FaProjectDiagram",
        images: [
            import.meta.env.BASE_URL + 'images/reservas1.jpg',
            import.meta.env.BASE_URL + 'images/reservas2.jpg',
            import.meta.env.BASE_URL + 'images/reservas3.jpg',
            import.meta.env.BASE_URL + 'images/reservas4.jpg',
            import.meta.env.BASE_URL + 'images/reservas5.jpg',
            import.meta.env.BASE_URL + 'images/reservas6.jpg',
            import.meta.env.BASE_URL + 'images/reservas7.jpg',
            import.meta.env.BASE_URL + 'images/reservas8.jpg',
            import.meta.env.BASE_URL + 'images/reservas9.jpg'
        ],
        videos: [
            import.meta.env.BASE_URL + 'videos/reservas.mp4'
        ],

        level: 'Finalizado'
    },
    {
        title: 'WeatherNow App',
        description: 'Aplicação web de previsão do tempo em tempo real com gráficos interativos, consumo de API externa e arquitetura cloud-ready com deploy automatizado.',

        automation: 'Disponibilizar uma aplicação moderna para consulta de clima em tempo real, integrando dados externos e apresentando informações de forma visual e intuitiva para o usuário.',

        approach: 'O projeto foi desenvolvido com arquitetura baseada em API REST utilizando ASP.NET Core 9.0. ' +
            'O backend consome dados de uma API pública de clima, realiza o mapeamento das respostas e expõe endpoints próprios para consumo do frontend. ' +
            'A aplicação foi containerizada com Docker e publicada no Render, enquanto o frontend foi hospedado na Netlify. ' +
            'O sistema inclui endpoint de previsão atual e forecast, além de gráficos dinâmicos para visualização de temperatura e condições climáticas.',

        contribution: 'Desenvolvi toda a API REST em ASP.NET Core 9.0, incluindo integração com API externa, modelagem de dados, Services, Controllers e tratamento de erros. ' +
            'Realizei a configuração de Docker, deploy em ambiente Linux (Render) e integração contínua via GitHub. Também desenvolvi o frontend responsivo e integração com os endpoints.',

        technologies: [
            'React',
            'Tailwind',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Docker',
            'Render (Cloud Deploy)',
            'Netlify',
            'REST API',
            'HTTP Client',
            'JSON',
            'Chart.js'
        ],

        github: 'https://github.com/elivelton-almeida/WeatherNow-web',
        live: 'https://weathernow-elivelton.netlify.app/',

        icon: "FaCloudSun",

        images: [
            import.meta.env.BASE_URL + 'images/weathernow1.jpg',
            import.meta.env.BASE_URL + 'images/weathernow2.jpg',
            import.meta.env.BASE_URL + 'images/weathernow3.jpg',
            import.meta.env.BASE_URL + 'images/weathernow4.jpg',
            import.meta.env.BASE_URL + 'images/weathernow5.jpg',
            import.meta.env.BASE_URL + 'images/weathernow6.jpg',
            import.meta.env.BASE_URL + 'images/weathernow7.jpg',
            import.meta.env.BASE_URL + 'images/weathernow8.jpg'
        ],

        videos: [
            import.meta.env.BASE_URL + 'videos/weathernow.mp4'
        ],

        level: 'Finalizado'
    },
    {
        title: 'WeatherNow API',

        description: 'API REST para consulta de previsão do tempo em tempo real, com integração a serviço externo de clima, arquitetura em camadas e deploy containerizado em ambiente Linux.',

        automation: 'Criar uma API robusta e organizada para centralizar o consumo de dados meteorológicos externos, abstraindo regras de negócio, tratamento de erros e padronização de respostas para clientes consumidores.',

        approach: 'A API foi desenvolvida utilizando ASP.NET Core 9.0 seguindo arquitetura em camadas (Controllers, Services e Models). ' +
            'O serviço consome uma API pública de clima através de HttpClient, realiza o mapeamento dos DTOs e expõe endpoints próprios para consulta de clima atual e previsão (forecast). ' +
            'O projeto inclui tratamento de exceções, validação de parâmetros e padronização de respostas JSON. ' +
            'A aplicação foi containerizada com Docker e publicada no Render em ambiente Linux.',

        contribution: 'Desenvolvi toda a estrutura da API REST, incluindo definição de endpoints OpenWeather, implementação da camada de serviços, modelagem de respostas (DTOs), integração com API externa e tratamento de erros. ' +
            'Configurei o Dockerfile, realizei o processo de build e publish com .NET 9 e efetuei o deploy em cloud utilizando Render.',

        technologies: [
            'ASP.NET Core 9.0 Web API',
            'C#',
            'REST',
            'HttpClient',
            'JSON',
            'Docker',
            'Render',
            'Linux Environment'
        ],

        github: 'https://github.com/elivelton-almeida/WeatherNow.API',
        live: null,

        icon: "FaCloudSun",

        images: [
            import.meta.env.BASE_URL + 'images/weathernow-api1.jpg',
            import.meta.env.BASE_URL + 'images/weathernow-api2.jpg',
            import.meta.env.BASE_URL + 'images/weathernow-api3.jpg',
            import.meta.env.BASE_URL + 'images/weathernow-api4.jpg',
            import.meta.env.BASE_URL + 'images/weathernow-api5.jpg'
        ],

        videos: [],

        level: 'Finalizado'
    }
];