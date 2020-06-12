$(function () {
    $('#skill').append(new Skills().getAllSkills());
    $('#projects').append(new Projects().getAllProjects());
});