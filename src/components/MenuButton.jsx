function MenuButton({children, onMenuSelect, isActive}) {
    return (
        <li>
            <button onClick={(e) => onMenuSelect(e)} className={isActive ? 'active' : undefined}>{children}</button>
        </li>
        );
}

export default MenuButton;