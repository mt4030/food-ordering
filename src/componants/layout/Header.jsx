import Headbtn from "../cart/HeaderCartButton"
export default function Navbar({onShow}){




    return(

        <>
        <nav className="flex  justify-between md:px-20 h-20 items-center bg-gray-50 shadow-md sticky top-0 z-50">
            <h3 className=" lg:text-4xl text-[24px] font-bold text-gray-900 px-9 align-middle">D&D</h3>
            <Headbtn onClickShow={onShow}/>
        </nav>
        </>
    )
}