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
                    <img src="./src/assets/sait_login.png" class="text-center" width="450" /> <br>
                    <img src="./src/assets/sait_home.png" class="text-center" width="450" />`
        },
        {
            title: 'Consult-Medic',
            image: './src/assets/sait.png',
            skill: [
                {label: enumSkills.react, color: '#63dcfb'},
                {label: enumSkills.codeigniter, color: '#ea923d'},
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
            image: './src/assets/sait.png',
            skill: [
                {label: enumSkills.vue, color: '#3fb984'},
                {label: enumSkills.codeigniter, color: '#ea923d'},
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
                    <img src="./src/assets/easyConsult.png" class="text-center" width="450" />`
        },
        {
            title: 'SocialApp',
            image: './src/assets/socialApp.png',
            skill: [
                {label: enumSkills.flutter, color: '#41d0fd'},
                {label: enumSkills.firebase, color: '#ffca28'},
            ],
            detail: `Es una red social demo para colocar como muestra en este sitio. <br> <br>
                    <img src="./src/assets/socialApp_login.png" class="text-center" width="350" />`
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