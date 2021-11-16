import React from 'react';
import './style.scss';
import iconsDescriptions from '../../assets/icons/iconsDescriptions';
import Icons from '../Icons';

export default function Tecnologies() {
  return (
    <>
      <div id='techs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center block'>Technologies</h2>
              <div className='row'>
                {iconsDescriptions.map(({ id, name, description, icon }) => {
                  return (
                    <React.Fragment key={id}>
                      <Icons
                        id={id}
                        icon={icon}
                        name={name}
                        description={description}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
