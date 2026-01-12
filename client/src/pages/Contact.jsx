import Title from "../components/Title"
import {assets} from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"

const Contact = () => {
  return (
     <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title Text1={'CONTACT'} Text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">25878 New York <br /> Suite 350, Washington, USA</p>
          <p className="text-gray-500">Tel: 123456789 <br />Email: admin@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
           <p className="text-gray-500">Learn more about out teams and job openings.</p>
         <button className="border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-300">Explore Jobs</button>
         </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact