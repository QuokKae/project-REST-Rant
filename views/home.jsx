const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="A plate of an array of colorful vegetables" style={{width: 1000 + 'px'}}/>
                    <div>Photo by <a href="https://unsplash.com/@annapelzer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Pelzer</a> on <a href="https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home