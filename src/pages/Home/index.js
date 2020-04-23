import React, { Component } from 'react';
import Undraw from 'react-undraw';
import my_app from '../../undraw/my_app.svg';
class Home extends Component {
    render() {
        return (
            <>
                <section id="header">
                    <header>
                        <h1>Decole App</h1>
                        <Undraw name="my_app.svg" />
                        <p>Gostaria de decolar a sua empresa através da Internet?</p>
                    </header>
                    <footer>
                        <a href="#banner" className="button style2 scrolly-middle">Quero saber mais</a>
                    </footer>
                </section>

                <section id="banner">
                    <header>
                        <h2>Esse é o Decole App</h2>
                    </header>
                    <p>Que tem como objetivo fazer com que VOCÊ tenha sucesso em seu negócio!</p>
                    <footer>
                        <a href="#first" className="button style2 scrolly">Act on this message</a>
                    </footer>
                </section>

                <article id="first" className="container box style1 right">
                    <div className="container">
                        <a href="https://decole.app" className="image fit"><img src={my_app} alt="" /></a>
                    </div>


                    <div className="inner">
                        <header>
                            <h2>Lorem ipsum<br />
						dolor sit amet</h2>
                        </header>
                        <p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
                    </div>
                </article>

                <article className="container box style1 left">
                    <a href="https://decole.app" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
                    <div className="inner">
                        <header>
                            <h2>Mollis posuere<br />
						lectus lacus</h2>
                        </header>
                        <p>Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper. Etiam egestas scelerisque ac duis magna lorem ipsum dolor.</p>
                    </div>
                </article>

                <article className="container box style2">
                    <header>
                        <h2>Magnis parturient</h2>
                        <p>Justo phasellus et aenean dignissim<br />
					placerat cubilia purus lectus.</p>
                    </header>
                    <div className="inner gallery">
                        <div className="row gtr-0">
                            <div className="col-3 col-12-mobile"><a href="images/fulls/01.jpg" className="image fit"><img src="images/thumbs/01.jpg" alt="" title="Ad infinitum" /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" alt="" title="Dressed in Clarity" /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" alt="" title="Raven" /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" alt="" title="I'll have a cup of Disneyland, please" /></a></div>
                        </div>
                        <div className="row gtr-0">
                            <div className="col-3 col-12-mobile"><a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" alt="" title="Cherish" /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" alt="" title="Different." /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/07.jpg" className="image fit"><img src="images/thumbs/07.jpg" alt="" title="History was made here" /></a></div>
                            <div className="col-3 col-12-mobile"><a href="images/fulls/08.jpg" className="image fit"><img src="images/thumbs/08.jpg" alt="" title="People come and go and walk away" /></a></div>
                        </div>
                    </div>
                </article>

                <article className="container box style3">
                    <header>
                        <h2>Nisl sed ultricies</h2>
                        <p>Diam dignissim lectus eu ornare volutpat orci.</p>
                    </header>
                    <form method="post" action="#">
                        <div className="row gtr-50">
                            <div className="col-6 col-12-mobile"><input type="text" className="text" name="name" placeholder="Name" /></div>
                            <div className="col-6 col-12-mobile"><input type="text" className="text" name="email" placeholder="Email" /></div>
                            <div className="col-12">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </article>
            </>
        );
    }
}
export default Home;