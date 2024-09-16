"use client"
import Link from 'next/link'
import { useActionState } from 'react'
import { authenticate } from '../lib/actions'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default function Login() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );
    return (
        <div className='flex'>
            <div className='w-1/2'></div>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='mt-[230px] min-w-[400px]'>
                    <form action={formAction}>
                        <h1 className='text-5xl'>Welcome Back!</h1>
                        <p className='pb-12'>Enter you Credentials to access your account</p>

                        <label className='pb-1' htmlFor="">Email addres</label><br />
                        <input className='bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' type="email" id='email' name='email' placeholder='Enter your email' />
                        <div className='pt-5 pb-1'>
                            <label htmlFor="">Password</label>
                            <Link className='float-right text-blue-700 hover:text-blue-900' href={'#'}>forgot password</Link>
                        </div>
                        <input className='bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' type="password" id='password' name='password' placeholder='Enter your password' />
                        <div className='pt-5 flex space-x-1'>
                            <input type="checkbox" />
                            <p>Remember for 30 days</p>
                        </div>
                        <button className='w-full bg-green-900 hover:bg-green-500 text-white text-lg mt-5 p-2 rounded-xl' type='submit'>Login</button>
                        <div
                            className="flex h-8 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                            >
                            {errorMessage && (
                                <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                                </>
                            )}
                        </div>
                    </form>
                    <div className='mt-10 relative'>
                        <div className='w-full h-[1px] bg-slate-300 absolute top-5'></div>
                        <p className=' absolute top-2 left-1/2 bg-white px-1'>Or</p>
                    </div>
                    <div className='mt-24 flex space-x-2'>
                        <div>
                            <button className='flex items-center text-base rounded-md border px-3 py-1 hover:bg-slate-200'><img className='w-10 p-1' src="/images/icons8-google.svg" alt="" />Sign in with Google</button>
                        </div>
                        <div>
                            <button className='flex items-center text-base rounded-md border px-3 py-1 hover:bg-slate-200'><img className='w-10 p-1' src="/images/icons8-apple.svg" alt="" />Sign in with Apple</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }