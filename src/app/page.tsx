import GeneralContainer from "@/components/containers/GeneralContainer";
import GeneralRowContainer from "@/components/containers/GeneralRowContainer";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="pt-[67px]">
        <section className="py-4">
          <GeneralContainer>
            <GeneralRowContainer>
              <div className="flex flex-row items-center">
                <div className="flex-1">
                  <h2 className="text-[#16a8e1] font-bold text-2xl uppercase">
                    Próximos eventos
                  </h2>
                  <span className="text-[#777675]">
                    Te recomendamos estos eventos
                  </span>
                </div>
                <div>
                  <ul className="flex flex-row flex-wrap gap-2">
                    <li>
                      <Link
                        href={`/`}
                        className="inline-block whitespace-nowrap rounded-full border border-lilac-200 px-2 py-2 text-sm  text-lilac-500 transition-all duration-200 hover:border-[#16a8e1] hover:bg-[#e8f7fd] hover:text-lilac-500 font-semibold text-black"
                      >
                        Lorem.
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/`}
                        className="inline-block whitespace-nowrap rounded-full border border-lilac-200 px-2 py-2 text-sm  text-lilac-500 transition-all duration-200 hover:border-[#16a8e1] hover:bg-[#e8f7fd] hover:text-lilac-500 font-semibold text-black"
                      >
                        Lorem.
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/`}
                        className="inline-block whitespace-nowrap rounded-full border border-lilac-200 px-2 py-2 text-sm  text-lilac-500 transition-all duration-200 hover:border-[#16a8e1] hover:bg-[#e8f7fd] hover:text-lilac-500 font-semibold text-black"
                      >
                        Lorem.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-6 opacity-70" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                provident odio quae ipsam quisquam consequuntur assumenda nisi
                nam tempore officiis tenetur harum voluptatum possimus natus
                laboriosam mollitia rem, nemo veniam!
              </div>
            </GeneralRowContainer>
          </GeneralContainer>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
