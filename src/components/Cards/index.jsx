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
      techsProject,
      repoLink
    ) => {
      return {
        id: projectId,
        title: titleProject,
        img: imgProject,
        about: aboutProject,
        techs: techsProject,
        link: repoLink,
      };
    };
    return [
      project(
        1,
        'dt money',
        dtmoney,
        'Application to control your expenses',
        'Typescript, React and Styled-components',
        'https://github.com/eduardoaraujogomes/dt-money'
      ),
      project(
        2,
        'memory game',
        memoryGame,
        'Browser memory game',
        'Vanilla-JS, CSS5 and HTML5',
        'https://github.com/eduardoaraujogomes/memory-game'
      ),
      project(
        3,
        'plant manager',
        plantManager,
        'Application to remind people to water their plants',
        'Typescript, React Native and Expo',
        'https://github.com/eduardoaraujogomes/next-level-week-5'
      ),
      project(
        4,
        'proffy',
        proffy,
        'Online study platform',
        'Javascript, Node and ExpressJS',
        'https://github.com/eduardoaraujogomes/nextlevelweek2'
      ),
      project(
        5,
        'studion',
        studion,
        'Web page for events company',
        'CSS3, Javascript and HTML5',
        'https://github.com/eduardoaraujogomes/studion'
      ),
      project(
        6,
        'to-do',
        todo,
        'to-do list',
        'Typescript, SCSS and Javascript',
        'https://github.com/eduardoaraujogomes/desafio01-trilha-react'
      ),
    ];
  };

  return (
    <>
      <div id='portfolio' className='block'>
        <div className='container text-center'>
          <h2 className='block'>Projects</h2>
          <div className='row'>
            {projectList().map(({ id, title, img, about, techs, link }) => {
              return (
                <React.Fragment key={id}>
                  <Card
                    title={title}
                    img={img}
                    about={about}
                    techs={techs}
                    link={link}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
