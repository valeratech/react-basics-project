function MenuButton({children, onMenuSelectHandler, isActive}) {
    return (
        <li>
            <button onClick={(e) => onMenuSelectHandler(e)} className={isActive ? 'active' : undefined}>{children}</button>
        </li>
        );
}

export default MenuButton;