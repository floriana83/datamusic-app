import Link from "next/link";




const NavBar = () => {

  return (
    <>
      <div>       
        <p>
            <Link href="/">
              <a>Home</a>
              </Link>
          </p>
              
          <p>
            <Link href="/album">
              <a>Album</a>
            </Link>
          </p>
     
      </div>

    </>
  );
}

export default NavBar;