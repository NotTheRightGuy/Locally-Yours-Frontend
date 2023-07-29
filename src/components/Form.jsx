import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
export default function Form(props) {
  
    
    
    const navigate=useNavigate()
    let schema=yup.object().shape({
        firstName:yup.string().required("Name is empty"),
        lastName:yup.string().required(),
        email:yup.string().email().required(),
        phone:yup.number().min(10).max(10).required(),
        address1:yup.string().required(),
        address2:yup.string().required(),
        city:yup.string().required(),
        state:yup.string().required(),
        country:yup.string().required(),
        pincode:yup.number().required(),

    })

    let {register,handleSubmit,formState:errors}=useForm({
        resolver:yupResolver(schema)
    })

    const checkLogin=(data)=>{
        console.log(data)
    }

    const input="w-full border-solid border-2 p-2 rounded-xl hover:cursor-pointer border-black hover:shadow-lg "
    const paragraph='text-black text-sm font-bold'
    const registration=()=>{
        navigate('/registration')
    }

    const inputData='flex flex-col gap-1 pt-2'
    return(
        <div className='h-screen '>

            {/* <NavBar/> */}

            <div className=" justify-center items-center rounded-lg w-full py-4 ">
                <div className='flex gap-2 font-poppins  text-3xl ml-12 border-2 w-fit p-2 border-black' >
                    <div className='bg-black text-white font-light p-2'>
                        LOCALLY
                    </div>
                    <div className='font-bold p-2'>
                        YOURS
                    </div>
                </div>
                <div className='flex justify-between '>
                    <div className='w-full flex flex-col mt-20 items-center'>
                        <div className='font-bebas text-3xl '>
                            Update Profile
                        </div>
                        <form onSubmit={handleSubmit(checkLogin)} className='w-full gap-2 p-10 border-black border-solid'>
                            
                        <div className='grid grid-cols-2 gap-x-10'>

                            <div className={inputData}>
                                <p className={paragraph}>First Name </p>
                                <input type="text" placeholder='First Name...' size={28} id="fname" {...register("firstName")} className={input}/>
                                <p className='input'>{errors.firstName?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}>Last Name </p>
                                <input type="text" placeholder='Last Name...' size={28} id="lname" {...register("lastName")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.lastName?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Email </p>
                                <input type="text" placeholder='Email...' size={28} id="email" {...register("email")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.email?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Phone Number </p>
                                <input type="text" placeholder='Phone number...' size={28} id="phone" {...register("phone")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.phone?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Adress Line 1 </p>
                                <input type="text" placeholder=' Adress Line 1...' size={28} id="address1" {...register("address1")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.address1?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Adress Line 2 </p>
                                <input type="text" placeholder=' Adress Line 2...' size={28} id="address2" {...register("address2")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.address2?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> City </p>
                                <input type="text" placeholder=' City...' size={28} id="city" {...register("city")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.city?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> State </p>
                                <input type="text" placeholder=' State...' size={28} id="state" {...register("state")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.state?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Country </p>
                                <input type="text" placeholder=' Country...' size={28} id="country" {...register("country")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.pincode?.message}</p>
                            </div>
                            <div className={inputData}>
                                <p className={paragraph}> Pincode </p>
                                <input type="text" placeholder=' Pincode...' size={28} id="pincode" {...register("pincode")}
                                className={input}
                                />
                                <p className='text-red-500 text-sm'>{errors.pincode?.message}</p>
                            </div>                 
                            
                            </div>
                            <input type="submit"
                                className="w-full bg-black text-white border-solid border-black border-2 p-2 rounded-3xl hover:cursor-pointer hover:shadow-lg hover:bg-white hover:text-black duration-300 hover mt-7 " 
                                />
                        </form>
                    </div>

                <img src="https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[787px] w-[745px] translate-y-[-54px] ' alt="" />
                </div>
            </div>
        </div>
    )
}