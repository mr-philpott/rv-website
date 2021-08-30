import svg from "../assets/images/Steren_Gear.svg"

const Footer = () => {
  return (
    <footer>
        <img src={svg} alt="gear" />

        <ul className="copyright">
            <h2>Copyright © 2021 RV/AC inspectors - all rights reserved.</h2>
        </ul>

        {/* DONT DELETE */}
        {/* revise for later */}
        <h2>Images</h2>
        <ul className="image-credits">
            <li> Photo by{" "} <a href="https://unsplash.com/@brianwangenheim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Brian Wangenheim </a> </li>
            <li> Photo by{" "} <a href="https://unsplash.com/s/photos/rv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash </a> </li>
            <li> Photo by{" "} <a href="https://unsplash.com/@mattartz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Matt Artz </a> </li>
            <li> Photo by{" "} <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a> </li>
            <li> Photo by <a href="https://www.pexels.com/@enric-cruz-lopez"> Enric Cruz López from Pexels </a> </li>
            <li> Photo by <a href="https://www.pexels.com/@kindelmedia"> Kindel Media from Pexels </a> </li>
            <li> Photo by <a href="https://www.pexels.com/@martin-alargent-1165956"> Martin Alargent from Pexels</a> </li>
            <li> Photo by <a href="https://publicdomainvectors.org/en/free-clipart/Gear-shape-vector-design-element/7424.html"> Public Domain Vectors </a> </li>
        </ul>
    </footer>
  );
};

export default Footer;
