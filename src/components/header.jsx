import { Cart } from "./cart"
export const Header = () => {
    return (
        <div className="navbar header" >
            <div className="navbar__brand navbar__item  "><h1>React meals</h1></div>
            <Cart>
            <div className="navbar__brand navbar__item  btn btn-lg cart"><img height={"40px"} src="https://freepngimg.com/thumb/categories/1325.png" alt="img"/><p>Cart</p></div>
            </Cart>
        </div>
    )
}