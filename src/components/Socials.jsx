import { AiFillGithub } from 'solid-icons/ai'
import { AiFillLinkedin } from 'solid-icons/ai'
function Socials() {

    return (
        <div class="absolute bottom-0 left-0 m-4 z-30">
            <div class="flex flex-col items-center gap-4 w-10">
                <hr class="w-8 my-2 border-t-3 rotate-90" />
                <a href="https://github.com/warr-dev"><AiFillGithub size='2rem' color='white' /></a>
                <a href="https://www.linkedin.com/in/warrdev/"><AiFillLinkedin size='2rem' color='white' /></a>
                <hr class="w-4 my-2 border-t-3 rotate-90" />
            </div>
        </div>
    );
}
export default Socials;