class Projects {

    projectList = [
        {
            title: 'Sait',
            image: './src/assets/sait.png',
            skill: [
                'Angular',
                '.Net core',
                'Bootstrap',
                'Angular Material'
            ]
        },
        {
            title: 'Consult-Medic',
            image: './src/assets/sait.png',
            skill: [
                'Angular',
                '.Net core',
                'Bootstrap',
                'Angular Material'
            ]
        },
        {
            title: 'Easy-Consult GRP',
            image: './src/assets/sait.png',
            skill: [
                'Angular',
                '.Net core',
                'Bootstrap',
                'Angular Material'
            ]
        },
        {
            title: 'SocialApp',
            image: './src/assets/socialApp.png',
            skill: [
                'Angular',
                '.Net core',
                'Bootstrap',
                'Angular Material'
            ]
        },
    ]

    getAllProjects() {
        let innerHtml = '';
        this.projectList.forEach(skill => {
            skill.class = 'card-project';
            innerHtml += new Card().buildCard(skill)
        });
        return innerHtml;
    }
}