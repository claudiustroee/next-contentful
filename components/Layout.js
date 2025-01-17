import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Shop</span>
              <span>Gaia Store</span>
            </h1>
            <h2>Spread The Word</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Shop Gaia Store</p>
      </footer>
    </div>
  )
}