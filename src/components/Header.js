import { map, sun, arrow, cloud, whatsapp, instagram, linkedin, email } from './svg'

const Header = () => {
    return (
        <div className="header container-lg my-3">
            {/* <div class="input-group ">
                <input type="text" class="form-control" placeholder="Find your best hotail in Dubai" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-Success text-light outline-light" type="button" id="button-addon2"><span class="me-2 text-light">{map}</span>Search</button>
            </div> */}

            <div class="hero">
                <div class="left-social-icons">
                <div class='searchboxcontainer' data-aos-once="true"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="searchbox">
                        <input type="text" class="searchbox__input" placeholder="Search..." />
                        <svg class="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>

                    </div>
                </div>

                <div class="whatsapp" data-aos="fade-right" data-aos-once="true">{whatsapp}</div>
                <div class="whatsapp" data-aos="fade-right" data-aos-once="true">{instagram}</div>
                <div class="whatsapp" data-aos="fade-right" data-aos-once="true">{linkedin}</div>
                <div class="whatsapp" data-aos="fade-right" data-aos-once="true">{email}</div>
                </div>

                <div class="hero-center">
                    <h1 class="hero__logo aos-init aos-animate" data-aos="zoom-in">Splash Hotels</h1>
                    <h2 class="hero__text  fs-3 py-5" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Located at the perfect place for you</h2>
                    <br />
                    <span class="hero__scroll fs-5" >
                        Scroll down <br />
                        <i class="chevron bottom"></i>
                    </span>
                </div>
            </div>


            <div class="d-inline-flex my-3 justify-content-center me-5 pe-5" data-aos="fade-left">
                <p class=" d-inline-flex">Location:</p>
                <span class="d-inline-flex ms-2">{map}</span>
                <p class="text-light d-inline-flex ms-2">Dubai, UAE</p>
            </div>
            <span class="ps-5 pe-5 ms-5 me-5"></span>
            <span class="ms-5 me-3"></span>
            <div class="d-inline-flex my-3 justify-content-center ms-5 ps-5" data-aos="fade-right">
                <p class="  d-inline-flex">Location:</p>
                <span class="d-inline-flex ms-2">{map}</span>
                <p class="text-light d-inline-flex ms-2">Moscow, Russia</p>
            </div>

            <div class="my-3 justify-content-center" data-aos="fade-right">
                <p class="d-inline-flex justify-content-center">
                    <span class="me-3">{sun}</span>
                    +48 C
                    <span class="text-secondary mx-3"> | </span>
                    23:08
                    <span class="text-secondary ms-2">PM</span>
                    <span class="ms-5">1 USD</span>
                    <span class="ms-2  ">{arrow}</span>
                    <span class="ms-2">3.56 AED</span>
                </p>
                <span class="ms-5 me-5 text-dark">_</span>
                <span class="ms-5 me-5 text-dark">_</span>
                <p class="ms-5 d-inline-flex justify-content-center">
                    <span class="me-3">{cloud}</span>
                    +15 C
                    <span class="text-secondary mx-3"> | </span>
                    6:00
                    <span class="text-secondary ms-2">AM</span>
                    <span class="ms-5">1 USD</span>
                    <span class="ms-2  ">{arrow}</span>
                    <span class="ms-2">2.6 Rouble</span>
                </p>
            </div>
        </div>
    );
}

export default Header;