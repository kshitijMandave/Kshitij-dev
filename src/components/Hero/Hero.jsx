import kshitijProfile from "../../images/Kshitij-Img.webp"
import kshitijResume from "../../components/Hero/Kshitij_Mandave.pdf"

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Kshitij Mandave
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            Hi, I'm Kshitij, a MERN Stack developer with a BCA background. I have hands-on experience in building responsive web apps using MongoDB, Express.js, React, and Node.js. I enjoy turning ideas into simple, smooth, and user-friendly websites.
            </p>
            <a
              href={kshitijResume}
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
              Download Resume
            </a>

          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={kshitijProfile}
              alt="Kshitij Mandave"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
      </div>
</div>

  );
}

export default Hero;
