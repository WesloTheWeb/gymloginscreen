import type { gameOption } from "../../../interfaces";
import classes from './GameOption.module.scss';

const { gameOption } = classes;

const GameOption = ({ option, path }: gameOption) => {
    return (
        <a href={path} className={gameOption} target="_blank">
            {option}
        </a>
    );
};

export default GameOption;