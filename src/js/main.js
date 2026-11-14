import '../css/style.css'

import header from '../../components/header.html?raw';
import skills from '../../components/skills.html?raw';
import projects from '../../components/projects.html?raw';
import about from '../../components/about.html?raw';
import contact from '../../components/contact.html?raw';

document.querySelector('#header').innerHTML = header
document.querySelector('#about').innerHTML = about
document.querySelector('#skills').innerHTML = skills
document.querySelector('#projects').innerHTML = projects
document.querySelector('#contact').innerHTML = contact
