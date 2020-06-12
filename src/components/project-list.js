class Project {
    projectList = [
        {
            title:'',
            labels:''
        }
    ]

    buildProject() {
        let innerHtml = '';
        this.projectList.forEach(skill => {
            skill.class = 'card-project';
            innerHtml += new Card().buildCard(skill)
        });
        return innerHtml;
    }
}