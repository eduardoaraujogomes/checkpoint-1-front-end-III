import React from 'react';
import Card from './Card';

import dtmoney from '../../assets/projects/dt-money.png';
import memoryGame from '../../assets/projects/memory-game.png';
import plantManager from '../../assets/projects/plant-manager.png';
import proffy from '../../assets/projects/proffy.png';
import studion from '../../assets/projects/studion.png';
import todo from '../../assets/projects/todo.gif';

export default function Cards() {
  const projectList = () => {
    const project = (
      projectId,
      titleProject,
      imgProject,
      aboutProject,
      techsProject
    ) => {
      return {
        id: projectId,
        title: titleProject,
        img: imgProject,
        about: aboutProject,
        techs: techsProject,
      };
    };
    return [
      project(
        1,
        'dt money',
        dtmoney,
        'Application to control your expenses',
        'Typescript, React and Styled-components'
      ),
      project(
        2,
        'memory game',
        memoryGame,
        'Browser memory game',
        'Vanilla-JS, CSS5 and HTML5'
      ),
      project(
        3,
        'plant manager',
        plantManager,
        'Application to remind people to water their plants',
        'Typescript, React Native and Expo'
      ),
      project(
        4,
        'proffy',
        proffy,
        'Online study platform',
        'Javascript, Node and ExpressJS'
      ),
      project(
        5,
        'studion',
        studion,
        'Web page for events company',
        'CSS3, Javascript and HTML5'
      ),
      project(
        6,
        'to-do',
        todo,
        'to-do list',
        'Typescript, SCSS and Javascript'
      ),
    ];
  };

  return (
    <>
      <div id='portfolio' className='block'>
        <div className='container text-center'>
          <h2 className='block'>Projects</h2>
          <div className='row'>
            {projectList().map(({ id, title, img, about, techs }) => {
              return (
                <React.Fragment key={id}>
                  <Card title={title} img={img} about={about} techs={techs} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
