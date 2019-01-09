import React from 'react';
import './SkillSets.css';
import htmlIcon from '../../assets/images/htmlicon.png';
import cssIcon from '../../assets/images/cssIcon.png';
import jqueryIcon from '../../assets/images/jqueryIcon.png';
import jsIcon from '../../assets/images/jsIcon.png';
import bootstrapIcon from '../../assets/images/bootstrapIcon.png';
import reactIcon from '../../assets/images/reactIcon.png';
import mernIcon from '../../assets/images/mernIconcopy2.png';
import reactNativeIcon from '../../assets/images/reactNativeIcon.png';
import GraphQLIcon from '../../assets/images/graphqlIcon.png';


const SkillSets = () => (
  <div>
    <div className="col-sm-5 col-md-5">
      <img src={htmlIcon} alt="html" />
      <p className="iconText">html</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={cssIcon} alt="html" />
      <p className="iconText">CSS</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={jqueryIcon} alt="html" />
      <p className="iconText">JQuery</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={jsIcon} alt="html" />
      <p className="iconText">JavaScript</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={bootstrapIcon} alt="html" />
      <p className="iconText">BootStrap</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={reactIcon} alt="html" />
      <p className="iconText">React</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img className='mernIcon' src={mernIcon} alt="html" />
      <p className="iconText"><span>M</span>ongo.<span>E</span>xpress.<span>R</span>eact.<span>N</span>ode</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={reactNativeIcon} alt="html" />
      <p className="iconText">React Native</p>
    </div>
    <div className="col-sm-5 col-md-5">
      <img src={GraphQLIcon} alt="html" />
      <p className="iconText">GraphQL</p>
    </div>
  </div>

)

export default SkillSets;
