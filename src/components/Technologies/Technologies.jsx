import { SiHtml5, SiReact, SiMongodb, SiTailwindcss,SiJavascript, SiCss3, SiRedux, SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'




function Technologies() {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='p-4'>
                <SiHtml5 className='text-7xl text-red-500'/>
            </div>
            <div className='p-4'>
                <SiCss3 className='text-7xl text-blue-700'/>
            </div>
            <div className='p-4'>
                <SiJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div className='p-4'>
                <SiReact className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <SiTypescript className='text-7xl text-blue-500'/>
            </div>
            <div className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <SiMongodb className='text-7xl text-green-700'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies