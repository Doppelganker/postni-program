import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Burger from "./Burger";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? "active" : null}
            >
              Domov
            </Link>
          </li>
          <li>
            <Link
              href="/exodus"
              className={
                router.pathname.startsWith("/exodus") ? "active" : null
              }
            >
              Exodus
            </Link>
          </li>
          <li>
            <Link
              href="/dominik"
              className={
                router.pathname.startsWith("/dominik") ? "active" : null
              }
            >
              Dominikove stopinje
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={router.pathname.startsWith("/faq") ? "active" : null}
            >
              Razlaga
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
