class Projects {

    constructor() {
        this.initializeEventListenner();
    }

    initializeEventListenner() {
        $('#projects').append(this.getAllProjects());
        $('.card-project').click((event) => this.openModal(event));
    }

    projectList = [
        {
            title: 'Sait',
            image: './src/assets/sait.png',
            skill: [
                {label: enumSkills.angular, color: '#dd0031'},
                {label: enumSkills.netCore  , color: '#5c2992'},
                {label: enumSkills.sql, color: '#ffa000'},
                {label: enumSkills.bootstrap, color: '#563d7c'},
                {label: enumSkills.angularMaterial, color: '#3f51b5'},
                {label: enumSkills.html, color: '#e54c21'},
                {label: enumSkills.css, color: '#016ebb'},
            ],
            detail: `Es un portal de declaración de impuestos para la municipalidad en el <strong>Salvador</strong>.
                    este proyecto se realizó en colaboración con la empresa <strong>WEPSYS</strong>. <br> <br>
                    <img src="./src/assets/sait_login.png" class="text-center"/> <br>
                    <img src="./src/assets/sait_home.png" class="text-center"/>`
        },
        {
            title: 'Consult-Medic',
            image: 'data:image/png;base64,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',
            skill: [
                {label: enumSkills.react, color: '#63dcfb'},
                {label: enumSkills.codeigniter, color: '#ea923d'},
                {label: enumSkills.php, color: '#3f51b5'},
                {label: enumSkills.mySql, color: '#157497'},
                {label: enumSkills.bootstrap, color: '#563d7c'},
            ],
            detail: `Es una herramienta para consultorios que tengan la necesidad de:
                    <ul>
                        <li>Crear citas.</li>
                        <li>Tener recordatorios de citas de clientes.</li>
                        <li>Asignar clientes a un medíco.</li>
                        <li>Crear recetas.</li>
                        <li>Tener acceso a las citas, recetas y visitas de un cliente.</li>
                    </ul>`
        },
        {
            title: 'Easy-Consult GRP',
            image: 'data:image/png;base64,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',
            skill: [
                {label: enumSkills.vue, color: '#3fb984'},
                {label: enumSkills.codeigniter, color: '#ea923d'},
                {label: enumSkills.php, color: '#3f51b5'},
                {label: enumSkills.mySql, color: '#157497'},
                {label: enumSkills.bootstrap, color: '#563d7c'},
            ],
            detail: `Es una herramienta para pymes con el fin de facilitar los procesos internos realizados en esta.
                    contiene modulos para:.
                        <ul>
                            <li>Facturación.</li>
                            <li>Cuadre de cierre.</li>
                            <li>Clientes.</li>
                            <li>Cuentas por pagar.</li>
                            <li>Cuentas por cobrar.</li>
                            <li>Inventario General.</li>
                            <li>Almacen.</li>
                        </ul>
                     <br>
                    <img src="./src/assets/easyConsult.png" class="text-center" />`
        },
        {
            title: 'SocialApp',
            image: './src/assets/socialApp.png',
            skill: [
                {label: enumSkills.flutter, color: '#41d0fd'},
                {label: enumSkills.firebase, color: '#ffca28'},
                {label: enumSkills.dark},
            ],
            detail: `Es una red social demo para colocar como muestra en este sitio. <br> <br>
                    <img src="./src/assets/socialApp_login.png" class="text-center"/>`
        },
    ]

    getAllProjects() {
        let innerHtml = '';
        this.projectList.forEach((project, index) => {
            project.class = 'card-project';
            project.index = index;
            innerHtml += new Card().buildCard(project);
        });
        return innerHtml;
    }

    getAllSkillIntoProject(project) {
        let innerHtml = '';
        project.forEach(skill => {
            innerHtml += new Badge().addBadged(skill.label, skill.color);
        });

        $('#badge-contain').html(innerHtml);
    }

    openModal(event) {
        const index = parseInt($(event.target).attr('index'));
        new Modal().openModal({ title: this.projectList[index].title, detail: this.projectList[index].detail });
        this.getAllSkillIntoProject(this.projectList[index].skill);
    }
}