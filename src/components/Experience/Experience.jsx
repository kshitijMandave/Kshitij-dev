import { EXPERIENCES } from "../../constants"
export default function Experience() {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
        {
          EXPERIENCES.map((experience, index) => {
            return (
              <div key={index} className="mb-8 flex flex-wrap lg:w-1/4">
                <p className="mb-2">
                  {experience.year}
                </p>
              </div>
              // <div className="w-full max-w-xl lg:w-3/4">

              // </div>
            );
          })
        }
        </div>
        
    </div>
  )
}
