

// images
import aboutbg from "../../assets/aboutbg.jpg";
import me from "../../assets/me.jpg";
import mouse from "../../assets/mouse.png";
import InfoLabel from "./InfoLabel";
import ViewMoreButton from "./ViewMoreButton";
export default function Profile() {
  return (
    <>
      <div className="relative h-[600px]  ">
        <img src={aboutbg} alt="aboutbg" className="h-[100%] w-full object-fill   " />
        <div className="absolute top-[70px] left-0 w-full  ">
          <div className="container">
            <div className="flex">
              {/* me */}
              <div className="min-w-[342px] border-15 border-white  mr-7"><img src={me} alt="me" className=" w-full h-full  " /></div>
              
              <div className="flex flex-col gap-8 mt-18  items-start w-[60%]">
                <div className="flex flex-col w-full">
                  <h1 className="text-6xl font-bold tracking-tighter text-amber-300 leading-[60px] max-md:text-5xl max-sm:text-4xl">
                    Adam Doe
                  </h1>
                  <p className="mt-4 text-xl text-white max-sm:text-lg">
                    Chief Product Officer at Okler Themes
                  </p>
                  <p className="mt-6 text-sm uppercase text-zinc-400">
                    Greater New York area
                  </p>
                  <p className="mt-4 text-sm uppercase text-zinc-400">
                    Information Technology &amp; Services
                  </p>

                  <div className="flex gap-2 items-center mt-6">
                    <InfoLabel text="Previous:" />
                    <p className="text-sm uppercase text-zinc-400">
                      Front-End Developer at Porto
                    </p>
                    <ViewMoreButton />
                  </div>

                  <div className="flex gap-2 items-center mt-4">
                    <InfoLabel text="Education:" />
                    <p className="text-sm uppercase text-zinc-400">
                      Porto School
                    </p>
                    <ViewMoreButton />
                  </div>
                </div>
              </div>
              <img src={mouse} alt="mouse" className=" w-1/2 h-1/2   "/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
