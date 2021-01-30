import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCross, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { classNames } from 'utils/classnames';
import './IconButton.scss';

interface Props {
  icon: 'arrow-left' | 'arrow-rigth' | 'search' | 'times';
  className?: string;
  onClick?: (event?: MouseEvent) => void;
}

export const IconButton: React.FC<Props> = (props) => {
  const getIcon = () => {
    switch(props.icon) {
      case 'arrow-left':
        return <FontAwesomeIcon icon={faAngleLeft} />;
      case 'arrow-rigth':
        return <FontAwesomeIcon icon={faAngleRight} />;
      case 'times':
        return <FontAwesomeIcon icon={faTimes} />;
      default:
        return <FontAwesomeIcon icon={faSearch} />
    }
  }
  return (
    <button
      className={classNames({
        'icon-button': true,
        [props.className || '']: true
      })}
      onClick={props.onClick}
    >
      {getIcon()}
    </button>
  )
}
