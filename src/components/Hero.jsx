
function Hero() {

    return (
        <div class="h-screen w-full bg-slate-800 flex flex-col-reverse lg:flex-row text-white">
            <div class="bg h-screen lg:w-1/2"></div>
            {/* Text */}
            <div class="hero-text flex flex-col w-full justify-center items-center lg:w-1/2 h-1/3 m-auto">
                <div className="text-lg">Hi, I'm Warren</div>
                <div className="text-5xl text-center">Full Stack Developer</div>
            </div>
        </div>
    );
}
export default Hero;