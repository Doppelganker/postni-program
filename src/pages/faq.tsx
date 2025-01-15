import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <div className="container">
        <div>
          <h1>Pogosta vprašanja</h1>
          <h3>1. Kaj spada k postni pripravi</h3>

          <ol>
            <li>
              <p>
                <b>Dnevna molitev in razmišljanje</b>
                <br />
                Vsak dan si vzamem 15 min, za branje svetopisemskega odlomka. V
                tišini ali ob sveti glasbi s v dnevnik zabeležim svoje
                razmišljanje. Zaključim s molitvijo "Pridi sveti duh".
                <br />
                To je okvirna osnova prilagodi si jo po svojih izkušnjah.
              </p>
            </li>
            <li>
              <p>
                <b>Askeza</b>
                <br />V modernem svetu smo odvisni od veliko nepotrebnih stvari.
                Za 10 dni se bom odrekel specifični stvari. Če ugotovim, da mi
                določena stvar predstavlja težave, si lahko zadam izziv in
                askezo podaljšam do Velike noči oz. dokler je potrebno.
              </p>
            </li>
            <li>
              <p>
                <b>Skupnost</b>
                <br />
                Vsak dan se slišim s svojim sidrom v živo, po telefonu, sms-ih
                itd. Odvisno kako daleč narazen sva in kako nama najbolj
                ustreza. To ne rabijo biti dolgi pogovori, ampak kratek pregled
                kako nama uspelo razmišljanje in držanje askeze.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
