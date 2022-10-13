import pic1 from '../images/kitob4.svg'
import pic2 from '../images/Vectorlupa.svg'
import pic3 from '../images/yum.svg'
import pic4 from '../images/Vector 14-hr.svg'
import pic5 from '../images/image 38yurag.png'
import pic6 from '../images/image 45baliqalar.png'
import pic7 from '../images/image 44qiz.png'
import pic8 from '../images/image 39totto-chan.png'
import pic9 from '../images/Group 123right.svg'
import pic10 from '../images/Group 124left.svg'
import pic11 from '../images/image 41hati-hati.png'
import pic12 from '../images/image 45atomi-rasa.png'
import pic13 from '../images/image 37berjalan.png'

export default function header() {
    return ( 
        <>
        
        <header className="header-content">
        {/* <!-- NAVBAR  --> */}
        <nav>
            <div className="nav-logo">
                <img src= {pic1} alt='logo'/>
            </div>
            <ul className="nav-ul">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Koleksi</a></li>
                <li><a href="#">Syarat dan Ketentuan</a></li>
                <li><a href="#">Kontak</a></li>
                <li><button>Masuk</button></li>
            </ul>
        </nav>

        <div className="header-content-text">
            <h4>Pojok Baca <span> Probolinggo</span></h4>
            <h1>Pinjam Buku Secara <span> Gratis</span> untuk Masyarakat</h1>
            <div className="btns">
                <button className="lupa">Cari Judul Buku <img src={pic2} alt="lupa"/></button>
                <button className="qol">Donasi dengan Kami <img src={pic3} alt="d"/></button>
            </div>
        </div>
        <img src={pic4} alt="hr" className="hr1"/>
<div className="cards-wrapper">
        <div className="container upper-card">
            <h6>Sedang Tuhan pun Cemburu</h6>
            <h5>Emha Ainun Nadjib</h5>
            <img src={pic5} alt="album"/>
        </div>
        <div className="red center-card">
            <h6>Laut Bercerita</h6>
            <h5>Leila S. Chudori</h5>
            <img src={pic6} alt="album"/>
        </div>

        <div className="girl bottom-card">
            <h6>Perempuan di Titik Nol</h6>
            <h5>Nawal eEl Saadawi</h5>
            <img src={pic7} alt="album"/>
        </div>

        <div className="middle-card">
            <h6>Toto-chan : The Little Girl At The Window</h6>
            <h5>Testuko Kuroyanagi</h5>
            <img src={pic8} alt="album"/>
        </div>
        <img src={pic9} alt="right" className="middle-card-right"/>
        <img src={pic10} alt="right" className="middle-card-left"/>

        <div className="container hati">
            <h6>Hati-Hati dengan Sampah</h6>
            <h5>Ukjae Lee</h5>
            <img src={pic11} alt="img"/>
        </div>

        <div className="red anatom">
            <h6>Anatomi Rasa</h6>
            <h5>Ayu Utami</h5>
            <img src={pic12} alt="img"/>
        </div>

        <div className="girl ber">
            <h6>Berjalan di Atas Cahaya</h6>
            <h5>Hanum Salsabiela Rais</h5>
            <img src={pic13} alt="album"/>
        </div>

        </div>
        
    </header>



        </>
     );
}
