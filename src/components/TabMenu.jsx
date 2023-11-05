import MenuButton from "./MenuButton";

function TabMenu({children, buttons}) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}

export default TabMenu;