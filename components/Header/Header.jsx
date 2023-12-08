import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="">
        <div className="">
          <Link href="/">
            <p>BorderAmigo</p>
          </Link>
        </div>
        <div className="">
          <Link href="#home">
            <p>Home</p>
          </Link>
          <Link href="#how-it-works">
            <p>How it works</p>
          </Link>
          <Link href="#pricing">
            <p>Pricing</p>
          </Link>
          <Link href="#faqs">
            <p>FAQ</p>
          </Link>
          <Link href="#why-us">
            <p>Why Us?</p>
          </Link>
          <Link href="#blog">
            <p>Blog</p>
          </Link>
        </div>
        <div className="">
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/get-started">
            <p>Get Started</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
