import { SiHtml5, SiReact, SiMongodb, SiTailwindcss,SiJavascript, SiCss3, SiRedux, SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'




function Technologies() {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div title='HTML' className='p-4 cursor-pointer'>
                <SiHtml5 className='text-7xl text-red-500'/>
            </div>
            <div title='CSS' className='p-4 cursor-pointer'>
                <SiCss3 className='text-7xl text-blue-700'/>
            </div>
            <div title='JavaScript' className='p-4 cursor-pointer'>
                <SiJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div title='React' className='p-4 cursor-pointer'>
                <SiReact className='text-7xl text-cyan-400'/>
            </div>
            <div title='TypeScript' className='p-4 cursor-pointer'>
                <SiTypescript className='text-7xl text-blue-500'/>
            </div>
            <div title='NodeJs' className='p-4 cursor-pointer'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div title='TailwindCSS' className='p-4 cursor-pointer'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </div>
            <div title='MongoDB' className='p-4 cursor-pointer'>
                <SiMongodb className='text-7xl text-green-700'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies