import '../components/drawer.scss';
import { createSignal } from "solid-js"
import { FiMenu } from 'solid-icons/fi'
import { AiOutlineClose } from 'solid-icons/ai'
import { A } from '@solidjs/router';

function Drawer() {
    const [isActive, setIsActive] = createSignal(false);

    return (
        <>
            <div class="absolute right-0 top-0 m-4 lg:m-12 z-50 text-white">
                <button onClick={() => {
                    setIsActive(!isActive())
                }}>{!isActive() ? <FiMenu size={24} /> : <AiOutlineClose size={24} />}</button>
            </div>
            <nav className={`z-40 text-2xl md:text-3xl drawer transition-opacity absolute flex justify-center items-center w-full h-full bg-gray-300 ${!isActive() ? 'hidden opacity-0' : 'opacity-100'}`}>
                <div className='flex flex-col md:gap-4'>
                    <A href='home' onclick={()=>setIsActive(false)} activeClass='font-bold text-slate-900' class="lg:hover:text-4xl hover:font-bold hover:text-3xl">Home</A>
                    <A href='about' onclick={()=>setIsActive(false)} activeClass='font-bold text-slate-900' class="lg:hover:text-4xl hover:font-bold hover:text-3xl">About Me</A>
                    <A href='projects' onclick={()=>setIsActive(false)} activeClass='font-bold text-slate-900' class="lg:hover:text-4xl hover:font-bold hover:text-3xl">Projects</A>
                </div>
            </nav>
        </>
    );
}
export default Drawer;