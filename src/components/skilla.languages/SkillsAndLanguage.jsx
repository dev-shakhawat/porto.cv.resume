
import React from "react";
import SkillBar from "./SkillBar";
import LanguageItem from "./LanguageItem";
import usa from "../../assets/usa.png"
import spanish from "../../assets/spanish.png"
import france from "../../assets/france.png"

function SkillsAndLanguage() {
  const technicalSkills = [
    { name: "Start Up", progressWidth: "150px" },
    { name: "Innovation", progressWidth: "199px" },
    { name: "Products", progressWidth: "174px" },
    { name: "CSS", progressWidth: "224px" },
  ];

  const businessSkills = [
    { name: "Javascript", progressWidth: "150px" },
    { name: "Business", progressWidth: "199px" },
    { name: "E-commerce", progressWidth: "174px" },
    { name: "Creative", progressWidth: "224px" },
  ];

  const languages = [
    { language: "English", proficiency: "Advanced", flagSrc: usa},
    { language: "Spanish", proficiency: "Advanced", flagSrc: spanish},
    { language: "French", proficiency: "Basic", flagSrc: france },
  ];

  return (
    <section className="flex flex-col justify-center items-center self-stretch py-16 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center w-full max-md:max-w-full">
          <div className="grow shrink self-stretch my-auto max-w-[1140px] min-w-60 w-[684px] max-md:max-w-full">
            <div className="flex flex-wrap w-full max-md:max-w-full">
              {/* Technical Skills Column */}
              <div className="flex-1 shrink px-3 basis-0 max-w-[760px] min-w-60">
                <h2 className="cmnHead">
                  Skills & Language
                </h2>
                <div className="pt-2.5 mt-4 w-full">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      progressWidth={skill.progressWidth}
                    />
                  ))}
                </div>
              </div>

              {/* Business Skills Column */}
              <div className="flex-1 shrink px-3 pt-14 pb-px basis-0 max-w-[760px] min-w-60">
                <div className="pt-2.5 w-full">
                  {businessSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      progressWidth={skill.progressWidth}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages Column */}
          <div className="grow shrink self-stretch my-auto font-semibold whitespace-nowrap max-w-[1140px] min-w-60 w-[304px]">
            <div className="flex flex-wrap justify-center w-full">
              <div className="flex-1 shrink px-3 w-full basis-0 max-w-[380px] min-w-60">
                <div className="px-9 pt-9 pb-12 w-full bg-white shadow-2xl max-md:px-5">
                  <h4 className="w-full text-xl tracking-tight leading-none text-primary">
                    Languages
                  </h4>
                  <div className="mt-3.5 w-full text-sm leading-6 uppercase">
                    {languages.map((item, index) => (
                      <LanguageItem
                        key={index}
                        language={item.language}
                        proficiency={item.proficiency}
                        flagSrc={item.flagSrc}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndLanguage;
