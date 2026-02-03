
import useTimer from '../hooks/useTimer'

const Timer = () => {
    const {time} = useTimer(0)
  return (
    <>
      <div className='bg-pink-900 mt-2 text-white flex flex-col justify-center items-center gap-3' >
        <h1>Count Seconds</h1>
        <p>Seconds :  {time}</p>
      </div>
    </>
  )
}

export default Timer
