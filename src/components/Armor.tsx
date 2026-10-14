import { Icon } from "@iconify/react";
import { Armors } from "../data/my_data";

export default function Armor() {
    return (
        <div className='h-full overflow-y-auto scrollbar-hide p-3 sm:p-4'>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
                {Armors.map((skill) => (
                    <article key={skill.id} className='flex aspect-square flex-col items-center justify-center gap-5 rounded-lg border border-[#4A4545] bg-[#181717] p-3 transition-colors duration-200 hover:border-[#D6B36A] hover:bg-[#242222] sm:p-4'>
                        <div className='flex flex-col items-center gap-3'>
                            {skill.image.includes(":") ? (
                                <Icon icon={skill.image} className='size-12 [image-rendering:pixelated]' />
                            ) : (
                                <img src={skill.image} alt={skill.name} className='size-12 object-contain [image-rendering:pixelated]' />
                            )}
                            <h3 className='text-center text-[10px] font-medium uppercase tracking-wide text-[#E5E5E5] sm:text-xs'>{skill.name}</h3>
                        </div>
                        <div className='w-full'>
                            <div className='flex items-center justify-between pb-1 text-[9px] text-[#A8A3A3]'>
                                <span>Mastery</span>
                                <span>{skill.mastery}%</span>
                            </div>
                            <div
                                role='progressbar'
                                aria-label={`${skill.name} mastery`}
                                aria-valuenow={skill.mastery}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                className='h-1.5 w-full overflow-hidden rounded-full bg-[#4A4545]'
                            >
                                <div
                                    className='h-full rounded-full bg-[#D6B36A]'
                                    style={{ width: `${skill.mastery}%` }}
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}