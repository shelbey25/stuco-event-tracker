import { useRouter } from 'next/router'
import Link from 'next/link'
import dressUpData from '~/assets/data/dressupData'
import { Icon } from '@iconify/react'

const Tracker = () => {
  const router = useRouter()
  const name = router.query.name as string
  const singleEvent = dressUpData.find((item) => item.name === name);
    if (!singleEvent) {
        return null;
    }

  return (
    <div>
      <div className="flex flex-col p-8 items-center justify-start w-screen h-screen bg-slate-300">
        <div className="flex h-[14] justify-between w-full p-2">
            <div className="flex justify-center w-1/3"></div>
            <div className="flex w-1/3 justify-center items-center"><h1 className="heading-primary">{singleEvent.displayName}</h1></div>
            <div className="flex justify-end w-1/3">
                <Link href ="/"><Icon className="w-14 h-14" icon="material-symbols:home" /></Link>
            </div>
        </div>
        <div className="flex h-full w-full p-2">
           
        </div>
    </div>
    </div>
  )
}
export default Tracker;