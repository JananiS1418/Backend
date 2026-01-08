import avatar from '../assets/Images/avatar.jpg'
import './ProfileCard.css'

const ProfileCardFn = ()=>{
  return (
    <>
      <div className='avatar'>
         <h1>This is Avatar Image</h1>
         <img src={avatar} alt="avatar" className='image' />
      </div>
    </>
  )
}
export default ProfileCardFn
