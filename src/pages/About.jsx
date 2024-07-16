import pic from "../assets/pic.jpg";

function About({ isReady = true }) {

    return (
        <div class="content">
            <header class="header">
                <div class="title">About Me</div>
                <div>Here, you can know more about me</div>
            </header>
            {
                !isReady ?
                    <h1 class="text-center w-full">Coming soon...</h1>
                    :
                    <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div class="md:w-1/2 m-auto">
                            <img class="md:w-3/4 m-auto" src={pic} alt="pic" />
                        </div>
                        <div class="md:w-1/22 first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left">
                            " I am Warren Dalawampu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti repellat nulla, iste rem eligendi odio ut facere, dolorem placeat asperiores neque ipsum distinctio odit quis enim eaque necessitatibus sapiente.
                        </div>
                    </div>
            }

        </div>
    );
}
export default About;