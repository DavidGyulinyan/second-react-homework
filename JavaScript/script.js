
const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>CoffeeStyle.</h1>
            <Nav />
        </header>
    )
}


const Nav = () => {

    const navItems = [

        {
            item: "HOME",
            id: 1,
        },

        {
            item: "OUR PRODUCTS",
            id: 2,
        },

        {
            item: "BLOG",
            id: 3,
        },

        {
            item: "ABOUT",
            id: 4,
        },

        {
            item: "CONTACTS",
            id: 5,
        },

        {
            item: "STYLE GUIDE",
            id: 6,
        },
    ];

    return (
        <div className='nav'>
            {navItems.map(el => <a className='navItems' key={el.id}>{el.item}</a>)}
        </div>
    )
}


const FirstSection = () => {
    return (
        <div className='firstSectionWrapper'>
            <section className='firstSection'>
                <div className='cupOfCoffee'>
                    <div className='subtitle'>Best place to buy design</div>
                    <div className='title'>Coffee Mugs</div>
                    <div className='subtitle subTlt'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                    <Button />
                </div>
            </section>
        </div>
    )
}


const Button = () => {
    return (
        <div className='buttonWrapper'>
            <button className='button'>EXPLORE OUR PRODUCTS</button>
        </div>
    )
}


const FuturesMugs = () => {
    return (

        <section className='mugsSectionWrapper'>
            <div className='mugsWrapper'>
                <span>Featured Mugs</span>
            </div>
        </section>
    )
}

const ProudCut = () => {

    const product = [

        {
            id: 7,
            img: "../images/IMAGE1.png",
            name: "Pink Premium Ceramic",
            price: "$ 99.00 USD",
        },

        {
            id: 8,
            img: "../images/IMAGE2.png",
            name: "Golden Designers Mug",
            price: "$50.00",

        },

    ];

    return (

        <div className='productWrapper'>
            {product.map(el => <Product key={el.id} image={el.img} name={el.name} price={el.price} />)}
        </div>
    )
}

const Product = (props) => {
    return (

        <div>
            <div className='product'>
                <img className='productName' src={props.image} />
            </div>
            <div className='productName'>{props.name}</div>
            <div className='productPrice'>{props.price}</div>
        </div>

    )
}


const SecondSection = () => {
    return (
        <section className='secondSection'>
            <img className='secondSecImg' src='images/fillCoffee.png' />
        </section>
    )
}




const Cards = () => {

    const lifeStyleItems = [

        {
            id: 9,
            img: "../images/lifeStyleImages/lifeStyleMugs1.png",
            txt: "Health Check: why do I get a headache when I haven't had my coffee?",
            desc: "It is a paradigmatic country, in which roasted parts of sentences fly into your mouth.",
            dt: "October 9, 2018"
        },

        {
            id: 10,
            img: "../images/lifeStyleImages/lifeStyleMugs2.png",
            txt: "How long does a cup of coffee keep you awake?",
            desc: "It is a paradigmatic country, in which roasted parts. Vel qui et ad voluptatem.",
            dt: "October 9, 2018"
        },

        {
            id: 11,
            img: "../images/lifeStyleImages/lifeStyleMugs3.png",
            txt: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            desc: "It is a paradigmatic country, in which roasted parts of sentences fly into your mouth.",
            dt: "October 9, 2018"
        },
        {
            id: 11,
            img: "../images/lifeStyleImages/lifeStyleMugs3.png",
            txt: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            desc: "It is a paradigmatic country, in which roasted parts of sentences fly into your mouth.",
            dt: "October 9, 2018"
        },
    ];

    return (
        <div className='flexibleItems'>
            {lifeStyleItems.map(el => <LifeStyleStories key={el.id} image={el.img} text={el.txt} description={el.desc} date={el.dt} />
            )}
        </div>
    )
}

const LifeStyleStories = (props) => {
    return (
        <div className='coffeeStyleCard'>
            <div>
                <img className='cardImg' src={props.image} />
            </div>
            <div className='storiesTxt'>{props.text}</div>
            <div className='storiesTxt'>{props.description}</div>
            <div className='storiesTxt'>{props.date}</div>
        </div>
    )
}

const ThirdSection = () => {
    return (

        <section className='thirdSection'>

            <div className='LifeStyleStoriesTitle'>
                <span>Behind the mugs, lifestyle stories</span>
            </div>
            <LifeStyleStories />
        </section>
    )
}


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='subscribeBlock'>
                <div>
                    <div className='descTxt'>
                        <div>
                            <hr />
                        </div>
                        <span className='signInTxt'>Sign up and get free coffee bags</span>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className='descTxt'>
                        <span className='coffeeUpdates'>Coffee Updates</span>
                    </div>
                    <SubscribeInput />
                </div>
            </div>
        </footer>
    )
}


const SubscribeInput = () => {
    return (
        <div className='subscribeInputWrapper'>
            <div className='subscribeInput'>

                <form>
                    <input className='infoArea' placeholder="customer@coffeestyle.io" />
                </form>
                <button className='footerButton'>SUBSCRIBE</button>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Header />
            <FirstSection />
            <FuturesMugs />
            <ProudCut />
            <SecondSection />
            <Cards />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));