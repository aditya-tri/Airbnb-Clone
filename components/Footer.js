import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-600">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs">
        <h5 className="font-bold">Accessibility</h5>
        <p>This is not a real site</p>
        <p>It's pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Aditya_Tri</p>
      </div>

      <div className="space-y-4 text-xs">
        <h5 className="font-bold">HOST</h5>
        <p>Aditya Tri</p>
        <p>Presents</p>
        <p>Airbnb clone</p>
        <p>Build with react</p>
      </div>

      <div className="space-y-4 text-xs">
        <h5 className="font-bold">CONTACT</h5>
        <p>Medan city, North Sumatera, Indonesia, 20124</p>
        <p>adityatri2014@gmail.com</p>
        <p className="hover:underline">
          <Link href="https://www.linkedin.com/in/adityatrisakti/">
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
