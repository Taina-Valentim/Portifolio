document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });


    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function activateNavLink() {
        let current = '';
        const offset = 70;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); 

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });




    const projectsGrid = document.getElementById('projects-grid');
    const projects = [
        {
            title: "Jogo da Advinhação <span>(Ruby)</span>",
            description: "Um jogo em Ruby em que o jogador tenta advinhar um número escolhido aleatóriamente",
            tags: ["Ruby"],
            link: "https://github.com/Taina-Valentim/Jogo-da-Advinhacao",
            idFoto: 1
        },
        {
            title: "Jogo da Advinhação <span>(Python)</span>",
            description: "Um jogo de advinhação feito inicialmente em Ruby que foi adaptado para a linguagem Python",
            tags: ["Python"],
            link: "https://github.com/Taina-Valentim/Jogo-da-Advinhacao-Py",
            idFoto: 2
        },
        {
            title: "Gerenciamento de Cemitérios <span>(Python)</span>",
            description: "Projeto desenvolvido para o gerenciamento de um cemitério com banco de dados",
            tags: ["Python", "SQLite"],
            link: "https://github.com/Taina-Valentim/Gerenciamento-de-Cemiterios",
            idFoto: 3
        },
        {
            title: "Gerenciamento de Cemitérios <span>(Django)</span>",
            description: "Projeto de gerenciamento de cemitérios feito inicialmente em Python que foi adaptado para o framework Django",
            tags: ["Python", "HTML", "CSS", "Django", "Bootstrap", "Heroku"],
            link: "https://github.com/Taina-Valentim/Gerenciamento-de-Cemiterios-Django",
            idFoto: 0
        },
        {
            title: "Project Robozinho",
            description: "Projeto feito em microcontrolador PIC18F4620 para controlar um braço robótico por PWM",
            tags: ["C", "Proteus 8"],
            link: "https://github.com/Taina-Valentim/Project-Robozinho",
            idFoto: 5
        },
        {
            title: "Projeto QSW",
            description: "Projeto de gerenciamento de turmas em aulas da faculdade desenvolvido para a matéria de Qualidade de Software",
            tags: ["C#", "HTML", "CSS", "JavaScript", "MVC", "ASP.NET Core", "Bootstrap"],
            link: "https://github.com/Taina-Valentim/ProjetoQSW",
            idFoto: 6
        },
        {
            title: "Projeto QSW Teste",
            description: "Projeto de testes unitários do sistema desenvolvido para a aula de QSW",
            tags: ["C#",".NET", "Testes Unitários", "AAA", "VS Test Explorer"],
            link: "https://github.com/Taina-Valentim/ProjetoQSWTeste",
            idFoto: 7
        },
        {
            title: "Projeto POO",
            description: "Projeto de gerenciamento de cemitérios feito inicialmente em Python e Django que foi adaptado para a linguagem Java",
            tags: ["Java", "POO", "MySQL", "Criação de Telas", "Login e Autenticação", "Criptografia de Dados", "Gerenciamento de Usuários e Perfis", "Tratamento de Exceções"],
            link: "https://github.com/Taina-Valentim/ProjetoPOO",
            idFoto: 0
        },
        {
            title: "Project RPG",
            description: "Projeto de TCC que engloba a criação e gerenciamento de fichas de RPG de forma online",
            tags: ["C#", "ASP.NET Core", "HTML", "CSS", "JavaScript", "MVC", "EF Core", "SQL Server", "Bootstrap", "LINQ e Lambda", "Repository", "Unit of Work", "Identity", "Razor Pages", "N-Tier Architecture"],
            link: "https://github.com/Taina-Valentim/ProjectRPG",
            idFoto: 9
        },
        {
            title: "Projeto Web",
            description: "Projeto criado para a aula de Desenvolvimento de Sistemas Web para gerenciar (cadastrar, editar, excluir e listar) projetos e tarefas que os compõem.",
            tags: ["Vue.js", "HTML", "CSS", "JavaScript", "SQLite", "Componentização", "APIs RESTful", "Node.js", "Express.js", "Sequelize", "Docker"],
            link: "https://github.com/Taina-Valentim/ProjetoWeb",
            idFoto: 10
        },
        {
            title: "Apresentacao",
            description: "Uma breve apresentação sobre quem sou eu e minhas redes sociais",
            tags: ["HTML​", "CSS​", "JavaScript​", "Design Responsivo"],
            link: "https://github.com/Taina-Valentim/Apresentacao",
            idFoto: 11
        },
        {
            title: "Ficha Vampiro",
            description: "Ficha online do RPG Vampiro A Máscara que salva e carrega os dados da ficha em JSON",
            tags: ["HTML​", "CSS​", "JavaScript​", "Design Responsivo"],
            link: "https://github.com/Taina-Valentim/FichaVampiro",
            idFoto: 12
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="src/images/project${project.idFoto}.png" alt="${project.title}" style="width: 100%;">
            </div>
            <div class="project-info mt-4 ms-2">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join(' \u2022 ')}
                </div>
                <a href="${project.link}" target="_blank" class="btn btn-personalizado project-link">Ver Detalhes</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Carregar skills
    const skillsContainer = document.getElementById('skills-container');
    const skills = [
        {
            category: "🎨 Front-End & Design",
            items: [
                { name: "HTML5", icon: "fab fa-html5", description: "Linguagem de marcação para estruturar páginas web" },
                { name: "CSS3", icon: "fab fa-css3-alt", description: "Linguagem de estilização para páginas web" },
                { name: "JavaScript", icon: "fab fa-js", description: "Linguagem de programação para dinamismo em páginas web" },
                { name: "React", icon: "fab fa-react", description: "Biblioteca JavaScript para interfaces de usuário reutilizáveis " },
                { name: "Vue.js", icon: "fab fa-vuejs", description: "Framework JavaScript para desenvolvimento de SPAs (Single Page Applications)" },
                { name: "Bootstrap", icon: "fab fa-bootstrap", description: "Framework CSS para design com componentes pré-estilizados responsivos" },
                { name: "Figma", icon: "fas fa-drafting-compass", description: "Ferramenta de prototipação e design de interfaces de usuário (UI/UX) com colaboração em tempo real" },
                { name: "Canva", icon: "fas fa-palette", description: "Plataforma de design gráfico simplificado" },
                { name: "Windows Forms", icon: "fas fa-window-maximize", description: "Framework para aplicações desktop Windows" }
            ]
        },
        {
            category: "🛠 Back-End & Linguagens",
            items: [
                { name: "Python", icon: "fab fa-python", description: "Linguagem de programação para diversas aplicações (web, automação, análise de dados e IA)" },
                { name: "Ruby", icon: "fas fa-gem", description: "Linguagem de programação dinâmica focada em produtividade" },
                { name: "Java", icon: "fab fa-java", description: "Linguagem de programação multiplataforma orientada a objetos" },
                { name: "C", icon: "fas fa-c", description: "Linguagem de programação de sistemas operacionais e drivers com controle total sobre hardware" },
                { name: "C++", icon: "fas fa-copyright", description: "Linguagem de programação para desenvolvimento de sistemas de alto desempenho" },
                { name: "C#", icon: "fas fa-code", description: "Linguagem de programação da Microsoft para aplicações Windows, jogos (Unity) integrada com ecossistema .NET" },
                { name: "VB.NET", icon: "fas fa-code", description: "Linguagem de programação .NET para aplicações desktop/web Windows" },
                { name: "Node.js", icon: "fab fa-node-js", description: "Runtime JavaScript para criar servidores e APIs JavaScript no servidor (backend)" },
                { name: "ASP.NET Core", icon: "fas fa-server", description: "Framework web para desenvolver APIs e aplicações web .NET multiplataforma" },
                { name: "Express.js", icon: "fas fa-server", description: "Framework web para construir APIs REST com Node.js" }
            ]
        },
        {
            category: "🗄 Banco de Dados & ETL",
            items: [
                { name: "MySQL", icon: "fas fa-database", description: "Sistema de banco de dados relacional open-source para armazenar e gerenciar dados estruturados" },
                { name: "SQLite", icon: "fas fa-database", description: "Banco de dados embarcado leve e sem necessidade de servidor com armazenamento local em apps móveis/desktop" },
                { name: "SQL Server", icon: "fas fa-database", description: "SGBD relacional da Microsoft para gerenciar grandes volumes de dados empresariais integrado com ferramentas Microsoft (Power BI, Azure)" },
                { name: "Oracle Database", icon: "fas fa-database", description: "SGBD empresarial robusto para soluções corporativas de alta complexidade com segurança avançada e suporte a Big Data" },
                { name: "EF6", icon: "fas fa-code-merge", description: "ORM para .NET (Entity Framework) que simplifica o acesso a bancos de dados" },
                { name: "Sequelize", icon: "fas fa-code-merge", description: "ORM para Node.js para acesso a bancos SQL em JavaScript" },
                { name: "Talend Studio", icon: "fas fa-exchange-alt", description: "Ferramenta ETL para integração e transformação de dados entre sistemas" }
            ]
        },
        {
            category: "📡 APIs & Arquitetura",
            items: [
                { name: "APIs RESTful", icon: "fas fa-cloud", description: "Protocolo de comunicação para conectar sistemas via HTTP (web/mobile)" },
                { name: "N-Tier Architecture", icon: "fas fa-sitemap", description: "Padrão arquitetural para aplicações que organiza aplicações em camadas lógicas" },
                { name: "Unit of Work", icon: "fas fa-cubes", description: "Padrão de design para gerenciar transações em operações complexas" },
                { name: "Repository", icon: "fas fa-cube", description: "Padrão de acesso a dados que separa lógica de negócio do acesso ao banco, centralizando operações CRUD em uma classe" }
            ]
        },
        {
            category: "🤖 Automação & Testes",
            items: [
                { name: "RPA", icon: "fas fa-robot", description: "Tecnologia de automação para automatizar tarefas repetitivas (ex: preenchimento de planilhas, preencimento de campos de formulários)" },
                { name: "Selenium", icon: "fas fa-check-circle", description: "Framework de testes web para testar aplicações web automaticamente" },
                { name: "Testes Unitários", icon: "fas fa-vial", description: "Metodologia de teste que valida pequenas partes do código isoladamentede, como componentes individuais" },
                { name: "VS Test Explorer", icon: "fas fa-bug", description: "Ferramenta de testes para executar e depurar testes no Visual Studio" },
                { name: "AAA", icon: "fas fa-check-double", description: "Padrão de organização de testes (Arrange-Act-Assert) para estruturar testes de forma clara" },
                { name: "AutoHotKey", icon: "fas fa-keyboard", description: "Linguagem de script para automação de tarefas" }
            ]
        },
        {
            category: "☁ DevOps & Cloud",
            items: [
                { name: "Docker", icon: "fab fa-docker", description: "Plataforma para conteinerização para dividir apps em containers isolados" },
                { name: "AWS Cloud", icon: "fab fa-aws", description: "Plataforma  de computação em nuvem para hospedar aplicações e serviços escaláveis" },
                { name: "Heroku", icon: "fas fa-cloud-upload-alt", description: "Plataforma de nuvem como serviço para publicar apps web rapidamente com deploy via Git" }
            ]
        },
        {
            category: "🔧 Ferramentas & Ambientes",
            items: [
                { name: "PyCharm", icon: "fas fa-code", description: "IDE para desenvolvimento Python com debugger integrado e suporte a Django" },
                { name: "VS Code", icon: "fas fa-code", description: "Editor de código leve da Microsoft para editar qualquer linguagem com plugins" },
                { name: "Visual Studio", icon: "fas fa-code", description: "IDE para desenvolvimento .NET/C++ de aplicações Windows complexas" },
                { name: "Eclipse IDE", icon: "fas fa-code", description: "Ambiente de desenvolvimento Java para criar aplicações empresariais com mais facilidade" },
                { name: "Proteus 8", icon: "fas fa-microchip", description: "Software para simulação de circuitos eletrônicos" },
                { name: "Git", icon: "fab fa-git-alt", description: "Sistema de controle de versão para gerenciar histórico de alterações no código" },
                { name: "GitHub", icon: "fab fa-github", description: "Plataforma de colaboração para hospedagem de projetos Git e trabalho em equipe" },
                { name: "GitLab", icon: "fab fa-gitlab", description: "Plataforma DevOps completa para gerenciamento de todo o ciclo de vida de software" },
                { name: "Jira", icon: "fab fa-jira", description: "Ferramenta de gestão de projetos e organização de tarefas em metodologias ágeis" }
            ]
        }
    ];
    
    skills.forEach(category => {
        const categoryWrapper = document.createElement('div');
        categoryWrapper.className = 'skill-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.category;
        
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';
    
        category.items.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
                <div class="skill-tooltip">${skill.description}</div>
            `;
            skillsGrid.appendChild(skillElement);
        });
        
    
        categoryWrapper.appendChild(categoryTitle);
        categoryWrapper.appendChild(skillsGrid);
        skillsContainer.appendChild(categoryWrapper);
    });

    // Efeito de digitação
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const texts = ["Desenvolvedora Full Stack", "UI/UX Designer", "Apaixonada por Tecnologia"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[index];
            if (isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        setTimeout(type, 1000);
    }

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('successPopup').style.display = 'flex';
                this.reset();
            } else {
                throw new Error('Erro ao enviar mensagem');
            }
        })
        .catch(error => {
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
        });
    });

    const successPopup = document.getElementById('successPopup');
    document.querySelector('.popup-close').addEventListener('click', function() {
        successPopup.style.display = 'none';
    });

    successPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });

    const emailCopiedPopup = document.getElementById('emailCopiedPopup');
    document.getElementById('copyEmail').addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = 'taina.valentim.lima@gmail.com';
        
        navigator.clipboard.writeText(email).then(function() {
            emailCopiedPopup.style.display = 'flex';
        }, function() {
            const textarea = document.createElement('textarea');
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            emailCopiedPopup.style.display = 'flex';
            
            setTimeout(function() {
                emailCopiedPopup.style.display = 'none';
            }, 3000);
        });
    });
    
    emailCopiedPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});