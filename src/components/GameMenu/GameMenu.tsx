import { gameMenuConfig } from "../../config";
import GameOption from "./GameOption/GameOption";
import classes from './GameMenu.module.scss';

const { container } = classes;

const GameMenu = ({ }) => {
    return (
        <section className={container}>
            {gameMenuConfig.map((option, idx) => {

                return (
                    <GameOption
                        key={idx}
                        option={option.optionTitle}
                    />
                )
            })}
        </section>
    );
};

export default GameMenu;