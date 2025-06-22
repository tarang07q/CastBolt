import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
        <Image src = "/assets/icons/logo.svg" alt="logo" width={32} height={32} className="logo" />
        <h1> Cast&nbsp;Bolt</h1>
        </Link>
        <div className='description '>
<section>
  <figure>
    {Array.from({ length: 5 }).map((_, index) => (
      <Image src = "/assets/icons/star.svg" alt="star" width={16} height={16} key={index} />
    ))}
  </figure>
  <p>
    "Cast Bolt has transformed the way I share my videos. The seamless integration and user-friendly interface make it a must-have for any content creator! Recording and sharing videos has never been easier. The quality is top-notch, and the features are incredibly useful."
  </p>
  <article>
    <Image src= "/assets/images/jason.png" alt="avatar" width={64} height={64} className="rounded-full aspect-square" />
    <div>
      <h3>Jason Doe</h3>
      <p>Content Creator, Youtube</p>
    </div>
  </article>
</section>


        </div>
        <p>CastBolt {(new Date()).getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
    <section>
      <Link href = "/">
      <Image src= "assets/icons/logo.svg" alt='logo' width={40} height = {40} />
      <h1> CastBolt</h1>    
      </Link>
      <p className="big-highlight">
      <span className="brand">Sign in</span> and share your first CastBolt video in minutes.<br />
      <span className="create-upload-inspire">Create&nbsp; Upload &nbsp;Inspire</span>
</p>
<button>
    <Image src= "/assets/icons/google.svg" alt = "Google" width = {30} height = {30} />
    <span>Sign in with Google</span>
      </button>
    </section>
  </aside>
  <div className='overlay' />

  
    </main>
  )
}

export default page