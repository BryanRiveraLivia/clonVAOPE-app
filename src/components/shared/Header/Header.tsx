"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import GeneralContainer from "@/components/containers/GeneralContainer";
import GeneralFullContainer from "@/components/containers/GeneralFullContainer";
import GeneralRowContainer from "@/components/containers/GeneralRowContainer";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";
import { cn } from "cn-func";
import { BiSolidCategory } from "react-icons/bi";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Props } from "next/script";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

interface PropsDropDown {
  active: boolean;
  onCloseMobileMenu?: () => void;
}

interface PropsDropDownLi {
  _id: string;
  name: string;
  slug: string;
}

const Header = () => {
  const [NavEvents, setNavEvents] = useState<boolean>(false);
  const [NavEventsMobile, setNavEventsMobile] = useState<boolean>(false);
  const [enableSearchMobile, setEnableSearchMobile] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null);
  const enableHeaderMobile = useMediaQuery({ query: "(max-width: 1040px)" });

  const onNavEvents = () => {
    setNavEvents(!NavEvents);
  };

  const onCloseMobileMenu = () => {
    setNavEventsMobile(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setNavEvents(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return !enableHeaderMobile ? (
    <header className="fixed left-0 top-0 w-full z-50 shadow-xl" ref={headerRef}>
      <GeneralFullContainer className="bg-black">
        <GeneralContainer>
          <GeneralRowContainer className="flex items-center">
            <div className="min-w-[163px] h-[67px] flex items-center border-r-[1px] border-[#373b62]">
              <Image
                src={`/images/logos/logo.svg`}
                alt="logo"
                width={132}
                height={20}
              ></Image>
            </div>
            <button
              className="min-w-[188px] h-[67px] flex items-center justify-center border-r-[1px] border-[#373b62] transition-all"
              onClick={() => setNavEvents(!NavEvents)}
            >
              <div className="relative flex items-center">
                <IoMenu
                  className={`absolute text-white size-9 transition-all duration-300 transform ${
                    NavEvents ? "opacity-0 scale-75" : "opacity-100 scale-100"
                  }`}
                />
                <IoClose
                  className={`absolute text-white size-9 transition-all duration-300 transform ${
                    NavEvents ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                />
              </div>
              <span className="text-white font-semibold ml-10">EVENTOS</span>
            </button>
            <div className="flex-1 h-[67px] flex items-center justify-items-center justify-center border-r-[1px] border-[#373b62] xl:px-16 lg:px-10 md:px-5 sm:px-2">
              <div className="h-[38px] flex items-center overflow-hidden bg-white rounded-md  px-2 w-full ">
                <form className="flex flex-row w-full gap-2 px-2">
                  <button>
                    <IoIosSearch className="text-[#6e7392] size-6" />
                  </button>
                  <input
                    type="text"
                    className="h-[38px] w-full placeholder:text-[#6e7392] placeholder:font-semibold focus:outline-none focus:ring-0 focus:text-[#6e7392] text-sm"
                    name=""
                    id=""
                    placeholder="Encuentra tu evento o artista favorito"
                  />
                </form>
              </div>
            </div>
            <div className="min-w-[162px] h-[67px] flex items-center justify-items-center justify-center border-r-[1px] border-[#373b62]">
              <FaRegUser className="text-white size-5 mr-2" />
              <span className="text-white font-semibold">INGRESAR</span>
            </div>
          </GeneralRowContainer>
          <DropDownNavMenu active={NavEvents}></DropDownNavMenu>
        </GeneralContainer>
      </GeneralFullContainer>
    </header>
  ) : (
    <header className="fixed left-0 top-0 w-full z-50 shadow-xl">
      <GeneralFullContainer className="bg-black">
        <GeneralContainer>
          <GeneralRowContainer className="flex items-center">
            <button
              className="min-w-[40px] h-[67px] flex items-center justify-center  transition-all"
              onClick={() => setNavEventsMobile(!NavEventsMobile)}
            >
              <div className="flex items-center">
                <IoMenu
                  className={`relative text-white size-9 transition-all duration-300 transform`}
                />
              </div>
            </button>
            <div className=" flex-1 h-[67px] flex items-center justify-center  ">
              <Image
                src={`/images/logos/logo.svg`}
                alt="logo"
                width={132}
                height={20}
              ></Image>
            </div>
            <button className="min-w-[40px] h-[67px] flex items-center justify-center  transition-all" onClick={()=>setEnableSearchMobile(!enableSearchMobile)}>
              <IoIosSearch className="text-white size-7" />
            </button>
            <div className={`min-w-[40px] h-[67px]  items-center justify-items-center justify-center  xl:px-16 lg:px-6 md:px-5 sm:px-2 xs:px-2 absolute w-full top-0 left-0 flex flex-row gap-2 bg-black ${!enableSearchMobile && 'hidden'}`}>
              <div className="h-[38px] flex items-center overflow-hidden bg-white rounded-md  px-2 w-full ">
                <form className="flex flex-row w-full gap-2 px-2">
                  <button>
                    <IoIosSearch className="text-[#6e7392] size-6" />
                  </button>
                  <input
                    type="text"
                    className="h-[38px] w-full placeholder:text-[#6e7392] placeholder:font-semibold focus:outline-none focus:ring-0 focus:text-[#6e7392] text-sm"
                    name=""
                    id=""
                    placeholder="Encuentra tu evento o artista favorito"
                  />
                </form>
              </div>
              <IoClose
              className={` text-white size-7 cursor-pointer`}
              onClick={()=>setEnableSearchMobile(!enableSearchMobile)}
            />
            </div>
          </GeneralRowContainer>

          {NavEventsMobile && (
            <DropDownNavMenuMobile
              active={NavEventsMobile}
              onCloseMobileMenu={onCloseMobileMenu}
            ></DropDownNavMenuMobile>
          )}
        </GeneralContainer>
      </GeneralFullContainer>
    </header>
  );
};

const DropDownNavMenu: FC<PropsDropDown> = ({ active }) => {
  const [menuList, setMenuList] = useState<PropsDropDownLi[] | null>(null);

  const getMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setMenuList(res.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      await getMenu();
    };

    fetchMenu();
  }, []);

  return (
    <div
      className={cn(
        "bg-white absolute min-w-[230px] ml-[178.5px] shadow-[0_4px_25px_rgba(110,115,146,.3)] transition-opacity duration-300 ease-in-out py-[30px] px-0 ",
        active ? "block " : "hidden"
      )}
    >
      <h3 className="flex flex-row items-center px-7 mb-4">
        <BiSolidCategory className=" mr-[8px]  size-8 text-[#ff63bf]" />
        <span className="font-bold">CATEGORÍAS</span>
      </h3>
      <nav>
        <ul className={styles.nav}>
          {menuList?.map((item, index) => {
            return (
              <DropDownNavMenuLi
                key={item._id}
                _id={item._id}
                name={item.name}
                slug={item.slug}
              ></DropDownNavMenuLi>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const DropDownNavMenuMobile: FC<PropsDropDown> = ({
  active,
  onCloseMobileMenu,
}) => {
  const [menuList, setMenuList] = useState<PropsDropDownLi[] | null>(null);

  const getMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setMenuList(res.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      await getMenu();
    };

    fetchMenu();
  }, []);
  return (
    active && (
      <div className={`fixed w-full h-full flex flex-row top-0 `}>
        <div id="sidebar" className=" w-[320px] h-full bg-white flex flex-col ">
          <div className="flex flex-row  items-center justify-between h-[71px] py-[10px] px-[20px] border-b-[1px] border-[#eee]">
            <Image
              src={`/images/logos/logo.svg`}
              alt="logo"
              width={150}
              height={23}
            ></Image>
            <IoClose
              className={` text-[#6e7392] size-7 cursor-pointer`}
              onClick={onCloseMobileMenu}
            />
          </div>
          <div className="flex-1 pt-6 pr-6">
            <nav>
              <ul className={styles.nav}>
                {menuList?.map((item, index) => {
                  return (
                    <DropDownNavMenuMobileLi
                      key={item._id}
                      _id={item._id}
                      name={item.name}
                      slug={item.slug}
                    ></DropDownNavMenuMobileLi>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <button
          className=" bg-[rgba(36,39,55,.4)] flex-1 cursor-pointer"
          onClick={onCloseMobileMenu}
        ></button>
      </div>
    )
  );
};

const DropDownNavMenuLi: FC<PropsDropDownLi> = ({ _id, name, slug }) => {
  return (
    <li>
      <Link
        href={`eventos/${slug}`}
        className=" flex flex-row items-center w-[100%] min-h-[37px] hover:text-[#00aae6] font-semibold text-sm"
      >
        {name}
      </Link>
    </li>
  );
};

const DropDownNavMenuMobileLi: FC<PropsDropDownLi> = ({ _id, name, slug }) => {
  return (
    <li>
      <Link
        href={`eventos/${slug}`}
        className=" flex flex-row items-center w-[100%] min-h-[37px] hover:bg-[rgba(150,154,186,.2)] text-[rgba(79,83,123,.8)] hover:text-[black] font-semibold text-sm pl-3 rounded-lg"
      >
        {name}
      </Link>
    </li>
  );
};

export default Header;
