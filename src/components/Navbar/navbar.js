"use client";
// import next image
import Image from "next/image";

//import logo
import logo from "../../../public/logo.svg";

//import react scroll
import { Link } from "react-scroll";
import { Fragment, useContext } from "react";

// import adminNavOptions
import { adminNavOptions, navOptions, styles } from "@/utils";

// import icons
import { FiMenu } from "react-icons/fi";
import { GlobalContext } from "@/context";
import CommonModal from "../CommonModal/commonModal";

const isAdminView = false;
const isAuthUser = false;
const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className=" flex items-center justify-between md:w-auto md:flex"
      id="nav-items"
    >
      <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 md:p-0"
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 md:p-0"
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default function Navbar() {

  const {showNavModal, setShowNavModal} = useContext(GlobalContext)
  return (
    <>
      <nav className="sticky top-0 w-full z-20 backdrop-blur-sm border-b border-gray-200 shadow-lg ">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto py-2 px-4  ">
          {/* ===== Logo ======= */}
          <div className="flex items-center cursor-pointer">
            <Link to="home">
              <Image
                src={"/logo.svg"}
                width={170}
                height={32}
                alt="logo"
              ></Image>
            </Link>
          </div>

          {/* ====== Buttons ====== */}
          <div className="flex items-center  gap-2 md:order-2 ">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className={styles.button}>Account</button>
                <button className={styles.button}>Cart</button>
              </Fragment>
            ) : null}
            {user.role === "admin" ? (
              isAdminView ? (
                <button className={styles.button}>Client View</button>
              ) : (
                <button className={styles.button}>Admin View</button>
              )
            ) : null}

            {isAuthUser ? (
              <button className={styles.button}>Logout</button>
            ) : (
              <button className={styles.button}>Login</button>
            )}
            <button
              className="inline-flex p-2 rounded-lg md:hidden"
              onClick={() => setShowNavModal(true)}
            >
              <FiMenu />
            </button>
          </div>
          <NavItems />
        </div>
      </nav>
      <CommonModal show={showNavModal} setShow={setShowNavModal}/>
    </>
  );
}
