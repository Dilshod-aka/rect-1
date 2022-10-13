import pic1 from '../images/boy3.png'
import pic2 from '../images/girl.png'
import pic3 from '../images/aylana.svg'
import pic4 from '../images/biy2.png'
import pic5 from '../images/left.svg'
import pic6 from '../images/boy1.png'
import pic7 from '../images/right.svg'


function MainContent() {
    return ( 
        <>

        <div className="people-card1">
        <h2>Kenapa Kita Harus Membaca Buku?</h2>
        <div className="people-card-wrapper">
            <div className="people-card1-card1">
                <h3>“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</h3>
                <img src={pic1}/>
                <h4>Mohammad Hatta</h4>
                <p>Wakil Presiden Indonesia Pertama</p>
            </div>

            <div className="people-card1-card1 people-card1-card2">
                <h3>“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!</h3>
                <img src={pic2}/>
                <h4>Najwa Shihab</h4>
                <p>Duta Membaca</p>
            </div>
        </div>
    </div>


    {/* <!--New--> */}
    <div className="stat">
        <div className="card">
            <img src={pic3} alt="aylana"/>
            <h1>500+</h1>
            <p>Judul Buku</p>
        </div>

        <div className="card card2">
        <img src={pic3} alt="aylana"/>
            <h1>$0</h1>
            <p>Gratis Peminjaman</p>
        </div>

        <div className="card card3">
        <img src={pic3} alt="aylana"/>
            <h1>5</h1>
            <p>Kegiatan Rutin</p>
        </div>
    </div>

    <div className="people-card2">
        <h2>Apa Kata Mereka?</h2>
        <p id="makera">Mereka yang telah menjadi pengunjung tetap kami</p>
        <h3 id="selen">Selengkapnya</h3>

        <div className="people1">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={pic4}/>
            <h3>Guy Hawkins</h3>
            <h4>32 Tahun, Karyawan</h4>
        </div>
        <img src={pic5} alt="left" className="chapga"/>


        <div className="people2">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={pic6}/>
            <h3>Guy Hawkins</h3>
            <h4>32 Tahun, Karyawan</h4>
        </div>
        <img src={pic7} alt="right" className="onga"/>
        
    </div>
        </>
     );
}

export default MainContent;