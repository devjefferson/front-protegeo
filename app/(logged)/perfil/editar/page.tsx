import { getMe } from '@/services/me'
import ConsumerForm from './__fetuares/Form'
export default async function Page() {

  const data = await getMe()

  return (
    <div  className="relative" >
 
    <div className="mx-auto w-full px-medium py-giant container md:w-[640px] md:px-0 ">
      <ConsumerForm data={data} />
      
    </div>
    </div>
  )
}
