function BottomMenu() {
    return (
        <div className="BottomMenu">
            <div className="BomttomMenuChats">
                <span className="BottomMenuIcon"></span>
            </div>
            <div className="BomttomMenuBrowse">
                <span className="BottomMenuIcon"></span>
            </div>
            <div className="BomttomMenuCalls">
                <span className="BottomMenuIcon"></span>
            </div>
            <div className="BomttomMenuStatus">
                <span className="BottomMenuIcon"></span>
            </div>
            <div className="BomttomMenuProfile">
                <span className="BottomMenuIcon"></span>
            </div>
        </div>
    );
}

async function addeventlisteners(){
    const bmchats = document.querySelector(".BottomMenuChats");
    bmchats.addEventListener("click", () => {
        //page to go to
        console.log("to-do chat list page");
    });
}

export addeventlisteners;


export default BottomMenu;