function MenuButton({children, onMenuSelectHandler}) {
    return (
        <li>
            <button onClick={onMenuSelectHandler}>{children}</button>
        </li>
        );
}

export default MenuButton;