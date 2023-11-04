function MenuButton({children, onMenuSelectHandler, isActive}) {
    return (
        <li>
            <button onClick={onMenuSelectHandler} className={isActive ? 'active' : undefined}>{children}</button>
        </li>
        );
}

export default MenuButton;