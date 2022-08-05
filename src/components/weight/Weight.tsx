import style from "./model/weight.module.scss";
import { WeightInterface } from "./model/weightInterface";

const Weight = ({ quantity, setQuantity }: WeightInterface) => {
    return (
        <div>
            <div className={style["action__area"]}>
                <button
                    className={style["add__btn"]}
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity === 1}
                >
                    <span>-</span>
                </button>
                <div className={style["item__quantity"]}>
                    <p>{quantity}</p>
                </div>
                <button
                    className={style["subtract__btn"]}
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <span>+</span>
                </button>
            </div>
        </div>
    );
};

export default Weight;
