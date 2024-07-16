import { A } from "@solidjs/router";
import Slider from "../components/Slider";
import "./projects.scss";
import { FaBrandsLaravel, FaBrandsReact } from "solid-icons/fa";
import data from "../mockdata/projects";
import { createSignal } from "solid-js";
import { AiFillStar } from "solid-icons/ai";

function Projects() {
    const [projects, setProjects] = createSignal(data);
    console.log(projects());

    return (
        <div class="content">
            <header class="header">
                <div class="title">Projects</div>
                <div>Here are the projects that i have done.</div>
            </header>

            {!projects()
                ? <h1 class="text-center w-full">Coming soon...</h1>
                : <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects().map(({ title, details, images, tech, live, source, isFavorite }) => <ProjectCard title={title} details={details} tech={tech} images={images} live={live} source={source} isFavorite={isFavorite} />)}
                </section>
            }
        </div>
    );
}

function ProjectCard({ title, details, images, isFavorite, tech, live, source }) {
    return (
        <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div class="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <Slider images={images} />
                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 group">
                    <div class="opacity-0 h-0 group-hover:opacity-100 group-hover:h-full bg-[rgba(60,146,52,0.54)] transition-all ease-in-out duration-500 flex flex-col justify-end p-4 gap-2">
                        <div class="font-bold">{title}</div>
                        <div class="details text-sm text-ellipsis">{details}</div>
                        <div><A href="#" class="text-slate-900">see more...</A></div>
                    </div>
                    <div class="md:hidden relative text-slate-900 top-1/2  p-2 text-center glassify">click for more info</div>
                </div>
                {
                    isFavorite &&
                    <button
                        class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-yellow-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <AiFillStar size={20} />
                        </span>
                    </button>
                }
            </div>
            <div class="p-4">
                <div class="group inline-flex flex-wrap items-center gap-2">
                    {tech?.map(t => <Tech tech={t} />)}
                </div>
            </div>
            {(live || source) &&
                <div class="p-4 flex justify-between flex-wrap gap-2">
                    <a
                        class="block select-none rounded-lg bg-slate-500 py-2 px-8 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        href={live}
                        data-ripple-light="true"
                    >
                        Live
                    </a>
                    <a
                        class="block select-none rounded-lg bg-slate-500 py-2 px-8 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        href={source}
                        data-ripple-light="true"
                    >
                        Source
                    </a>
                </div>
            }

        </div>
    );
}

function Tech({ tech }) {
    console.log(tech);
    const iconify = (icon) => {
        switch (tech?.toLowerCase()) {
            case 'react':
                return <FaBrandsReact />;
            case 'laravel':
                return <FaBrandsLaravel />;
        }
    }

    return (
        <span
            title={tech}
            class="cursor-pointer rounded-full border border-slate-500/5 bg-slate-500/5 p-2 text-slate-500 transition-colors hover:border-slate-500/10 hover:bg-slate-500/10 hover:!opacity-100 group-hover:opacity-70"
        >
            {iconify(tech)}
        </span>
    );
}

export default Projects;