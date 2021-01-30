import React, {ChangeEvent, useState} from 'react';
import { classNames } from 'utils/classnames';
import { IconButton } from 'components/IconButton/IconButton';
import './SearchInput.scss';

interface Props {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const SearchInput: React.FC<Props> = (props) => {
    const [showInput, setShowInput] = useState(false);
    const toggleInput = () => {
        setShowInput((value) => !value);
    }
    return (
        <div className={classNames({[props.className || '']: true})}>
            {showInput &&
                <input 
                    className="search-input"
                    type="text"
                    onChange={props.onChange}
                />
            }
            <IconButton icon='search' onClick={toggleInput}  />
        </div>
    )
}