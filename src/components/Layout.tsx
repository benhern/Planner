import Header from "./Header.tsx";
import SideBar from "./SideBar.tsx";
import Main from "./Main.tsx";

function layout() {

    return (
        <>
            < div className= "gridContainer" >
                <div className= "gridHeader" >
                    <p> Header </p>
                    <Header/>


                </div>
                < div className= "gridSideBar" >
                    <p> SideBar </p>
                    <SideBar/>


                </div>
                <div className= "gridMain">
                    <p> Main </p>
                    <Main/>

                </div>

            </div>
        </>
    )
}

export default layout
