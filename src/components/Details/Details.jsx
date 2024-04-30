import './Details.css'
function Details({ children }) {

    return (
        <>
            <div id="Content">
                <div id="Popular"><h2>#1 Most Popular</h2></div>
                <div id="Headline"><h1>CHAINSAW MAN</h1></div>
                <div id="Paragarph"><p>Denji has a simple dream--to live a happy an peaceful life, spending time with a giri he, likes. TI is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as</p></div>
                {children}
            </div>




        </>
    )
}




export default Details