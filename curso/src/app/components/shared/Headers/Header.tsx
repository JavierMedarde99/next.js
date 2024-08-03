import Link from "next/link";

export const Header = () =>{
  console.log("hola header")
    return(
        <header>
        <nav>
          <ul>
            <Link href="/"><li>home</li></Link>
            <Link href="/store"><li>Store</li></Link>
          </ul>
        </nav>
      </header>
    )
}