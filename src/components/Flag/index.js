import React from 'react' 
import PropTypes from "prop-types";

import "./index.css"

//Will receive an image url
export default function Flag({flag}) {
    return <img className="flag" src={flag} alt="Flag" />;
}


Flag.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
