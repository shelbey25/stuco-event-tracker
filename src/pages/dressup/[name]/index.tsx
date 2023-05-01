import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { api } from '~/utils/api'

const Tracker = () => {
  const router = useRouter()
  const name = router.query.name as string
  const { data } = api.eventInformation.getAllDressUp.useQuery();
    if (!data) return null;
  const singleEvent = data.find((item) => item.name === name);
  if (!singleEvent) return <div className="align-center text-center">This Event Doesn't Exist</div>;

    const checkChange = () => {
        //use mutation for seen
        
    };

    const checkChangev2 = () => {
        //use mutation for dressed

    };

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
        <div className="flex h-full items-center w-full p-2 flex-col">
            <div className="flex gap-x-2 h-14 w-3/4">
                <div className='w-14'></div>
                <input className="flex h-8 p-2 rounded-sm text-center w-full" type="text" id="name" name="name"></input>
                <select className="flex h-8 w-14 rounded-sm" name="grade" id="grade">
                    <option value="ALL">ALL</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                </select>
            </div>
            <div className="flex h-14 items-end w-1/2 p-2 justify-between">
                <h1 className="heading-sub w-1/3">Name</h1>
                <h1 className="heading-sub w-1/3">Seen</h1>
                <h1 className="heading-sub w-1/3">Participated</h1>
            </div>
            <div className="flex h-full items-start w-1/2 p-2 flex">
                <div className='border-2 border-white flex flex-col items-start w-full'>
                    {singleEvent.participants.sort((a, b) => (a.seen ? 1 : 0) - (b.seen ? 1 : 0)).map((participant, index) => (
                    <div className="flex w-full grid-cols-3" key={index}>
                        <div className="border-2 w-full border-r-2 border-white bg-blue-100 p-2"><h1 className='text-center'>{participant.name}</h1></div>
                        <div className="border-2 w-full border-b-2 justify-center items-center border-r-2 border-white bg-blue-100 p-2">
                            <div className='flex justify-center'>
                            <button
                            className="flex cursor-pointer justify-center hover:drop-shadow-lg hover:shadow-black"
                            onClick={checkChange}
                            >
                            <input
                                type="checkbox"
                                className="w-7 h-7 cursor-pointer rounded-xl"
                                defaultChecked={participant.seen}
                            ></input>
                            </button>
                            </div>
                        </div>
                        <div className="border-2 w-full border-l-2 justify-center border-white bg-blue-100 p-2">
                        <div className='flex justify-center'>
                            <button
                            className="flex cursor-pointer justify-center hover:drop-shadow-lg hover:shadow-black"
                            onClick={checkChangev2}
                            >
                            <input
                                type="checkbox"
                                className="w-7 h-7 cursor-pointer rounded-xl"
                                defaultChecked={participant.dressed}
                            ></input>
                            </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Tracker;

