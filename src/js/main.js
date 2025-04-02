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

    // Ativar link correspondente à seção visível
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function activateNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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
    activateNavLink(); // Ativar ao carregar a página

    // Adicione este evento para os cliques nos links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remover active de todos os links
            navLinks.forEach(item => item.classList.remove('active'));
            // Adicionar active apenas no link clicado
            this.classList.add('active');
        });
    });





    // Carregar projetos dinamicamente
    const projectsGrid = document.getElementById('projects-grid');
    const projects = [
        {
            title: "Jogo da Advinhação",
            description: "Um jogo em Ruby em que o jogador tenta advinhar um número escolhido aleatóriamente",
            tags: ["Ruby"],
            link: "https://github.com/Taina-Valentim/Jogo-da-Advinhacao",
            idFoto: 1
        },
        {
            title: "Jogo da Advinhação",
            description: "Um jogo de advinhação feito inicialmente em Ruby que foi adaptado para a linguagem Python",
            tags: ["Python"],
            link: "https://github.com/Taina-Valentim/Jogo-da-Advinhacao-Py",
            idFoto: 2
        },
        {
            title: "Gerenciamento de Cemitérios",
            description: "Projeto desenvolvido para o gerenciamento de um cemitério com banco de dados",
            tags: ["Python", "SQLite"],
            link: "https://github.com/Taina-Valentim/Gerenciamento-de-Cemiterios",
            idFoto: 3
        },
        {
            title: "Gerenciamento de Cemitérios",
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
        
        // Adicione mais projetos conforme necessário
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
                <a href="${project.link}" target="_blank" class="btn btn-primary project-link">Ver Detalhes</a>
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
                { name: "HTML5", icon: "fab fa-html5" },
                { name: "CSS3", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "React", icon: "fab fa-react" },
                { name: "Vue.js", icon: "fab fa-vuejs" },
                { name: "Bootstrap", icon: "fab fa-bootstrap" },
                { name: "Figma", icon: "fas fa-drafting-compass" },
                { name: "Canva", icon: "fas fa-palette" },
                { name: "Windows Forms", icon: "fas fa-window-maximize" }
            ]
        },
        {
            category: "🛠 Back-End & Linguagens",
            items: [
                { name: "Python", icon: "fab fa-python" },
                { name: "Ruby", icon: "fas fa-gem" },
                { name: "Java", icon: "fab fa-java" },
                { name: "C", icon: "fas fa-c" },
                { name: "C++", icon: "fas fa-copyright" },
                { name: "C#", icon: "fas fa-code" },
                { name: "VB.NET", icon: "fas fa-code" },
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "ASP.NET Core", icon: "fas fa-server" },
                { name: "Express.js", icon: "fas fa-server" }
            ]
        },
        {
            category: "🗄 Banco de Dados & ETL",
            items: [
                { name: "MySQL", icon: "fas fa-database" },
                { name: "SQLite", icon: "fas fa-database" },
                { name: "SQL Server", icon: "fas fa-database" },
                { name: "Oracle Database", icon: "fas fa-database" },
                { name: "EF6", icon: "fas fa-code-merge" },
                { name: "Sequelize", icon: "fas fa-code-merge" },
                { name: "Talend Studio", icon: "fas fa-exchange-alt" }
            ]
        },
        {
            category: "📡 APIs & Arquitetura",
            items: [
                { name: "APIs RESTful", icon: "fas fa-cloud" },
                { name: "N-Tier Architecture", icon: "fas fa-sitemap" },
                { name: "Unit of Work", icon: "fas fa-cubes" },
                { name: "Repository", icon: "fas fa-cube" }
            ]
        },
        {
            category: "🤖 Automação & Testes",
            items: [
                { name: "RPA", icon: "fas fa-robot" },
                { name: "Selenium", icon: "fas fa-check-circle" },
                { name: "Testes Unitários", icon: "fas fa-vial" },
                { name: "VS Test Explorer", icon: "fas fa-bug" },
                { name: "AAA", icon: "fas fa-check-double" },
                { name: "AutoHotKey", icon: "fas fa-keyboard" }
            ]
        },
        {
            category: "☁ DevOps & Cloud",
            items: [
                { name: "Docker", icon: "fab fa-docker" },
                { name: "AWS Cloud", icon: "fab fa-aws" },
                { name: "Heroku", icon: "fas fa-cloud-upload-alt" }
            ]
        },
        {
            category: "🔧 Ferramentas & Ambientes",
            items: [
                { name: "PyCharm", icon: "fas fa-code" },
                { name: "VS Code", icon: "fas fa-code" },
                { name: "Visual Studio", icon: "fas fa-code" },
                { name: "Eclipse IDE", icon: "fas fa-code" },
                { name: "Proteus 8", icon: "fas fa-microchip" },
                { name: "Git", icon: "fab fa-git-alt" },
                { name: "GitHub", icon: "fab fa-github" },
                { name: "GitLab", icon: "fab fa-gitlab" },
                { name: "Jira", icon: "fab fa-jira" }
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
});