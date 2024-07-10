import { AiFillGithub } from 'solid-icons/ai'
import { AiFillLinkedin } from 'solid-icons/ai'
function Socials() {

    return (
        <div class="absolute bottom-0 left-0 m-4 z-30">
            <div class="flex flex-col items-center gap-6 w-10">
                <hr class="w-8 my-2 border-t-2 rotate-90" />
                <AiFillGithub size='2rem' color='white' />
                <AiFillLinkedin size='2rem' color='white'  />
            </div>
        </div>
    );
}
export default Socials;